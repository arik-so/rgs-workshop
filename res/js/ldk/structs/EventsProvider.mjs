import { EventHandler } from '../structs/EventHandler.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKEventsProviderHolder {
}
/**
 * A trait indicating an object may generate events.
 *
 * Events are processed by passing an [`EventHandler`] to [`process_pending_events`].
 *
 * # Requirements
 *
 * When using this trait, [`process_pending_events`] will call [`handle_event`] for each pending
 * event since the last invocation.
 *
 * In order to ensure no [`Event`]s are lost, implementors of this trait will persist [`Event`]s
 * and replay any unhandled events on startup. An [`Event`] is considered handled when
 * [`process_pending_events`] returns, thus handlers MUST fully handle [`Event`]s and persist any
 * relevant changes to disk *before* returning.
 *
 * Further, because an application may crash between an [`Event`] being handled and the
 * implementor of this trait being re-serialized, [`Event`] handling must be idempotent - in
 * effect, [`Event`]s may be replayed.
 *
 * Note, handlers may call back into the provider and thus deadlocking must be avoided. Be sure to
 * consult the provider's documentation on the implication of processing events and how a handler
 * may safely use the provider (e.g., see [`ChannelManager::process_pending_events`] and
 * [`ChainMonitor::process_pending_events`]).
 *
 * (C-not implementable) As there is likely no reason for a user to implement this trait on their
 * own type(s).
 *
 * [`process_pending_events`]: Self::process_pending_events
 * [`handle_event`]: EventHandler::handle_event
 * [`ChannelManager::process_pending_events`]: crate::ln::channelmanager::ChannelManager#method.process_pending_events
 * [`ChainMonitor::process_pending_events`]: crate::chain::chainmonitor::ChainMonitor#method.process_pending_events
 */
export class EventsProvider extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.EventsProvider_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of EventsProvider from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKEventsProviderHolder();
        let structImplementation = {
            process_pending_events(handler) {
                const ret_hu_conv = new EventHandler(null, handler);
                CommonBase.add_ref_from(ret_hu_conv, this);
                arg.process_pending_events(ret_hu_conv);
            },
        };
        const ptr_idx = bindings.LDKEventsProvider_new(structImplementation);
        impl_holder.held = new EventsProvider(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Processes any events generated since the last call using the given event handler.
     *
     * See the trait-level documentation for requirements.
     */
    process_pending_events(handler) {
        bindings.EventsProvider_process_pending_events(this.ptr, handler == null ? 0n : CommonBase.get_ptr_of(handler));
        CommonBase.add_ref_from(this, handler);
    }
}
//# sourceMappingURL=EventsProvider.mjs.map