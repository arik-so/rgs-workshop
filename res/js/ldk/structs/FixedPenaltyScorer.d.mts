import { Result_FixedPenaltyScorerDecodeErrorZ } from '../structs/Result_FixedPenaltyScorerDecodeErrorZ.mjs';
import { Score } from '../structs/Score.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * [`Score`] implementation that uses a fixed penalty.
 */
export declare class FixedPenaltyScorer extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the FixedPenaltyScorer
     */
    clone(): FixedPenaltyScorer;
    /**
     * Creates a new scorer using `penalty_msat`.
     */
    static constructor_with_penalty(penalty_msat: bigint): FixedPenaltyScorer;
    /**
     * Constructs a new Score which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Score must be freed before this_arg is
     */
    as_Score(): Score;
    /**
     * Serialize the FixedPenaltyScorer object into a byte array which can be read by FixedPenaltyScorer_read
     */
    write(): Uint8Array;
    /**
     * Read a FixedPenaltyScorer from a byte array, created by FixedPenaltyScorer_write
     */
    static constructor_read(ser: Uint8Array, arg: bigint): Result_FixedPenaltyScorerDecodeErrorZ;
}
