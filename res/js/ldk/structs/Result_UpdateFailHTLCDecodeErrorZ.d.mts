import { DecodeError } from '../structs/DecodeError.mjs';
import { UpdateFailHTLC } from '../structs/UpdateFailHTLC.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_UpdateFailHTLCDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_UpdateFailHTLCDecodeErrorZ in the success state.
     */
    static constructor_ok(o: UpdateFailHTLC): Result_UpdateFailHTLCDecodeErrorZ;
    /**
     * Creates a new CResult_UpdateFailHTLCDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_UpdateFailHTLCDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_UpdateFailHTLCDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_UpdateFailHTLCDecodeErrorZ;
}
export declare class Result_UpdateFailHTLCDecodeErrorZ_OK extends Result_UpdateFailHTLCDecodeErrorZ {
    res: UpdateFailHTLC;
}
export declare class Result_UpdateFailHTLCDecodeErrorZ_Err extends Result_UpdateFailHTLCDecodeErrorZ {
    err: DecodeError;
}