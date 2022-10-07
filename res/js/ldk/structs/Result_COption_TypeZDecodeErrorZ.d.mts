import { DecodeError } from '../structs/DecodeError.mjs';
import { Option_TypeZ } from '../structs/Option_TypeZ.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_COption_TypeZDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_COption_TypeZDecodeErrorZ in the success state.
     */
    static constructor_ok(o: Option_TypeZ): Result_COption_TypeZDecodeErrorZ;
    /**
     * Creates a new CResult_COption_TypeZDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_COption_TypeZDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_COption_TypeZDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_COption_TypeZDecodeErrorZ;
}
export declare class Result_COption_TypeZDecodeErrorZ_OK extends Result_COption_TypeZDecodeErrorZ {
    res: Option_TypeZ;
}
export declare class Result_COption_TypeZDecodeErrorZ_Err extends Result_COption_TypeZDecodeErrorZ {
    err: DecodeError;
}
