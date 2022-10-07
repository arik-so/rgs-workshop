import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_NoneSemanticErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_NoneSemanticErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_NoneSemanticErrorZ_is_ok(ptr)) {
            return new Result_NoneSemanticErrorZ_OK(null, ptr);
        }
        else {
            return new Result_NoneSemanticErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_NoneSemanticErrorZ in the success state.
     */
    static constructor_ok() {
        const ret = bindings.CResult_NoneSemanticErrorZ_ok();
        const ret_hu_conv = Result_NoneSemanticErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_NoneSemanticErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_NoneSemanticErrorZ_err(e);
        const ret_hu_conv = Result_NoneSemanticErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_NoneSemanticErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_NoneSemanticErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_NoneSemanticErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_NoneSemanticErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_NoneSemanticErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_NoneSemanticErrorZ_OK extends Result_NoneSemanticErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
    }
}
export class Result_NoneSemanticErrorZ_Err extends Result_NoneSemanticErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        this.err = bindings.CResult_NoneSemanticErrorZ_get_err(ptr);
    }
}
//# sourceMappingURL=Result_NoneSemanticErrorZ.mjs.map