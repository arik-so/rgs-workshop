import { DecodeError } from '../structs/DecodeError.mjs';
import { UpdateFulfillHTLC } from '../structs/UpdateFulfillHTLC.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_UpdateFulfillHTLCDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_UpdateFulfillHTLCDecodeErrorZ in the success state.
     */
    static constructor_ok(o: UpdateFulfillHTLC): Result_UpdateFulfillHTLCDecodeErrorZ;
    /**
     * Creates a new CResult_UpdateFulfillHTLCDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_UpdateFulfillHTLCDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_UpdateFulfillHTLCDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_UpdateFulfillHTLCDecodeErrorZ;
}
export declare class Result_UpdateFulfillHTLCDecodeErrorZ_OK extends Result_UpdateFulfillHTLCDecodeErrorZ {
    res: UpdateFulfillHTLC;
}
export declare class Result_UpdateFulfillHTLCDecodeErrorZ_Err extends Result_UpdateFulfillHTLCDecodeErrorZ {
    err: DecodeError;
}
