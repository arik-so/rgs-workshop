import { Result_ErrorMessageDecodeErrorZ } from '../structs/Result_ErrorMessageDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An error message to be sent or received from a peer
 */
export class ErrorMessage extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ErrorMessage_free);
    }
    /**
     * The channel ID involved in the error.
     *
     * All-0s indicates a general error unrelated to a specific channel, after which all channels
     * with the sending peer should be closed.
     */
    get_channel_id() {
        const ret = bindings.ErrorMessage_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID involved in the error.
     *
     * All-0s indicates a general error unrelated to a specific channel, after which all channels
     * with the sending peer should be closed.
     */
    set_channel_id(val) {
        bindings.ErrorMessage_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * A possibly human-readable error description.
     * The string should be sanitized before it is used (e.g. emitted to logs or printed to
     * stdout). Otherwise, a well crafted error message may trigger a security vulnerability in
     * the terminal emulator or the logging subsystem.
     */
    get_data() {
        const ret = bindings.ErrorMessage_get_data(this.ptr);
        const ret_conv = bindings.decodeString(ret);
        return ret_conv;
    }
    /**
     * A possibly human-readable error description.
     * The string should be sanitized before it is used (e.g. emitted to logs or printed to
     * stdout). Otherwise, a well crafted error message may trigger a security vulnerability in
     * the terminal emulator or the logging subsystem.
     */
    set_data(val) {
        bindings.ErrorMessage_set_data(this.ptr, bindings.encodeString(val));
    }
    /**
     * Constructs a new ErrorMessage given each field
     */
    static constructor_new(channel_id_arg, data_arg) {
        const ret = bindings.ErrorMessage_new(bindings.encodeUint8Array(bindings.check_arr_len(channel_id_arg, 32)), bindings.encodeString(data_arg));
        const ret_hu_conv = new ErrorMessage(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ErrorMessage_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ErrorMessage
     */
    clone() {
        const ret = bindings.ErrorMessage_clone(this.ptr);
        const ret_hu_conv = new ErrorMessage(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ErrorMessage object into a byte array which can be read by ErrorMessage_read
     */
    write() {
        const ret = bindings.ErrorMessage_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ErrorMessage from a byte array, created by ErrorMessage_write
     */
    static constructor_read(ser) {
        const ret = bindings.ErrorMessage_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ErrorMessageDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ErrorMessage.mjs.map