import { LightningError } from '../structs/LightningError.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_boolLightningErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_boolLightningErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_boolLightningErrorZ_is_ok(ptr)) {
            return new Result_boolLightningErrorZ_OK(null, ptr);
        }
        else {
            return new Result_boolLightningErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_boolLightningErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_boolLightningErrorZ_ok(o);
        const ret_hu_conv = Result_boolLightningErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_boolLightningErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_boolLightningErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_boolLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_boolLightningErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_boolLightningErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_boolLightningErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_boolLightningErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_boolLightningErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_boolLightningErrorZ_OK extends Result_boolLightningErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        this.res = bindings.CResult_boolLightningErrorZ_get_ok(ptr);
    }
}
export class Result_boolLightningErrorZ_Err extends Result_boolLightningErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_boolLightningErrorZ_get_err(ptr);
        const err_hu_conv = new LightningError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_boolLightningErrorZ.mjs.map