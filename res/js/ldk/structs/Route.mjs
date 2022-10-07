import { RouteHop } from '../structs/RouteHop.mjs';
import { Result_RouteDecodeErrorZ } from '../structs/Result_RouteDecodeErrorZ.mjs';
import { PaymentParameters } from '../structs/PaymentParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A route directs a payment from the sender (us) to the recipient. If the recipient supports MPP,
 * it can take multiple paths. Each path is composed of one or more hops through the network.
 */
export class Route extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Route_free);
    }
    /**
     * The list of routes taken for a single (potentially-)multi-part payment. The pubkey of the
     * last RouteHop in each path must be the same. Each entry represents a list of hops, NOT
     * INCLUDING our own, where the last hop is the destination. Thus, this must always be at
     * least length one. While the maximum length of any given path is variable, keeping the length
     * of any path less or equal to 19 should currently ensure it is viable.
     */
    get_paths() {
        const ret = bindings.Route_get_paths(this.ptr);
        const ret_conv_12_len = bindings.getArrayLength(ret);
        const ret_conv_12_arr = new Array(ret_conv_12_len).fill(null);
        for (var m = 0; m < ret_conv_12_len; m++) {
            const ret_conv_12 = bindings.getU32ArrayElem(ret, m);
            const ret_conv_12_conv_10_len = bindings.getArrayLength(ret_conv_12);
            const ret_conv_12_conv_10_arr = new Array(ret_conv_12_conv_10_len).fill(null);
            for (var k = 0; k < ret_conv_12_conv_10_len; k++) {
                const ret_conv_12_conv_10 = bindings.getU64ArrayElem(ret_conv_12, k);
                const ret_conv_12_conv_10_hu_conv = new RouteHop(null, ret_conv_12_conv_10);
                CommonBase.add_ref_from(ret_conv_12_conv_10_hu_conv, this);
                ret_conv_12_conv_10_arr[k] = ret_conv_12_conv_10_hu_conv;
            }
            bindings.freeWasmMemory(ret_conv_12);
            ret_conv_12_arr[m] = ret_conv_12_conv_10_arr;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_12_arr;
    }
    /**
     * The list of routes taken for a single (potentially-)multi-part payment. The pubkey of the
     * last RouteHop in each path must be the same. Each entry represents a list of hops, NOT
     * INCLUDING our own, where the last hop is the destination. Thus, this must always be at
     * least length one. While the maximum length of any given path is variable, keeping the length
     * of any path less or equal to 19 should currently ensure it is viable.
     */
    set_paths(val) {
        bindings.Route_set_paths(this.ptr, bindings.encodeUint32Array(val != null ? val.map(val_conv_12 => bindings.encodeUint64Array(val_conv_12 != null ? val_conv_12.map(val_conv_12_conv_10 => val_conv_12_conv_10 == null ? 0n : CommonBase.get_ptr_of(val_conv_12_conv_10)) : null)) : null));
        val.forEach((val_conv_12) => { val_conv_12.forEach((val_conv_12_conv_10) => { CommonBase.add_ref_from(this, val_conv_12_conv_10); }); });
    }
    /**
     * The `payment_params` parameter passed to [`find_route`].
     * This is used by `ChannelManager` to track information which may be required for retries,
     * provided back to you via [`Event::PaymentPathFailed`].
     *
     * [`Event::PaymentPathFailed`]: crate::util::events::Event::PaymentPathFailed
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_payment_params() {
        const ret = bindings.Route_get_payment_params(this.ptr);
        const ret_hu_conv = new PaymentParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The `payment_params` parameter passed to [`find_route`].
     * This is used by `ChannelManager` to track information which may be required for retries,
     * provided back to you via [`Event::PaymentPathFailed`].
     *
     * [`Event::PaymentPathFailed`]: crate::util::events::Event::PaymentPathFailed
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_payment_params(val) {
        bindings.Route_set_payment_params(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Constructs a new Route given each field
     */
    static constructor_new(paths_arg, payment_params_arg) {
        const ret = bindings.Route_new(bindings.encodeUint32Array(paths_arg != null ? paths_arg.map(paths_arg_conv_12 => bindings.encodeUint64Array(paths_arg_conv_12 != null ? paths_arg_conv_12.map(paths_arg_conv_12_conv_10 => paths_arg_conv_12_conv_10 == null ? 0n : CommonBase.get_ptr_of(paths_arg_conv_12_conv_10)) : null)) : null), payment_params_arg == null ? 0n : CommonBase.get_ptr_of(payment_params_arg));
        const ret_hu_conv = new Route(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        paths_arg.forEach((paths_arg_conv_12) => { paths_arg_conv_12.forEach((paths_arg_conv_12_conv_10) => { CommonBase.add_ref_from(ret_hu_conv, paths_arg_conv_12_conv_10); }); });
        CommonBase.add_ref_from(ret_hu_conv, payment_params_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.Route_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the Route
     */
    clone() {
        const ret = bindings.Route_clone(this.ptr);
        const ret_hu_conv = new Route(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two Routes contain equal inner contents.
     */
    hash() {
        const ret = bindings.Route_hash(this.ptr);
        return ret;
    }
    /**
     * Checks if two Routes contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.Route_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    /**
     * Returns the total amount of fees paid on this [`Route`].
     *
     * This doesn't include any extra payment made to the recipient, which can happen in excess of
     * the amount passed to [`find_route`]'s `params.final_value_msat`.
     */
    get_total_fees() {
        const ret = bindings.Route_get_total_fees(this.ptr);
        return ret;
    }
    /**
     * Returns the total amount paid on this [`Route`], excluding the fees.
     */
    get_total_amount() {
        const ret = bindings.Route_get_total_amount(this.ptr);
        return ret;
    }
    /**
     * Serialize the Route object into a byte array which can be read by Route_read
     */
    write() {
        const ret = bindings.Route_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a Route from a byte array, created by Route_write
     */
    static constructor_read(ser) {
        const ret = bindings.Route_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_RouteDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=Route.mjs.map