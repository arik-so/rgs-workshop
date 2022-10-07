import { LightningError } from '../structs/LightningError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NoneLightningErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NoneLightningErrorZ in the success state.
     */
    static constructor_ok(): Result_NoneLightningErrorZ;
    /**
     * Creates a new CResult_NoneLightningErrorZ in the error state.
     */
    static constructor_err(e: LightningError): Result_NoneLightningErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NoneLightningErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NoneLightningErrorZ;
}
export declare class Result_NoneLightningErrorZ_OK extends Result_NoneLightningErrorZ {
}
export declare class Result_NoneLightningErrorZ_Err extends Result_NoneLightningErrorZ {
    err: LightningError;
}
