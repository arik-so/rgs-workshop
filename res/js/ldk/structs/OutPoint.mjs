import { Result_OutPointDecodeErrorZ } from '../structs/Result_OutPointDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A reference to a transaction output.
 *
 * Differs from bitcoin::blockdata::transaction::OutPoint as the index is a u16 instead of u32
 * due to LN's restrictions on index values. Should reduce (possibly) unsafe conversions this way.
 */
export class OutPoint extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.OutPoint_free);
    }
    /**
     * The referenced transaction's txid.
     */
    get_txid() {
        const ret = bindings.OutPoint_get_txid(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The referenced transaction's txid.
     */
    set_txid(val) {
        bindings.OutPoint_set_txid(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The index of the referenced output in its transaction's vout.
     */
    get_index() {
        const ret = bindings.OutPoint_get_index(this.ptr);
        return ret;
    }
    /**
     * The index of the referenced output in its transaction's vout.
     */
    set_index(val) {
        bindings.OutPoint_set_index(this.ptr, val);
    }
    /**
     * Constructs a new OutPoint given each field
     */
    static constructor_new(txid_arg, index_arg) {
        const ret = bindings.OutPoint_new(bindings.encodeUint8Array(bindings.check_arr_len(txid_arg, 32)), index_arg);
        const ret_hu_conv = new OutPoint(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.OutPoint_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the OutPoint
     */
    clone() {
        const ret = bindings.OutPoint_clone(this.ptr);
        const ret_hu_conv = new OutPoint(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two OutPoints contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.OutPoint_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    /**
     * Checks if two OutPoints contain equal inner contents.
     */
    hash() {
        const ret = bindings.OutPoint_hash(this.ptr);
        return ret;
    }
    /**
     * Convert an `OutPoint` to a lightning channel id.
     */
    to_channel_id() {
        const ret = bindings.OutPoint_to_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Serialize the OutPoint object into a byte array which can be read by OutPoint_read
     */
    write() {
        const ret = bindings.OutPoint_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a OutPoint from a byte array, created by OutPoint_write
     */
    static constructor_read(ser) {
        const ret = bindings.OutPoint_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_OutPointDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=OutPoint.mjs.map