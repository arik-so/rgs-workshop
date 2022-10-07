import { MonitorEvent } from '../structs/MonitorEvent.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a crate::lightning::chain::channelmonitor::MonitorEvent or not
 */
export declare class Option_MonitorEventZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_MonitorEventZ containing a crate::lightning::chain::channelmonitor::MonitorEvent
     */
    static constructor_some(o: MonitorEvent): Option_MonitorEventZ;
    /**
     * Constructs a new COption_MonitorEventZ containing nothing
     */
    static constructor_none(): Option_MonitorEventZ;
    clone_ptr(): bigint;
    /**
     * Creates a new COption_MonitorEventZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Option_MonitorEventZ;
}
/** A Option_MonitorEventZ of type Some */
export declare class Option_MonitorEventZ_Some extends Option_MonitorEventZ {
    some: MonitorEvent;
}
/** A Option_MonitorEventZ of type None */
export declare class Option_MonitorEventZ_None extends Option_MonitorEventZ {
}
