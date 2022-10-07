import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelTypeFeatures } from '../structs/ChannelTypeFeatures.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ChannelTypeFeaturesDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ChannelTypeFeaturesDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ChannelTypeFeatures): Result_ChannelTypeFeaturesDecodeErrorZ;
    /**
     * Creates a new CResult_ChannelTypeFeaturesDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ChannelTypeFeaturesDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ChannelTypeFeaturesDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ChannelTypeFeaturesDecodeErrorZ;
}
export declare class Result_ChannelTypeFeaturesDecodeErrorZ_OK extends Result_ChannelTypeFeaturesDecodeErrorZ {
    res: ChannelTypeFeatures;
}
export declare class Result_ChannelTypeFeaturesDecodeErrorZ_Err extends Result_ChannelTypeFeaturesDecodeErrorZ {
    err: DecodeError;
}