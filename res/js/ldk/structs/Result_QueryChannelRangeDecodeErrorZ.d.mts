import { DecodeError } from '../structs/DecodeError.mjs';
import { QueryChannelRange } from '../structs/QueryChannelRange.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_QueryChannelRangeDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_QueryChannelRangeDecodeErrorZ in the success state.
     */
    static constructor_ok(o: QueryChannelRange): Result_QueryChannelRangeDecodeErrorZ;
    /**
     * Creates a new CResult_QueryChannelRangeDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_QueryChannelRangeDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_QueryChannelRangeDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_QueryChannelRangeDecodeErrorZ;
}
export declare class Result_QueryChannelRangeDecodeErrorZ_OK extends Result_QueryChannelRangeDecodeErrorZ {
    res: QueryChannelRange;
}
export declare class Result_QueryChannelRangeDecodeErrorZ_Err extends Result_QueryChannelRangeDecodeErrorZ {
    err: DecodeError;
}
