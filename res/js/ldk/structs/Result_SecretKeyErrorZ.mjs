import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_SecretKeyErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_SecretKeyErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_SecretKeyErrorZ_is_ok(ptr)) {
            return new Result_SecretKeyErrorZ_OK(null, ptr);
        }
        else {
            return new Result_SecretKeyErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_SecretKeyErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_SecretKeyErrorZ_ok(bindings.encodeUint8Array(bindings.check_arr_len(o, 32)));
        const ret_hu_conv = Result_SecretKeyErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_SecretKeyErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_SecretKeyErrorZ_err(e);
        const ret_hu_conv = Result_SecretKeyErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_SecretKeyErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_SecretKeyErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_SecretKeyErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_SecretKeyErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_SecretKeyErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_SecretKeyErrorZ_OK extends Result_SecretKeyErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_SecretKeyErrorZ_get_ok(ptr);
        const res_conv = bindings.decodeUint8Array(res);
        this.res = res_conv;
    }
}
export class Result_SecretKeyErrorZ_Err extends Result_SecretKeyErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        this.err = bindings.CResult_SecretKeyErrorZ_get_err(ptr);
    }
}
//# sourceMappingURL=Result_SecretKeyErrorZ.mjs.map