import { CreationError } from '../enums/CreationError.mjs';
import { PrivateRoute } from '../structs/PrivateRoute.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_PrivateRouteCreationErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_PrivateRouteCreationErrorZ in the success state.
     */
    static constructor_ok(o: PrivateRoute): Result_PrivateRouteCreationErrorZ;
    /**
     * Creates a new CResult_PrivateRouteCreationErrorZ in the error state.
     */
    static constructor_err(e: CreationError): Result_PrivateRouteCreationErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_PrivateRouteCreationErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_PrivateRouteCreationErrorZ;
}
export declare class Result_PrivateRouteCreationErrorZ_OK extends Result_PrivateRouteCreationErrorZ {
    res: PrivateRoute;
}
export declare class Result_PrivateRouteCreationErrorZ_Err extends Result_PrivateRouteCreationErrorZ {
    err: CreationError;
}