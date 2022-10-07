import { BlindedRoute } from '../structs/BlindedRoute.mjs';
import { DecodeError } from '../structs/DecodeError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_BlindedRouteDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_BlindedRouteDecodeErrorZ in the success state.
     */
    static constructor_ok(o: BlindedRoute): Result_BlindedRouteDecodeErrorZ;
    /**
     * Creates a new CResult_BlindedRouteDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_BlindedRouteDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
}
export declare class Result_BlindedRouteDecodeErrorZ_OK extends Result_BlindedRouteDecodeErrorZ {
    res: BlindedRoute;
}
export declare class Result_BlindedRouteDecodeErrorZ_Err extends Result_BlindedRouteDecodeErrorZ {
    err: DecodeError;
}
