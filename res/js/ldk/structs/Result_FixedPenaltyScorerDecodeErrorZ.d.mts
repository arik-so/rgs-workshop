import { DecodeError } from '../structs/DecodeError.mjs';
import { FixedPenaltyScorer } from '../structs/FixedPenaltyScorer.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_FixedPenaltyScorerDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_FixedPenaltyScorerDecodeErrorZ in the success state.
     */
    static constructor_ok(o: FixedPenaltyScorer): Result_FixedPenaltyScorerDecodeErrorZ;
    /**
     * Creates a new CResult_FixedPenaltyScorerDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_FixedPenaltyScorerDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_FixedPenaltyScorerDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_FixedPenaltyScorerDecodeErrorZ;
}
export declare class Result_FixedPenaltyScorerDecodeErrorZ_OK extends Result_FixedPenaltyScorerDecodeErrorZ {
    res: FixedPenaltyScorer;
}
export declare class Result_FixedPenaltyScorerDecodeErrorZ_Err extends Result_FixedPenaltyScorerDecodeErrorZ {
    err: DecodeError;
}