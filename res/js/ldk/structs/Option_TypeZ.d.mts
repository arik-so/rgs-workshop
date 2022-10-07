import { Type } from '../structs/Type.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a crate::lightning::ln::wire::Type or not
 */
export declare class Option_TypeZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_TypeZ containing a crate::lightning::ln::wire::Type
     */
    static constructor_some(o: Type): Option_TypeZ;
    /**
     * Constructs a new COption_TypeZ containing nothing
     */
    static constructor_none(): Option_TypeZ;
    clone_ptr(): bigint;
    /**
     * Creates a new COption_TypeZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Option_TypeZ;
}
/** A Option_TypeZ of type Some */
export declare class Option_TypeZ_Some extends Option_TypeZ {
    some: Type;
}
/** A Option_TypeZ of type None */
export declare class Option_TypeZ_None extends Option_TypeZ {
}
