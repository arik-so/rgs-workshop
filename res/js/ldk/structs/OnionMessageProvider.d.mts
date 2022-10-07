import { OnionMessage } from '../structs/OnionMessage.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of OnionMessageProvider */
export interface OnionMessageProviderInterface {
    /**Gets the next pending onion message for the peer with the given node id.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    next_onion_message_for_peer(peer_node_id: Uint8Array): OnionMessage;
}
/**
 * A trait indicating an object may generate onion messages to send
 */
export declare class OnionMessageProvider extends CommonBase {
    /** Creates a new instance of OnionMessageProvider from a given implementation */
    static new_impl(arg: OnionMessageProviderInterface): OnionMessageProvider;
    /**
     * Gets the next pending onion message for the peer with the given node id.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    next_onion_message_for_peer(peer_node_id: Uint8Array): OnionMessage;
}
