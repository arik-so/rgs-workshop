import { GraphSyncError } from '../structs/GraphSyncError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_u32GraphSyncErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_u32GraphSyncErrorZ in the success state.
     */
    static constructor_ok(o: number): Result_u32GraphSyncErrorZ;
    /**
     * Creates a new CResult_u32GraphSyncErrorZ in the error state.
     */
    static constructor_err(e: GraphSyncError): Result_u32GraphSyncErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
}
export declare class Result_u32GraphSyncErrorZ_OK extends Result_u32GraphSyncErrorZ {
    res: number;
}
export declare class Result_u32GraphSyncErrorZ_Err extends Result_u32GraphSyncErrorZ {
    err: GraphSyncError;
}
