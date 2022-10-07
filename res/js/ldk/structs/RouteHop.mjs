import { Result_RouteHopDecodeErrorZ } from '../structs/Result_RouteHopDecodeErrorZ.mjs';
import { ChannelFeatures } from '../structs/ChannelFeatures.mjs';
import { NodeFeatures } from '../structs/NodeFeatures.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A hop in a route
 */
export class RouteHop extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.RouteHop_free);
    }
    /**
     * The node_id of the node at this hop.
     */
    get_pubkey() {
        const ret = bindings.RouteHop_get_pubkey(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The node_id of the node at this hop.
     */
    set_pubkey(val) {
        bindings.RouteHop_set_pubkey(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The node_announcement features of the node at this hop. For the last hop, these may be
     * amended to match the features present in the invoice this node generated.
     */
    get_node_features() {
        const ret = bindings.RouteHop_get_node_features(this.ptr);
        const ret_hu_conv = new NodeFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The node_announcement features of the node at this hop. For the last hop, these may be
     * amended to match the features present in the invoice this node generated.
     */
    set_node_features(val) {
        bindings.RouteHop_set_node_features(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * The channel that should be used from the previous hop to reach this node.
     */
    get_short_channel_id() {
        const ret = bindings.RouteHop_get_short_channel_id(this.ptr);
        return ret;
    }
    /**
     * The channel that should be used from the previous hop to reach this node.
     */
    set_short_channel_id(val) {
        bindings.RouteHop_set_short_channel_id(this.ptr, val);
    }
    /**
     * The channel_announcement features of the channel that should be used from the previous hop
     * to reach this node.
     */
    get_channel_features() {
        const ret = bindings.RouteHop_get_channel_features(this.ptr);
        const ret_hu_conv = new ChannelFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The channel_announcement features of the channel that should be used from the previous hop
     * to reach this node.
     */
    set_channel_features(val) {
        bindings.RouteHop_set_channel_features(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * The fee taken on this hop (for paying for the use of the *next* channel in the path).
     * For the last hop, this should be the full value of the payment (might be more than
     * requested if we had to match htlc_minimum_msat).
     */
    get_fee_msat() {
        const ret = bindings.RouteHop_get_fee_msat(this.ptr);
        return ret;
    }
    /**
     * The fee taken on this hop (for paying for the use of the *next* channel in the path).
     * For the last hop, this should be the full value of the payment (might be more than
     * requested if we had to match htlc_minimum_msat).
     */
    set_fee_msat(val) {
        bindings.RouteHop_set_fee_msat(this.ptr, val);
    }
    /**
     * The CLTV delta added for this hop. For the last hop, this should be the full CLTV value
     * expected at the destination, in excess of the current block height.
     */
    get_cltv_expiry_delta() {
        const ret = bindings.RouteHop_get_cltv_expiry_delta(this.ptr);
        return ret;
    }
    /**
     * The CLTV delta added for this hop. For the last hop, this should be the full CLTV value
     * expected at the destination, in excess of the current block height.
     */
    set_cltv_expiry_delta(val) {
        bindings.RouteHop_set_cltv_expiry_delta(this.ptr, val);
    }
    /**
     * Constructs a new RouteHop given each field
     */
    static constructor_new(pubkey_arg, node_features_arg, short_channel_id_arg, channel_features_arg, fee_msat_arg, cltv_expiry_delta_arg) {
        const ret = bindings.RouteHop_new(bindings.encodeUint8Array(bindings.check_arr_len(pubkey_arg, 33)), node_features_arg == null ? 0n : CommonBase.get_ptr_of(node_features_arg), short_channel_id_arg, channel_features_arg == null ? 0n : CommonBase.get_ptr_of(channel_features_arg), fee_msat_arg, cltv_expiry_delta_arg);
        const ret_hu_conv = new RouteHop(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, node_features_arg);
        CommonBase.add_ref_from(ret_hu_conv, channel_features_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.RouteHop_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the RouteHop
     */
    clone() {
        const ret = bindings.RouteHop_clone(this.ptr);
        const ret_hu_conv = new RouteHop(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two RouteHops contain equal inner contents.
     */
    hash() {
        const ret = bindings.RouteHop_hash(this.ptr);
        return ret;
    }
    /**
     * Checks if two RouteHops contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.RouteHop_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    /**
     * Serialize the RouteHop object into a byte array which can be read by RouteHop_read
     */
    write() {
        const ret = bindings.RouteHop_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a RouteHop from a byte array, created by RouteHop_write
     */
    static constructor_read(ser) {
        const ret = bindings.RouteHop_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_RouteHopDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=RouteHop.mjs.map