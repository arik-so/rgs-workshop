import { BigEndianScalar } from '../structs/BigEndianScalar.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a crate::c_types::BigEndianScalar or not
 */
export declare class Option_ScalarZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_ScalarZ containing a crate::c_types::BigEndianScalar
     */
    static constructor_some(o_big_endian_bytes: Uint8Array): Option_ScalarZ;
    /**
     * Constructs a new COption_ScalarZ containing nothing
     */
    static constructor_none(): Option_ScalarZ;
}
/** A Option_ScalarZ of type Some */
export declare class Option_ScalarZ_Some extends Option_ScalarZ {
    some: BigEndianScalar;
}
/** A Option_ScalarZ of type None */
export declare class Option_ScalarZ_None extends Option_ScalarZ {
}
