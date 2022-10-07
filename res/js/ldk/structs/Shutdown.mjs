import { Result_ShutdownDecodeErrorZ } from '../structs/Result_ShutdownDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A shutdown message to be sent or received from a peer
 */
export class Shutdown extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Shutdown_free);
    }
    /**
     * The channel ID
     */
    get_channel_id() {
        const ret = bindings.Shutdown_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID
     */
    set_channel_id(val) {
        bindings.Shutdown_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The destination of this peer's funds on closing.
     * Must be in one of these forms: p2pkh, p2sh, p2wpkh, p2wsh.
     */
    get_scriptpubkey() {
        const ret = bindings.Shutdown_get_scriptpubkey(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The destination of this peer's funds on closing.
     * Must be in one of these forms: p2pkh, p2sh, p2wpkh, p2wsh.
     */
    set_scriptpubkey(val) {
        bindings.Shutdown_set_scriptpubkey(this.ptr, bindings.encodeUint8Array(val));
    }
    /**
     * Constructs a new Shutdown given each field
     */
    static constructor_new(channel_id_arg, scriptpubkey_arg) {
        const ret = bindings.Shutdown_new(bindings.encodeUint8Array(bindings.check_arr_len(channel_id_arg, 32)), bindings.encodeUint8Array(scriptpubkey_arg));
        const ret_hu_conv = new Shutdown(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.Shutdown_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the Shutdown
     */
    clone() {
        const ret = bindings.Shutdown_clone(this.ptr);
        const ret_hu_conv = new Shutdown(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the Shutdown object into a byte array which can be read by Shutdown_read
     */
    write() {
        const ret = bindings.Shutdown_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a Shutdown from a byte array, created by Shutdown_write
     */
    static constructor_read(ser) {
        const ret = bindings.Shutdown_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ShutdownDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=Shutdown.mjs.map