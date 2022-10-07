import { DecodeError } from '../structs/DecodeError.mjs';
import { RouteHop } from '../structs/RouteHop.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_RouteHopDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_RouteHopDecodeErrorZ in the success state.
     */
    static constructor_ok(o: RouteHop): Result_RouteHopDecodeErrorZ;
    /**
     * Creates a new CResult_RouteHopDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_RouteHopDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_RouteHopDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_RouteHopDecodeErrorZ;
}
export declare class Result_RouteHopDecodeErrorZ_OK extends Result_RouteHopDecodeErrorZ {
    res: RouteHop;
}
export declare class Result_RouteHopDecodeErrorZ_Err extends Result_RouteHopDecodeErrorZ {
    err: DecodeError;
}
