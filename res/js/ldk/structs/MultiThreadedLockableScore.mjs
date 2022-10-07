import { LockableScore } from '../structs/LockableScore.mjs';
import { WriteableScore } from '../structs/WriteableScore.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A concrete implementation of [`LockableScore`] which supports multi-threading.
 */
export class MultiThreadedLockableScore extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.MultiThreadedLockableScore_free);
    }
    /**
     * Constructs a new LockableScore which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned LockableScore must be freed before this_arg is
     */
    as_LockableScore() {
        const ret = bindings.MultiThreadedLockableScore_as_LockableScore(this.ptr);
        const ret_hu_conv = new LockableScore(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the MultiThreadedLockableScore object into a byte array which can be read by MultiThreadedLockableScore_read
     */
    write() {
        const ret = bindings.MultiThreadedLockableScore_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Constructs a new WriteableScore which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned WriteableScore must be freed before this_arg is
     */
    as_WriteableScore() {
        const ret = bindings.MultiThreadedLockableScore_as_WriteableScore(this.ptr);
        const ret_hu_conv = new WriteableScore(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Creates a new [`MultiThreadedLockableScore`] given an underlying [`Score`].
     */
    static constructor_new(score) {
        const ret = bindings.MultiThreadedLockableScore_new(score == null ? 0n : CommonBase.get_ptr_of(score));
        const ret_hu_conv = new MultiThreadedLockableScore(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, score);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=MultiThreadedLockableScore.mjs.map