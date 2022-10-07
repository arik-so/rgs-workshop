import { DecodeError } from '../structs/DecodeError.mjs';
import { Init } from '../structs/Init.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_InitDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_InitDecodeErrorZ in the success state.
     */
    static constructor_ok(o: Init): Result_InitDecodeErrorZ;
    /**
     * Creates a new CResult_InitDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_InitDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_InitDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_InitDecodeErrorZ;
}
export declare class Result_InitDecodeErrorZ_OK extends Result_InitDecodeErrorZ {
    res: Init;
}
export declare class Result_InitDecodeErrorZ_Err extends Result_InitDecodeErrorZ {
    err: DecodeError;
}