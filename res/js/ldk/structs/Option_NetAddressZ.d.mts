import { NetAddress } from '../structs/NetAddress.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a crate::lightning::ln::msgs::NetAddress or not
 */
export declare class Option_NetAddressZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_NetAddressZ containing a crate::lightning::ln::msgs::NetAddress
     */
    static constructor_some(o: NetAddress): Option_NetAddressZ;
    /**
     * Constructs a new COption_NetAddressZ containing nothing
     */
    static constructor_none(): Option_NetAddressZ;
    clone_ptr(): bigint;
    /**
     * Creates a new COption_NetAddressZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Option_NetAddressZ;
}
/** A Option_NetAddressZ of type Some */
export declare class Option_NetAddressZ_Some extends Option_NetAddressZ {
    some: NetAddress;
}
/** A Option_NetAddressZ of type None */
export declare class Option_NetAddressZ_None extends Option_NetAddressZ {
}
