import { RouteHint } from '../structs/RouteHint.mjs';
import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { Result_PaymentParametersDecodeErrorZ } from '../structs/Result_PaymentParametersDecodeErrorZ.mjs';
import { InvoiceFeatures } from '../structs/InvoiceFeatures.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * The recipient of a payment.
 */
export class PaymentParameters extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.PaymentParameters_free);
    }
    /**
     * The node id of the payee.
     */
    get_payee_pubkey() {
        const ret = bindings.PaymentParameters_get_payee_pubkey(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The node id of the payee.
     */
    set_payee_pubkey(val) {
        bindings.PaymentParameters_set_payee_pubkey(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Features supported by the payee.
     *
     * May be set from the payee's invoice or via [`for_keysend`]. May be `None` if the invoice
     * does not contain any features.
     *
     * [`for_keysend`]: Self::for_keysend
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_features() {
        const ret = bindings.PaymentParameters_get_features(this.ptr);
        const ret_hu_conv = new InvoiceFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Features supported by the payee.
     *
     * May be set from the payee's invoice or via [`for_keysend`]. May be `None` if the invoice
     * does not contain any features.
     *
     * [`for_keysend`]: Self::for_keysend
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_features(val) {
        bindings.PaymentParameters_set_features(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Hints for routing to the payee, containing channels connecting the payee to public nodes.
     */
    get_route_hints() {
        const ret = bindings.PaymentParameters_get_route_hints(this.ptr);
        const ret_conv_11_len = bindings.getArrayLength(ret);
        const ret_conv_11_arr = new Array(ret_conv_11_len).fill(null);
        for (var l = 0; l < ret_conv_11_len; l++) {
            const ret_conv_11 = bindings.getU64ArrayElem(ret, l);
            const ret_conv_11_hu_conv = new RouteHint(null, ret_conv_11);
            CommonBase.add_ref_from(ret_conv_11_hu_conv, this);
            ret_conv_11_arr[l] = ret_conv_11_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_11_arr;
    }
    /**
     * Hints for routing to the payee, containing channels connecting the payee to public nodes.
     */
    set_route_hints(val) {
        bindings.PaymentParameters_set_route_hints(this.ptr, bindings.encodeUint64Array(val != null ? val.map(val_conv_11 => val_conv_11 == null ? 0n : CommonBase.get_ptr_of(val_conv_11)) : null));
        val.forEach((val_conv_11) => { CommonBase.add_ref_from(this, val_conv_11); });
    }
    /**
     * Expiration of a payment to the payee, in seconds relative to the UNIX epoch.
     */
    get_expiry_time() {
        const ret = bindings.PaymentParameters_get_expiry_time(this.ptr);
        const ret_hu_conv = Option_u64Z.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Expiration of a payment to the payee, in seconds relative to the UNIX epoch.
     */
    set_expiry_time(val) {
        bindings.PaymentParameters_set_expiry_time(this.ptr, CommonBase.get_ptr_of(val));
    }
    /**
     * The maximum total CLTV delta we accept for the route.
     * Defaults to [`DEFAULT_MAX_TOTAL_CLTV_EXPIRY_DELTA`].
     */
    get_max_total_cltv_expiry_delta() {
        const ret = bindings.PaymentParameters_get_max_total_cltv_expiry_delta(this.ptr);
        return ret;
    }
    /**
     * The maximum total CLTV delta we accept for the route.
     * Defaults to [`DEFAULT_MAX_TOTAL_CLTV_EXPIRY_DELTA`].
     */
    set_max_total_cltv_expiry_delta(val) {
        bindings.PaymentParameters_set_max_total_cltv_expiry_delta(this.ptr, val);
    }
    /**
     * The maximum number of paths that may be used by (MPP) payments.
     * Defaults to [`DEFAULT_MAX_PATH_COUNT`].
     */
    get_max_path_count() {
        const ret = bindings.PaymentParameters_get_max_path_count(this.ptr);
        return ret;
    }
    /**
     * The maximum number of paths that may be used by (MPP) payments.
     * Defaults to [`DEFAULT_MAX_PATH_COUNT`].
     */
    set_max_path_count(val) {
        bindings.PaymentParameters_set_max_path_count(this.ptr, val);
    }
    /**
     * Selects the maximum share of a channel's total capacity which will be sent over a channel,
     * as a power of 1/2. A higher value prefers to send the payment using more MPP parts whereas
     * a lower value prefers to send larger MPP parts, potentially saturating channels and
     * increasing failure probability for those paths.
     *
     * Note that this restriction will be relaxed during pathfinding after paths which meet this
     * restriction have been found. While paths which meet this criteria will be searched for, it
     * is ultimately up to the scorer to select them over other paths.
     *
     * A value of 0 will allow payments up to and including a channel's total announced usable
     * capacity, a value of one will only use up to half its capacity, two 1/4, etc.
     *
     * Default value: 2
     */
    get_max_channel_saturation_power_of_half() {
        const ret = bindings.PaymentParameters_get_max_channel_saturation_power_of_half(this.ptr);
        return ret;
    }
    /**
     * Selects the maximum share of a channel's total capacity which will be sent over a channel,
     * as a power of 1/2. A higher value prefers to send the payment using more MPP parts whereas
     * a lower value prefers to send larger MPP parts, potentially saturating channels and
     * increasing failure probability for those paths.
     *
     * Note that this restriction will be relaxed during pathfinding after paths which meet this
     * restriction have been found. While paths which meet this criteria will be searched for, it
     * is ultimately up to the scorer to select them over other paths.
     *
     * A value of 0 will allow payments up to and including a channel's total announced usable
     * capacity, a value of one will only use up to half its capacity, two 1/4, etc.
     *
     * Default value: 2
     */
    set_max_channel_saturation_power_of_half(val) {
        bindings.PaymentParameters_set_max_channel_saturation_power_of_half(this.ptr, val);
    }
    /**
     * A list of SCIDs which this payment was previously attempted over and which caused the
     * payment to fail. Future attempts for the same payment shouldn't be relayed through any of
     * these SCIDs.
     *
     * Returns a copy of the field.
     */
    get_previously_failed_channels() {
        const ret = bindings.PaymentParameters_get_previously_failed_channels(this.ptr);
        const ret_conv = bindings.decodeUint64Array(ret);
        return ret_conv;
    }
    /**
     * A list of SCIDs which this payment was previously attempted over and which caused the
     * payment to fail. Future attempts for the same payment shouldn't be relayed through any of
     * these SCIDs.
     */
    set_previously_failed_channels(val) {
        bindings.PaymentParameters_set_previously_failed_channels(this.ptr, bindings.encodeUint64Array(val));
    }
    /**
     * Constructs a new PaymentParameters given each field
     */
    static constructor_new(payee_pubkey_arg, features_arg, route_hints_arg, expiry_time_arg, max_total_cltv_expiry_delta_arg, max_path_count_arg, max_channel_saturation_power_of_half_arg, previously_failed_channels_arg) {
        const ret = bindings.PaymentParameters_new(bindings.encodeUint8Array(bindings.check_arr_len(payee_pubkey_arg, 33)), features_arg == null ? 0n : CommonBase.get_ptr_of(features_arg), bindings.encodeUint64Array(route_hints_arg != null ? route_hints_arg.map(route_hints_arg_conv_11 => route_hints_arg_conv_11 == null ? 0n : CommonBase.get_ptr_of(route_hints_arg_conv_11)) : null), CommonBase.get_ptr_of(expiry_time_arg), max_total_cltv_expiry_delta_arg, max_path_count_arg, max_channel_saturation_power_of_half_arg, bindings.encodeUint64Array(previously_failed_channels_arg));
        const ret_hu_conv = new PaymentParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, features_arg);
        route_hints_arg.forEach((route_hints_arg_conv_11) => { CommonBase.add_ref_from(ret_hu_conv, route_hints_arg_conv_11); });
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.PaymentParameters_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the PaymentParameters
     */
    clone() {
        const ret = bindings.PaymentParameters_clone(this.ptr);
        const ret_hu_conv = new PaymentParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two PaymentParameterss contain equal inner contents.
     */
    hash() {
        const ret = bindings.PaymentParameters_hash(this.ptr);
        return ret;
    }
    /**
     * Checks if two PaymentParameterss contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.PaymentParameters_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    /**
     * Serialize the PaymentParameters object into a byte array which can be read by PaymentParameters_read
     */
    write() {
        const ret = bindings.PaymentParameters_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a PaymentParameters from a byte array, created by PaymentParameters_write
     */
    static constructor_read(ser) {
        const ret = bindings.PaymentParameters_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_PaymentParametersDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a payee with the node id of the given `pubkey`.
     */
    static constructor_from_node_id(payee_pubkey) {
        const ret = bindings.PaymentParameters_from_node_id(bindings.encodeUint8Array(bindings.check_arr_len(payee_pubkey, 33)));
        const ret_hu_conv = new PaymentParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Creates a payee with the node id of the given `pubkey` to use for keysend payments.
     */
    static constructor_for_keysend(payee_pubkey) {
        const ret = bindings.PaymentParameters_for_keysend(bindings.encodeUint8Array(bindings.check_arr_len(payee_pubkey, 33)));
        const ret_hu_conv = new PaymentParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=PaymentParameters.mjs.map