import { Route } from '../structs/Route.mjs';
import { LightningError } from '../structs/LightningError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_RouteLightningErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_RouteLightningErrorZ in the success state.
     */
    static constructor_ok(o: Route): Result_RouteLightningErrorZ;
    /**
     * Creates a new CResult_RouteLightningErrorZ in the error state.
     */
    static constructor_err(e: LightningError): Result_RouteLightningErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_RouteLightningErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_RouteLightningErrorZ;
}
export declare class Result_RouteLightningErrorZ_OK extends Result_RouteLightningErrorZ {
    res: Route;
}
export declare class Result_RouteLightningErrorZ_Err extends Result_RouteLightningErrorZ {
    err: LightningError;
}
