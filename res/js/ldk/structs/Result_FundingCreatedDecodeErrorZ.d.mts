import { DecodeError } from '../structs/DecodeError.mjs';
import { FundingCreated } from '../structs/FundingCreated.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_FundingCreatedDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_FundingCreatedDecodeErrorZ in the success state.
     */
    static constructor_ok(o: FundingCreated): Result_FundingCreatedDecodeErrorZ;
    /**
     * Creates a new CResult_FundingCreatedDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_FundingCreatedDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_FundingCreatedDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_FundingCreatedDecodeErrorZ;
}
export declare class Result_FundingCreatedDecodeErrorZ_OK extends Result_FundingCreatedDecodeErrorZ {
    res: FundingCreated;
}
export declare class Result_FundingCreatedDecodeErrorZ_Err extends Result_FundingCreatedDecodeErrorZ {
    err: DecodeError;
}
