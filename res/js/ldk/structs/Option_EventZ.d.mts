import { Event } from '../structs/Event.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a crate::lightning::util::events::Event or not
 */
export declare class Option_EventZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_EventZ containing a crate::lightning::util::events::Event
     */
    static constructor_some(o: Event): Option_EventZ;
    /**
     * Constructs a new COption_EventZ containing nothing
     */
    static constructor_none(): Option_EventZ;
    clone_ptr(): bigint;
    /**
     * Creates a new COption_EventZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Option_EventZ;
}
/** A Option_EventZ of type Some */
export declare class Option_EventZ_Some extends Option_EventZ {
    some: Event;
}
/** A Option_EventZ of type None */
export declare class Option_EventZ_None extends Option_EventZ {
}