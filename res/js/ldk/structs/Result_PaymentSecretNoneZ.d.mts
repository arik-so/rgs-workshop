import { CommonBase } from './CommonBase.mjs';
export declare class Result_PaymentSecretNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_PaymentSecretNoneZ in the success state.
     */
    static constructor_ok(o: Uint8Array): Result_PaymentSecretNoneZ;
    /**
     * Creates a new CResult_PaymentSecretNoneZ in the error state.
     */
    static constructor_err(): Result_PaymentSecretNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_PaymentSecretNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_PaymentSecretNoneZ;
}
export declare class Result_PaymentSecretNoneZ_OK extends Result_PaymentSecretNoneZ {
    res: Uint8Array;
}
export declare class Result_PaymentSecretNoneZ_Err extends Result_PaymentSecretNoneZ {
}
