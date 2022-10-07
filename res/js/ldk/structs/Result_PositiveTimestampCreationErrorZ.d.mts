import { CreationError } from '../enums/CreationError.mjs';
import { PositiveTimestamp } from '../structs/PositiveTimestamp.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_PositiveTimestampCreationErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_PositiveTimestampCreationErrorZ in the success state.
     */
    static constructor_ok(o: PositiveTimestamp): Result_PositiveTimestampCreationErrorZ;
    /**
     * Creates a new CResult_PositiveTimestampCreationErrorZ in the error state.
     */
    static constructor_err(e: CreationError): Result_PositiveTimestampCreationErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_PositiveTimestampCreationErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_PositiveTimestampCreationErrorZ;
}
export declare class Result_PositiveTimestampCreationErrorZ_OK extends Result_PositiveTimestampCreationErrorZ {
    res: PositiveTimestamp;
}
export declare class Result_PositiveTimestampCreationErrorZ_Err extends Result_PositiveTimestampCreationErrorZ {
    err: CreationError;
}