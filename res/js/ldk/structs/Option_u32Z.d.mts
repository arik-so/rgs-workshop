import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a u32 or not
 */
export declare class Option_u32Z extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_u32Z containing a u32
     */
    static constructor_some(o: number): Option_u32Z;
    /**
     * Constructs a new COption_u32Z containing nothing
     */
    static constructor_none(): Option_u32Z;
    clone_ptr(): bigint;
    /**
     * Creates a new COption_u32Z which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Option_u32Z;
}
/** A Option_u32Z of type Some */
export declare class Option_u32Z_Some extends Option_u32Z {
    some: number;
}
/** A Option_u32Z of type None */
export declare class Option_u32Z_None extends Option_u32Z {
}
