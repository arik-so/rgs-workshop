import { PaymentSendFailure } from '../structs/PaymentSendFailure.mjs';
import { TwoTuple_PaymentHashPaymentIdZ } from '../structs/TwoTuple_PaymentHashPaymentIdZ.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ in the success state.
     */
    static constructor_ok(o: TwoTuple_PaymentHashPaymentIdZ): Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ;
    /**
     * Creates a new CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ in the error state.
     */
    static constructor_err(e: PaymentSendFailure): Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ;
}
export declare class Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_OK extends Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ {
    res: TwoTuple_PaymentHashPaymentIdZ;
}
export declare class Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ_Err extends Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ {
    err: PaymentSendFailure;
}
