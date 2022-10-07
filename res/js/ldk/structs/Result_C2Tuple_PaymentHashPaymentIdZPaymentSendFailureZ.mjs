import { PaymentSendFailure } from '../structs/PaymentSendFailure.mjs';
import { TwoTuple_PaymentHashPaymentIdZ } from '../structs/TwoTuple_PaymentHashPaymentIdZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_is_ok(ptr)) {
            return new Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_OK(null, ptr);
        }
        else {
            return new Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_ok(o != null ? CommonBase.get_ptr_of(o) : 0n);
        const ret_hu_conv = Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_err(CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_clone(this.ptr);
        const ret_hu_conv = Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_OK extends Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_get_ok(ptr);
        const res_hu_conv = new TwoTuple_PaymentHashPaymentIdZ(null, res);
        CommonBase.add_ref_from(res_hu_conv, this);
        this.res = res_hu_conv;
    }
}
export class Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_Err extends Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_get_err(ptr);
        const err_hu_conv = PaymentSendFailure.constr_from_ptr(err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ.mjs.map