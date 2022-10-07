import { Result_UpdateAddHTLCDecodeErrorZ } from '../structs/Result_UpdateAddHTLCDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An update_add_htlc message to be sent or received from a peer
 */
export class UpdateAddHTLC extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.UpdateAddHTLC_free);
    }
    /**
     * The channel ID
     */
    get_channel_id() {
        const ret = bindings.UpdateAddHTLC_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID
     */
    set_channel_id(val) {
        bindings.UpdateAddHTLC_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The HTLC ID
     */
    get_htlc_id() {
        const ret = bindings.UpdateAddHTLC_get_htlc_id(this.ptr);
        return ret;
    }
    /**
     * The HTLC ID
     */
    set_htlc_id(val) {
        bindings.UpdateAddHTLC_set_htlc_id(this.ptr, val);
    }
    /**
     * The HTLC value in milli-satoshi
     */
    get_amount_msat() {
        const ret = bindings.UpdateAddHTLC_get_amount_msat(this.ptr);
        return ret;
    }
    /**
     * The HTLC value in milli-satoshi
     */
    set_amount_msat(val) {
        bindings.UpdateAddHTLC_set_amount_msat(this.ptr, val);
    }
    /**
     * The payment hash, the pre-image of which controls HTLC redemption
     */
    get_payment_hash() {
        const ret = bindings.UpdateAddHTLC_get_payment_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The payment hash, the pre-image of which controls HTLC redemption
     */
    set_payment_hash(val) {
        bindings.UpdateAddHTLC_set_payment_hash(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The expiry height of the HTLC
     */
    get_cltv_expiry() {
        const ret = bindings.UpdateAddHTLC_get_cltv_expiry(this.ptr);
        return ret;
    }
    /**
     * The expiry height of the HTLC
     */
    set_cltv_expiry(val) {
        bindings.UpdateAddHTLC_set_cltv_expiry(this.ptr, val);
    }
    clone_ptr() {
        const ret = bindings.UpdateAddHTLC_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the UpdateAddHTLC
     */
    clone() {
        const ret = bindings.UpdateAddHTLC_clone(this.ptr);
        const ret_hu_conv = new UpdateAddHTLC(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the UpdateAddHTLC object into a byte array which can be read by UpdateAddHTLC_read
     */
    write() {
        const ret = bindings.UpdateAddHTLC_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a UpdateAddHTLC from a byte array, created by UpdateAddHTLC_write
     */
    static constructor_read(ser) {
        const ret = bindings.UpdateAddHTLC_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_UpdateAddHTLCDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=UpdateAddHTLC.mjs.map