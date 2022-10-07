import { LightningError } from '../structs/LightningError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_boolLightningErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_boolLightningErrorZ in the success state.
     */
    static constructor_ok(o: boolean): Result_boolLightningErrorZ;
    /**
     * Creates a new CResult_boolLightningErrorZ in the error state.
     */
    static constructor_err(e: LightningError): Result_boolLightningErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_boolLightningErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_boolLightningErrorZ;
}
export declare class Result_boolLightningErrorZ_OK extends Result_boolLightningErrorZ {
    res: boolean;
}
export declare class Result_boolLightningErrorZ_Err extends Result_boolLightningErrorZ {
    err: LightningError;
}