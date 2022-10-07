import { Result_ReplyShortChannelIdsEndDecodeErrorZ } from '../structs/Result_ReplyShortChannelIdsEndDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A reply_short_channel_ids_end message is sent as a reply to a
 * query_short_channel_ids message. The query recipient makes a best
 * effort to respond based on their local network view which may not be
 * a perfect view of the network.
 */
export class ReplyShortChannelIdsEnd extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ReplyShortChannelIdsEnd_free);
    }
    /**
     * The genesis hash of the blockchain that was queried
     */
    get_chain_hash() {
        const ret = bindings.ReplyShortChannelIdsEnd_get_chain_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The genesis hash of the blockchain that was queried
     */
    set_chain_hash(val) {
        bindings.ReplyShortChannelIdsEnd_set_chain_hash(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * Indicates if the query recipient maintains up-to-date channel
     * information for the chain_hash
     */
    get_full_information() {
        const ret = bindings.ReplyShortChannelIdsEnd_get_full_information(this.ptr);
        return ret;
    }
    /**
     * Indicates if the query recipient maintains up-to-date channel
     * information for the chain_hash
     */
    set_full_information(val) {
        bindings.ReplyShortChannelIdsEnd_set_full_information(this.ptr, val);
    }
    /**
     * Constructs a new ReplyShortChannelIdsEnd given each field
     */
    static constructor_new(chain_hash_arg, full_information_arg) {
        const ret = bindings.ReplyShortChannelIdsEnd_new(bindings.encodeUint8Array(bindings.check_arr_len(chain_hash_arg, 32)), full_information_arg);
        const ret_hu_conv = new ReplyShortChannelIdsEnd(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ReplyShortChannelIdsEnd_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ReplyShortChannelIdsEnd
     */
    clone() {
        const ret = bindings.ReplyShortChannelIdsEnd_clone(this.ptr);
        const ret_hu_conv = new ReplyShortChannelIdsEnd(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ReplyShortChannelIdsEnd object into a byte array which can be read by ReplyShortChannelIdsEnd_read
     */
    write() {
        const ret = bindings.ReplyShortChannelIdsEnd_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ReplyShortChannelIdsEnd from a byte array, created by ReplyShortChannelIdsEnd_write
     */
    static constructor_read(ser) {
        const ret = bindings.ReplyShortChannelIdsEnd_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ReplyShortChannelIdsEndDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ReplyShortChannelIdsEnd.mjs.map