import { CommonBase } from './CommonBase.mjs';
export declare class Result_TransactionNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_TransactionNoneZ in the success state.
     */
    static constructor_ok(o: Uint8Array): Result_TransactionNoneZ;
    /**
     * Creates a new CResult_TransactionNoneZ in the error state.
     */
    static constructor_err(): Result_TransactionNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_TransactionNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_TransactionNoneZ;
}
export declare class Result_TransactionNoneZ_OK extends Result_TransactionNoneZ {
    res: Uint8Array;
}
export declare class Result_TransactionNoneZ_Err extends Result_TransactionNoneZ {
}
