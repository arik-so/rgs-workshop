import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_StringErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_StringErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_StringErrorZ_is_ok(ptr)) {
            return new Result_StringErrorZ_OK(null, ptr);
        }
        else {
            return new Result_StringErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_StringErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_StringErrorZ_ok(bindings.encodeString(o));
        const ret_hu_conv = Result_StringErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_StringErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_StringErrorZ_err(e);
        const ret_hu_conv = Result_StringErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_StringErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_StringErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_StringErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_StringErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_StringErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_StringErrorZ_OK extends Result_StringErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_StringErrorZ_get_ok(ptr);
        const res_conv = bindings.decodeString(res);
        this.res = res_conv;
    }
}
export class Result_StringErrorZ_Err extends Result_StringErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        this.err = bindings.CResult_StringErrorZ_get_err(ptr);
    }
}
//# sourceMappingURL=Result_StringErrorZ.mjs.map