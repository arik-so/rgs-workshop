import { DecodeError } from '../structs/DecodeError.mjs';
import { ReplyChannelRange } from '../structs/ReplyChannelRange.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ReplyChannelRangeDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ReplyChannelRangeDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ReplyChannelRange): Result_ReplyChannelRangeDecodeErrorZ;
    /**
     * Creates a new CResult_ReplyChannelRangeDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ReplyChannelRangeDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ReplyChannelRangeDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ReplyChannelRangeDecodeErrorZ;
}
export declare class Result_ReplyChannelRangeDecodeErrorZ_OK extends Result_ReplyChannelRangeDecodeErrorZ {
    res: ReplyChannelRange;
}
export declare class Result_ReplyChannelRangeDecodeErrorZ_Err extends Result_ReplyChannelRangeDecodeErrorZ {
    err: DecodeError;
}