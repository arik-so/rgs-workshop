import { DecodeError } from '../structs/DecodeError.mjs';
import { AnnouncementSignatures } from '../structs/AnnouncementSignatures.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_AnnouncementSignaturesDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_AnnouncementSignaturesDecodeErrorZ in the success state.
     */
    static constructor_ok(o: AnnouncementSignatures): Result_AnnouncementSignaturesDecodeErrorZ;
    /**
     * Creates a new CResult_AnnouncementSignaturesDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_AnnouncementSignaturesDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_AnnouncementSignaturesDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_AnnouncementSignaturesDecodeErrorZ;
}
export declare class Result_AnnouncementSignaturesDecodeErrorZ_OK extends Result_AnnouncementSignaturesDecodeErrorZ {
    res: AnnouncementSignatures;
}
export declare class Result_AnnouncementSignaturesDecodeErrorZ_Err extends Result_AnnouncementSignaturesDecodeErrorZ {
    err: DecodeError;
}