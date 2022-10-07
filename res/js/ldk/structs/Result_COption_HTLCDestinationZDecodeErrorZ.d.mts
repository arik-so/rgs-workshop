import { DecodeError } from '../structs/DecodeError.mjs';
import { Option_HTLCDestinationZ } from '../structs/Option_HTLCDestinationZ.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_COption_HTLCDestinationZDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_COption_HTLCDestinationZDecodeErrorZ in the success state.
     */
    static constructor_ok(o: Option_HTLCDestinationZ): Result_COption_HTLCDestinationZDecodeErrorZ;
    /**
     * Creates a new CResult_COption_HTLCDestinationZDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_COption_HTLCDestinationZDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_COption_HTLCDestinationZDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_COption_HTLCDestinationZDecodeErrorZ;
}
export declare class Result_COption_HTLCDestinationZDecodeErrorZ_OK extends Result_COption_HTLCDestinationZDecodeErrorZ {
    res: Option_HTLCDestinationZ;
}
export declare class Result_COption_HTLCDestinationZDecodeErrorZ_Err extends Result_COption_HTLCDestinationZDecodeErrorZ {
    err: DecodeError;
}