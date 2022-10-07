import { Result_GossipTimestampFilterDecodeErrorZ } from '../structs/Result_GossipTimestampFilterDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A gossip_timestamp_filter message is used by a node to request
 * gossip relay for messages in the requested time range when the
 * gossip_queries feature has been negotiated.
 */
export class GossipTimestampFilter extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.GossipTimestampFilter_free);
    }
    /**
     * The genesis hash of the blockchain for channel and node information
     */
    get_chain_hash() {
        const ret = bindings.GossipTimestampFilter_get_chain_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The genesis hash of the blockchain for channel and node information
     */
    set_chain_hash(val) {
        bindings.GossipTimestampFilter_set_chain_hash(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The starting unix timestamp
     */
    get_first_timestamp() {
        const ret = bindings.GossipTimestampFilter_get_first_timestamp(this.ptr);
        return ret;
    }
    /**
     * The starting unix timestamp
     */
    set_first_timestamp(val) {
        bindings.GossipTimestampFilter_set_first_timestamp(this.ptr, val);
    }
    /**
     * The range of information in seconds
     */
    get_timestamp_range() {
        const ret = bindings.GossipTimestampFilter_get_timestamp_range(this.ptr);
        return ret;
    }
    /**
     * The range of information in seconds
     */
    set_timestamp_range(val) {
        bindings.GossipTimestampFilter_set_timestamp_range(this.ptr, val);
    }
    /**
     * Constructs a new GossipTimestampFilter given each field
     */
    static constructor_new(chain_hash_arg, first_timestamp_arg, timestamp_range_arg) {
        const ret = bindings.GossipTimestampFilter_new(bindings.encodeUint8Array(bindings.check_arr_len(chain_hash_arg, 32)), first_timestamp_arg, timestamp_range_arg);
        const ret_hu_conv = new GossipTimestampFilter(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.GossipTimestampFilter_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the GossipTimestampFilter
     */
    clone() {
        const ret = bindings.GossipTimestampFilter_clone(this.ptr);
        const ret_hu_conv = new GossipTimestampFilter(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the GossipTimestampFilter object into a byte array which can be read by GossipTimestampFilter_read
     */
    write() {
        const ret = bindings.GossipTimestampFilter_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a GossipTimestampFilter from a byte array, created by GossipTimestampFilter_write
     */
    static constructor_read(ser) {
        const ret = bindings.GossipTimestampFilter_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_GossipTimestampFilterDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=GossipTimestampFilter.mjs.map