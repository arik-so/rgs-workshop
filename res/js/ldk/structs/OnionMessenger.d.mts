import { BlindedRoute } from '../structs/BlindedRoute.mjs';
import { Logger } from '../structs/Logger.mjs';
import { KeysInterface } from '../structs/KeysInterface.mjs';
import { Result_NoneSendErrorZ } from '../structs/Result_NoneSendErrorZ.mjs';
import { OnionMessageProvider } from '../structs/OnionMessageProvider.mjs';
import { OnionMessageHandler } from '../structs/OnionMessageHandler.mjs';
import { Destination } from '../structs/Destination.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A sender, receiver and forwarder of onion messages. In upcoming releases, this object will be
 * used to retrieve invoices and fulfill invoice requests from [offers]. Currently, only sending
 * and receiving empty onion messages is supported.
 *
 * # Example
 *
 * ```
 * # extern crate bitcoin;
 * # use bitcoin::hashes::_export::_core::time::Duration;
 * # use bitcoin::secp256k1::{PublicKey, Secp256k1, SecretKey};
 * # use lightning::chain::keysinterface::{InMemorySigner, KeysManager, KeysInterface};
 * # use lightning::onion_message::messenger::{Destination, OnionMessenger};
 * # use lightning::onion_message::blinded_route::BlindedRoute;
 * # use lightning::util::logger::{Logger, Record};
 * # use std::sync::Arc;
 * # struct FakeLogger {};
 * # impl Logger for FakeLogger {
 * #     fn log(&self, record: &Record) { unimplemented!() }
 * # }
 * # let seed = [42u8; 32];
 * # let time = Duration::from_secs(123456);
 * # let keys_manager = KeysManager::new(&seed, time.as_secs(), time.subsec_nanos());
 * # let logger = Arc::new(FakeLogger {});
 * # let node_secret = SecretKey::from_slice(&hex::decode(\"0101010101010101010101010101010101010101010101010101010101010101\").unwrap()[..]).unwrap();
 * # let secp_ctx = Secp256k1::new();
 * # let hop_node_id1 = PublicKey::from_secret_key(&secp_ctx, &node_secret);
 * # let (hop_node_id2, hop_node_id3, hop_node_id4) = (hop_node_id1, hop_node_id1,
 * hop_node_id1);
 * # let destination_node_id = hop_node_id1;
 * #
 * Create the onion messenger. This must use the same `keys_manager` as is passed to your
 * ChannelManager.
 * let onion_messenger = OnionMessenger::new(&keys_manager, logger);
 *
 * Send an empty onion message to a node id.
 * let intermediate_hops = [hop_node_id1, hop_node_id2];
 * let reply_path = None;
 * onion_messenger.send_onion_message(&intermediate_hops, Destination::Node(destination_node_id), reply_path);
 *
 * Create a blinded route to yourself, for someone to send an onion message to.
 * # let your_node_id = hop_node_id1;
 * let hops = [hop_node_id3, hop_node_id4, your_node_id];
 * let blinded_route = BlindedRoute::new(&hops, &keys_manager, &secp_ctx).unwrap();
 *
 * Send an empty onion message to a blinded route.
 * # let intermediate_hops = [hop_node_id1, hop_node_id2];
 * let reply_path = None;
 * onion_messenger.send_onion_message(&intermediate_hops, Destination::BlindedRoute(blinded_route), reply_path);
 * ```
 *
 * [offers]: <https://github.com/lightning/bolts/pull/798>
 * [`OnionMessenger`]: crate::onion_message::OnionMessenger
 */
export declare class OnionMessenger extends CommonBase {
    /**
     * Constructs a new `OnionMessenger` to send, forward, and delegate received onion messages to
     * their respective handlers.
     */
    static constructor_new(keys_manager: KeysInterface, logger: Logger): OnionMessenger;
    /**
     * Send an empty onion message to `destination`, routing it through `intermediate_nodes`.
     * See [`OnionMessenger`] for example usage.
     *
     * Note that reply_path (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    send_onion_message(intermediate_nodes: Uint8Array[], destination: Destination, reply_path: BlindedRoute): Result_NoneSendErrorZ;
    /**
     * Constructs a new OnionMessageHandler which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned OnionMessageHandler must be freed before this_arg is
     */
    as_OnionMessageHandler(): OnionMessageHandler;
    /**
     * Constructs a new OnionMessageProvider which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned OnionMessageProvider must be freed before this_arg is
     */
    as_OnionMessageProvider(): OnionMessageProvider;
}
