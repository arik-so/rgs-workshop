import { DecodeError } from '../structs/DecodeError.mjs';
import { Ping } from '../structs/Ping.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_PingDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_PingDecodeErrorZ in the success state.
     */
    static constructor_ok(o: Ping): Result_PingDecodeErrorZ;
    /**
     * Creates a new CResult_PingDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_PingDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_PingDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_PingDecodeErrorZ;
}
export declare class Result_PingDecodeErrorZ_OK extends Result_PingDecodeErrorZ {
    res: Ping;
}
export declare class Result_PingDecodeErrorZ_Err extends Result_PingDecodeErrorZ {
    err: DecodeError;
}
