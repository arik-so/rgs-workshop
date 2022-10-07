import { DecodeError } from '../structs/DecodeError.mjs';
import { ShutdownScript } from '../structs/ShutdownScript.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ShutdownScriptDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ShutdownScriptDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ShutdownScript): Result_ShutdownScriptDecodeErrorZ;
    /**
     * Creates a new CResult_ShutdownScriptDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ShutdownScriptDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ShutdownScriptDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ShutdownScriptDecodeErrorZ;
}
export declare class Result_ShutdownScriptDecodeErrorZ_OK extends Result_ShutdownScriptDecodeErrorZ {
    res: ShutdownScript;
}
export declare class Result_ShutdownScriptDecodeErrorZ_Err extends Result_ShutdownScriptDecodeErrorZ {
    err: DecodeError;
}
