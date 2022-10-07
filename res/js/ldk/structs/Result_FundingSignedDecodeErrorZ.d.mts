import { DecodeError } from '../structs/DecodeError.mjs';
import { FundingSigned } from '../structs/FundingSigned.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_FundingSignedDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_FundingSignedDecodeErrorZ in the success state.
     */
    static constructor_ok(o: FundingSigned): Result_FundingSignedDecodeErrorZ;
    /**
     * Creates a new CResult_FundingSignedDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_FundingSignedDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_FundingSignedDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_FundingSignedDecodeErrorZ;
}
export declare class Result_FundingSignedDecodeErrorZ_OK extends Result_FundingSignedDecodeErrorZ {
    res: FundingSigned;
}
export declare class Result_FundingSignedDecodeErrorZ_Err extends Result_FundingSignedDecodeErrorZ {
    err: DecodeError;
}