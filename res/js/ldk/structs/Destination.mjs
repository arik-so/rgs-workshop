import { BlindedRoute } from '../structs/BlindedRoute.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * The destination of an onion message.
 */
export class Destination extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.Destination_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKDestination_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new Destination_Node(ptr);
            case 1: return new Destination_BlindedRoute(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    /**
     * Utility method to constructs a new Node-variant Destination
     */
    static constructor_node(a) {
        const ret = bindings.Destination_node(bindings.encodeUint8Array(bindings.check_arr_len(a, 33)));
        const ret_hu_conv = Destination.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new BlindedRoute-variant Destination
     */
    static constructor_blinded_route(a) {
        const ret = bindings.Destination_blinded_route(a == null ? 0n : CommonBase.get_ptr_of(a));
        const ret_hu_conv = Destination.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, a);
        // Due to rust's strict-ownership memory model, in some cases we need to "move"
        // an object to pass exclusive ownership to the function being called.
        // In most cases, we avoid ret_hu_conv being visible in GC'd languages by cloning the object
        // at the FFI layer, creating a new object which Rust can claim ownership of
        // However, in some cases (eg here), there is no way to clone an object, and thus
        // we actually have to pass full ownership to Rust.
        // Thus, after ret_hu_conv call, a is reset to null and is now a dummy object.
        CommonBase.set_null_skip_free(a);
        ;
        return ret_hu_conv;
    }
}
/** A Destination of type Node */
export class Destination_Node extends Destination {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const node = bindings.LDKDestination_Node_get_node(ptr);
        const node_conv = bindings.decodeUint8Array(node);
        this.node = node_conv;
    }
}
/** A Destination of type BlindedRoute */
export class Destination_BlindedRoute extends Destination {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const blinded_route = bindings.LDKDestination_BlindedRoute_get_blinded_route(ptr);
        const blinded_route_hu_conv = new BlindedRoute(null, blinded_route);
        CommonBase.add_ref_from(blinded_route_hu_conv, this);
        this.blinded_route = blinded_route_hu_conv;
    }
}
//# sourceMappingURL=Destination.mjs.map