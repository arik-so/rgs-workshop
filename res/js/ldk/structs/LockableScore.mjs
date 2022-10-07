import { Score } from '../structs/Score.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKLockableScoreHolder {
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
export class LockableScore extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.LockableScore_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of LockableScore from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKLockableScoreHolder();
        let structImplementation = {
            lock() {
                const ret = arg.lock();
                const result = ret == null ? 0n : CommonBase.get_ptr_of(ret);
                CommonBase.add_ref_from(impl_holder.held, ret);
                return result;
            },
        };
        const ptr_idx = bindings.LDKLockableScore_new(structImplementation);
        impl_holder.held = new LockableScore(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Returns the locked scorer.
     */
    lock() {
        const ret = bindings.LockableScore_lock(this.ptr);
        const ret_hu_conv = new Score(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=LockableScore.mjs.map