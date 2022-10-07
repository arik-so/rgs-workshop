import { APIError } from '../structs/APIError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_PaymentSecretAPIErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_PaymentSecretAPIErrorZ in the success state.
     */
    static constructor_ok(o: Uint8Array): Result_PaymentSecretAPIErrorZ;
    /**
     * Creates a new CResult_PaymentSecretAPIErrorZ in the error state.
     */
    static constructor_err(e: APIError): Result_PaymentSecretAPIErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_PaymentSecretAPIErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_PaymentSecretAPIErrorZ;
}
export declare class Result_PaymentSecretAPIErrorZ_OK extends Result_PaymentSecretAPIErrorZ {
    res: Uint8Array;
}
export declare class Result_PaymentSecretAPIErrorZ_Err extends Result_PaymentSecretAPIErrorZ {
    err: APIError;
}
