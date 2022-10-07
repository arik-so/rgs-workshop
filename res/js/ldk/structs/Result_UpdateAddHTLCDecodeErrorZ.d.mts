import { DecodeError } from '../structs/DecodeError.mjs';
import { UpdateAddHTLC } from '../structs/UpdateAddHTLC.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_UpdateAddHTLCDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_UpdateAddHTLCDecodeErrorZ in the success state.
     */
    static constructor_ok(o: UpdateAddHTLC): Result_UpdateAddHTLCDecodeErrorZ;
    /**
     * Creates a new CResult_UpdateAddHTLCDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_UpdateAddHTLCDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_UpdateAddHTLCDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_UpdateAddHTLCDecodeErrorZ;
}
export declare class Result_UpdateAddHTLCDecodeErrorZ_OK extends Result_UpdateAddHTLCDecodeErrorZ {
    res: UpdateAddHTLC;
}
export declare class Result_UpdateAddHTLCDecodeErrorZ_Err extends Result_UpdateAddHTLCDecodeErrorZ {
    err: DecodeError;
}