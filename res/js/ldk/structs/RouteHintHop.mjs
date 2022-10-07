import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { Result_RouteHintHopDecodeErrorZ } from '../structs/Result_RouteHintHopDecodeErrorZ.mjs';
import { RoutingFees } from '../structs/RoutingFees.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A channel descriptor for a hop along a payment path.
 */
export class RouteHintHop extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.RouteHintHop_free);
    }
    /**
     * The node_id of the non-target end of the route
     */
    get_src_node_id() {
        const ret = bindings.RouteHintHop_get_src_node_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The node_id of the non-target end of the route
     */
    set_src_node_id(val) {
        bindings.RouteHintHop_set_src_node_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The short_channel_id of this channel
     */
    get_short_channel_id() {
        const ret = bindings.RouteHintHop_get_short_channel_id(this.ptr);
        return ret;
    }
    /**
     * The short_channel_id of this channel
     */
    set_short_channel_id(val) {
        bindings.RouteHintHop_set_short_channel_id(this.ptr, val);
    }
    /**
     * The fees which must be paid to use this channel
     */
    get_fees() {
        const ret = bindings.RouteHintHop_get_fees(this.ptr);
        const ret_hu_conv = new RoutingFees(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The fees which must be paid to use this channel
     */
    set_fees(val) {
        bindings.RouteHintHop_set_fees(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * The difference in CLTV values between this node and the next node.
     */
    get_cltv_expiry_delta() {
        const ret = bindings.RouteHintHop_get_cltv_expiry_delta(this.ptr);
        return ret;
    }
    /**
     * The difference in CLTV values between this node and the next node.
     */
    set_cltv_expiry_delta(val) {
        bindings.RouteHintHop_set_cltv_expiry_delta(this.ptr, val);
    }
    /**
     * The minimum value, in msat, which must be relayed to the next hop.
     */
    get_htlc_minimum_msat() {
        const ret = bindings.RouteHintHop_get_htlc_minimum_msat(this.ptr);
        const ret_hu_conv = Option_u64Z.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The minimum value, in msat, which must be relayed to the next hop.
     */
    set_htlc_minimum_msat(val) {
        bindings.RouteHintHop_set_htlc_minimum_msat(this.ptr, CommonBase.get_ptr_of(val));
    }
    /**
     * The maximum value in msat available for routing with a single HTLC.
     */
    get_htlc_maximum_msat() {
        const ret = bindings.RouteHintHop_get_htlc_maximum_msat(this.ptr);
        const ret_hu_conv = Option_u64Z.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The maximum value in msat available for routing with a single HTLC.
     */
    set_htlc_maximum_msat(val) {
        bindings.RouteHintHop_set_htlc_maximum_msat(this.ptr, CommonBase.get_ptr_of(val));
    }
    /**
     * Constructs a new RouteHintHop given each field
     */
    static constructor_new(src_node_id_arg, short_channel_id_arg, fees_arg, cltv_expiry_delta_arg, htlc_minimum_msat_arg, htlc_maximum_msat_arg) {
        const ret = bindings.RouteHintHop_new(bindings.encodeUint8Array(bindings.check_arr_len(src_node_id_arg, 33)), short_channel_id_arg, fees_arg == null ? 0n : CommonBase.get_ptr_of(fees_arg), cltv_expiry_delta_arg, CommonBase.get_ptr_of(htlc_minimum_msat_arg), CommonBase.get_ptr_of(htlc_maximum_msat_arg));
        const ret_hu_conv = new RouteHintHop(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, fees_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.RouteHintHop_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the RouteHintHop
     */
    clone() {
        const ret = bindings.RouteHintHop_clone(this.ptr);
        const ret_hu_conv = new RouteHintHop(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two RouteHintHops contain equal inner contents.
     */
    hash() {
        const ret = bindings.RouteHintHop_hash(this.ptr);
        return ret;
    }
    /**
     * Checks if two RouteHintHops contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.RouteHintHop_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    /**
     * Serialize the RouteHintHop object into a byte array which can be read by RouteHintHop_read
     */
    write() {
        const ret = bindings.RouteHintHop_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a RouteHintHop from a byte array, created by RouteHintHop_write
     */
    static constructor_read(ser) {
        const ret = bindings.RouteHintHop_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_RouteHintHopDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=RouteHintHop.mjs.map