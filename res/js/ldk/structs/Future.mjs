import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A simple future which can complete once, and calls some callback(s) when it does so.
 */
export class Future extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Future_free);
    }
    /**
     * Registers a callback to be called upon completion of this future. If the future has already
     * completed, the callback will be called immediately.
     */
    register_callback_fn(callback) {
        bindings.Future_register_callback_fn(this.ptr, callback == null ? 0n : CommonBase.get_ptr_of(callback));
        CommonBase.add_ref_from(this, callback);
    }
}
//# sourceMappingURL=Future.mjs.map