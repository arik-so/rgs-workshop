import { Result_PongDecodeErrorZ } from '../structs/Result_PongDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A pong message to be sent or received from a peer
 */
export class Pong extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Pong_free);
    }
    /**
     * The pong packet size.
     * This field is not sent on the wire. byteslen zeros are sent.
     */
    get_byteslen() {
        const ret = bindings.Pong_get_byteslen(this.ptr);
        return ret;
    }
    /**
     * The pong packet size.
     * This field is not sent on the wire. byteslen zeros are sent.
     */
    set_byteslen(val) {
        bindings.Pong_set_byteslen(this.ptr, val);
    }
    /**
     * Constructs a new Pong given each field
     */
    static constructor_new(byteslen_arg) {
        const ret = bindings.Pong_new(byteslen_arg);
        const ret_hu_conv = new Pong(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.Pong_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the Pong
     */
    clone() {
        const ret = bindings.Pong_clone(this.ptr);
        const ret_hu_conv = new Pong(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the Pong object into a byte array which can be read by Pong_read
     */
    write() {
        const ret = bindings.Pong_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a Pong from a byte array, created by Pong_write
     */
    static constructor_read(ser) {
        const ret = bindings.Pong_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_PongDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=Pong.mjs.map