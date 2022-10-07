import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelUpdateInfo } from '../structs/ChannelUpdateInfo.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ChannelUpdateInfoDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ChannelUpdateInfoDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ChannelUpdateInfo): Result_ChannelUpdateInfoDecodeErrorZ;
    /**
     * Creates a new CResult_ChannelUpdateInfoDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ChannelUpdateInfoDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ChannelUpdateInfoDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ChannelUpdateInfoDecodeErrorZ;
}
export declare class Result_ChannelUpdateInfoDecodeErrorZ_OK extends Result_ChannelUpdateInfoDecodeErrorZ {
    res: ChannelUpdateInfo;
}
export declare class Result_ChannelUpdateInfoDecodeErrorZ_Err extends Result_ChannelUpdateInfoDecodeErrorZ {
    err: DecodeError;
}