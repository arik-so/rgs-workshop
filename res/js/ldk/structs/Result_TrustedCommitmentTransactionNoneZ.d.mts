import { TrustedCommitmentTransaction } from '../structs/TrustedCommitmentTransaction.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_TrustedCommitmentTransactionNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_TrustedCommitmentTransactionNoneZ in the success state.
     */
    static constructor_ok(o: TrustedCommitmentTransaction): Result_TrustedCommitmentTransactionNoneZ;
    /**
     * Creates a new CResult_TrustedCommitmentTransactionNoneZ in the error state.
     */
    static constructor_err(): Result_TrustedCommitmentTransactionNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
}
export declare class Result_TrustedCommitmentTransactionNoneZ_OK extends Result_TrustedCommitmentTransactionNoneZ {
    res: TrustedCommitmentTransaction;
}
export declare class Result_TrustedCommitmentTransactionNoneZ_Err extends Result_TrustedCommitmentTransactionNoneZ {
}