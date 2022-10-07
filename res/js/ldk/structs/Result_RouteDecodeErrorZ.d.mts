import { DecodeError } from '../structs/DecodeError.mjs';
import { Route } from '../structs/Route.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_RouteDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_RouteDecodeErrorZ in the success state.
     */
    static constructor_ok(o: Route): Result_RouteDecodeErrorZ;
    /**
     * Creates a new CResult_RouteDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_RouteDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_RouteDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_RouteDecodeErrorZ;
}
export declare class Result_RouteDecodeErrorZ_OK extends Result_RouteDecodeErrorZ {
    res: Route;
}
export declare class Result_RouteDecodeErrorZ_Err extends Result_RouteDecodeErrorZ {
    err: DecodeError;
}