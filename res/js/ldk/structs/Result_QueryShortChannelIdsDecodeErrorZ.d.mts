import { DecodeError } from '../structs/DecodeError.mjs';
import { QueryShortChannelIds } from '../structs/QueryShortChannelIds.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_QueryShortChannelIdsDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_QueryShortChannelIdsDecodeErrorZ in the success state.
     */
    static constructor_ok(o: QueryShortChannelIds): Result_QueryShortChannelIdsDecodeErrorZ;
    /**
     * Creates a new CResult_QueryShortChannelIdsDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_QueryShortChannelIdsDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_QueryShortChannelIdsDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_QueryShortChannelIdsDecodeErrorZ;
}
export declare class Result_QueryShortChannelIdsDecodeErrorZ_OK extends Result_QueryShortChannelIdsDecodeErrorZ {
    res: QueryShortChannelIds;
}
export declare class Result_QueryShortChannelIdsDecodeErrorZ_Err extends Result_QueryShortChannelIdsDecodeErrorZ {
    err: DecodeError;
}