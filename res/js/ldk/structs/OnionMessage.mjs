import { Result_OnionMessageDecodeErrorZ } from '../structs/Result_OnionMessageDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An onion message to be sent or received from a peer
 */
export class OnionMessage extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.OnionMessage_free);
    }
    /**
     * Used in decrypting the onion packet's payload.
     */
    get_blinding_point() {
        const ret = bindings.OnionMessage_get_blinding_point(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Used in decrypting the onion packet's payload.
     */
    set_blinding_point(val) {
        bindings.OnionMessage_set_blinding_point(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    clone_ptr() {
        const ret = bindings.OnionMessage_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the OnionMessage
     */
    clone() {
        const ret = bindings.OnionMessage_clone(this.ptr);
        const ret_hu_conv = new OnionMessage(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Read a OnionMessage from a byte array, created by OnionMessage_write
     */
    static constructor_read(ser) {
        const ret = bindings.OnionMessage_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_OnionMessageDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Serialize the OnionMessage object into a byte array which can be read by OnionMessage_read
     */
    write() {
        const ret = bindings.OnionMessage_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
}
//# sourceMappingURL=OnionMessage.mjs.map