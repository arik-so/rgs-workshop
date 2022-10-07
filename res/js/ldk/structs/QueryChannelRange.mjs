import { Result_QueryChannelRangeDecodeErrorZ } from '../structs/Result_QueryChannelRangeDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A query_channel_range message is used to query a peer for channel
 * UTXOs in a range of blocks. The recipient of a query makes a best
 * effort to reply to the query using one or more reply_channel_range
 * messages.
 */
export class QueryChannelRange extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.QueryChannelRange_free);
    }
    /**
     * The genesis hash of the blockchain being queried
     */
    get_chain_hash() {
        const ret = bindings.QueryChannelRange_get_chain_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The genesis hash of the blockchain being queried
     */
    set_chain_hash(val) {
        bindings.QueryChannelRange_set_chain_hash(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The height of the first block for the channel UTXOs being queried
     */
    get_first_blocknum() {
        const ret = bindings.QueryChannelRange_get_first_blocknum(this.ptr);
        return ret;
    }
    /**
     * The height of the first block for the channel UTXOs being queried
     */
    set_first_blocknum(val) {
        bindings.QueryChannelRange_set_first_blocknum(this.ptr, val);
    }
    /**
     * The number of blocks to include in the query results
     */
    get_number_of_blocks() {
        const ret = bindings.QueryChannelRange_get_number_of_blocks(this.ptr);
        return ret;
    }
    /**
     * The number of blocks to include in the query results
     */
    set_number_of_blocks(val) {
        bindings.QueryChannelRange_set_number_of_blocks(this.ptr, val);
    }
    /**
     * Constructs a new QueryChannelRange given each field
     */
    static constructor_new(chain_hash_arg, first_blocknum_arg, number_of_blocks_arg) {
        const ret = bindings.QueryChannelRange_new(bindings.encodeUint8Array(bindings.check_arr_len(chain_hash_arg, 32)), first_blocknum_arg, number_of_blocks_arg);
        const ret_hu_conv = new QueryChannelRange(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.QueryChannelRange_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the QueryChannelRange
     */
    clone() {
        const ret = bindings.QueryChannelRange_clone(this.ptr);
        const ret_hu_conv = new QueryChannelRange(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * \n\t * Calculates the overflow safe ending block height for the query.\n\t * Overflow returns `0xffffffff`, otherwise returns `first_blocknum + number_of_blocks`\n\t
     */
    end_blocknum() {
        const ret = bindings.QueryChannelRange_end_blocknum(this.ptr);
        return ret;
    }
    /**
     * Serialize the QueryChannelRange object into a byte array which can be read by QueryChannelRange_read
     */
    write() {
        const ret = bindings.QueryChannelRange_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a QueryChannelRange from a byte array, created by QueryChannelRange_write
     */
    static constructor_read(ser) {
        const ret = bindings.QueryChannelRange_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_QueryChannelRangeDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=QueryChannelRange.mjs.map