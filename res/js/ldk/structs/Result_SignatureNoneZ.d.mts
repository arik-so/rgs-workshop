import { CommonBase } from './CommonBase.mjs';
export declare class Result_SignatureNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_SignatureNoneZ in the success state.
     */
    static constructor_ok(o: Uint8Array): Result_SignatureNoneZ;
    /**
     * Creates a new CResult_SignatureNoneZ in the error state.
     */
    static constructor_err(): Result_SignatureNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_SignatureNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_SignatureNoneZ;
}
export declare class Result_SignatureNoneZ_OK extends Result_SignatureNoneZ {
    res: Uint8Array;
}
export declare class Result_SignatureNoneZ_Err extends Result_SignatureNoneZ {
}
