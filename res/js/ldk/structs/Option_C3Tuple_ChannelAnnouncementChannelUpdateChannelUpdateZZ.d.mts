import { ThreeTuple_ChannelAnnouncementChannelUpdateChannelUpdateZ } from '../structs/ThreeTuple_ChannelAnnouncementChannelUpdateChannelUpdateZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a crate::c_types::derived::C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZ or not
 */
export declare class Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ containing a crate::c_types::derived::C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZ
     */
    static constructor_some(o: ThreeTuple_ChannelAnnouncementChannelUpdateChannelUpdateZ): Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ;
    /**
     * Constructs a new COption_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ containing nothing
     */
    static constructor_none(): Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ;
    clone_ptr(): bigint;
    /**
     * Creates a new COption_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ;
}
/** A Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ of type Some */
export declare class Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ_Some extends Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ {
    some: ThreeTuple_ChannelAnnouncementChannelUpdateChannelUpdateZ;
}
/** A Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ of type None */
export declare class Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ_None extends Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ {
}