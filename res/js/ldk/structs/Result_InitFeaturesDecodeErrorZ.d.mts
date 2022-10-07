import { DecodeError } from '../structs/DecodeError.mjs';
import { InitFeatures } from '../structs/InitFeatures.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_InitFeaturesDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_InitFeaturesDecodeErrorZ in the success state.
     */
    static constructor_ok(o: InitFeatures): Result_InitFeaturesDecodeErrorZ;
    /**
     * Creates a new CResult_InitFeaturesDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_InitFeaturesDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_InitFeaturesDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_InitFeaturesDecodeErrorZ;
}
export declare class Result_InitFeaturesDecodeErrorZ_OK extends Result_InitFeaturesDecodeErrorZ {
    res: InitFeatures;
}
export declare class Result_InitFeaturesDecodeErrorZ_Err extends Result_InitFeaturesDecodeErrorZ {
    err: DecodeError;
}