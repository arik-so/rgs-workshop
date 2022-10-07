import { Score } from '../structs/Score.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A locked `MultiThreadedLockableScore`.
 */
export class MultiThreadedScoreLock extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.MultiThreadedScoreLock_free);
    }
    /**
     * Constructs a new Score which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Score must be freed before this_arg is
     */
    as_Score() {
        const ret = bindings.MultiThreadedScoreLock_as_Score(this.ptr);
        const ret_hu_conv = new Score(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the MultiThreadedScoreLock object into a byte array which can be read by MultiThreadedScoreLock_read
     */
    write() {
        const ret = bindings.MultiThreadedScoreLock_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
}
//# sourceMappingURL=MultiThreadedScoreLock.mjs.map