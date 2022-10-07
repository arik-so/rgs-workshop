import { TwoTuple_SignatureSignatureZ } from '../structs/TwoTuple_SignatureSignatureZ.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_C2Tuple_SignatureSignatureZNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_C2Tuple_SignatureSignatureZNoneZ in the success state.
     */
    static constructor_ok(o: TwoTuple_SignatureSignatureZ): Result_C2Tuple_SignatureSignatureZNoneZ;
    /**
     * Creates a new CResult_C2Tuple_SignatureSignatureZNoneZ in the error state.
     */
    static constructor_err(): Result_C2Tuple_SignatureSignatureZNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_C2Tuple_SignatureSignatureZNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_C2Tuple_SignatureSignatureZNoneZ;
}
export declare class Result_C2Tuple_SignatureSignatureZNoneZ_OK extends Result_C2Tuple_SignatureSignatureZNoneZ {
    res: TwoTuple_SignatureSignatureZ;
}
export declare class Result_C2Tuple_SignatureSignatureZNoneZ_Err extends Result_C2Tuple_SignatureSignatureZNoneZ {
}
