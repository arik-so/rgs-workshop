import { APIError } from '../structs/APIError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NoneAPIErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NoneAPIErrorZ in the success state.
     */
    static constructor_ok(): Result_NoneAPIErrorZ;
    /**
     * Creates a new CResult_NoneAPIErrorZ in the error state.
     */
    static constructor_err(e: APIError): Result_NoneAPIErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NoneAPIErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NoneAPIErrorZ;
}
export declare class Result_NoneAPIErrorZ_OK extends Result_NoneAPIErrorZ {
}
export declare class Result_NoneAPIErrorZ_Err extends Result_NoneAPIErrorZ {
    err: APIError;
}