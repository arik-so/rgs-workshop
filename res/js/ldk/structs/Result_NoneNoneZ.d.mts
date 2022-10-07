import { CommonBase } from './CommonBase.mjs';
export declare class Result_NoneNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NoneNoneZ in the success state.
     */
    static constructor_ok(): Result_NoneNoneZ;
    /**
     * Creates a new CResult_NoneNoneZ in the error state.
     */
    static constructor_err(): Result_NoneNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NoneNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NoneNoneZ;
}
export declare class Result_NoneNoneZ_OK extends Result_NoneNoneZ {
}
export declare class Result_NoneNoneZ_Err extends Result_NoneNoneZ {
}
