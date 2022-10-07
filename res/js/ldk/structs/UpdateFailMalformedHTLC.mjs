import { Result_UpdateFailMalformedHTLCDecodeErrorZ } from '../structs/Result_UpdateFailMalformedHTLCDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An update_fail_malformed_htlc message to be sent or received from a peer
 */
export class UpdateFailMalformedHTLC extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.UpdateFailMalformedHTLC_free);
    }
    /**
     * The channel ID
     */
    get_channel_id() {
        const ret = bindings.UpdateFailMalformedHTLC_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID
     */
    set_channel_id(val) {
        bindings.UpdateFailMalformedHTLC_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The HTLC ID
     */
    get_htlc_id() {
        const ret = bindings.UpdateFailMalformedHTLC_get_htlc_id(this.ptr);
        return ret;
    }
    /**
     * The HTLC ID
     */
    set_htlc_id(val) {
        bindings.UpdateFailMalformedHTLC_set_htlc_id(this.ptr, val);
    }
    /**
     * The failure code
     */
    get_failure_code() {
        const ret = bindings.UpdateFailMalformedHTLC_get_failure_code(this.ptr);
        return ret;
    }
    /**
     * The failure code
     */
    set_failure_code(val) {
        bindings.UpdateFailMalformedHTLC_set_failure_code(this.ptr, val);
    }
    clone_ptr() {
        const ret = bindings.UpdateFailMalformedHTLC_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the UpdateFailMalformedHTLC
     */
    clone() {
        const ret = bindings.UpdateFailMalformedHTLC_clone(this.ptr);
        const ret_hu_conv = new UpdateFailMalformedHTLC(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the UpdateFailMalformedHTLC object into a byte array which can be read by UpdateFailMalformedHTLC_read
     */
    write() {
        const ret = bindings.UpdateFailMalformedHTLC_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a UpdateFailMalformedHTLC from a byte array, created by UpdateFailMalformedHTLC_write
     */
    static constructor_read(ser) {
        const ret = bindings.UpdateFailMalformedHTLC_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_UpdateFailMalformedHTLCDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=UpdateFailMalformedHTLC.mjs.map