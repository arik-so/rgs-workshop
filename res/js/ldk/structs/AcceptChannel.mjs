import { ChannelTypeFeatures } from '../structs/ChannelTypeFeatures.mjs';
import { Result_AcceptChannelDecodeErrorZ } from '../structs/Result_AcceptChannelDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An accept_channel message to be sent or received from a peer
 */
export class AcceptChannel extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.AcceptChannel_free);
    }
    /**
     * A temporary channel ID, until the funding outpoint is announced
     */
    get_temporary_channel_id() {
        const ret = bindings.AcceptChannel_get_temporary_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * A temporary channel ID, until the funding outpoint is announced
     */
    set_temporary_channel_id(val) {
        bindings.AcceptChannel_set_temporary_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The threshold below which outputs on transactions broadcast by sender will be omitted
     */
    get_dust_limit_satoshis() {
        const ret = bindings.AcceptChannel_get_dust_limit_satoshis(this.ptr);
        return ret;
    }
    /**
     * The threshold below which outputs on transactions broadcast by sender will be omitted
     */
    set_dust_limit_satoshis(val) {
        bindings.AcceptChannel_set_dust_limit_satoshis(this.ptr, val);
    }
    /**
     * The maximum inbound HTLC value in flight towards sender, in milli-satoshi
     */
    get_max_htlc_value_in_flight_msat() {
        const ret = bindings.AcceptChannel_get_max_htlc_value_in_flight_msat(this.ptr);
        return ret;
    }
    /**
     * The maximum inbound HTLC value in flight towards sender, in milli-satoshi
     */
    set_max_htlc_value_in_flight_msat(val) {
        bindings.AcceptChannel_set_max_htlc_value_in_flight_msat(this.ptr, val);
    }
    /**
     * The minimum value unencumbered by HTLCs for the counterparty to keep in the channel
     */
    get_channel_reserve_satoshis() {
        const ret = bindings.AcceptChannel_get_channel_reserve_satoshis(this.ptr);
        return ret;
    }
    /**
     * The minimum value unencumbered by HTLCs for the counterparty to keep in the channel
     */
    set_channel_reserve_satoshis(val) {
        bindings.AcceptChannel_set_channel_reserve_satoshis(this.ptr, val);
    }
    /**
     * The minimum HTLC size incoming to sender, in milli-satoshi
     */
    get_htlc_minimum_msat() {
        const ret = bindings.AcceptChannel_get_htlc_minimum_msat(this.ptr);
        return ret;
    }
    /**
     * The minimum HTLC size incoming to sender, in milli-satoshi
     */
    set_htlc_minimum_msat(val) {
        bindings.AcceptChannel_set_htlc_minimum_msat(this.ptr, val);
    }
    /**
     * Minimum depth of the funding transaction before the channel is considered open
     */
    get_minimum_depth() {
        const ret = bindings.AcceptChannel_get_minimum_depth(this.ptr);
        return ret;
    }
    /**
     * Minimum depth of the funding transaction before the channel is considered open
     */
    set_minimum_depth(val) {
        bindings.AcceptChannel_set_minimum_depth(this.ptr, val);
    }
    /**
     * The number of blocks which the counterparty will have to wait to claim on-chain funds if they broadcast a commitment transaction
     */
    get_to_self_delay() {
        const ret = bindings.AcceptChannel_get_to_self_delay(this.ptr);
        return ret;
    }
    /**
     * The number of blocks which the counterparty will have to wait to claim on-chain funds if they broadcast a commitment transaction
     */
    set_to_self_delay(val) {
        bindings.AcceptChannel_set_to_self_delay(this.ptr, val);
    }
    /**
     * The maximum number of inbound HTLCs towards sender
     */
    get_max_accepted_htlcs() {
        const ret = bindings.AcceptChannel_get_max_accepted_htlcs(this.ptr);
        return ret;
    }
    /**
     * The maximum number of inbound HTLCs towards sender
     */
    set_max_accepted_htlcs(val) {
        bindings.AcceptChannel_set_max_accepted_htlcs(this.ptr, val);
    }
    /**
     * The sender's key controlling the funding transaction
     */
    get_funding_pubkey() {
        const ret = bindings.AcceptChannel_get_funding_pubkey(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The sender's key controlling the funding transaction
     */
    set_funding_pubkey(val) {
        bindings.AcceptChannel_set_funding_pubkey(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Used to derive a revocation key for transactions broadcast by counterparty
     */
    get_revocation_basepoint() {
        const ret = bindings.AcceptChannel_get_revocation_basepoint(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Used to derive a revocation key for transactions broadcast by counterparty
     */
    set_revocation_basepoint(val) {
        bindings.AcceptChannel_set_revocation_basepoint(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * A payment key to sender for transactions broadcast by counterparty
     */
    get_payment_point() {
        const ret = bindings.AcceptChannel_get_payment_point(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * A payment key to sender for transactions broadcast by counterparty
     */
    set_payment_point(val) {
        bindings.AcceptChannel_set_payment_point(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Used to derive a payment key to sender for transactions broadcast by sender
     */
    get_delayed_payment_basepoint() {
        const ret = bindings.AcceptChannel_get_delayed_payment_basepoint(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Used to derive a payment key to sender for transactions broadcast by sender
     */
    set_delayed_payment_basepoint(val) {
        bindings.AcceptChannel_set_delayed_payment_basepoint(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Used to derive an HTLC payment key to sender for transactions broadcast by counterparty
     */
    get_htlc_basepoint() {
        const ret = bindings.AcceptChannel_get_htlc_basepoint(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Used to derive an HTLC payment key to sender for transactions broadcast by counterparty
     */
    set_htlc_basepoint(val) {
        bindings.AcceptChannel_set_htlc_basepoint(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The first to-be-broadcast-by-sender transaction's per commitment point
     */
    get_first_per_commitment_point() {
        const ret = bindings.AcceptChannel_get_first_per_commitment_point(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The first to-be-broadcast-by-sender transaction's per commitment point
     */
    set_first_per_commitment_point(val) {
        bindings.AcceptChannel_set_first_per_commitment_point(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The channel type that this channel will represent. If none is set, we derive the channel
     * type from the intersection of our feature bits with our counterparty's feature bits from
     * the Init message.
     *
     * This is required to match the equivalent field in [`OpenChannel::channel_type`].
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_channel_type() {
        const ret = bindings.AcceptChannel_get_channel_type(this.ptr);
        const ret_hu_conv = new ChannelTypeFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The channel type that this channel will represent. If none is set, we derive the channel
     * type from the intersection of our feature bits with our counterparty's feature bits from
     * the Init message.
     *
     * This is required to match the equivalent field in [`OpenChannel::channel_type`].
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_channel_type(val) {
        bindings.AcceptChannel_set_channel_type(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    clone_ptr() {
        const ret = bindings.AcceptChannel_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the AcceptChannel
     */
    clone() {
        const ret = bindings.AcceptChannel_clone(this.ptr);
        const ret_hu_conv = new AcceptChannel(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the AcceptChannel object into a byte array which can be read by AcceptChannel_read
     */
    write() {
        const ret = bindings.AcceptChannel_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a AcceptChannel from a byte array, created by AcceptChannel_write
     */
    static constructor_read(ser) {
        const ret = bindings.AcceptChannel_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_AcceptChannelDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=AcceptChannel.mjs.map