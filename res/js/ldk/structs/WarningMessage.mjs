import { Result_WarningMessageDecodeErrorZ } from '../structs/Result_WarningMessageDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A warning message to be sent or received from a peer
 */
export class WarningMessage extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.WarningMessage_free);
    }
    /**
     * The channel ID involved in the warning.
     *
     * All-0s indicates a warning unrelated to a specific channel.
     */
    get_channel_id() {
        const ret = bindings.WarningMessage_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID involved in the warning.
     *
     * All-0s indicates a warning unrelated to a specific channel.
     */
    set_channel_id(val) {
        bindings.WarningMessage_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * A possibly human-readable warning description.
     * The string should be sanitized before it is used (e.g. emitted to logs or printed to
     * stdout). Otherwise, a well crafted error message may trigger a security vulnerability in
     * the terminal emulator or the logging subsystem.
     */
    get_data() {
        const ret = bindings.WarningMessage_get_data(this.ptr);
        const ret_conv = bindings.decodeString(ret);
        return ret_conv;
    }
    /**
     * A possibly human-readable warning description.
     * The string should be sanitized before it is used (e.g. emitted to logs or printed to
     * stdout). Otherwise, a well crafted error message may trigger a security vulnerability in
     * the terminal emulator or the logging subsystem.
     */
    set_data(val) {
        bindings.WarningMessage_set_data(this.ptr, bindings.encodeString(val));
    }
    /**
     * Constructs a new WarningMessage given each field
     */
    static constructor_new(channel_id_arg, data_arg) {
        const ret = bindings.WarningMessage_new(bindings.encodeUint8Array(bindings.check_arr_len(channel_id_arg, 32)), bindings.encodeString(data_arg));
        const ret_hu_conv = new WarningMessage(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.WarningMessage_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the WarningMessage
     */
    clone() {
        const ret = bindings.WarningMessage_clone(this.ptr);
        const ret_hu_conv = new WarningMessage(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the WarningMessage object into a byte array which can be read by WarningMessage_read
     */
    write() {
        const ret = bindings.WarningMessage_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a WarningMessage from a byte array, created by WarningMessage_write
     */
    static constructor_read(ser) {
        const ret = bindings.WarningMessage_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_WarningMessageDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=WarningMessage.mjs.map