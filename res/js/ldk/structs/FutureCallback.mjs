import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKFutureCallbackHolder {
}
/**
 * A callback which is called when a [`Future`] completes.
 *
 * Note that this MUST NOT call back into LDK directly, it must instead schedule actions to be
 * taken later. Rust users should use the [`std::future::Future`] implementation for [`Future`]
 * instead.
 *
 * Note that the [`std::future::Future`] implementation may only work for runtimes which schedule
 * futures when they receive a wake, rather than immediately executing them.
 */
export class FutureCallback extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.FutureCallback_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of FutureCallback from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKFutureCallbackHolder();
        let structImplementation = {
            call() {
                arg.call();
            },
        };
        const ptr_idx = bindings.LDKFutureCallback_new(structImplementation);
        impl_holder.held = new FutureCallback(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * The method which is called.
     */
    call() {
        bindings.FutureCallback_call(this.ptr);
    }
}
//# sourceMappingURL=FutureCallback.mjs.map