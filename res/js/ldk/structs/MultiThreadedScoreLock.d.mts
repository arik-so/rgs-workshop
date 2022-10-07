import { Score } from '../structs/Score.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A locked `MultiThreadedLockableScore`.
 */
export declare class MultiThreadedScoreLock extends CommonBase {
    /**
     * Constructs a new Score which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Score must be freed before this_arg is
     */
    as_Score(): Score;
    /**
     * Serialize the MultiThreadedScoreLock object into a byte array which can be read by MultiThreadedScoreLock_read
     */
    write(): Uint8Array;
}
