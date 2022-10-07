import { Result_UpdateFeeDecodeErrorZ } from '../structs/Result_UpdateFeeDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An update_fee message to be sent or received from a peer
 */
export class UpdateFee extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.UpdateFee_free);
    }
    /**
     * The channel ID
     */
    get_channel_id() {
        const ret = bindings.UpdateFee_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID
     */
    set_channel_id(val) {
        bindings.UpdateFee_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * Fee rate per 1000-weight of the transaction
     */
    get_feerate_per_kw() {
        const ret = bindings.UpdateFee_get_feerate_per_kw(this.ptr);
        return ret;
    }
    /**
     * Fee rate per 1000-weight of the transaction
     */
    set_feerate_per_kw(val) {
        bindings.UpdateFee_set_feerate_per_kw(this.ptr, val);
    }
    /**
     * Constructs a new UpdateFee given each field
     */
    static constructor_new(channel_id_arg, feerate_per_kw_arg) {
        const ret = bindings.UpdateFee_new(bindings.encodeUint8Array(bindings.check_arr_len(channel_id_arg, 32)), feerate_per_kw_arg);
        const ret_hu_conv = new UpdateFee(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.UpdateFee_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the UpdateFee
     */
    clone() {
        const ret = bindings.UpdateFee_clone(this.ptr);
        const ret_hu_conv = new UpdateFee(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the UpdateFee object into a byte array which can be read by UpdateFee_read
     */
    write() {
        const ret = bindings.UpdateFee_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a UpdateFee from a byte array, created by UpdateFee_write
     */
    static constructor_read(ser) {
        const ret = bindings.UpdateFee_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_UpdateFeeDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=UpdateFee.mjs.map