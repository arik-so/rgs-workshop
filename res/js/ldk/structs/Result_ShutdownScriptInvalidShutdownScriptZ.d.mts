import { ShutdownScript } from '../structs/ShutdownScript.mjs';
import { InvalidShutdownScript } from '../structs/InvalidShutdownScript.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ShutdownScriptInvalidShutdownScriptZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ShutdownScriptInvalidShutdownScriptZ in the success state.
     */
    static constructor_ok(o: ShutdownScript): Result_ShutdownScriptInvalidShutdownScriptZ;
    /**
     * Creates a new CResult_ShutdownScriptInvalidShutdownScriptZ in the error state.
     */
    static constructor_err(e: InvalidShutdownScript): Result_ShutdownScriptInvalidShutdownScriptZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ShutdownScriptInvalidShutdownScriptZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ShutdownScriptInvalidShutdownScriptZ;
}
export declare class Result_ShutdownScriptInvalidShutdownScriptZ_OK extends Result_ShutdownScriptInvalidShutdownScriptZ {
    res: ShutdownScript;
}
export declare class Result_ShutdownScriptInvalidShutdownScriptZ_Err extends Result_ShutdownScriptInvalidShutdownScriptZ {
    err: InvalidShutdownScript;
}
