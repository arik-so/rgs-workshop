import * as ldk from 'lightningdevkit';
import * as fs from 'fs';
import * as debugModule from 'debug';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import * as crypto from 'crypto';
import * as net from 'net';

const debug = debugModule.default('rgs-workshop');

(async () => {

	async function initLDK() {
		debug('Meta URL: %s', import.meta.url);
		debug('Meta Path: %s', fileURLToPath(import.meta.url));
		const currentDirectory = dirname(fileURLToPath(import.meta.url));
		debug('Meta Directory: %s', currentDirectory);
		const wasmPath = currentDirectory + '/../node_modules/lightningdevkit/liblightningjs.wasm';
		debug('WASM Path: %s', wasmPath);

		const wasm = fs.readFileSync(wasmPath);
		await ldk.initializeWasmFromBinary(wasm);
	}

	await initLDK();

	const genesisHashHex = '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f';
	const reversedGenesisHash = Buffer.from(genesisHashHex, 'hex').reverse();

	const seed = crypto.randomBytes(32);
	const time = new Date().getTime();
	const seconds = BigInt(time) / 1000n;
	const nanoSeconds = time * 1000;
	const keysManager = ldk.KeysManager.constructor_new(seed, seconds, nanoSeconds);
	const keysInterface = keysManager.as_KeysInterface();

	const logger = ldk.Logger.new_impl(new WorkshopLogger());

	const config = ldk.UserConfig.constructor_default();
	const network = ldk.Network.LDKNetwork_Bitcoin;
	const networkGraph = ldk.NetworkGraph.constructor_new(reversedGenesisHash, logger);
	const p2pGossipSync = ldk.P2PGossipSync.constructor_new(
		networkGraph,
		ldk.Option_AccessZ.constructor_none(),
		logger
	);

	const feeEstimator = ldk.FeeEstimator.new_impl(new WorkshopFeeEstimator());
	const persister = ldk.Persist.new_impl(new WorkshopPersist());
	const broadcaster = ldk.BroadcasterInterface.new_impl(new WorkshopBroadcaster());
	const chainMonitor = ldk.ChainMonitor.constructor_new(
		ldk.Option_FilterZ.constructor_none(),
		broadcaster,
		logger,
		feeEstimator,
		persister
	);
	const bestBlock = ldk.BestBlock.constructor_from_genesis(network);
	const chainParameters = ldk.ChainParameters.constructor_new(network, bestBlock);
	const channelManager = ldk.ChannelManager.constructor_new(
		feeEstimator,
		chainMonitor.as_Watch(),
		broadcaster,
		logger,
		keysInterface,
		config,
		chainParameters
	);

	const ignoringMessageHandler = ldk.IgnoringMessageHandler.constructor_new();
	const ourNodeSecret = crypto.randomBytes(32);
	const ephemeralRandomData = crypto.randomBytes(32);
	const peerManager = ldk.PeerManager.constructor_new(
		channelManager.as_ChannelMessageHandler(),
		p2pGossipSync.as_RoutingMessageHandler(),
		ignoringMessageHandler.as_OnionMessageHandler(),
		ourNodeSecret,
		seconds,
		ephemeralRandomData,
		logger,
		ignoringMessageHandler.as_CustomMessageHandler()
	);

	BackgroundProcessor.init(peerManager);

	await connectToPeer('03db10aa09ff04d3568b0621750794063df401e6853c79a21a83e1a3f3b5bfb0c8@69.59.18.80:9735');

	async function connectToPeer(peerUrlString: string) {
		console.log('Connecting to', peerUrlString);
		let descriptorInterface = new WorkshopSocketDescriptor(peerUrlString, peerManager);
		const socketDescriptor = ldk.SocketDescriptor.new_impl(descriptorInterface);
		let outbound = peerManager.new_outbound_connection(descriptorInterface.getPeerNodeId(), socketDescriptor, ldk.Option_NetAddressZ.constructor_none());
		if (outbound.is_ok()) {
			descriptorInterface.start();
		} else {
			debugger
		}
	}

})();

class WorkshopLogger implements ldk.LoggerInterface {
	log(record: ldk.Record): void {
		console.log(`\nWorkshopLogger (${record.get_level()}): ${record.get_file()}:${record.get_line()}:\n> ${record.get_args()}\n`);
	}
}

