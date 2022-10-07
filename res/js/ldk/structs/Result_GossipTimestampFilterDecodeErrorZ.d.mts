import { DecodeError } from '../structs/DecodeError.mjs';
import { GossipTimestampFilter } from '../structs/GossipTimestampFilter.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_GossipTimestampFilterDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_GossipTimestampFilterDecodeErrorZ in the success state.
     */
    static constructor_ok(o: GossipTimestampFilter): Result_GossipTimestampFilterDecodeErrorZ;
    /**
     * Creates a new CResult_GossipTimestampFilterDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_GossipTimestampFilterDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_GossipTimestampFilterDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_GossipTimestampFilterDecodeErrorZ;
}
export declare class Result_GossipTimestampFilterDecodeErrorZ_OK extends Result_GossipTimestampFilterDecodeErrorZ {
    res: GossipTimestampFilter;
}
export declare class Result_GossipTimestampFilterDecodeErrorZ_Err extends Result_GossipTimestampFilterDecodeErrorZ {
    err: DecodeError;
}