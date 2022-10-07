import { Result_ReplyChannelRangeDecodeErrorZ } from '../structs/Result_ReplyChannelRangeDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A reply_channel_range message is a reply to a query_channel_range
 * message. Multiple reply_channel_range messages can be sent in reply
 * to a single query_channel_range message. The query recipient makes a
 * best effort to respond based on their local network view which may
 * not be a perfect view of the network. The short_channel_ids in the
 * reply are encoded. We only support encoding_type=0 uncompressed
 * serialization and do not support encoding_type=1 zlib serialization.
 */
export class ReplyChannelRange extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ReplyChannelRange_free);
    }
    /**
     * The genesis hash of the blockchain being queried
     */
    get_chain_hash() {
        const ret = bindings.ReplyChannelRange_get_chain_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The genesis hash of the blockchain being queried
     */
    set_chain_hash(val) {
        bindings.ReplyChannelRange_set_chain_hash(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The height of the first block in the range of the reply
     */
    get_first_blocknum() {
        const ret = bindings.ReplyChannelRange_get_first_blocknum(this.ptr);
        return ret;
    }
    /**
     * The height of the first block in the range of the reply
     */
    set_first_blocknum(val) {
        bindings.ReplyChannelRange_set_first_blocknum(this.ptr, val);
    }
    /**
     * The number of blocks included in the range of the reply
     */
    get_number_of_blocks() {
        const ret = bindings.ReplyChannelRange_get_number_of_blocks(this.ptr);
        return ret;
    }
    /**
     * The number of blocks included in the range of the reply
     */
    set_number_of_blocks(val) {
        bindings.ReplyChannelRange_set_number_of_blocks(this.ptr, val);
    }
    /**
     * True when this is the final reply for a query
     */
    get_sync_complete() {
        const ret = bindings.ReplyChannelRange_get_sync_complete(this.ptr);
        return ret;
    }
    /**
     * True when this is the final reply for a query
     */
    set_sync_complete(val) {
        bindings.ReplyChannelRange_set_sync_complete(this.ptr, val);
    }
    /**
     * The short_channel_ids in the channel range
     *
     * Returns a copy of the field.
     */
    get_short_channel_ids() {
        const ret = bindings.ReplyChannelRange_get_short_channel_ids(this.ptr);
        const ret_conv = bindings.decodeUint64Array(ret);
        return ret_conv;
    }
    /**
     * The short_channel_ids in the channel range
     */
    set_short_channel_ids(val) {
        bindings.ReplyChannelRange_set_short_channel_ids(this.ptr, bindings.encodeUint64Array(val));
    }
    /**
     * Constructs a new ReplyChannelRange given each field
     */
    static constructor_new(chain_hash_arg, first_blocknum_arg, number_of_blocks_arg, sync_complete_arg, short_channel_ids_arg) {
        const ret = bindings.ReplyChannelRange_new(bindings.encodeUint8Array(bindings.check_arr_len(chain_hash_arg, 32)), first_blocknum_arg, number_of_blocks_arg, sync_complete_arg, bindings.encodeUint64Array(short_channel_ids_arg));
        const ret_hu_conv = new ReplyChannelRange(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ReplyChannelRange_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ReplyChannelRange
     */
    clone() {
        const ret = bindings.ReplyChannelRange_clone(this.ptr);
        const ret_hu_conv = new ReplyChannelRange(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Read a ReplyChannelRange from a byte array, created by ReplyChannelRange_write
     */
    static constructor_read(ser) {
        const ret = bindings.ReplyChannelRange_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ReplyChannelRangeDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Serialize the ReplyChannelRange object into a byte array which can be read by ReplyChannelRange_read
     */
    write() {
        const ret = bindings.ReplyChannelRange_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
}
//# sourceMappingURL=ReplyChannelRange.mjs.map