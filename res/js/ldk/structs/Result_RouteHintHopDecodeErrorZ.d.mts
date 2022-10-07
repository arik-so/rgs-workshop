import { DecodeError } from '../structs/DecodeError.mjs';
import { RouteHintHop } from '../structs/RouteHintHop.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_RouteHintHopDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_RouteHintHopDecodeErrorZ in the success state.
     */
    static constructor_ok(o: RouteHintHop): Result_RouteHintHopDecodeErrorZ;
    /**
     * Creates a new CResult_RouteHintHopDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_RouteHintHopDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_RouteHintHopDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_RouteHintHopDecodeErrorZ;
}
export declare class Result_RouteHintHopDecodeErrorZ_OK extends Result_RouteHintHopDecodeErrorZ {
    res: RouteHintHop;
}
export declare class Result_RouteHintHopDecodeErrorZ_Err extends Result_RouteHintHopDecodeErrorZ {
    err: DecodeError;
}
