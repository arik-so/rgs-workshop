import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelFeatures } from '../structs/ChannelFeatures.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ChannelFeaturesDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ChannelFeaturesDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ChannelFeatures): Result_ChannelFeaturesDecodeErrorZ;
    /**
     * Creates a new CResult_ChannelFeaturesDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ChannelFeaturesDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ChannelFeaturesDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ChannelFeaturesDecodeErrorZ;
}
export declare class Result_ChannelFeaturesDecodeErrorZ_OK extends Result_ChannelFeaturesDecodeErrorZ {
    res: ChannelFeatures;
}
export declare class Result_ChannelFeaturesDecodeErrorZ_Err extends Result_ChannelFeaturesDecodeErrorZ {
    err: DecodeError;
}
