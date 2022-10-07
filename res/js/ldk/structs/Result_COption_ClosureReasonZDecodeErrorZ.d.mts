import { DecodeError } from '../structs/DecodeError.mjs';
import { Option_ClosureReasonZ } from '../structs/Option_ClosureReasonZ.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_COption_ClosureReasonZDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_COption_ClosureReasonZDecodeErrorZ in the success state.
     */
    static constructor_ok(o: Option_ClosureReasonZ): Result_COption_ClosureReasonZDecodeErrorZ;
    /**
     * Creates a new CResult_COption_ClosureReasonZDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_COption_ClosureReasonZDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_COption_ClosureReasonZDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_COption_ClosureReasonZDecodeErrorZ;
}
export declare class Result_COption_ClosureReasonZDecodeErrorZ_OK extends Result_COption_ClosureReasonZDecodeErrorZ {
    res: Option_ClosureReasonZ;
}
export declare class Result_COption_ClosureReasonZDecodeErrorZ_Err extends Result_COption_ClosureReasonZDecodeErrorZ {
    err: DecodeError;
}
