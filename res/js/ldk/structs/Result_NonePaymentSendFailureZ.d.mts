import { PaymentSendFailure } from '../structs/PaymentSendFailure.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NonePaymentSendFailureZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NonePaymentSendFailureZ in the success state.
     */
    static constructor_ok(): Result_NonePaymentSendFailureZ;
    /**
     * Creates a new CResult_NonePaymentSendFailureZ in the error state.
     */
    static constructor_err(e: PaymentSendFailure): Result_NonePaymentSendFailureZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NonePaymentSendFailureZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NonePaymentSendFailureZ;
}
export declare class Result_NonePaymentSendFailureZ_OK extends Result_NonePaymentSendFailureZ {
}
export declare class Result_NonePaymentSendFailureZ_Err extends Result_NonePaymentSendFailureZ {
    err: PaymentSendFailure;
}