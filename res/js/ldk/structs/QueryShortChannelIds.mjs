import { Result_QueryShortChannelIdsDecodeErrorZ } from '../structs/Result_QueryShortChannelIdsDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A query_short_channel_ids message is used to query a peer for
 * routing gossip messages related to one or more short_channel_ids.
 * The query recipient will reply with the latest, if available,
 * channel_announcement, channel_update and node_announcement messages
 * it maintains for the requested short_channel_ids followed by a
 * reply_short_channel_ids_end message. The short_channel_ids sent in
 * this query are encoded. We only support encoding_type=0 uncompressed
 * serialization and do not support encoding_type=1 zlib serialization.
 */
export class QueryShortChannelIds extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.QueryShortChannelIds_free);
    }
    /**
     * The genesis hash of the blockchain being queried
     */
    get_chain_hash() {
        const ret = bindings.QueryShortChannelIds_get_chain_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The genesis hash of the blockchain being queried
     */
    set_chain_hash(val) {
        bindings.QueryShortChannelIds_set_chain_hash(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The short_channel_ids that are being queried
     *
     * Returns a copy of the field.
     */
    get_short_channel_ids() {
        const ret = bindings.QueryShortChannelIds_get_short_channel_ids(this.ptr);
        const ret_conv = bindings.decodeUint64Array(ret);
        return ret_conv;
    }
    /**
     * The short_channel_ids that are being queried
     */
    set_short_channel_ids(val) {
        bindings.QueryShortChannelIds_set_short_channel_ids(this.ptr, bindings.encodeUint64Array(val));
    }
    /**
     * Constructs a new QueryShortChannelIds given each field
     */
    static constructor_new(chain_hash_arg, short_channel_ids_arg) {
        const ret = bindings.QueryShortChannelIds_new(bindings.encodeUint8Array(bindings.check_arr_len(chain_hash_arg, 32)), bindings.encodeUint64Array(short_channel_ids_arg));
        const ret_hu_conv = new QueryShortChannelIds(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.QueryShortChannelIds_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the QueryShortChannelIds
     */
    clone() {
        const ret = bindings.QueryShortChannelIds_clone(this.ptr);
        const ret_hu_conv = new QueryShortChannelIds(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Read a QueryShortChannelIds from a byte array, created by QueryShortChannelIds_write
     */
    static constructor_read(ser) {
        const ret = bindings.QueryShortChannelIds_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_QueryShortChannelIdsDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Serialize the QueryShortChannelIds object into a byte array which can be read by QueryShortChannelIds_read
     */
    write() {
        const ret = bindings.QueryShortChannelIds_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
}
//# sourceMappingURL=QueryShortChannelIds.mjs.map