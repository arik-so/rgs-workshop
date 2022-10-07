import { APIError } from '../structs/APIError.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_PaymentSecretAPIErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_PaymentSecretAPIErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_PaymentSecretAPIErrorZ_is_ok(ptr)) {
            return new Result_PaymentSecretAPIErrorZ_OK(null, ptr);
        }
        else {
            return new Result_PaymentSecretAPIErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_PaymentSecretAPIErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_PaymentSecretAPIErrorZ_ok(bindings.encodeUint8Array(bindings.check_arr_len(o, 32)));
        const ret_hu_conv = Result_PaymentSecretAPIErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_PaymentSecretAPIErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_PaymentSecretAPIErrorZ_err(CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_PaymentSecretAPIErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_PaymentSecretAPIErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_PaymentSecretAPIErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_PaymentSecretAPIErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_PaymentSecretAPIErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_PaymentSecretAPIErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_PaymentSecretAPIErrorZ_OK extends Result_PaymentSecretAPIErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_PaymentSecretAPIErrorZ_get_ok(ptr);
        const res_conv = bindings.decodeUint8Array(res);
        this.res = res_conv;
    }
}
export class Result_PaymentSecretAPIErrorZ_Err extends Result_PaymentSecretAPIErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_PaymentSecretAPIErrorZ_get_err(ptr);
        const err_hu_conv = APIError.constr_from_ptr(err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_PaymentSecretAPIErrorZ.mjs.map