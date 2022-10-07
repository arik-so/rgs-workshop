import { CommonBase } from './CommonBase.mjs';
export declare class Result_CVec_SignatureZNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_CVec_SignatureZNoneZ in the success state.
     */
    static constructor_ok(o: Uint8Array[]): Result_CVec_SignatureZNoneZ;
    /**
     * Creates a new CResult_CVec_SignatureZNoneZ in the error state.
     */
    static constructor_err(): Result_CVec_SignatureZNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_CVec_SignatureZNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_CVec_SignatureZNoneZ;
}
export declare class Result_CVec_SignatureZNoneZ_OK extends Result_CVec_SignatureZNoneZ {
    res: Uint8Array[];
}
export declare class Result_CVec_SignatureZNoneZ_Err extends Result_CVec_SignatureZNoneZ {
}
