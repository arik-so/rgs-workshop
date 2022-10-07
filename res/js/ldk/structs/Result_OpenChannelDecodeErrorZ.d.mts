import { DecodeError } from '../structs/DecodeError.mjs';
import { OpenChannel } from '../structs/OpenChannel.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_OpenChannelDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_OpenChannelDecodeErrorZ in the success state.
     */
    static constructor_ok(o: OpenChannel): Result_OpenChannelDecodeErrorZ;
    /**
     * Creates a new CResult_OpenChannelDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_OpenChannelDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_OpenChannelDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_OpenChannelDecodeErrorZ;
}
export declare class Result_OpenChannelDecodeErrorZ_OK extends Result_OpenChannelDecodeErrorZ {
    res: OpenChannel;
}
export declare class Result_OpenChannelDecodeErrorZ_Err extends Result_OpenChannelDecodeErrorZ {
    err: DecodeError;
}