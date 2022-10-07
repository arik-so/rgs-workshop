import { NodeId } from '../structs/NodeId.mjs';
import { ChannelInfo } from '../structs/ChannelInfo.mjs';
import { NodeInfo } from '../structs/NodeInfo.mjs';
import { Option_CVec_NetAddressZZ } from '../structs/Option_CVec_NetAddressZZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * This type represents a lock and MUST BE MANUALLY FREE'd!
 * A read-only view of [`NetworkGraph`].
 */
export declare class ReadOnlyNetworkGraph extends CommonBase {
    /** Releases this lock */
    free(): void;
    /**
     * Returns information on a channel with the given id.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    channel(short_channel_id: bigint): ChannelInfo;
    /**
     * Returns the list of channels in the graph
     */
    list_channels(): bigint[];
    /**
     * Returns information on a node with the given id.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    node(node_id: NodeId): NodeInfo;
    /**
     * Returns the list of nodes in the graph
     */
    list_nodes(): NodeId[];
    /**
     * Get network addresses by node id.
     * Returns None if the requested node is completely unknown,
     * or if node announcement for the node was never received.
     */
    get_addresses(pubkey: Uint8Array): Option_CVec_NetAddressZZ;
}