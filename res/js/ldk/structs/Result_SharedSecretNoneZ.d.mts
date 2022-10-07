import { CommonBase } from './CommonBase.mjs';
export declare class Result_SharedSecretNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_SharedSecretNoneZ in the success state.
     */
    static constructor_ok(o: Uint8Array): Result_SharedSecretNoneZ;
    /**
     * Creates a new CResult_SharedSecretNoneZ in the error state.
     */
    static constructor_err(): Result_SharedSecretNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_SharedSecretNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_SharedSecretNoneZ;
}
export declare class Result_SharedSecretNoneZ_OK extends Result_SharedSecretNoneZ {
    res: Uint8Array;
}
export declare class Result_SharedSecretNoneZ_Err extends Result_SharedSecretNoneZ {
}