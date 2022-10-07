import { CommonBase } from './CommonBase.mjs';
export declare class Result_SecretKeyNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_SecretKeyNoneZ in the success state.
     */
    static constructor_ok(o: Uint8Array): Result_SecretKeyNoneZ;
    /**
     * Creates a new CResult_SecretKeyNoneZ in the error state.
     */
    static constructor_err(): Result_SecretKeyNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_SecretKeyNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_SecretKeyNoneZ;
}
export declare class Result_SecretKeyNoneZ_OK extends Result_SecretKeyNoneZ {
    res: Uint8Array;
}
export declare class Result_SecretKeyNoneZ_Err extends Result_SecretKeyNoneZ {
}
