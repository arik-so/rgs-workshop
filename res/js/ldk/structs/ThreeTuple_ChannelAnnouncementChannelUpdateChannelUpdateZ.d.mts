import { ChannelUpdate } from '../structs/ChannelUpdate.mjs';
import { ChannelAnnouncement } from '../structs/ChannelAnnouncement.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A Tuple
 */
export declare class ThreeTuple_ChannelAnnouncementChannelUpdateChannelUpdateZ extends CommonBase {
    /**
     *
     */
    get_a(): ChannelAnnouncement;
    /**
     *
     */
    get_b(): ChannelUpdate;
    /**
     *
     */
    get_c(): ChannelUpdate;
    clone_ptr(): bigint;
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): ThreeTuple_ChannelAnnouncementChannelUpdateChannelUpdateZ;
    /**
     * Creates a new C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZ from the contained elements.
     */
    static constructor_new(a: ChannelAnnouncement, b: ChannelUpdate, c: ChannelUpdate): ThreeTuple_ChannelAnnouncementChannelUpdateChannelUpdateZ;
}
