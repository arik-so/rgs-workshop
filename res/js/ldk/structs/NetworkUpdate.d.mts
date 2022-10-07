import { ChannelUpdate } from '../structs/ChannelUpdate.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Update to the [`NetworkGraph`] based on payment failure information conveyed via the Onion
 * return packet by a node along the route. See [BOLT #4] for details.
 *
 * [BOLT #4]: https://github.com/lightning/bolts/blob/master/04-onion-routing.md
 */
export declare class NetworkUpdate extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the NetworkUpdate
     */
    clone(): NetworkUpdate;
    /**
     * Utility method to constructs a new ChannelUpdateMessage-variant NetworkUpdate
     */
    static constructor_channel_update_message(msg: ChannelUpdate): NetworkUpdate;
    /**
     * Utility method to constructs a new ChannelFailure-variant NetworkUpdate
     */
    static constructor_channel_failure(short_channel_id: bigint, is_permanent: boolean): NetworkUpdate;
    /**
     * Utility method to constructs a new NodeFailure-variant NetworkUpdate
     */
    static constructor_node_failure(node_id: Uint8Array, is_permanent: boolean): NetworkUpdate;
    /**
     * Serialize the NetworkUpdate object into a byte array which can be read by NetworkUpdate_read
     */
    write(): Uint8Array;
}
/** A NetworkUpdate of type ChannelUpdateMessage */
export declare class NetworkUpdate_ChannelUpdateMessage extends NetworkUpdate {
    /**
     * The update to apply via [`NetworkGraph::update_channel`].
     */
    msg: ChannelUpdate;
}
/** A NetworkUpdate of type ChannelFailure */
export declare class NetworkUpdate_ChannelFailure extends NetworkUpdate {
    /**
     * The short channel id of the closed channel.
     */
    short_channel_id: bigint;
    /**
     * Whether the channel should be permanently removed or temporarily disabled until a new
     * `channel_update` message is received.
     */
    is_permanent: boolean;
}
/** A NetworkUpdate of type NodeFailure */
export declare class NetworkUpdate_NodeFailure extends NetworkUpdate {
    /**
     * The node id of the failed node.
     */
    node_id: Uint8Array;
    /**
     * Whether the node should be permanently removed from consideration or can be restored
     * when a new `channel_update` message is received.
     */
    is_permanent: boolean;
}