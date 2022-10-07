import { LightningError } from '../structs/LightningError.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_NoneLightningErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_NoneLightningErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_NoneLightningErrorZ_is_ok(ptr)) {
            return new Result_NoneLightningErrorZ_OK(null, ptr);
        }
        else {
            return new Result_NoneLightningErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_NoneLightningErrorZ in the success state.
     */
    static constructor_ok() {
        const ret = bindings.CResult_NoneLightningErrorZ_ok();
        const ret_hu_conv = Result_NoneLightningErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_NoneLightningErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_NoneLightningErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_NoneLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_NoneLightningErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_NoneLightningErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_NoneLightningErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_NoneLightningErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_NoneLightningErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_NoneLightningErrorZ_OK extends Result_NoneLightningErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
    }
}
export class Result_NoneLightningErrorZ_Err extends Result_NoneLightningErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_NoneLightningErrorZ_get_err(ptr);
        const err_hu_conv = new LightningError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_NoneLightningErrorZ.mjs.map