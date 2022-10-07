import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelInfo } from '../structs/ChannelInfo.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ChannelInfoDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ChannelInfoDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ChannelInfo): Result_ChannelInfoDecodeErrorZ;
    /**
     * Creates a new CResult_ChannelInfoDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ChannelInfoDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ChannelInfoDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ChannelInfoDecodeErrorZ;
}
export declare class Result_ChannelInfoDecodeErrorZ_OK extends Result_ChannelInfoDecodeErrorZ {
    res: ChannelInfo;
}
export declare class Result_ChannelInfoDecodeErrorZ_Err extends Result_ChannelInfoDecodeErrorZ {
    err: DecodeError;
}