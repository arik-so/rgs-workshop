import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelDetails } from '../structs/ChannelDetails.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ChannelDetailsDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ChannelDetailsDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ChannelDetails): Result_ChannelDetailsDecodeErrorZ;
    /**
     * Creates a new CResult_ChannelDetailsDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ChannelDetailsDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ChannelDetailsDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ChannelDetailsDecodeErrorZ;
}
export declare class Result_ChannelDetailsDecodeErrorZ_OK extends Result_ChannelDetailsDecodeErrorZ {
    res: ChannelDetails;
}
export declare class Result_ChannelDetailsDecodeErrorZ_Err extends Result_ChannelDetailsDecodeErrorZ {
    err: DecodeError;
}
