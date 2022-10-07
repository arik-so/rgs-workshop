import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_SignatureNoneZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_SignatureNoneZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_SignatureNoneZ_is_ok(ptr)) {
            return new Result_SignatureNoneZ_OK(null, ptr);
        }
        else {
            return new Result_SignatureNoneZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_SignatureNoneZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_SignatureNoneZ_ok(bindings.encodeUint8Array(bindings.check_arr_len(o, 64)));
        const ret_hu_conv = Result_SignatureNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_SignatureNoneZ in the error state.
     */
    static constructor_err() {
        const ret = bindings.CResult_SignatureNoneZ_err();
        const ret_hu_conv = Result_SignatureNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_SignatureNoneZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_SignatureNoneZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_SignatureNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_SignatureNoneZ_clone(this.ptr);
        const ret_hu_conv = Result_SignatureNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_SignatureNoneZ_OK extends Result_SignatureNoneZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_SignatureNoneZ_get_ok(ptr);
        const res_conv = bindings.decodeUint8Array(res);
        this.res = res_conv;
    }
}
export class Result_SignatureNoneZ_Err extends Result_SignatureNoneZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
    }
}
//# sourceMappingURL=Result_SignatureNoneZ.mjs.map