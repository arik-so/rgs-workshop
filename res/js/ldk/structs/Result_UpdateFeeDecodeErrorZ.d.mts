import { DecodeError } from '../structs/DecodeError.mjs';
import { UpdateFee } from '../structs/UpdateFee.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_UpdateFeeDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_UpdateFeeDecodeErrorZ in the success state.
     */
    static constructor_ok(o: UpdateFee): Result_UpdateFeeDecodeErrorZ;
    /**
     * Creates a new CResult_UpdateFeeDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_UpdateFeeDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_UpdateFeeDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_UpdateFeeDecodeErrorZ;
}
export declare class Result_UpdateFeeDecodeErrorZ_OK extends Result_UpdateFeeDecodeErrorZ {
    res: UpdateFee;
}
export declare class Result_UpdateFeeDecodeErrorZ_Err extends Result_UpdateFeeDecodeErrorZ {
    err: DecodeError;
}