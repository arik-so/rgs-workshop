import { Result_PingDecodeErrorZ } from '../structs/Result_PingDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A ping message to be sent or received from a peer
 */
export class Ping extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Ping_free);
    }
    /**
     * The desired response length
     */
    get_ponglen() {
        const ret = bindings.Ping_get_ponglen(this.ptr);
        return ret;
    }
    /**
     * The desired response length
     */
    set_ponglen(val) {
        bindings.Ping_set_ponglen(this.ptr, val);
    }
    /**
     * The ping packet size.
     * This field is not sent on the wire. byteslen zeros are sent.
     */
    get_byteslen() {
        const ret = bindings.Ping_get_byteslen(this.ptr);
        return ret;
    }
    /**
     * The ping packet size.
     * This field is not sent on the wire. byteslen zeros are sent.
     */
    set_byteslen(val) {
        bindings.Ping_set_byteslen(this.ptr, val);
    }
    /**
     * Constructs a new Ping given each field
     */
    static constructor_new(ponglen_arg, byteslen_arg) {
        const ret = bindings.Ping_new(ponglen_arg, byteslen_arg);
        const ret_hu_conv = new Ping(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.Ping_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the Ping
     */
    clone() {
        const ret = bindings.Ping_clone(this.ptr);
        const ret_hu_conv = new Ping(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the Ping object into a byte array which can be read by Ping_read
     */
    write() {
        const ret = bindings.Ping_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a Ping from a byte array, created by Ping_write
     */
    static constructor_read(ser) {
        const ret = bindings.Ping_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_PingDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=Ping.mjs.map