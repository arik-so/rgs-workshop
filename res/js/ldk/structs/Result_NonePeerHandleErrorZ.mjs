import { PeerHandleError } from '../structs/PeerHandleError.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_NonePeerHandleErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_NonePeerHandleErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_NonePeerHandleErrorZ_is_ok(ptr)) {
            return new Result_NonePeerHandleErrorZ_OK(null, ptr);
        }
        else {
            return new Result_NonePeerHandleErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_NonePeerHandleErrorZ in the success state.
     */
    static constructor_ok() {
        const ret = bindings.CResult_NonePeerHandleErrorZ_ok();
        const ret_hu_conv = Result_NonePeerHandleErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_NonePeerHandleErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_NonePeerHandleErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_NonePeerHandleErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_NonePeerHandleErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_NonePeerHandleErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_NonePeerHandleErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_NonePeerHandleErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_NonePeerHandleErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_NonePeerHandleErrorZ_OK extends Result_NonePeerHandleErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
    }
}
export class Result_NonePeerHandleErrorZ_Err extends Result_NonePeerHandleErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_NonePeerHandleErrorZ_get_err(ptr);
        const err_hu_conv = new PeerHandleError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_NonePeerHandleErrorZ.mjs.map