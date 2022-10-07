import { TrustedClosingTransaction } from '../structs/TrustedClosingTransaction.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_TrustedClosingTransactionNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_TrustedClosingTransactionNoneZ in the success state.
     */
    static constructor_ok(o: TrustedClosingTransaction): Result_TrustedClosingTransactionNoneZ;
    /**
     * Creates a new CResult_TrustedClosingTransactionNoneZ in the error state.
     */
    static constructor_err(): Result_TrustedClosingTransactionNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
}
export declare class Result_TrustedClosingTransactionNoneZ_OK extends Result_TrustedClosingTransactionNoneZ {
    res: TrustedClosingTransaction;
}
export declare class Result_TrustedClosingTransactionNoneZ_Err extends Result_TrustedClosingTransactionNoneZ {
}