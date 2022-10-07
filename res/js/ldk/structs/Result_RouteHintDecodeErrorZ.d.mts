import { DecodeError } from '../structs/DecodeError.mjs';
import { RouteHint } from '../structs/RouteHint.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_RouteHintDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_RouteHintDecodeErrorZ in the success state.
     */
    static constructor_ok(o: RouteHint): Result_RouteHintDecodeErrorZ;
    /**
     * Creates a new CResult_RouteHintDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_RouteHintDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_RouteHintDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_RouteHintDecodeErrorZ;
}
export declare class Result_RouteHintDecodeErrorZ_OK extends Result_RouteHintDecodeErrorZ {
    res: RouteHint;
}
export declare class Result_RouteHintDecodeErrorZ_Err extends Result_RouteHintDecodeErrorZ {
    err: DecodeError;
}
