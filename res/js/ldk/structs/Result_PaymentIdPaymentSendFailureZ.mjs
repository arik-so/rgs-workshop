import { PaymentSendFailure } from '../structs/PaymentSendFailure.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_PaymentIdPaymentSendFailureZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_PaymentIdPaymentSendFailureZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_PaymentIdPaymentSendFailureZ_is_ok(ptr)) {
            return new Result_PaymentIdPaymentSendFailureZ_OK(null, ptr);
        }
        else {
            return new Result_PaymentIdPaymentSendFailureZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_PaymentIdPaymentSendFailureZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_PaymentIdPaymentSendFailureZ_ok(bindings.encodeUint8Array(bindings.check_arr_len(o, 32)));
        const ret_hu_conv = Result_PaymentIdPaymentSendFailureZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_PaymentIdPaymentSendFailureZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_PaymentIdPaymentSendFailureZ_err(CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_PaymentIdPaymentSendFailureZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_PaymentIdPaymentSendFailureZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_PaymentIdPaymentSendFailureZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_PaymentIdPaymentSendFailureZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_PaymentIdPaymentSendFailureZ_clone(this.ptr);
        const ret_hu_conv = Result_PaymentIdPaymentSendFailureZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_PaymentIdPaymentSendFailureZ_OK extends Result_PaymentIdPaymentSendFailureZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_PaymentIdPaymentSendFailureZ_get_ok(ptr);
        const res_conv = bindings.decodeUint8Array(res);
        this.res = res_conv;
    }
}
export class Result_PaymentIdPaymentSendFailureZ_Err extends Result_PaymentIdPaymentSendFailureZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_PaymentIdPaymentSendFailureZ_get_err(ptr);
        const err_hu_conv = PaymentSendFailure.constr_from_ptr(err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_PaymentIdPaymentSendFailureZ.mjs.map