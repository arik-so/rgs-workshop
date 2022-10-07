import { CommonBase } from './CommonBase.mjs';
export declare class Result_RecoverableSignatureNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_RecoverableSignatureNoneZ in the success state.
     */
    static constructor_ok(o: Uint8Array): Result_RecoverableSignatureNoneZ;
    /**
     * Creates a new CResult_RecoverableSignatureNoneZ in the error state.
     */
    static constructor_err(): Result_RecoverableSignatureNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_RecoverableSignatureNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_RecoverableSignatureNoneZ;
}
export declare class Result_RecoverableSignatureNoneZ_OK extends Result_RecoverableSignatureNoneZ {
    res: Uint8Array;
}
export declare class Result_RecoverableSignatureNoneZ_Err extends Result_RecoverableSignatureNoneZ {
}
