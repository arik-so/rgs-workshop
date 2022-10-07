import { NodeId } from '../structs/NodeId.mjs';
import { ChannelInfo } from '../structs/ChannelInfo.mjs';
import { NodeInfo } from '../structs/NodeInfo.mjs';
import { Option_CVec_NetAddressZZ } from '../structs/Option_CVec_NetAddressZZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * This type represents a lock and MUST BE MANUALLY FREE'd!
 * A read-only view of [`NetworkGraph`].
 */
export class ReadOnlyNetworkGraph extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, () => { throw new Error("Locks must be manually freed with free()"); });
    }
    /** Releases this lock */
    free() {
        bindings.ReadOnlyNetworkGraph_free(this.ptr);
        CommonBase.set_null_skip_free(this);
    }
    /**
     * Returns information on a channel with the given id.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    channel(short_channel_id) {
        const ret = bindings.ReadOnlyNetworkGraph_channel(this.ptr, short_channel_id);
        const ret_hu_conv = new ChannelInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Returns the list of channels in the graph
     */
    list_channels() {
        const ret = bindings.ReadOnlyNetworkGraph_list_channels(this.ptr);
        const ret_conv = bindings.decodeUint64Array(ret);
        return ret_conv;
    }
    /**
     * Returns information on a node with the given id.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    node(node_id) {
        const ret = bindings.ReadOnlyNetworkGraph_node(this.ptr, node_id == null ? 0n : CommonBase.get_ptr_of(node_id));
        const ret_hu_conv = new NodeInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        CommonBase.add_ref_from(this, node_id);
        return ret_hu_conv;
    }
    /**
     * Returns the list of nodes in the graph
     */
    list_nodes() {
        const ret = bindings.ReadOnlyNetworkGraph_list_nodes(this.ptr);
        const ret_conv_8_len = bindings.getArrayLength(ret);
        const ret_conv_8_arr = new Array(ret_conv_8_len).fill(null);
        for (var i = 0; i < ret_conv_8_len; i++) {
            const ret_conv_8 = bindings.getU64ArrayElem(ret, i);
            const ret_conv_8_hu_conv = new NodeId(null, ret_conv_8);
            CommonBase.add_ref_from(ret_conv_8_hu_conv, this);
            ret_conv_8_arr[i] = ret_conv_8_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_8_arr;
    }
    /**
     * Get network addresses by node id.
     * Returns None if the requested node is completely unknown,
     * or if node announcement for the node was never received.
     */
    get_addresses(pubkey) {
        const ret = bindings.ReadOnlyNetworkGraph_get_addresses(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(pubkey, 33)));
        const ret_hu_conv = Option_CVec_NetAddressZZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ReadOnlyNetworkGraph.mjs.map