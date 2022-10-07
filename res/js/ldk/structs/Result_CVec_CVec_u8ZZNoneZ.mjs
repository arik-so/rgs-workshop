import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_CVec_CVec_u8ZZNoneZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_CVec_CVec_u8ZZNoneZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_CVec_CVec_u8ZZNoneZ_is_ok(ptr)) {
            return new Result_CVec_CVec_u8ZZNoneZ_OK(null, ptr);
        }
        else {
            return new Result_CVec_CVec_u8ZZNoneZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_CVec_CVec_u8ZZNoneZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_CVec_CVec_u8ZZNoneZ_ok(bindings.encodeUint32Array(o != null ? o.map(o_conv_12 => bindings.encodeUint8Array(o_conv_12)) : null));
        const ret_hu_conv = Result_CVec_CVec_u8ZZNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_CVec_CVec_u8ZZNoneZ in the error state.
     */
    static constructor_err() {
        const ret = bindings.CResult_CVec_CVec_u8ZZNoneZ_err();
        const ret_hu_conv = Result_CVec_CVec_u8ZZNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_CVec_CVec_u8ZZNoneZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_CVec_CVec_u8ZZNoneZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_CVec_CVec_u8ZZNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_CVec_CVec_u8ZZNoneZ_clone(this.ptr);
        const ret_hu_conv = Result_CVec_CVec_u8ZZNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_CVec_CVec_u8ZZNoneZ_OK extends Result_CVec_CVec_u8ZZNoneZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_CVec_CVec_u8ZZNoneZ_get_ok(ptr);
        const res_conv_12_len = bindings.getArrayLength(res);
        const res_conv_12_arr = new Array(res_conv_12_len).fill(null);
        for (var m = 0; m < res_conv_12_len; m++) {
            const res_conv_12 = bindings.getU32ArrayElem(res, m);
            const res_conv_12_conv = bindings.decodeUint8Array(res_conv_12);
            res_conv_12_arr[m] = res_conv_12_conv;
        }
        bindings.freeWasmMemory(res);
        this.res = res_conv_12_arr;
    }
}
export class Result_CVec_CVec_u8ZZNoneZ_Err extends Result_CVec_CVec_u8ZZNoneZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
    }
}
//# sourceMappingURL=Result_CVec_CVec_u8ZZNoneZ.mjs.map