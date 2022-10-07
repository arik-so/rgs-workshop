import { TwoTuple_u64u64Z } from '../structs/TwoTuple_u64u64Z.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a crate::c_types::derived::C2Tuple_u64u64Z or not
 */
export declare class Option_C2Tuple_u64u64ZZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_C2Tuple_u64u64ZZ containing a crate::c_types::derived::C2Tuple_u64u64Z
     */
    static constructor_some(o: TwoTuple_u64u64Z): Option_C2Tuple_u64u64ZZ;
    /**
     * Constructs a new COption_C2Tuple_u64u64ZZ containing nothing
     */
    static constructor_none(): Option_C2Tuple_u64u64ZZ;
    clone_ptr(): bigint;
    /**
     * Creates a new COption_C2Tuple_u64u64ZZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Option_C2Tuple_u64u64ZZ;
}
/** A Option_C2Tuple_u64u64ZZ of type Some */
export declare class Option_C2Tuple_u64u64ZZ_Some extends Option_C2Tuple_u64u64ZZ {
    some: TwoTuple_u64u64Z;
}
/** A Option_C2Tuple_u64u64ZZ of type None */
export declare class Option_C2Tuple_u64u64ZZ_None extends Option_C2Tuple_u64u64ZZ {
}