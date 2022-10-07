import { Filter } from '../structs/Filter.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a crate::lightning::chain::Filter or not
 */
export declare class Option_FilterZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_FilterZ containing a crate::lightning::chain::Filter
     */
    static constructor_some(o: Filter): Option_FilterZ;
    /**
     * Constructs a new COption_FilterZ containing nothing
     */
    static constructor_none(): Option_FilterZ;
}
/** A Option_FilterZ of type Some */
export declare class Option_FilterZ_Some extends Option_FilterZ {
    some: Filter;
}
/** A Option_FilterZ of type None */
export declare class Option_FilterZ_None extends Option_FilterZ {
}
