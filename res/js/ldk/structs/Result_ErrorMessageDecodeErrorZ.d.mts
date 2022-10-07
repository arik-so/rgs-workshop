import { DecodeError } from '../structs/DecodeError.mjs';
import { ErrorMessage } from '../structs/ErrorMessage.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ErrorMessageDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ErrorMessageDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ErrorMessage): Result_ErrorMessageDecodeErrorZ;
    /**
     * Creates a new CResult_ErrorMessageDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ErrorMessageDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ErrorMessageDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ErrorMessageDecodeErrorZ;
}
export declare class Result_ErrorMessageDecodeErrorZ_OK extends Result_ErrorMessageDecodeErrorZ {
    res: ErrorMessage;
}
export declare class Result_ErrorMessageDecodeErrorZ_Err extends Result_ErrorMessageDecodeErrorZ {
    err: DecodeError;
}