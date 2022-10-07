import { PeerHandleError } from '../structs/PeerHandleError.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_CVec_u8ZPeerHandleErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_CVec_u8ZPeerHandleErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_CVec_u8ZPeerHandleErrorZ_is_ok(ptr)) {
            return new Result_CVec_u8ZPeerHandleErrorZ_OK(null, ptr);
        }
        else {
            return new Result_CVec_u8ZPeerHandleErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_CVec_u8ZPeerHandleErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_CVec_u8ZPeerHandleErrorZ_ok(bindings.encodeUint8Array(o));
        const ret_hu_conv = Result_CVec_u8ZPeerHandleErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_CVec_u8ZPeerHandleErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_CVec_u8ZPeerHandleErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_CVec_u8ZPeerHandleErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_CVec_u8ZPeerHandleErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_CVec_u8ZPeerHandleErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_CVec_u8ZPeerHandleErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_CVec_u8ZPeerHandleErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_CVec_u8ZPeerHandleErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_CVec_u8ZPeerHandleErrorZ_OK extends Result_CVec_u8ZPeerHandleErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_CVec_u8ZPeerHandleErrorZ_get_ok(ptr);
        const res_conv = bindings.decodeUint8Array(res);
        this.res = res_conv;
    }
}
export class Result_CVec_u8ZPeerHandleErrorZ_Err extends Result_CVec_u8ZPeerHandleErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_CVec_u8ZPeerHandleErrorZ_get_err(ptr);
        const err_hu_conv = new PeerHandleError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_CVec_u8ZPeerHandleErrorZ.mjs.map