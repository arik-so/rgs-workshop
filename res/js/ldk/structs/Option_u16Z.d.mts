import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a u16 or not
 */
export declare class Option_u16Z extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_u16Z containing a u16
     */
    static constructor_some(o: number): Option_u16Z;
    /**
     * Constructs a new COption_u16Z containing nothing
     */
    static constructor_none(): Option_u16Z;
    clone_ptr(): bigint;
    /**
     * Creates a new COption_u16Z which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Option_u16Z;
}
/** A Option_u16Z of type Some */
export declare class Option_u16Z_Some extends Option_u16Z {
    some: number;
}
/** A Option_u16Z of type None */
export declare class Option_u16Z_None extends Option_u16Z {
}
