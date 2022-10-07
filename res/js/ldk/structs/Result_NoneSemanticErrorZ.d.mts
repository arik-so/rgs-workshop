import { SemanticError } from '../enums/SemanticError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NoneSemanticErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NoneSemanticErrorZ in the success state.
     */
    static constructor_ok(): Result_NoneSemanticErrorZ;
    /**
     * Creates a new CResult_NoneSemanticErrorZ in the error state.
     */
    static constructor_err(e: SemanticError): Result_NoneSemanticErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NoneSemanticErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NoneSemanticErrorZ;
}
export declare class Result_NoneSemanticErrorZ_OK extends Result_NoneSemanticErrorZ {
}
export declare class Result_NoneSemanticErrorZ_Err extends Result_NoneSemanticErrorZ {
    err: SemanticError;
}