class WorkshopFeeEstimator implements ldk.FeeEstimatorInterface {
	get_est_sat_per_1000_weight(confirmation_target: ldk.ConfirmationTarget): number {
		return 0;
	}
}

class WorkshopBroadcaster implements ldk.BroadcasterInterfaceInterface {
	broadcast_transaction(tx: Uint8Array): void {
	}
}

class WorkshopPersist implements ldk.PersistInterface {
	persist_new_channel(channel_id: ldk.OutPoint, data: ldk.ChannelMonitor, update_id: ldk.MonitorUpdateId): ldk.Result_NoneChannelMonitorUpdateErrZ {
		return ldk.Result_NoneChannelMonitorUpdateErrZ.constructor_ok();
	}

	update_persisted_channel(channel_id: ldk.OutPoint, update: ldk.ChannelMonitorUpdate, data: ldk.ChannelMonitor, update_id: ldk.MonitorUpdateId): ldk.Result_NoneChannelMonitorUpdateErrZ {
		return ldk.Result_NoneChannelMonitorUpdateErrZ.constructor_ok();
	}
}

class BackgroundProcessor {
	private static eventProcessor: BackgroundProcessor;

	private peerManager: ldk.PeerManager;
	private lastProcessedTime: number;

	private constructor(peerManager: ldk.PeerManager) {
		this.peerManager = peerManager;
		this.lastProcessedTime = new Date().getTime();
	}

	static init(peerManager: ldk.PeerManager) {
		if (BackgroundProcessor.eventProcessor) {
			return;
		}
		BackgroundProcessor.eventProcessor = new BackgroundProcessor(peerManager);
	}

	static processEvents() {
		this.eventProcessor.peerManager.process_events();
		const currentTime = new Date().getTime();
		const elapsed = currentTime - this.eventProcessor.lastProcessedTime;
		this.eventProcessor.lastProcessedTime = currentTime;
		if (elapsed >= 30000) {
			// more than 30 seconds have elapsed
			this.eventProcessor.peerManager.timer_tick_occurred();
		}
	}
}

class WorkshopSocketDescriptor implements ldk.SocketDescriptorInterface {

	private static instanceCounter = 0;
	private instanceIndex;

	private socket: net.Socket;
	private peerManager: ldk.PeerManager;

	private peerNodeId: Uint8Array;
	private peerDomain: string;
	private peerPort: number;

	constructor(urlString: string, peerManager: ldk.PeerManager) {
		this.instanceIndex = (++WorkshopSocketDescriptor.instanceCounter);

		const components = urlString.split('@');
		const publicKey = components[0];
		if (publicKey.length !== 66) {
			throw new Error('public key must be 33 bytes');
		}
		const publicKeyBuffer = Buffer.from(publicKey, 'hex');
		this.peerNodeId = Uint8Array.from(publicKeyBuffer);

		const host = components[1];
		const hostComponents = host.split(':');
		this.peerDomain = hostComponents[0];
		this.peerPort = parseInt(hostComponents[1]);

		this.peerManager = peerManager;
		this.socket = new net.Socket();

		this.socket.on('data', (data) => {
			this.peerManager.read_event(this, data);
			BackgroundProcessor.processEvents();
		});

		this.socket.on('error', (error) => {
			console.log('Socket Error:');
			console.error(error);
		});

		this.socket.on('close', () => {
			this.peerManager.socket_disconnected(this);
		});

		console.log('Finished socket setup for', urlString);
	}

	start() {
		this.socket.connect(this.peerPort, this.peerDomain, () => {
			console.log('Socket connected!');
			BackgroundProcessor.processEvents();
		});
	}

	getPeerNodeId(): Uint8Array {
		return this.peerNodeId;
	}

	getPeerDomain(): string {
		return this.peerDomain;
	}

	getPeerPort(): number {
		return this.peerPort;
	}

	disconnect_socket(): void {
		this.socket.end();
	}

	eq(other_arg: ldk.SocketDescriptor): boolean {
		if (!(other_arg instanceof WorkshopSocketDescriptor)) {
			return false;
		}
		return this.instanceIndex === other_arg.instanceIndex;
	}

	hash(): bigint {
		return BigInt(this.instanceIndex);
	}

	send_data(data: Uint8Array, resume_read: boolean): number {
		const written = this.socket.write(data);
		// TODO: figure out what number is supposed to be returned here
		return data.length;
	}

}
