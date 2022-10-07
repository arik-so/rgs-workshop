import { Event } from '../structs/Event.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of EventHandler */
export interface EventHandlerInterface {
    /**Handles the given [`Event`].
     *
     * See [`EventsProvider`] for details that must be considered when implementing this method.
     */
    handle_event(event: Event): void;
}
/**
 * A trait implemented for objects handling events from [`EventsProvider`].
 */
export declare class EventHandler extends CommonBase {
    /** Creates a new instance of EventHandler from a given implementation */
    static new_impl(arg: EventHandlerInterface): EventHandler;
    /**
     * Handles the given [`Event`].
     *
     * See [`EventsProvider`] for details that must be considered when implementing this method.
     */
    handle_event(event: Event): void;
}
