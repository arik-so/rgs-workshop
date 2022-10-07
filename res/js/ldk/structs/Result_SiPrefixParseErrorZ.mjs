import { ParseError } from '../structs/ParseError.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_SiPrefixParseErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_SiPrefixParseErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_SiPrefixParseErrorZ_is_ok(ptr)) {
            return new Result_SiPrefixParseErrorZ_OK(null, ptr);
        }
        else {
            return new Result_SiPrefixParseErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_SiPrefixParseErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_SiPrefixParseErrorZ_ok(o);
        const ret_hu_conv = Result_SiPrefixParseErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_SiPrefixParseErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_SiPrefixParseErrorZ_err(CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_SiPrefixParseErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_SiPrefixParseErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_SiPrefixParseErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_SiPrefixParseErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_SiPrefixParseErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_SiPrefixParseErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_SiPrefixParseErrorZ_OK extends Result_SiPrefixParseErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        this.res = bindings.CResult_SiPrefixParseErrorZ_get_ok(ptr);
    }
}
export class Result_SiPrefixParseErrorZ_Err extends Result_SiPrefixParseErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_SiPrefixParseErrorZ_get_err(ptr);
        const err_hu_conv = ParseError.constr_from_ptr(err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_SiPrefixParseErrorZ.mjs.map