import { InitFeatures } from '../structs/InitFeatures.mjs';
import { NodeFeatures } from '../structs/NodeFeatures.mjs';
import { Init } from '../structs/Init.mjs';
import { OnionMessage } from '../structs/OnionMessage.mjs';
import { OnionMessageProviderInterface } from '../structs/OnionMessageProvider.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of OnionMessageHandler */
export interface OnionMessageHandlerInterface {
    /**Handle an incoming onion_message message from the given peer.
     */
    handle_onion_message(peer_node_id: Uint8Array, msg: OnionMessage): void;
    /**Called when a connection is established with a peer. Can be used to track which peers
     * advertise onion message support and are online.
     */
    peer_connected(their_node_id: Uint8Array, init: Init): void;
    /**Indicates a connection to the peer failed/an existing connection was lost. Allows handlers to
     * drop and refuse to forward onion messages to this peer.
     */
    peer_disconnected(their_node_id: Uint8Array, no_connection_possible: boolean): void;
    /**Gets the node feature flags which this handler itself supports. All available handlers are
     * queried similarly and their feature flags are OR'd together to form the [`NodeFeatures`]
     * which are broadcasted in our [`NodeAnnouncement`] message.
     */
    provided_node_features(): NodeFeatures;
    /**Gets the init feature flags which should be sent to the given peer. All available handlers
     * are queried similarly and their feature flags are OR'd together to form the [`InitFeatures`]
     * which are sent in our [`Init`] message.
     *
     * Note that this method is called before [`Self::peer_connected`].
     */
    provided_init_features(their_node_id: Uint8Array): InitFeatures;
}
/**
 * A trait to describe an object that can receive onion messages.
 */
export declare class OnionMessageHandler extends CommonBase {
    /** Creates a new instance of OnionMessageHandler from a given implementation */
    static new_impl(arg: OnionMessageHandlerInterface, onionMessageProvider_impl: OnionMessageProviderInterface): OnionMessageHandler;
    /**
     * Handle an incoming onion_message message from the given peer.
     */
    handle_onion_message(peer_node_id: Uint8Array, msg: OnionMessage): void;
    /**
     * Called when a connection is established with a peer. Can be used to track which peers
     * advertise onion message support and are online.
     */
    peer_connected(their_node_id: Uint8Array, init: Init): void;
    /**
     * Indicates a connection to the peer failed/an existing connection was lost. Allows handlers to
     * drop and refuse to forward onion messages to this peer.
     */
    peer_disconnected(their_node_id: Uint8Array, no_connection_possible: boolean): void;
    /**
     * Gets the node feature flags which this handler itself supports. All available handlers are
     * queried similarly and their feature flags are OR'd together to form the [`NodeFeatures`]
     * which are broadcasted in our [`NodeAnnouncement`] message.
     */
    provided_node_features(): NodeFeatures;
    /**
     * Gets the init feature flags which should be sent to the given peer. All available handlers
     * are queried similarly and their feature flags are OR'd together to form the [`InitFeatures`]
     * which are sent in our [`Init`] message.
     *
     * Note that this method is called before [`Self::peer_connected`].
     */
    provided_init_features(their_node_id: Uint8Array): InitFeatures;
}
