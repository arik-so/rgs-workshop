import { IOError } from '../enums/IOError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NoneErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NoneErrorZ in the success state.
     */
    static constructor_ok(): Result_NoneErrorZ;
    /**
     * Creates a new CResult_NoneErrorZ in the error state.
     */
    static constructor_err(e: IOError): Result_NoneErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NoneErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NoneErrorZ;
}
export declare class Result_NoneErrorZ_OK extends Result_NoneErrorZ {
}
export declare class Result_NoneErrorZ_Err extends Result_NoneErrorZ {
    err: IOError;
}
