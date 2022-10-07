import { Score } from '../structs/Score.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of LockableScore */
export interface LockableScoreInterface {
    /**Returns the locked scorer.
     */
    lock(): Score;
}
/**
 * A scorer that is accessed under a lock.
 *
 * Needed so that calls to [`Score::channel_penalty_msat`] in [`find_route`] can be made while
 * having shared ownership of a scorer but without requiring internal locking in [`Score`]
 * implementations. Internal locking would be detrimental to route finding performance and could
 * result in [`Score::channel_penalty_msat`] returning a different value for the same channel.
 *
 * [`find_route`]: crate::routing::router::find_route
 */
export declare class LockableScore extends CommonBase {
    /** Creates a new instance of LockableScore from a given implementation */
    static new_impl(arg: LockableScoreInterface): LockableScore;
    /**
     * Returns the locked scorer.
     */
    lock(): Score;
}
