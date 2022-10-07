import { DecodeError } from '../structs/DecodeError.mjs';
import { Option_MonitorEventZ } from '../structs/Option_MonitorEventZ.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_COption_MonitorEventZDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_COption_MonitorEventZDecodeErrorZ in the success state.
     */
    static constructor_ok(o: Option_MonitorEventZ): Result_COption_MonitorEventZDecodeErrorZ;
    /**
     * Creates a new CResult_COption_MonitorEventZDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_COption_MonitorEventZDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_COption_MonitorEventZDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_COption_MonitorEventZDecodeErrorZ;
}
export declare class Result_COption_MonitorEventZDecodeErrorZ_OK extends Result_COption_MonitorEventZDecodeErrorZ {
    res: Option_MonitorEventZ;
}
export declare class Result_COption_MonitorEventZDecodeErrorZ_Err extends Result_COption_MonitorEventZDecodeErrorZ {
    err: DecodeError;
}