import { DecodeError } from '../structs/DecodeError.mjs';
import { UnsignedNodeAnnouncement } from '../structs/UnsignedNodeAnnouncement.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_UnsignedNodeAnnouncementDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_UnsignedNodeAnnouncementDecodeErrorZ in the success state.
     */
    static constructor_ok(o: UnsignedNodeAnnouncement): Result_UnsignedNodeAnnouncementDecodeErrorZ;
    /**
     * Creates a new CResult_UnsignedNodeAnnouncementDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_UnsignedNodeAnnouncementDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_UnsignedNodeAnnouncementDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_UnsignedNodeAnnouncementDecodeErrorZ;
}
export declare class Result_UnsignedNodeAnnouncementDecodeErrorZ_OK extends Result_UnsignedNodeAnnouncementDecodeErrorZ {
    res: UnsignedNodeAnnouncement;
}
export declare class Result_UnsignedNodeAnnouncementDecodeErrorZ_Err extends Result_UnsignedNodeAnnouncementDecodeErrorZ {
    err: DecodeError;
}