import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelAnnouncement } from '../structs/ChannelAnnouncement.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ChannelAnnouncementDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ChannelAnnouncementDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ChannelAnnouncement): Result_ChannelAnnouncementDecodeErrorZ;
    /**
     * Creates a new CResult_ChannelAnnouncementDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ChannelAnnouncementDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ChannelAnnouncementDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ChannelAnnouncementDecodeErrorZ;
}
export declare class Result_ChannelAnnouncementDecodeErrorZ_OK extends Result_ChannelAnnouncementDecodeErrorZ {
    res: ChannelAnnouncement;
}
export declare class Result_ChannelAnnouncementDecodeErrorZ_Err extends Result_ChannelAnnouncementDecodeErrorZ {
    err: DecodeError;
}
