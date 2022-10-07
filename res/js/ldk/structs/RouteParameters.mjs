import { Result_RouteParametersDecodeErrorZ } from '../structs/Result_RouteParametersDecodeErrorZ.mjs';
import { PaymentParameters } from '../structs/PaymentParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Parameters needed to find a [`Route`].
 *
 * Passed to [`find_route`] and [`build_route_from_hops`], but also provided in
 * [`Event::PaymentPathFailed`] for retrying a failed payment path.
 *
 * [`Event::PaymentPathFailed`]: crate::util::events::Event::PaymentPathFailed
 */
export class RouteParameters extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.RouteParameters_free);
    }
    /**
     * The parameters of the failed payment path.
     */
    get_payment_params() {
        const ret = bindings.RouteParameters_get_payment_params(this.ptr);
        const ret_hu_conv = new PaymentParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The parameters of the failed payment path.
     */
    set_payment_params(val) {
        bindings.RouteParameters_set_payment_params(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * The amount in msats sent on the failed payment path.
     */
    get_final_value_msat() {
        const ret = bindings.RouteParameters_get_final_value_msat(this.ptr);
        return ret;
    }
    /**
     * The amount in msats sent on the failed payment path.
     */
    set_final_value_msat(val) {
        bindings.RouteParameters_set_final_value_msat(this.ptr, val);
    }
    /**
     * The CLTV on the final hop of the failed payment path.
     */
    get_final_cltv_expiry_delta() {
        const ret = bindings.RouteParameters_get_final_cltv_expiry_delta(this.ptr);
        return ret;
    }
    /**
     * The CLTV on the final hop of the failed payment path.
     */
    set_final_cltv_expiry_delta(val) {
        bindings.RouteParameters_set_final_cltv_expiry_delta(this.ptr, val);
    }
    /**
     * Constructs a new RouteParameters given each field
     */
    static constructor_new(payment_params_arg, final_value_msat_arg, final_cltv_expiry_delta_arg) {
        const ret = bindings.RouteParameters_new(payment_params_arg == null ? 0n : CommonBase.get_ptr_of(payment_params_arg), final_value_msat_arg, final_cltv_expiry_delta_arg);
        const ret_hu_conv = new RouteParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, payment_params_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.RouteParameters_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the RouteParameters
     */
    clone() {
        const ret = bindings.RouteParameters_clone(this.ptr);
        const ret_hu_conv = new RouteParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the RouteParameters object into a byte array which can be read by RouteParameters_read
     */
    write() {
        const ret = bindings.RouteParameters_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a RouteParameters from a byte array, created by RouteParameters_write
     */
    static constructor_read(ser) {
        const ret = bindings.RouteParameters_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_RouteParametersDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=RouteParameters.mjs.map