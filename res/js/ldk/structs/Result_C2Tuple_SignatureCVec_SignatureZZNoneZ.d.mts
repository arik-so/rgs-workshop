import { TwoTuple_SignatureCVec_SignatureZZ } from '../structs/TwoTuple_SignatureCVec_SignatureZZ.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_C2Tuple_SignatureCVec_SignatureZZNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ in the success state.
     */
    static constructor_ok(o: TwoTuple_SignatureCVec_SignatureZZ): Result_C2Tuple_SignatureCVec_SignatureZZNoneZ;
    /**
     * Creates a new CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ in the error state.
     */
    static constructor_err(): Result_C2Tuple_SignatureCVec_SignatureZZNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_C2Tuple_SignatureCVec_SignatureZZNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_C2Tuple_SignatureCVec_SignatureZZNoneZ;
}
export declare class Result_C2Tuple_SignatureCVec_SignatureZZNoneZ_OK extends Result_C2Tuple_SignatureCVec_SignatureZZNoneZ {
    res: TwoTuple_SignatureCVec_SignatureZZ;
}
export declare class Result_C2Tuple_SignatureCVec_SignatureZZNoneZ_Err extends Result_C2Tuple_SignatureCVec_SignatureZZNoneZ {
}
