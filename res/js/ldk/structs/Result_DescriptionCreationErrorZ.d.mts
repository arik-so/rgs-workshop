import { CreationError } from '../enums/CreationError.mjs';
import { Description } from '../structs/Description.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_DescriptionCreationErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_DescriptionCreationErrorZ in the success state.
     */
    static constructor_ok(o: Description): Result_DescriptionCreationErrorZ;
    /**
     * Creates a new CResult_DescriptionCreationErrorZ in the error state.
     */
    static constructor_err(e: CreationError): Result_DescriptionCreationErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_DescriptionCreationErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_DescriptionCreationErrorZ;
}
export declare class Result_DescriptionCreationErrorZ_OK extends Result_DescriptionCreationErrorZ {
    res: Description;
}
export declare class Result_DescriptionCreationErrorZ_Err extends Result_DescriptionCreationErrorZ {
    err: CreationError;
}
