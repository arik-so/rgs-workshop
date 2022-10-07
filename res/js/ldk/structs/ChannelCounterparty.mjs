import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { InitFeatures } from '../structs/InitFeatures.mjs';
import { CounterpartyForwardingInfo } from '../structs/CounterpartyForwardingInfo.mjs';
import { Result_ChannelCounterpartyDecodeErrorZ } from '../structs/Result_ChannelCounterpartyDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Channel parameters which apply to our counterparty. These are split out from [`ChannelDetails`]
 * to better separate parameters.
 */
export class ChannelCounterparty extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelCounterparty_free);
    }
    /**
     * The node_id of our counterparty
     */
    get_node_id() {
        const ret = bindings.ChannelCounterparty_get_node_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The node_id of our counterparty
     */
    set_node_id(val) {
        bindings.ChannelCounterparty_set_node_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The Features the channel counterparty provided upon last connection.
     * Useful for routing as it is the most up-to-date copy of the counterparty's features and
     * many routing-relevant features are present in the init context.
     */
    get_features() {
        const ret = bindings.ChannelCounterparty_get_features(this.ptr);
        const ret_hu_conv = new InitFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The Features the channel counterparty provided upon last connection.
     * Useful for routing as it is the most up-to-date copy of the counterparty's features and
     * many routing-relevant features are present in the init context.
     */
    set_features(val) {
        bindings.ChannelCounterparty_set_features(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * The value, in satoshis, that must always be held in the channel for our counterparty. This
     * value ensures that if our counterparty broadcasts a revoked state, we can punish them by
     * claiming at least this value on chain.
     *
     * This value is not included in [`inbound_capacity_msat`] as it can never be spent.
     *
     * [`inbound_capacity_msat`]: ChannelDetails::inbound_capacity_msat
     */
    get_unspendable_punishment_reserve() {
        const ret = bindings.ChannelCounterparty_get_unspendable_punishment_reserve(this.ptr);
        return ret;
    }
    /**
     * The value, in satoshis, that must always be held in the channel for our counterparty. This
     * value ensures that if our counterparty broadcasts a revoked state, we can punish them by
     * claiming at least this value on chain.
     *
     * This value is not included in [`inbound_capacity_msat`] as it can never be spent.
     *
     * [`inbound_capacity_msat`]: ChannelDetails::inbound_capacity_msat
     */
    set_unspendable_punishment_reserve(val) {
        bindings.ChannelCounterparty_set_unspendable_punishment_reserve(this.ptr, val);
    }
    /**
     * Information on the fees and requirements that the counterparty requires when forwarding
     * payments to us through this channel.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_forwarding_info() {
        const ret = bindings.ChannelCounterparty_get_forwarding_info(this.ptr);
        const ret_hu_conv = new CounterpartyForwardingInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Information on the fees and requirements that the counterparty requires when forwarding
     * payments to us through this channel.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_forwarding_info(val) {
        bindings.ChannelCounterparty_set_forwarding_info(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * The smallest value HTLC (in msat) the remote peer will accept, for this channel. This field
     * is only `None` before we have received either the `OpenChannel` or `AcceptChannel` message
     * from the remote peer, or for `ChannelCounterparty` objects serialized prior to LDK 0.0.107.
     */
    get_outbound_htlc_minimum_msat() {
        const ret = bindings.ChannelCounterparty_get_outbound_htlc_minimum_msat(this.ptr);
        const ret_hu_conv = Option_u64Z.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The smallest value HTLC (in msat) the remote peer will accept, for this channel. This field
     * is only `None` before we have received either the `OpenChannel` or `AcceptChannel` message
     * from the remote peer, or for `ChannelCounterparty` objects serialized prior to LDK 0.0.107.
     */
    set_outbound_htlc_minimum_msat(val) {
        bindings.ChannelCounterparty_set_outbound_htlc_minimum_msat(this.ptr, CommonBase.get_ptr_of(val));
    }
    /**
     * The largest value HTLC (in msat) the remote peer currently will accept, for this channel.
     */
    get_outbound_htlc_maximum_msat() {
        const ret = bindings.ChannelCounterparty_get_outbound_htlc_maximum_msat(this.ptr);
        const ret_hu_conv = Option_u64Z.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The largest value HTLC (in msat) the remote peer currently will accept, for this channel.
     */
    set_outbound_htlc_maximum_msat(val) {
        bindings.ChannelCounterparty_set_outbound_htlc_maximum_msat(this.ptr, CommonBase.get_ptr_of(val));
    }
    /**
     * Constructs a new ChannelCounterparty given each field
     */
    static constructor_new(node_id_arg, features_arg, unspendable_punishment_reserve_arg, forwarding_info_arg, outbound_htlc_minimum_msat_arg, outbound_htlc_maximum_msat_arg) {
        const ret = bindings.ChannelCounterparty_new(bindings.encodeUint8Array(bindings.check_arr_len(node_id_arg, 33)), features_arg == null ? 0n : CommonBase.get_ptr_of(features_arg), unspendable_punishment_reserve_arg, forwarding_info_arg == null ? 0n : CommonBase.get_ptr_of(forwarding_info_arg), CommonBase.get_ptr_of(outbound_htlc_minimum_msat_arg), CommonBase.get_ptr_of(outbound_htlc_maximum_msat_arg));
        const ret_hu_conv = new ChannelCounterparty(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, features_arg);
        CommonBase.add_ref_from(ret_hu_conv, forwarding_info_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ChannelCounterparty_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChannelCounterparty
     */
    clone() {
        const ret = bindings.ChannelCounterparty_clone(this.ptr);
        const ret_hu_conv = new ChannelCounterparty(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ChannelCounterparty object into a byte array which can be read by ChannelCounterparty_read
     */
    write() {
        const ret = bindings.ChannelCounterparty_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ChannelCounterparty from a byte array, created by ChannelCounterparty_write
     */
    static constructor_read(ser) {
        const ret = bindings.ChannelCounterparty_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ChannelCounterpartyDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChannelCounterparty.mjs.map