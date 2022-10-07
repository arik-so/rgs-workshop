import { PaymentError } from '../structs/PaymentError.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_PaymentIdPaymentErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_PaymentIdPaymentErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_PaymentIdPaymentErrorZ_is_ok(ptr)) {
            return new Result_PaymentIdPaymentErrorZ_OK(null, ptr);
        }
        else {
            return new Result_PaymentIdPaymentErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_PaymentIdPaymentErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_PaymentIdPaymentErrorZ_ok(bindings.encodeUint8Array(bindings.check_arr_len(o, 32)));
        const ret_hu_conv = Result_PaymentIdPaymentErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_PaymentIdPaymentErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_PaymentIdPaymentErrorZ_err(CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_PaymentIdPaymentErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_PaymentIdPaymentErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_PaymentIdPaymentErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_PaymentIdPaymentErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_PaymentIdPaymentErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_PaymentIdPaymentErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_PaymentIdPaymentErrorZ_OK extends Result_PaymentIdPaymentErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_PaymentIdPaymentErrorZ_get_ok(ptr);
        const res_conv = bindings.decodeUint8Array(res);
        this.res = res_conv;
    }
}
export class Result_PaymentIdPaymentErrorZ_Err extends Result_PaymentIdPaymentErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_PaymentIdPaymentErrorZ_get_err(ptr);
        const err_hu_conv = PaymentError.constr_from_ptr(err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_PaymentIdPaymentErrorZ.mjs.map