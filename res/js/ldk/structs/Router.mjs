import { RouteHop } from '../structs/RouteHop.mjs';
import { RouteParameters } from '../structs/RouteParameters.mjs';
import { ChannelDetails } from '../structs/ChannelDetails.mjs';
import { Result_RouteLightningErrorZ } from '../structs/Result_RouteLightningErrorZ.mjs';
import { InFlightHtlcs } from '../structs/InFlightHtlcs.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKRouterHolder {
}
/**
 * A trait defining behavior for routing an [`Invoice`] payment.
 */
export class Router extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Router_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of Router from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKRouterHolder();
        let structImplementation = {
            find_route(payer, route_params, payment_hash, first_hops, inflight_htlcs) {
                const payer_conv = bindings.decodeUint8Array(payer);
                const route_params_hu_conv = new RouteParameters(null, route_params);
                const payment_hash_conv = bindings.decodeUint8Array(payment_hash);
                const first_hops_conv_16_len = bindings.getArrayLength(first_hops);
                const first_hops_conv_16_arr = new Array(first_hops_conv_16_len).fill(null);
                for (var q = 0; q < first_hops_conv_16_len; q++) {
                    const first_hops_conv_16 = bindings.getU64ArrayElem(first_hops, q);
                    const first_hops_conv_16_hu_conv = new ChannelDetails(null, first_hops_conv_16);
                    CommonBase.add_ref_from(first_hops_conv_16_hu_conv, this);
                    first_hops_conv_16_arr[q] = first_hops_conv_16_hu_conv;
                }
                bindings.freeWasmMemory(first_hops);
                const inflight_htlcs_hu_conv = new InFlightHtlcs(null, inflight_htlcs);
                CommonBase.add_ref_from(inflight_htlcs_hu_conv, this);
                const ret = arg.find_route(payer_conv, route_params_hu_conv, payment_hash_conv, first_hops_conv_16_arr, inflight_htlcs_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            notify_payment_path_failed(path, short_channel_id) {
                const path_conv_10_len = bindings.getArrayLength(path);
                const path_conv_10_arr = new Array(path_conv_10_len).fill(null);
                for (var k = 0; k < path_conv_10_len; k++) {
                    const path_conv_10 = bindings.getU64ArrayElem(path, k);
                    const path_conv_10_hu_conv = new RouteHop(null, path_conv_10);
                    CommonBase.add_ref_from(path_conv_10_hu_conv, this);
                    path_conv_10_arr[k] = path_conv_10_hu_conv;
                }
                bindings.freeWasmMemory(path);
                arg.notify_payment_path_failed(path_conv_10_arr, short_channel_id);
            },
            notify_payment_path_successful(path) {
                const path_conv_10_len = bindings.getArrayLength(path);
                const path_conv_10_arr = new Array(path_conv_10_len).fill(null);
                for (var k = 0; k < path_conv_10_len; k++) {
                    const path_conv_10 = bindings.getU64ArrayElem(path, k);
                    const path_conv_10_hu_conv = new RouteHop(null, path_conv_10);
                    CommonBase.add_ref_from(path_conv_10_hu_conv, this);
                    path_conv_10_arr[k] = path_conv_10_hu_conv;
                }
                bindings.freeWasmMemory(path);
                arg.notify_payment_path_successful(path_conv_10_arr);
            },
            notify_payment_probe_successful(path) {
                const path_conv_10_len = bindings.getArrayLength(path);
                const path_conv_10_arr = new Array(path_conv_10_len).fill(null);
                for (var k = 0; k < path_conv_10_len; k++) {
                    const path_conv_10 = bindings.getU64ArrayElem(path, k);
                    const path_conv_10_hu_conv = new RouteHop(null, path_conv_10);
                    CommonBase.add_ref_from(path_conv_10_hu_conv, this);
                    path_conv_10_arr[k] = path_conv_10_hu_conv;
                }
                bindings.freeWasmMemory(path);
                arg.notify_payment_probe_successful(path_conv_10_arr);
            },
            notify_payment_probe_failed(path, short_channel_id) {
                const path_conv_10_len = bindings.getArrayLength(path);
                const path_conv_10_arr = new Array(path_conv_10_len).fill(null);
                for (var k = 0; k < path_conv_10_len; k++) {
                    const path_conv_10 = bindings.getU64ArrayElem(path, k);
                    const path_conv_10_hu_conv = new RouteHop(null, path_conv_10);
                    CommonBase.add_ref_from(path_conv_10_hu_conv, this);
                    path_conv_10_arr[k] = path_conv_10_hu_conv;
                }
                bindings.freeWasmMemory(path);
                arg.notify_payment_probe_failed(path_conv_10_arr, short_channel_id);
            },
        };
        const ptr_idx = bindings.LDKRouter_new(structImplementation);
        impl_holder.held = new Router(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Finds a [`Route`] between `payer` and `payee` for a payment with the given values.
     *
     * Note that first_hops (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    find_route(payer, route_params, payment_hash, first_hops, inflight_htlcs) {
        const ret = bindings.Router_find_route(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(payer, 33)), route_params == null ? 0n : CommonBase.get_ptr_of(route_params), bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)), bindings.encodeUint64Array(first_hops != null ? first_hops.map(first_hops_conv_16 => first_hops_conv_16 == null ? 0n : CommonBase.get_ptr_of(first_hops_conv_16)) : null), inflight_htlcs == null ? 0n : CommonBase.get_ptr_of(inflight_htlcs));
        const ret_hu_conv = Result_RouteLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, route_params);
        first_hops.forEach((first_hops_conv_16) => { CommonBase.add_ref_from(this, first_hops_conv_16); });
        CommonBase.add_ref_from(this, inflight_htlcs);
        // Due to rust's strict-ownership memory model, in some cases we need to "move"
        // an object to pass exclusive ownership to the function being called.
        // In most cases, we avoid this being visible in GC'd languages by cloning the object
        // at the FFI layer, creating a new object which Rust can claim ownership of
        // However, in some cases (eg here), there is no way to clone an object, and thus
        // we actually have to pass full ownership to Rust.
        // Thus, after this call, inflight_htlcs is reset to null and is now a dummy object.
        CommonBase.set_null_skip_free(inflight_htlcs);
        ;
        return ret_hu_conv;
    }
    /**
     * Lets the router know that payment through a specific path has failed.
     */
    notify_payment_path_failed(path, short_channel_id) {
        bindings.Router_notify_payment_path_failed(this.ptr, bindings.encodeUint64Array(path != null ? path.map(path_conv_10 => path_conv_10 == null ? 0n : CommonBase.get_ptr_of(path_conv_10)) : null), short_channel_id);
        path.forEach((path_conv_10) => { CommonBase.add_ref_from(this, path_conv_10); });
    }
    /**
     * Lets the router know that payment through a specific path was successful.
     */
    notify_payment_path_successful(path) {
        bindings.Router_notify_payment_path_successful(this.ptr, bindings.encodeUint64Array(path != null ? path.map(path_conv_10 => path_conv_10 == null ? 0n : CommonBase.get_ptr_of(path_conv_10)) : null));
        path.forEach((path_conv_10) => { CommonBase.add_ref_from(this, path_conv_10); });
    }
    /**
     * Lets the router know that a payment probe was successful.
     */
    notify_payment_probe_successful(path) {
        bindings.Router_notify_payment_probe_successful(this.ptr, bindings.encodeUint64Array(path != null ? path.map(path_conv_10 => path_conv_10 == null ? 0n : CommonBase.get_ptr_of(path_conv_10)) : null));
        path.forEach((path_conv_10) => { CommonBase.add_ref_from(this, path_conv_10); });
    }
    /**
     * Lets the router know that a payment probe failed.
     */
    notify_payment_probe_failed(path, short_channel_id) {
        bindings.Router_notify_payment_probe_failed(this.ptr, bindings.encodeUint64Array(path != null ? path.map(path_conv_10 => path_conv_10 == null ? 0n : CommonBase.get_ptr_of(path_conv_10)) : null), short_channel_id);
        path.forEach((path_conv_10) => { CommonBase.add_ref_from(this, path_conv_10); });
    }
}
//# sourceMappingURL=Router.mjs.map