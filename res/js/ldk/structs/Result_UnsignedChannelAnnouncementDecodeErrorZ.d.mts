import { DecodeError } from '../structs/DecodeError.mjs';
import { UnsignedChannelAnnouncement } from '../structs/UnsignedChannelAnnouncement.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_UnsignedChannelAnnouncementDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_UnsignedChannelAnnouncementDecodeErrorZ in the success state.
     */
    static constructor_ok(o: UnsignedChannelAnnouncement): Result_UnsignedChannelAnnouncementDecodeErrorZ;
    /**
     * Creates a new CResult_UnsignedChannelAnnouncementDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_UnsignedChannelAnnouncementDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_UnsignedChannelAnnouncementDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_UnsignedChannelAnnouncementDecodeErrorZ;
}
export declare class Result_UnsignedChannelAnnouncementDecodeErrorZ_OK extends Result_UnsignedChannelAnnouncementDecodeErrorZ {
    res: UnsignedChannelAnnouncement;
}
export declare class Result_UnsignedChannelAnnouncementDecodeErrorZ_Err extends Result_UnsignedChannelAnnouncementDecodeErrorZ {
    err: DecodeError;
}
