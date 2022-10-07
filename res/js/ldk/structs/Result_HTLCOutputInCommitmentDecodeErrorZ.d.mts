import { DecodeError } from '../structs/DecodeError.mjs';
import { HTLCOutputInCommitment } from '../structs/HTLCOutputInCommitment.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_HTLCOutputInCommitmentDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_HTLCOutputInCommitmentDecodeErrorZ in the success state.
     */
    static constructor_ok(o: HTLCOutputInCommitment): Result_HTLCOutputInCommitmentDecodeErrorZ;
    /**
     * Creates a new CResult_HTLCOutputInCommitmentDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_HTLCOutputInCommitmentDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_HTLCOutputInCommitmentDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_HTLCOutputInCommitmentDecodeErrorZ;
}
export declare class Result_HTLCOutputInCommitmentDecodeErrorZ_OK extends Result_HTLCOutputInCommitmentDecodeErrorZ {
    res: HTLCOutputInCommitment;
}
export declare class Result_HTLCOutputInCommitmentDecodeErrorZ_Err extends Result_HTLCOutputInCommitmentDecodeErrorZ {
    err: DecodeError;
}
