import { DecodeError } from '../structs/DecodeError.mjs';
import { NodeFeatures } from '../structs/NodeFeatures.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NodeFeaturesDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NodeFeaturesDecodeErrorZ in the success state.
     */
    static constructor_ok(o: NodeFeatures): Result_NodeFeaturesDecodeErrorZ;
    /**
     * Creates a new CResult_NodeFeaturesDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_NodeFeaturesDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NodeFeaturesDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NodeFeaturesDecodeErrorZ;
}
export declare class Result_NodeFeaturesDecodeErrorZ_OK extends Result_NodeFeaturesDecodeErrorZ {
    res: NodeFeatures;
}
export declare class Result_NodeFeaturesDecodeErrorZ_Err extends Result_NodeFeaturesDecodeErrorZ {
    err: DecodeError;
}