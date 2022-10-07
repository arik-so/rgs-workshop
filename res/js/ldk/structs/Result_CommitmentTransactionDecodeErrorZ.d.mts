import { DecodeError } from '../structs/DecodeError.mjs';
import { CommitmentTransaction } from '../structs/CommitmentTransaction.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_CommitmentTransactionDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_CommitmentTransactionDecodeErrorZ in the success state.
     */
    static constructor_ok(o: CommitmentTransaction): Result_CommitmentTransactionDecodeErrorZ;
    /**
     * Creates a new CResult_CommitmentTransactionDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_CommitmentTransactionDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_CommitmentTransactionDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_CommitmentTransactionDecodeErrorZ;
}
export declare class Result_CommitmentTransactionDecodeErrorZ_OK extends Result_CommitmentTransactionDecodeErrorZ {
    res: CommitmentTransaction;
}
export declare class Result_CommitmentTransactionDecodeErrorZ_Err extends Result_CommitmentTransactionDecodeErrorZ {
    err: DecodeError;
}