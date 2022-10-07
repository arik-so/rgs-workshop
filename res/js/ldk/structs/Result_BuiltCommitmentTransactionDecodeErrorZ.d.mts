import { DecodeError } from '../structs/DecodeError.mjs';
import { BuiltCommitmentTransaction } from '../structs/BuiltCommitmentTransaction.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_BuiltCommitmentTransactionDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_BuiltCommitmentTransactionDecodeErrorZ in the success state.
     */
    static constructor_ok(o: BuiltCommitmentTransaction): Result_BuiltCommitmentTransactionDecodeErrorZ;
    /**
     * Creates a new CResult_BuiltCommitmentTransactionDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_BuiltCommitmentTransactionDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_BuiltCommitmentTransactionDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_BuiltCommitmentTransactionDecodeErrorZ;
}
export declare class Result_BuiltCommitmentTransactionDecodeErrorZ_OK extends Result_BuiltCommitmentTransactionDecodeErrorZ {
    res: BuiltCommitmentTransaction;
}
export declare class Result_BuiltCommitmentTransactionDecodeErrorZ_Err extends Result_BuiltCommitmentTransactionDecodeErrorZ {
    err: DecodeError;
}