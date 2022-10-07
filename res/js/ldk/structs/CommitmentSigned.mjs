import { Result_CommitmentSignedDecodeErrorZ } from '../structs/Result_CommitmentSignedDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A commitment_signed message to be sent or received from a peer
 */
export class CommitmentSigned extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.CommitmentSigned_free);
    }
    /**
     * The channel ID
     */
    get_channel_id() {
        const ret = bindings.CommitmentSigned_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID
     */
    set_channel_id(val) {
        bindings.CommitmentSigned_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * A signature on the commitment transaction
     */
    get_signature() {
        const ret = bindings.CommitmentSigned_get_signature(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * A signature on the commitment transaction
     */
    set_signature(val) {
        bindings.CommitmentSigned_set_signature(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 64)));
    }
    /**
     * Signatures on the HTLC transactions
     *
     * Returns a copy of the field.
     */
    get_htlc_signatures() {
        const ret = bindings.CommitmentSigned_get_htlc_signatures(this.ptr);
        const ret_conv_12_len = bindings.getArrayLength(ret);
        const ret_conv_12_arr = new Array(ret_conv_12_len).fill(null);
        for (var m = 0; m < ret_conv_12_len; m++) {
            const ret_conv_12 = bindings.getU32ArrayElem(ret, m);
            const ret_conv_12_conv = bindings.decodeUint8Array(ret_conv_12);
            ret_conv_12_arr[m] = ret_conv_12_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_12_arr;
    }
    /**
     * Signatures on the HTLC transactions
     */
    set_htlc_signatures(val) {
        bindings.CommitmentSigned_set_htlc_signatures(this.ptr, bindings.encodeUint32Array(val != null ? val.map(val_conv_12 => bindings.encodeUint8Array(bindings.check_arr_len(val_conv_12, 64))) : null));
    }
    /**
     * Constructs a new CommitmentSigned given each field
     */
    static constructor_new(channel_id_arg, signature_arg, htlc_signatures_arg) {
        const ret = bindings.CommitmentSigned_new(bindings.encodeUint8Array(bindings.check_arr_len(channel_id_arg, 32)), bindings.encodeUint8Array(bindings.check_arr_len(signature_arg, 64)), bindings.encodeUint32Array(htlc_signatures_arg != null ? htlc_signatures_arg.map(htlc_signatures_arg_conv_12 => bindings.encodeUint8Array(bindings.check_arr_len(htlc_signatures_arg_conv_12, 64))) : null));
        const ret_hu_conv = new CommitmentSigned(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.CommitmentSigned_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the CommitmentSigned
     */
    clone() {
        const ret = bindings.CommitmentSigned_clone(this.ptr);
        const ret_hu_conv = new CommitmentSigned(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the CommitmentSigned object into a byte array which can be read by CommitmentSigned_read
     */
    write() {
        const ret = bindings.CommitmentSigned_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a CommitmentSigned from a byte array, created by CommitmentSigned_write
     */
    static constructor_read(ser) {
        const ret = bindings.CommitmentSigned_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_CommitmentSignedDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=CommitmentSigned.mjs.map