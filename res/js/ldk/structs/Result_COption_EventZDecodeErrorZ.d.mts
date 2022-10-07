import { DecodeError } from '../structs/DecodeError.mjs';
import { Option_EventZ } from '../structs/Option_EventZ.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_COption_EventZDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_COption_EventZDecodeErrorZ in the success state.
     */
    static constructor_ok(o: Option_EventZ): Result_COption_EventZDecodeErrorZ;
    /**
     * Creates a new CResult_COption_EventZDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_COption_EventZDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_COption_EventZDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_COption_EventZDecodeErrorZ;
}
export declare class Result_COption_EventZDecodeErrorZ_OK extends Result_COption_EventZDecodeErrorZ {
    res: Option_EventZ;
}
export declare class Result_COption_EventZDecodeErrorZ_Err extends Result_COption_EventZDecodeErrorZ {
    err: DecodeError;
}
