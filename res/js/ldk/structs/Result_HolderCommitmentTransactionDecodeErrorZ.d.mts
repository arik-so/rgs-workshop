import { DecodeError } from '../structs/DecodeError.mjs';
import { HolderCommitmentTransaction } from '../structs/HolderCommitmentTransaction.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_HolderCommitmentTransactionDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_HolderCommitmentTransactionDecodeErrorZ in the success state.
     */
    static constructor_ok(o: HolderCommitmentTransaction): Result_HolderCommitmentTransactionDecodeErrorZ;
    /**
     * Creates a new CResult_HolderCommitmentTransactionDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_HolderCommitmentTransactionDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_HolderCommitmentTransactionDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_HolderCommitmentTransactionDecodeErrorZ;
}
export declare class Result_HolderCommitmentTransactionDecodeErrorZ_OK extends Result_HolderCommitmentTransactionDecodeErrorZ {
    res: HolderCommitmentTransaction;
}
export declare class Result_HolderCommitmentTransactionDecodeErrorZ_Err extends Result_HolderCommitmentTransactionDecodeErrorZ {
    err: DecodeError;
}
