import { DecodeError } from '../structs/DecodeError.mjs';
import { ClosingSignedFeeRange } from '../structs/ClosingSignedFeeRange.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ClosingSignedFeeRangeDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ClosingSignedFeeRangeDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ClosingSignedFeeRange): Result_ClosingSignedFeeRangeDecodeErrorZ;
    /**
     * Creates a new CResult_ClosingSignedFeeRangeDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ClosingSignedFeeRangeDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ClosingSignedFeeRangeDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ClosingSignedFeeRangeDecodeErrorZ;
}
export declare class Result_ClosingSignedFeeRangeDecodeErrorZ_OK extends Result_ClosingSignedFeeRangeDecodeErrorZ {
    res: ClosingSignedFeeRange;
}
export declare class Result_ClosingSignedFeeRangeDecodeErrorZ_Err extends Result_ClosingSignedFeeRangeDecodeErrorZ {
    err: DecodeError;
}
