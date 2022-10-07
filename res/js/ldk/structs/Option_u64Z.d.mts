import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a u64 or not
 */
export declare class Option_u64Z extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_u64Z containing a u64
     */
    static constructor_some(o: bigint): Option_u64Z;
    /**
     * Constructs a new COption_u64Z containing nothing
     */
    static constructor_none(): Option_u64Z;
    clone_ptr(): bigint;
    /**
     * Creates a new COption_u64Z which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Option_u64Z;
}
/** A Option_u64Z of type Some */
export declare class Option_u64Z_Some extends Option_u64Z {
    some: bigint;
}
/** A Option_u64Z of type None */
export declare class Option_u64Z_None extends Option_u64Z {
}
