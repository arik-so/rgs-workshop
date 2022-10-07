import { Router } from '../structs/Router.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A [`Router`] implemented using [`find_route`].
 */
export class DefaultRouter extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.DefaultRouter_free);
    }
    /**
     * Creates a new router using the given [`NetworkGraph`], a [`Logger`], and a randomness source
     * `random_seed_bytes`.
     */
    static constructor_new(network_graph, logger, random_seed_bytes, scorer) {
        const ret = bindings.DefaultRouter_new(network_graph == null ? 0n : CommonBase.get_ptr_of(network_graph), logger == null ? 0n : CommonBase.get_ptr_of(logger), bindings.encodeUint8Array(bindings.check_arr_len(random_seed_bytes, 32)), scorer == null ? 0n : CommonBase.get_ptr_of(scorer));
        const ret_hu_conv = new DefaultRouter(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, network_graph);
        CommonBase.add_ref_from(ret_hu_conv, logger);
        CommonBase.add_ref_from(ret_hu_conv, scorer);
        return ret_hu_conv;
    }
    /**
     * Constructs a new Router which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Router must be freed before this_arg is
     */
    as_Router() {
        const ret = bindings.DefaultRouter_as_Router(this.ptr);
        const ret_hu_conv = new Router(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=DefaultRouter.mjs.map