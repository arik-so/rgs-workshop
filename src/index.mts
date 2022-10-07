import * as ldk from 'lightningdevkit';
import * as fs from 'fs';
import * as debugModule from 'debug';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import * as crypto from 'crypto';
import * as net from 'net';
import {NodeLDKNet} from 'lightningdevkit-node-net';

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

	const time = new Date().getTime();
	const seconds = BigInt(time) / 1000n;

	const logger = ldk.Logger.new_impl(new WorkshopLogger());

	const networkGraph = ldk.NetworkGraph.constructor_new(reversedGenesisHash, logger);
	const p2pGossipSync = ldk.P2PGossipSync.constructor_new(
		networkGraph,
		ldk.Option_AccessZ.constructor_none(),
		logger
	);

	const erroringMessageHandler = ldk.ErroringMessageHandler.constructor_new();
	const ignoringMessageHandler = ldk.IgnoringMessageHandler.constructor_new();
	const ourNodeSecret = crypto.randomBytes(32);
	const ephemeralRandomData = crypto.randomBytes(32);
	const peerManager = ldk.PeerManager.constructor_new(
		erroringMessageHandler.as_ChannelMessageHandler(),
		p2pGossipSync.as_RoutingMessageHandler(),
		ignoringMessageHandler.as_OnionMessageHandler(),
		ourNodeSecret,
		seconds,
		ephemeralRandomData,
		logger,
		ignoringMessageHandler.as_CustomMessageHandler()
	);

	const nodeLdkNet = new NodeLDKNet(peerManager);

	await connectToPeer('03db10aa09ff04d3568b0621750794063df401e6853c79a21a83e1a3f3b5bfb0c8@69.59.18.80:9735');
	await monitorGraphSize();

	async function connectToPeer(peerUrlString: string) {
		const components = peerUrlString.split('@');
		const publicKey = components[0];
		if (publicKey.length !== 66) {
			throw new Error('public key must be 33 bytes');
		}
		const publicKeyBuffer = Buffer.from(publicKey, 'hex');
		const peerNodeId = Uint8Array.from(publicKeyBuffer);

		const host = components[1];
		const hostComponents = host.split(':');
		const domain = hostComponents[0];
		const port = parseInt(hostComponents[1]);

		return nodeLdkNet.connect_peer(domain, port, peerNodeId);
	}

	async function monitorGraphSize(){
		const networkGraphCopy = networkGraph.read_only();
		const nodes = networkGraphCopy.list_nodes();
		const channels = networkGraphCopy.list_channels();
		networkGraphCopy.free();

		console.log('\nNODE COUNT:', nodes.length);
		console.log('CHANNEL COUNT:', channels.length);

		const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
		await delay(2000); // wait 2 seconds

		return await monitorGraphSize();
	}

})();

class WorkshopLogger implements ldk.LoggerInterface {
	log(record: ldk.Record): void {
		if (record.get_level() < ldk.Level.LDKLevel_Info) {
			// ignore this
			return;
		}
		console.log(`\nWorkshopLogger (${record.get_level()}): ${record.get_file()}:${record.get_line()}:\n> ${record.get_args()}\n`);
	}
}
