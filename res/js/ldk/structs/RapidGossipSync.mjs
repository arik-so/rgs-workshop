import { Result_u32GraphSyncErrorZ } from '../structs/Result_u32GraphSyncErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * The main Rapid Gossip Sync object.
 *
 * See [crate-level documentation] for usage.
 *
 * [crate-level documentation]: crate
 */
export class RapidGossipSync extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.RapidGossipSync_free);
    }
    /**
     * Instantiate a new [`RapidGossipSync`] instance.
     */
    static constructor_new(network_graph) {
        const ret = bindings.RapidGossipSync_new(network_graph == null ? 0n : CommonBase.get_ptr_of(network_graph));
        const ret_hu_conv = new RapidGossipSync(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, network_graph);
        return ret_hu_conv;
    }
    /**
     * Update network graph from binary data.
     * Returns the last sync timestamp to be used the next time rapid sync data is queried.
     *
     * `network_graph`: network graph to be updated
     *
     * `update_data`: `&[u8]` binary stream that comprises the update data
     */
    update_network_graph(update_data) {
        const ret = bindings.RapidGossipSync_update_network_graph(this.ptr, bindings.encodeUint8Array(update_data));
        const ret_hu_conv = Result_u32GraphSyncErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Returns whether a rapid gossip sync has completed at least once.
     */
    is_initial_sync_complete() {
        const ret = bindings.RapidGossipSync_is_initial_sync_complete(this.ptr);
        return ret;
    }
}
//# sourceMappingURL=RapidGossipSync.mjs.map