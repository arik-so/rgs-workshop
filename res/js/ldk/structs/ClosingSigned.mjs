import { Result_ClosingSignedDecodeErrorZ } from '../structs/Result_ClosingSignedDecodeErrorZ.mjs';
import { ClosingSignedFeeRange } from '../structs/ClosingSignedFeeRange.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A closing_signed message to be sent or received from a peer
 */
export class ClosingSigned extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ClosingSigned_free);
    }
    /**
     * The channel ID
     */
    get_channel_id() {
        const ret = bindings.ClosingSigned_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID
     */
    set_channel_id(val) {
        bindings.ClosingSigned_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The proposed total fee for the closing transaction
     */
    get_fee_satoshis() {
        const ret = bindings.ClosingSigned_get_fee_satoshis(this.ptr);
        return ret;
    }
    /**
     * The proposed total fee for the closing transaction
     */
    set_fee_satoshis(val) {
        bindings.ClosingSigned_set_fee_satoshis(this.ptr, val);
    }
    /**
     * A signature on the closing transaction
     */
    get_signature() {
        const ret = bindings.ClosingSigned_get_signature(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * A signature on the closing transaction
     */
    set_signature(val) {
        bindings.ClosingSigned_set_signature(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 64)));
    }
    /**
     * The minimum and maximum fees which the sender is willing to accept, provided only by new
     * nodes.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_fee_range() {
        const ret = bindings.ClosingSigned_get_fee_range(this.ptr);
        const ret_hu_conv = new ClosingSignedFeeRange(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The minimum and maximum fees which the sender is willing to accept, provided only by new
     * nodes.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_fee_range(val) {
        bindings.ClosingSigned_set_fee_range(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Constructs a new ClosingSigned given each field
     */
    static constructor_new(channel_id_arg, fee_satoshis_arg, signature_arg, fee_range_arg) {
        const ret = bindings.ClosingSigned_new(bindings.encodeUint8Array(bindings.check_arr_len(channel_id_arg, 32)), fee_satoshis_arg, bindings.encodeUint8Array(bindings.check_arr_len(signature_arg, 64)), fee_range_arg == null ? 0n : CommonBase.get_ptr_of(fee_range_arg));
        const ret_hu_conv = new ClosingSigned(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, fee_range_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ClosingSigned_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ClosingSigned
     */
    clone() {
        const ret = bindings.ClosingSigned_clone(this.ptr);
        const ret_hu_conv = new ClosingSigned(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ClosingSigned object into a byte array which can be read by ClosingSigned_read
     */
    write() {
        const ret = bindings.ClosingSigned_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ClosingSigned from a byte array, created by ClosingSigned_write
     */
    static constructor_read(ser) {
        const ret = bindings.ClosingSigned_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ClosingSignedDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ClosingSigned.mjs.map