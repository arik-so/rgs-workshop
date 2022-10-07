import { BlindedRoute } from '../structs/BlindedRoute.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_BlindedRouteNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_BlindedRouteNoneZ in the success state.
     */
    static constructor_ok(o: BlindedRoute): Result_BlindedRouteNoneZ;
    /**
     * Creates a new CResult_BlindedRouteNoneZ in the error state.
     */
    static constructor_err(): Result_BlindedRouteNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
}
export declare class Result_BlindedRouteNoneZ_OK extends Result_BlindedRouteNoneZ {
    res: BlindedRoute;
}
export declare class Result_BlindedRouteNoneZ_Err extends Result_BlindedRouteNoneZ {
}
