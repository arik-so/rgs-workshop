import { TwoTuple_SignatureCVec_SignatureZZ } from '../structs/TwoTuple_SignatureCVec_SignatureZZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_C2Tuple_SignatureCVec_SignatureZZNoneZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ_is_ok(ptr)) {
            return new Result_C2Tuple_SignatureCVec_SignatureZZNoneZ_OK(null, ptr);
        }
        else {
            return new Result_C2Tuple_SignatureCVec_SignatureZZNoneZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ_ok(o != null ? CommonBase.get_ptr_of(o) : 0n);
        const ret_hu_conv = Result_C2Tuple_SignatureCVec_SignatureZZNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ in the error state.
     */
    static constructor_err() {
        const ret = bindings.CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ_err();
        const ret_hu_conv = Result_C2Tuple_SignatureCVec_SignatureZZNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ_clone(this.ptr);
        const ret_hu_conv = Result_C2Tuple_SignatureCVec_SignatureZZNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_C2Tuple_SignatureCVec_SignatureZZNoneZ_OK extends Result_C2Tuple_SignatureCVec_SignatureZZNoneZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ_get_ok(ptr);
        const res_hu_conv = new TwoTuple_SignatureCVec_SignatureZZ(null, res);
        CommonBase.add_ref_from(res_hu_conv, this);
        this.res = res_hu_conv;
    }
}
export class Result_C2Tuple_SignatureCVec_SignatureZZNoneZ_Err extends Result_C2Tuple_SignatureCVec_SignatureZZNoneZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
    }
}
//# sourceMappingURL=Result_C2Tuple_SignatureCVec_SignatureZZNoneZ.mjs.map