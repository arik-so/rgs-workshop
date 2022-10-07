import { DecodeError } from '../structs/DecodeError.mjs';
import { NodeAnnouncementInfo } from '../structs/NodeAnnouncementInfo.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NodeAnnouncementInfoDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NodeAnnouncementInfoDecodeErrorZ in the success state.
     */
    static constructor_ok(o: NodeAnnouncementInfo): Result_NodeAnnouncementInfoDecodeErrorZ;
    /**
     * Creates a new CResult_NodeAnnouncementInfoDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_NodeAnnouncementInfoDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NodeAnnouncementInfoDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NodeAnnouncementInfoDecodeErrorZ;
}
export declare class Result_NodeAnnouncementInfoDecodeErrorZ_OK extends Result_NodeAnnouncementInfoDecodeErrorZ {
    res: NodeAnnouncementInfo;
}
export declare class Result_NodeAnnouncementInfoDecodeErrorZ_Err extends Result_NodeAnnouncementInfoDecodeErrorZ {
    err: DecodeError;
}