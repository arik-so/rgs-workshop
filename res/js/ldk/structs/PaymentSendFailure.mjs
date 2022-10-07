import { RouteParameters } from '../structs/RouteParameters.mjs';
import { APIError } from '../structs/APIError.mjs';
import { Result_NoneAPIErrorZ } from '../structs/Result_NoneAPIErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * If a payment fails to send, it can be in one of several states. This enum is returned as the
 * Err() type describing which state the payment is in, see the description of individual enum
 * states for more.
 */
export class PaymentSendFailure extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.PaymentSendFailure_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKPaymentSendFailure_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new PaymentSendFailure_ParameterError(ptr);
            case 1: return new PaymentSendFailure_PathParameterError(ptr);
            case 2: return new PaymentSendFailure_AllFailedRetrySafe(ptr);
            case 3: return new PaymentSendFailure_PartialFailure(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.PaymentSendFailure_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the PaymentSendFailure
     */
    clone() {
        const ret = bindings.PaymentSendFailure_clone(this.ptr);
        const ret_hu_conv = PaymentSendFailure.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ParameterError-variant PaymentSendFailure
     */
    static constructor_parameter_error(a) {
        const ret = bindings.PaymentSendFailure_parameter_error(CommonBase.get_ptr_of(a));
        const ret_hu_conv = PaymentSendFailure.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new PathParameterError-variant PaymentSendFailure
     */
    static constructor_path_parameter_error(a) {
        const ret = bindings.PaymentSendFailure_path_parameter_error(bindings.encodeUint64Array(a != null ? a.map(a_conv_22 => a_conv_22 != null ? CommonBase.get_ptr_of(a_conv_22) : 0n) : null));
        const ret_hu_conv = PaymentSendFailure.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new AllFailedRetrySafe-variant PaymentSendFailure
     */
    static constructor_all_failed_retry_safe(a) {
        const ret = bindings.PaymentSendFailure_all_failed_retry_safe(bindings.encodeUint64Array(a != null ? a.map(a_conv_10 => CommonBase.get_ptr_of(a_conv_10)) : null));
        const ret_hu_conv = PaymentSendFailure.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new PartialFailure-variant PaymentSendFailure
     */
    static constructor_partial_failure(results, failed_paths_retry, payment_id) {
        const ret = bindings.PaymentSendFailure_partial_failure(bindings.encodeUint64Array(results != null ? results.map(results_conv_22 => results_conv_22 != null ? CommonBase.get_ptr_of(results_conv_22) : 0n) : null), failed_paths_retry == null ? 0n : CommonBase.get_ptr_of(failed_paths_retry), bindings.encodeUint8Array(bindings.check_arr_len(payment_id, 32)));
        const ret_hu_conv = PaymentSendFailure.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, failed_paths_retry);
        return ret_hu_conv;
    }
}
/** A PaymentSendFailure of type ParameterError */
export class PaymentSendFailure_ParameterError extends PaymentSendFailure {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const parameter_error = bindings.LDKPaymentSendFailure_ParameterError_get_parameter_error(ptr);
        const parameter_error_hu_conv = APIError.constr_from_ptr(parameter_error);
        CommonBase.add_ref_from(parameter_error_hu_conv, this);
        this.parameter_error = parameter_error_hu_conv;
    }
}
/** A PaymentSendFailure of type PathParameterError */
export class PaymentSendFailure_PathParameterError extends PaymentSendFailure {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const path_parameter_error = bindings.LDKPaymentSendFailure_PathParameterError_get_path_parameter_error(ptr);
        const path_parameter_error_conv_22_len = bindings.getArrayLength(path_parameter_error);
        const path_parameter_error_conv_22_arr = new Array(path_parameter_error_conv_22_len).fill(null);
        for (var w = 0; w < path_parameter_error_conv_22_len; w++) {
            const path_parameter_error_conv_22 = bindings.getU64ArrayElem(path_parameter_error, w);
            const path_parameter_error_conv_22_hu_conv = Result_NoneAPIErrorZ.constr_from_ptr(path_parameter_error_conv_22);
            path_parameter_error_conv_22_arr[w] = path_parameter_error_conv_22_hu_conv;
        }
        bindings.freeWasmMemory(path_parameter_error);
        this.path_parameter_error = path_parameter_error_conv_22_arr;
    }
}
/** A PaymentSendFailure of type AllFailedRetrySafe */
export class PaymentSendFailure_AllFailedRetrySafe extends PaymentSendFailure {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const all_failed_retry_safe = bindings.LDKPaymentSendFailure_AllFailedRetrySafe_get_all_failed_retry_safe(ptr);
        const all_failed_retry_safe_conv_10_len = bindings.getArrayLength(all_failed_retry_safe);
        const all_failed_retry_safe_conv_10_arr = new Array(all_failed_retry_safe_conv_10_len).fill(null);
        for (var k = 0; k < all_failed_retry_safe_conv_10_len; k++) {
            const all_failed_retry_safe_conv_10 = bindings.getU64ArrayElem(all_failed_retry_safe, k);
            const all_failed_retry_safe_conv_10_hu_conv = APIError.constr_from_ptr(all_failed_retry_safe_conv_10);
            CommonBase.add_ref_from(all_failed_retry_safe_conv_10_hu_conv, this);
            all_failed_retry_safe_conv_10_arr[k] = all_failed_retry_safe_conv_10_hu_conv;
        }
        bindings.freeWasmMemory(all_failed_retry_safe);
        this.all_failed_retry_safe = all_failed_retry_safe_conv_10_arr;
    }
}
/** A PaymentSendFailure of type PartialFailure */
export class PaymentSendFailure_PartialFailure extends PaymentSendFailure {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const results = bindings.LDKPaymentSendFailure_PartialFailure_get_results(ptr);
        const results_conv_22_len = bindings.getArrayLength(results);
        const results_conv_22_arr = new Array(results_conv_22_len).fill(null);
        for (var w = 0; w < results_conv_22_len; w++) {
            const results_conv_22 = bindings.getU64ArrayElem(results, w);
            const results_conv_22_hu_conv = Result_NoneAPIErrorZ.constr_from_ptr(results_conv_22);
            results_conv_22_arr[w] = results_conv_22_hu_conv;
        }
        bindings.freeWasmMemory(results);
        this.results = results_conv_22_arr;
        const failed_paths_retry = bindings.LDKPaymentSendFailure_PartialFailure_get_failed_paths_retry(ptr);
        const failed_paths_retry_hu_conv = new RouteParameters(null, failed_paths_retry);
        CommonBase.add_ref_from(failed_paths_retry_hu_conv, this);
        this.failed_paths_retry = failed_paths_retry_hu_conv;
        const payment_id = bindings.LDKPaymentSendFailure_PartialFailure_get_payment_id(ptr);
        const payment_id_conv = bindings.decodeUint8Array(payment_id);
        this.payment_id = payment_id_conv;
    }
}
//# sourceMappingURL=PaymentSendFailure.mjs.map