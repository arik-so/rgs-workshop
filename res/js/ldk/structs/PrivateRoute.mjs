import { RouteHint } from '../structs/RouteHint.mjs';
import { Result_PrivateRouteCreationErrorZ } from '../structs/Result_PrivateRouteCreationErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Private routing information
 *
 * # Invariants
 * The encoded route has to be <1024 5bit characters long (<=639 bytes or <=12 hops)
 */
export class PrivateRoute extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.PrivateRoute_free);
    }
    clone_ptr() {
        const ret = bindings.PrivateRoute_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the PrivateRoute
     */
    clone() {
        const ret = bindings.PrivateRoute_clone(this.ptr);
        const ret_hu_conv = new PrivateRoute(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two PrivateRoutes contain equal inner contents.
     */
    hash() {
        const ret = bindings.PrivateRoute_hash(this.ptr);
        return ret;
    }
    /**
     * Checks if two PrivateRoutes contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.PrivateRoute_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    /**
     * Creates a new (partial) route from a list of hops
     */
    static constructor_new(hops) {
        const ret = bindings.PrivateRoute_new(hops == null ? 0n : CommonBase.get_ptr_of(hops));
        const ret_hu_conv = Result_PrivateRouteCreationErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, hops);
        return ret_hu_conv;
    }
    /**
     * Returns the underlying list of hops
     */
    into_inner() {
        const ret = bindings.PrivateRoute_into_inner(this.ptr);
        const ret_hu_conv = new RouteHint(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=PrivateRoute.mjs.map