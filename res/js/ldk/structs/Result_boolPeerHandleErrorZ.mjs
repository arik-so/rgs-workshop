import { PeerHandleError } from '../structs/PeerHandleError.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_boolPeerHandleErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_boolPeerHandleErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_boolPeerHandleErrorZ_is_ok(ptr)) {
            return new Result_boolPeerHandleErrorZ_OK(null, ptr);
        }
        else {
            return new Result_boolPeerHandleErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_boolPeerHandleErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_boolPeerHandleErrorZ_ok(o);
        const ret_hu_conv = Result_boolPeerHandleErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_boolPeerHandleErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_boolPeerHandleErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_boolPeerHandleErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_boolPeerHandleErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_boolPeerHandleErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_boolPeerHandleErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_boolPeerHandleErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_boolPeerHandleErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_boolPeerHandleErrorZ_OK extends Result_boolPeerHandleErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        this.res = bindings.CResult_boolPeerHandleErrorZ_get_ok(ptr);
    }
}
export class Result_boolPeerHandleErrorZ_Err extends Result_boolPeerHandleErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_boolPeerHandleErrorZ_get_err(ptr);
        const err_hu_conv = new PeerHandleError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_boolPeerHandleErrorZ.mjs.map