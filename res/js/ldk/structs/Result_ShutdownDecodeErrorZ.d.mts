import { DecodeError } from '../structs/DecodeError.mjs';
import { Shutdown } from '../structs/Shutdown.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ShutdownDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ShutdownDecodeErrorZ in the success state.
     */
    static constructor_ok(o: Shutdown): Result_ShutdownDecodeErrorZ;
    /**
     * Creates a new CResult_ShutdownDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ShutdownDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ShutdownDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ShutdownDecodeErrorZ;
}
export declare class Result_ShutdownDecodeErrorZ_OK extends Result_ShutdownDecodeErrorZ {
    res: Shutdown;
}
export declare class Result_ShutdownDecodeErrorZ_Err extends Result_ShutdownDecodeErrorZ {
    err: DecodeError;
}