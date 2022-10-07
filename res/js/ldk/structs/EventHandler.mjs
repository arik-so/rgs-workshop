import { Event } from '../structs/Event.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKEventHandlerHolder {
}
/**
 * A trait implemented for objects handling events from [`EventsProvider`].
 */
export class EventHandler extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.EventHandler_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of EventHandler from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKEventHandlerHolder();
        let structImplementation = {
            handle_event(event) {
                const event_hu_conv = Event.constr_from_ptr(event);
                arg.handle_event(event_hu_conv);
            },
        };
        const ptr_idx = bindings.LDKEventHandler_new(structImplementation);
        impl_holder.held = new EventHandler(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Handles the given [`Event`].
     *
     * See [`EventsProvider`] for details that must be considered when implementing this method.
     */
    handle_event(event) {
        bindings.EventHandler_handle_event(this.ptr, event == null ? 0n : CommonBase.get_ptr_of(event));
    }
}
//# sourceMappingURL=EventHandler.mjs.map