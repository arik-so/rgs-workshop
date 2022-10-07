import { DecodeError } from '../structs/DecodeError.mjs';
import { Option_EventZ } from '../structs/Option_EventZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_COption_EventZDecodeErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_COption_EventZDecodeErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_COption_EventZDecodeErrorZ_is_ok(ptr)) {
            return new Result_COption_EventZDecodeErrorZ_OK(null, ptr);
        }
        else {
            return new Result_COption_EventZDecodeErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_COption_EventZDecodeErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_COption_EventZDecodeErrorZ_ok(CommonBase.get_ptr_of(o));
        const ret_hu_conv = Result_COption_EventZDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_COption_EventZDecodeErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_COption_EventZDecodeErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_COption_EventZDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_COption_EventZDecodeErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_COption_EventZDecodeErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_COption_EventZDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_COption_EventZDecodeErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_COption_EventZDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_COption_EventZDecodeErrorZ_OK extends Result_COption_EventZDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_COption_EventZDecodeErrorZ_get_ok(ptr);
        const res_hu_conv = Option_EventZ.constr_from_ptr(res);
        CommonBase.add_ref_from(res_hu_conv, this);
        this.res = res_hu_conv;
    }
}
export class Result_COption_EventZDecodeErrorZ_Err extends Result_COption_EventZDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_COption_EventZDecodeErrorZ_get_err(ptr);
        const err_hu_conv = new DecodeError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_COption_EventZDecodeErrorZ.mjs.map