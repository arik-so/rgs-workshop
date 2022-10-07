import { APIError } from '../structs/APIError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_PaymentPreimageAPIErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_PaymentPreimageAPIErrorZ in the success state.
     */
    static constructor_ok(o: Uint8Array): Result_PaymentPreimageAPIErrorZ;
    /**
     * Creates a new CResult_PaymentPreimageAPIErrorZ in the error state.
     */
    static constructor_err(e: APIError): Result_PaymentPreimageAPIErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_PaymentPreimageAPIErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_PaymentPreimageAPIErrorZ;
}
export declare class Result_PaymentPreimageAPIErrorZ_OK extends Result_PaymentPreimageAPIErrorZ {
    res: Uint8Array;
}
export declare class Result_PaymentPreimageAPIErrorZ_Err extends Result_PaymentPreimageAPIErrorZ {
    err: APIError;
}
