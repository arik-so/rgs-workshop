import { NetworkUpdate } from '../structs/NetworkUpdate.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a crate::lightning::routing::gossip::NetworkUpdate or not
 */
export declare class Option_NetworkUpdateZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_NetworkUpdateZ containing a crate::lightning::routing::gossip::NetworkUpdate
     */
    static constructor_some(o: NetworkUpdate): Option_NetworkUpdateZ;
    /**
     * Constructs a new COption_NetworkUpdateZ containing nothing
     */
    static constructor_none(): Option_NetworkUpdateZ;
    clone_ptr(): bigint;
    /**
     * Creates a new COption_NetworkUpdateZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Option_NetworkUpdateZ;
}
/** A Option_NetworkUpdateZ of type Some */
export declare class Option_NetworkUpdateZ_Some extends Option_NetworkUpdateZ {
    some: NetworkUpdate;
}
/** A Option_NetworkUpdateZ of type None */
export declare class Option_NetworkUpdateZ_None extends Option_NetworkUpdateZ {
}
