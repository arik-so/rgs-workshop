import { HTLCDestination } from '../structs/HTLCDestination.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a crate::lightning::util::events::HTLCDestination or not
 */
export declare class Option_HTLCDestinationZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_HTLCDestinationZ containing a crate::lightning::util::events::HTLCDestination
     */
    static constructor_some(o: HTLCDestination): Option_HTLCDestinationZ;
    /**
     * Constructs a new COption_HTLCDestinationZ containing nothing
     */
    static constructor_none(): Option_HTLCDestinationZ;
    clone_ptr(): bigint;
    /**
     * Creates a new COption_HTLCDestinationZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Option_HTLCDestinationZ;
}
/** A Option_HTLCDestinationZ of type Some */
export declare class Option_HTLCDestinationZ_Some extends Option_HTLCDestinationZ {
    some: HTLCDestination;
}
/** A Option_HTLCDestinationZ of type None */
export declare class Option_HTLCDestinationZ_None extends Option_HTLCDestinationZ {
}
