import { PaymentSendFailure } from '../structs/PaymentSendFailure.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_PaymentIdPaymentSendFailureZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_PaymentIdPaymentSendFailureZ in the success state.
     */
    static constructor_ok(o: Uint8Array): Result_PaymentIdPaymentSendFailureZ;
    /**
     * Creates a new CResult_PaymentIdPaymentSendFailureZ in the error state.
     */
    static constructor_err(e: PaymentSendFailure): Result_PaymentIdPaymentSendFailureZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_PaymentIdPaymentSendFailureZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_PaymentIdPaymentSendFailureZ;
}
export declare class Result_PaymentIdPaymentSendFailureZ_OK extends Result_PaymentIdPaymentSendFailureZ {
    res: Uint8Array;
}
export declare class Result_PaymentIdPaymentSendFailureZ_Err extends Result_PaymentIdPaymentSendFailureZ {
    err: PaymentSendFailure;
}
