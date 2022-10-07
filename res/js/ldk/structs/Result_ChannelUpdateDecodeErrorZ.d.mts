import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelUpdate } from '../structs/ChannelUpdate.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ChannelUpdateDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ChannelUpdateDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ChannelUpdate): Result_ChannelUpdateDecodeErrorZ;
    /**
     * Creates a new CResult_ChannelUpdateDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ChannelUpdateDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ChannelUpdateDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ChannelUpdateDecodeErrorZ;
}
export declare class Result_ChannelUpdateDecodeErrorZ_OK extends Result_ChannelUpdateDecodeErrorZ {
    res: ChannelUpdate;
}
export declare class Result_ChannelUpdateDecodeErrorZ_Err extends Result_ChannelUpdateDecodeErrorZ {
    err: DecodeError;
}