import { APIError } from '../structs/APIError.mjs';
import { TwoTuple_PaymentHashPaymentSecretZ } from '../structs/TwoTuple_PaymentHashPaymentSecretZ.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_C2Tuple_PaymentHashPaymentSecretZAPIErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_C2Tuple_PaymentHashPaymentSecretZAPIErrorZ in the success state.
     */
    static constructor_ok(o: TwoTuple_PaymentHashPaymentSecretZ): Result_C2Tuple_PaymentHashPaymentSecretZAPIErrorZ;
    /**
     * Creates a new CResult_C2Tuple_PaymentHashPaymentSecretZAPIErrorZ in the error state.
     */
    static constructor_err(e: APIError): Result_C2Tuple_PaymentHashPaymentSecretZAPIErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_C2Tuple_PaymentHashPaymentSecretZAPIErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_C2Tuple_PaymentHashPaymentSecretZAPIErrorZ;
}
export declare class Result_C2Tuple_PaymentHashPaymentSecretZAPIErrorZ_OK extends Result_C2Tuple_PaymentHashPaymentSecretZAPIErrorZ {
    res: TwoTuple_PaymentHashPaymentSecretZ;
}
export declare class Result_C2Tuple_PaymentHashPaymentSecretZAPIErrorZ_Err extends Result_C2Tuple_PaymentHashPaymentSecretZAPIErrorZ {
    err: APIError;
}
