import { Access } from '../structs/Access.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a crate::lightning::chain::Access or not
 */
export declare class Option_AccessZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_AccessZ containing a crate::lightning::chain::Access
     */
    static constructor_some(o: Access): Option_AccessZ;
    /**
     * Constructs a new COption_AccessZ containing nothing
     */
    static constructor_none(): Option_AccessZ;
}
/** A Option_AccessZ of type Some */
export declare class Option_AccessZ_Some extends Option_AccessZ {
    some: Access;
}
/** A Option_AccessZ of type None */
export declare class Option_AccessZ_None extends Option_AccessZ {
}
