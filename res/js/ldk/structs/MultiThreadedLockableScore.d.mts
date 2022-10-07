import { Score } from '../structs/Score.mjs';
import { LockableScore } from '../structs/LockableScore.mjs';
import { WriteableScore } from '../structs/WriteableScore.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A concrete implementation of [`LockableScore`] which supports multi-threading.
 */
export declare class MultiThreadedLockableScore extends CommonBase {
    /**
     * Constructs a new LockableScore which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned LockableScore must be freed before this_arg is
     */
    as_LockableScore(): LockableScore;
    /**
     * Serialize the MultiThreadedLockableScore object into a byte array which can be read by MultiThreadedLockableScore_read
     */
    write(): Uint8Array;
    /**
     * Constructs a new WriteableScore which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned WriteableScore must be freed before this_arg is
     */
    as_WriteableScore(): WriteableScore;
    /**
     * Creates a new [`MultiThreadedLockableScore`] given an underlying [`Score`].
     */
    static constructor_new(score: Score): MultiThreadedLockableScore;
}