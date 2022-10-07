import { NetAddress } from '../structs/NetAddress.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a crate::c_types::derived::CVec_NetAddressZ or not
 */
export declare class Option_CVec_NetAddressZZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_CVec_NetAddressZZ containing a crate::c_types::derived::CVec_NetAddressZ
     */
    static constructor_some(o: NetAddress[]): Option_CVec_NetAddressZZ;
    /**
     * Constructs a new COption_CVec_NetAddressZZ containing nothing
     */
    static constructor_none(): Option_CVec_NetAddressZZ;
    clone_ptr(): bigint;
    /**
     * Creates a new COption_CVec_NetAddressZZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Option_CVec_NetAddressZZ;
}
/** A Option_CVec_NetAddressZZ of type Some */
export declare class Option_CVec_NetAddressZZ_Some extends Option_CVec_NetAddressZZ {
    some: NetAddress[];
}
/** A Option_CVec_NetAddressZZ of type None */
export declare class Option_CVec_NetAddressZZ_None extends Option_CVec_NetAddressZZ {
}
