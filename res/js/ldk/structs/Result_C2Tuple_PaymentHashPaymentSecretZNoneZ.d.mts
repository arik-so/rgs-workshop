import { TwoTuple_PaymentHashPaymentSecretZ } from '../structs/TwoTuple_PaymentHashPaymentSecretZ.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_C2Tuple_PaymentHashPaymentSecretZNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_C2Tuple_PaymentHashPaymentSecretZNoneZ in the success state.
     */
    static constructor_ok(o: TwoTuple_PaymentHashPaymentSecretZ): Result_C2Tuple_PaymentHashPaymentSecretZNoneZ;
    /**
     * Creates a new CResult_C2Tuple_PaymentHashPaymentSecretZNoneZ in the error state.
     */
    static constructor_err(): Result_C2Tuple_PaymentHashPaymentSecretZNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_C2Tuple_PaymentHashPaymentSecretZNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_C2Tuple_PaymentHashPaymentSecretZNoneZ;
}
export declare class Result_C2Tuple_PaymentHashPaymentSecretZNoneZ_OK extends Result_C2Tuple_PaymentHashPaymentSecretZNoneZ {
    res: TwoTuple_PaymentHashPaymentSecretZ;
}
export declare class Result_C2Tuple_PaymentHashPaymentSecretZNoneZ_Err extends Result_C2Tuple_PaymentHashPaymentSecretZNoneZ {
}
