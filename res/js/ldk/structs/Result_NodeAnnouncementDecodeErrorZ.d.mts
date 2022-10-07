import { DecodeError } from '../structs/DecodeError.mjs';
import { NodeAnnouncement } from '../structs/NodeAnnouncement.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NodeAnnouncementDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NodeAnnouncementDecodeErrorZ in the success state.
     */
    static constructor_ok(o: NodeAnnouncement): Result_NodeAnnouncementDecodeErrorZ;
    /**
     * Creates a new CResult_NodeAnnouncementDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_NodeAnnouncementDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NodeAnnouncementDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NodeAnnouncementDecodeErrorZ;
}
export declare class Result_NodeAnnouncementDecodeErrorZ_OK extends Result_NodeAnnouncementDecodeErrorZ {
    res: NodeAnnouncement;
}
export declare class Result_NodeAnnouncementDecodeErrorZ_Err extends Result_NodeAnnouncementDecodeErrorZ {
    err: DecodeError;
}