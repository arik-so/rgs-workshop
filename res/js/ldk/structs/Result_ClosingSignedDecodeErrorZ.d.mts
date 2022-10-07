import { DecodeError } from '../structs/DecodeError.mjs';
import { ClosingSigned } from '../structs/ClosingSigned.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ClosingSignedDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ClosingSignedDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ClosingSigned): Result_ClosingSignedDecodeErrorZ;
    /**
     * Creates a new CResult_ClosingSignedDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ClosingSignedDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ClosingSignedDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ClosingSignedDecodeErrorZ;
}
export declare class Result_ClosingSignedDecodeErrorZ_OK extends Result_ClosingSignedDecodeErrorZ {
    res: ClosingSigned;
}
export declare class Result_ClosingSignedDecodeErrorZ_Err extends Result_ClosingSignedDecodeErrorZ {
    err: DecodeError;
}