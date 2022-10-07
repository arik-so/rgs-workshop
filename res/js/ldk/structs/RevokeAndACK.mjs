import { Result_RevokeAndACKDecodeErrorZ } from '../structs/Result_RevokeAndACKDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A revoke_and_ack message to be sent or received from a peer
 */
export class RevokeAndACK extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.RevokeAndACK_free);
    }
    /**
     * The channel ID
     */
    get_channel_id() {
        const ret = bindings.RevokeAndACK_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID
     */
    set_channel_id(val) {
        bindings.RevokeAndACK_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The secret corresponding to the per-commitment point
     */
    get_per_commitment_secret() {
        const ret = bindings.RevokeAndACK_get_per_commitment_secret(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The secret corresponding to the per-commitment point
     */
    set_per_commitment_secret(val) {
        bindings.RevokeAndACK_set_per_commitment_secret(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The next sender-broadcast commitment transaction's per-commitment point
     */
    get_next_per_commitment_point() {
        const ret = bindings.RevokeAndACK_get_next_per_commitment_point(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The next sender-broadcast commitment transaction's per-commitment point
     */
    set_next_per_commitment_point(val) {
        bindings.RevokeAndACK_set_next_per_commitment_point(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Constructs a new RevokeAndACK given each field
     */
    static constructor_new(channel_id_arg, per_commitment_secret_arg, next_per_commitment_point_arg) {
        const ret = bindings.RevokeAndACK_new(bindings.encodeUint8Array(bindings.check_arr_len(channel_id_arg, 32)), bindings.encodeUint8Array(bindings.check_arr_len(per_commitment_secret_arg, 32)), bindings.encodeUint8Array(bindings.check_arr_len(next_per_commitment_point_arg, 33)));
        const ret_hu_conv = new RevokeAndACK(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.RevokeAndACK_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the RevokeAndACK
     */
    clone() {
        const ret = bindings.RevokeAndACK_clone(this.ptr);
        const ret_hu_conv = new RevokeAndACK(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the RevokeAndACK object into a byte array which can be read by RevokeAndACK_read
     */
    write() {
        const ret = bindings.RevokeAndACK_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a RevokeAndACK from a byte array, created by RevokeAndACK_write
     */
    static constructor_read(ser) {
        const ret = bindings.RevokeAndACK_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_RevokeAndACKDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=RevokeAndACK.mjs.map