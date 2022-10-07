import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelReestablish } from '../structs/ChannelReestablish.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ChannelReestablishDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ChannelReestablishDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ChannelReestablish): Result_ChannelReestablishDecodeErrorZ;
    /**
     * Creates a new CResult_ChannelReestablishDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ChannelReestablishDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ChannelReestablishDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ChannelReestablishDecodeErrorZ;
}
export declare class Result_ChannelReestablishDecodeErrorZ_OK extends Result_ChannelReestablishDecodeErrorZ {
    res: ChannelReestablish;
}
export declare class Result_ChannelReestablishDecodeErrorZ_Err extends Result_ChannelReestablishDecodeErrorZ {
    err: DecodeError;
}