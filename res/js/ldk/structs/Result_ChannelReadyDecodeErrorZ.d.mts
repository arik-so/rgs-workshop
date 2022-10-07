import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelReady } from '../structs/ChannelReady.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ChannelReadyDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ChannelReadyDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ChannelReady): Result_ChannelReadyDecodeErrorZ;
    /**
     * Creates a new CResult_ChannelReadyDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ChannelReadyDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ChannelReadyDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ChannelReadyDecodeErrorZ;
}
export declare class Result_ChannelReadyDecodeErrorZ_OK extends Result_ChannelReadyDecodeErrorZ {
    res: ChannelReady;
}
export declare class Result_ChannelReadyDecodeErrorZ_Err extends Result_ChannelReadyDecodeErrorZ {
    err: DecodeError;
}