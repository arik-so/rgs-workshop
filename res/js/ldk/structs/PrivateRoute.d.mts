import { RouteHint } from '../structs/RouteHint.mjs';
import { Result_PrivateRouteCreationErrorZ } from '../structs/Result_PrivateRouteCreationErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Private routing information
 *
 * # Invariants
 * The encoded route has to be <1024 5bit characters long (<=639 bytes or <=12 hops)
 */
export declare class PrivateRoute extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the PrivateRoute
     */
    clone(): PrivateRoute;
    /**
     * Checks if two PrivateRoutes contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Checks if two PrivateRoutes contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: PrivateRoute): boolean;
    /**
     * Creates a new (partial) route from a list of hops
     */
    static constructor_new(hops: RouteHint): Result_PrivateRouteCreationErrorZ;
    /**
     * Returns the underlying list of hops
     */
    into_inner(): RouteHint;
}
