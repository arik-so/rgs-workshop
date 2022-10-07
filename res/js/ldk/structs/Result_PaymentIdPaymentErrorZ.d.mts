import { PaymentError } from '../structs/PaymentError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_PaymentIdPaymentErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_PaymentIdPaymentErrorZ in the success state.
     */
    static constructor_ok(o: Uint8Array): Result_PaymentIdPaymentErrorZ;
    /**
     * Creates a new CResult_PaymentIdPaymentErrorZ in the error state.
     */
    static constructor_err(e: PaymentError): Result_PaymentIdPaymentErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_PaymentIdPaymentErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_PaymentIdPaymentErrorZ;
}
export declare class Result_PaymentIdPaymentErrorZ_OK extends Result_PaymentIdPaymentErrorZ {
    res: Uint8Array;
}
export declare class Result_PaymentIdPaymentErrorZ_Err extends Result_PaymentIdPaymentErrorZ {
    err: PaymentError;
}
