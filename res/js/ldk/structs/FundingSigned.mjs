import { Result_FundingSignedDecodeErrorZ } from '../structs/Result_FundingSignedDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A funding_signed message to be sent or received from a peer
 */
export class FundingSigned extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.FundingSigned_free);
    }
    /**
     * The channel ID
     */
    get_channel_id() {
        const ret = bindings.FundingSigned_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID
     */
    set_channel_id(val) {
        bindings.FundingSigned_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The signature of the channel acceptor (fundee) on the initial commitment transaction
     */
    get_signature() {
        const ret = bindings.FundingSigned_get_signature(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The signature of the channel acceptor (fundee) on the initial commitment transaction
     */
    set_signature(val) {
        bindings.FundingSigned_set_signature(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 64)));
    }
    /**
     * Constructs a new FundingSigned given each field
     */
    static constructor_new(channel_id_arg, signature_arg) {
        const ret = bindings.FundingSigned_new(bindings.encodeUint8Array(bindings.check_arr_len(channel_id_arg, 32)), bindings.encodeUint8Array(bindings.check_arr_len(signature_arg, 64)));
        const ret_hu_conv = new FundingSigned(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.FundingSigned_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the FundingSigned
     */
    clone() {
        const ret = bindings.FundingSigned_clone(this.ptr);
        const ret_hu_conv = new FundingSigned(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the FundingSigned object into a byte array which can be read by FundingSigned_read
     */
    write() {
        const ret = bindings.FundingSigned_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a FundingSigned from a byte array, created by FundingSigned_write
     */
    static constructor_read(ser) {
        const ret = bindings.FundingSigned_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_FundingSignedDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=FundingSigned.mjs.map