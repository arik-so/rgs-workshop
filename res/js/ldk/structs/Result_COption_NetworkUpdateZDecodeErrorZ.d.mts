import { DecodeError } from '../structs/DecodeError.mjs';
import { Option_NetworkUpdateZ } from '../structs/Option_NetworkUpdateZ.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_COption_NetworkUpdateZDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_COption_NetworkUpdateZDecodeErrorZ in the success state.
     */
    static constructor_ok(o: Option_NetworkUpdateZ): Result_COption_NetworkUpdateZDecodeErrorZ;
    /**
     * Creates a new CResult_COption_NetworkUpdateZDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_COption_NetworkUpdateZDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_COption_NetworkUpdateZDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_COption_NetworkUpdateZDecodeErrorZ;
}
export declare class Result_COption_NetworkUpdateZDecodeErrorZ_OK extends Result_COption_NetworkUpdateZDecodeErrorZ {
    res: Option_NetworkUpdateZ;
}
export declare class Result_COption_NetworkUpdateZDecodeErrorZ_Err extends Result_COption_NetworkUpdateZDecodeErrorZ {
    err: DecodeError;
}