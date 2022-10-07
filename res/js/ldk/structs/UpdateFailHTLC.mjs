import { Result_UpdateFailHTLCDecodeErrorZ } from '../structs/Result_UpdateFailHTLCDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An update_fail_htlc message to be sent or received from a peer
 */
export class UpdateFailHTLC extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.UpdateFailHTLC_free);
    }
    /**
     * The channel ID
     */
    get_channel_id() {
        const ret = bindings.UpdateFailHTLC_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID
     */
    set_channel_id(val) {
        bindings.UpdateFailHTLC_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The HTLC ID
     */
    get_htlc_id() {
        const ret = bindings.UpdateFailHTLC_get_htlc_id(this.ptr);
        return ret;
    }
    /**
     * The HTLC ID
     */
    set_htlc_id(val) {
        bindings.UpdateFailHTLC_set_htlc_id(this.ptr, val);
    }
    clone_ptr() {
        const ret = bindings.UpdateFailHTLC_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the UpdateFailHTLC
     */
    clone() {
        const ret = bindings.UpdateFailHTLC_clone(this.ptr);
        const ret_hu_conv = new UpdateFailHTLC(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the UpdateFailHTLC object into a byte array which can be read by UpdateFailHTLC_read
     */
    write() {
        const ret = bindings.UpdateFailHTLC_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a UpdateFailHTLC from a byte array, created by UpdateFailHTLC_write
     */
    static constructor_read(ser) {
        const ret = bindings.UpdateFailHTLC_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_UpdateFailHTLCDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=UpdateFailHTLC.mjs.map