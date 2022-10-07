import { NetworkGraph } from '../structs/NetworkGraph.mjs';
import { Result_u32GraphSyncErrorZ } from '../structs/Result_u32GraphSyncErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * The main Rapid Gossip Sync object.
 *
 * See [crate-level documentation] for usage.
 *
 * [crate-level documentation]: crate
 */
export declare class RapidGossipSync extends CommonBase {
    /**
     * Instantiate a new [`RapidGossipSync`] instance.
     */
    static constructor_new(network_graph: NetworkGraph): RapidGossipSync;
    /**
     * Update network graph from binary data.
     * Returns the last sync timestamp to be used the next time rapid sync data is queried.
     *
     * `network_graph`: network graph to be updated
     *
     * `update_data`: `&[u8]` binary stream that comprises the update data
     */
    update_network_graph(update_data: Uint8Array): Result_u32GraphSyncErrorZ;
    /**
     * Returns whether a rapid gossip sync has completed at least once.
     */
    is_initial_sync_complete(): boolean;
}
