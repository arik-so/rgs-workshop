import { DecodeError } from '../structs/DecodeError.mjs';
import { ReplyShortChannelIdsEnd } from '../structs/ReplyShortChannelIdsEnd.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ReplyShortChannelIdsEndDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ReplyShortChannelIdsEndDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ReplyShortChannelIdsEnd): Result_ReplyShortChannelIdsEndDecodeErrorZ;
    /**
     * Creates a new CResult_ReplyShortChannelIdsEndDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ReplyShortChannelIdsEndDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ReplyShortChannelIdsEndDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ReplyShortChannelIdsEndDecodeErrorZ;
}
export declare class Result_ReplyShortChannelIdsEndDecodeErrorZ_OK extends Result_ReplyShortChannelIdsEndDecodeErrorZ {
    res: ReplyShortChannelIdsEnd;
}
export declare class Result_ReplyShortChannelIdsEndDecodeErrorZ_Err extends Result_ReplyShortChannelIdsEndDecodeErrorZ {
    err: DecodeError;
}