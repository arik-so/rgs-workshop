import { Result_UpdateFulfillHTLCDecodeErrorZ } from '../structs/Result_UpdateFulfillHTLCDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An update_fulfill_htlc message to be sent or received from a peer
 */
export class UpdateFulfillHTLC extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.UpdateFulfillHTLC_free);
    }
    /**
     * The channel ID
     */
    get_channel_id() {
        const ret = bindings.UpdateFulfillHTLC_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID
     */
    set_channel_id(val) {
        bindings.UpdateFulfillHTLC_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The HTLC ID
     */
    get_htlc_id() {
        const ret = bindings.UpdateFulfillHTLC_get_htlc_id(this.ptr);
        return ret;
    }
    /**
     * The HTLC ID
     */
    set_htlc_id(val) {
        bindings.UpdateFulfillHTLC_set_htlc_id(this.ptr, val);
    }
    /**
     * The pre-image of the payment hash, allowing HTLC redemption
     */
    get_payment_preimage() {
        const ret = bindings.UpdateFulfillHTLC_get_payment_preimage(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The pre-image of the payment hash, allowing HTLC redemption
     */
    set_payment_preimage(val) {
        bindings.UpdateFulfillHTLC_set_payment_preimage(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * Constructs a new UpdateFulfillHTLC given each field
     */
    static constructor_new(channel_id_arg, htlc_id_arg, payment_preimage_arg) {
        const ret = bindings.UpdateFulfillHTLC_new(bindings.encodeUint8Array(bindings.check_arr_len(channel_id_arg, 32)), htlc_id_arg, bindings.encodeUint8Array(bindings.check_arr_len(payment_preimage_arg, 32)));
        const ret_hu_conv = new UpdateFulfillHTLC(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.UpdateFulfillHTLC_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the UpdateFulfillHTLC
     */
    clone() {
        const ret = bindings.UpdateFulfillHTLC_clone(this.ptr);
        const ret_hu_conv = new UpdateFulfillHTLC(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the UpdateFulfillHTLC object into a byte array which can be read by UpdateFulfillHTLC_read
     */
    write() {
        const ret = bindings.UpdateFulfillHTLC_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a UpdateFulfillHTLC from a byte array, created by UpdateFulfillHTLC_write
     */
    static constructor_read(ser) {
        const ret = bindings.UpdateFulfillHTLC_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_UpdateFulfillHTLCDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=UpdateFulfillHTLC.mjs.map