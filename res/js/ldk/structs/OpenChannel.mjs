import { ChannelTypeFeatures } from '../structs/ChannelTypeFeatures.mjs';
import { Result_OpenChannelDecodeErrorZ } from '../structs/Result_OpenChannelDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An open_channel message to be sent or received from a peer
 */
export class OpenChannel extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.OpenChannel_free);
    }
    /**
     * The genesis hash of the blockchain where the channel is to be opened
     */
    get_chain_hash() {
        const ret = bindings.OpenChannel_get_chain_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The genesis hash of the blockchain where the channel is to be opened
     */
    set_chain_hash(val) {
        bindings.OpenChannel_set_chain_hash(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * A temporary channel ID, until the funding outpoint is announced
     */
    get_temporary_channel_id() {
        const ret = bindings.OpenChannel_get_temporary_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * A temporary channel ID, until the funding outpoint is announced
     */
    set_temporary_channel_id(val) {
        bindings.OpenChannel_set_temporary_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The channel value
     */
    get_funding_satoshis() {
        const ret = bindings.OpenChannel_get_funding_satoshis(this.ptr);
        return ret;
    }
    /**
     * The channel value
     */
    set_funding_satoshis(val) {
        bindings.OpenChannel_set_funding_satoshis(this.ptr, val);
    }
    /**
     * The amount to push to the counterparty as part of the open, in milli-satoshi
     */
    get_push_msat() {
        const ret = bindings.OpenChannel_get_push_msat(this.ptr);
        return ret;
    }
    /**
     * The amount to push to the counterparty as part of the open, in milli-satoshi
     */
    set_push_msat(val) {
        bindings.OpenChannel_set_push_msat(this.ptr, val);
    }
    /**
     * The threshold below which outputs on transactions broadcast by sender will be omitted
     */
    get_dust_limit_satoshis() {
        const ret = bindings.OpenChannel_get_dust_limit_satoshis(this.ptr);
        return ret;
    }
    /**
     * The threshold below which outputs on transactions broadcast by sender will be omitted
     */
    set_dust_limit_satoshis(val) {
        bindings.OpenChannel_set_dust_limit_satoshis(this.ptr, val);
    }
    /**
     * The maximum inbound HTLC value in flight towards sender, in milli-satoshi
     */
    get_max_htlc_value_in_flight_msat() {
        const ret = bindings.OpenChannel_get_max_htlc_value_in_flight_msat(this.ptr);
        return ret;
    }
    /**
     * The maximum inbound HTLC value in flight towards sender, in milli-satoshi
     */
    set_max_htlc_value_in_flight_msat(val) {
        bindings.OpenChannel_set_max_htlc_value_in_flight_msat(this.ptr, val);
    }
    /**
     * The minimum value unencumbered by HTLCs for the counterparty to keep in the channel
     */
    get_channel_reserve_satoshis() {
        const ret = bindings.OpenChannel_get_channel_reserve_satoshis(this.ptr);
        return ret;
    }
    /**
     * The minimum value unencumbered by HTLCs for the counterparty to keep in the channel
     */
    set_channel_reserve_satoshis(val) {
        bindings.OpenChannel_set_channel_reserve_satoshis(this.ptr, val);
    }
    /**
     * The minimum HTLC size incoming to sender, in milli-satoshi
     */
    get_htlc_minimum_msat() {
        const ret = bindings.OpenChannel_get_htlc_minimum_msat(this.ptr);
        return ret;
    }
    /**
     * The minimum HTLC size incoming to sender, in milli-satoshi
     */
    set_htlc_minimum_msat(val) {
        bindings.OpenChannel_set_htlc_minimum_msat(this.ptr, val);
    }
    /**
     * The feerate per 1000-weight of sender generated transactions, until updated by update_fee
     */
    get_feerate_per_kw() {
        const ret = bindings.OpenChannel_get_feerate_per_kw(this.ptr);
        return ret;
    }
    /**
     * The feerate per 1000-weight of sender generated transactions, until updated by update_fee
     */
    set_feerate_per_kw(val) {
        bindings.OpenChannel_set_feerate_per_kw(this.ptr, val);
    }
    /**
     * The number of blocks which the counterparty will have to wait to claim on-chain funds if they broadcast a commitment transaction
     */
    get_to_self_delay() {
        const ret = bindings.OpenChannel_get_to_self_delay(this.ptr);
        return ret;
    }
    /**
     * The number of blocks which the counterparty will have to wait to claim on-chain funds if they broadcast a commitment transaction
     */
    set_to_self_delay(val) {
        bindings.OpenChannel_set_to_self_delay(this.ptr, val);
    }
    /**
     * The maximum number of inbound HTLCs towards sender
     */
    get_max_accepted_htlcs() {
        const ret = bindings.OpenChannel_get_max_accepted_htlcs(this.ptr);
        return ret;
    }
    /**
     * The maximum number of inbound HTLCs towards sender
     */
    set_max_accepted_htlcs(val) {
        bindings.OpenChannel_set_max_accepted_htlcs(this.ptr, val);
    }
    /**
     * The sender's key controlling the funding transaction
     */
    get_funding_pubkey() {
        const ret = bindings.OpenChannel_get_funding_pubkey(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The sender's key controlling the funding transaction
     */
    set_funding_pubkey(val) {
        bindings.OpenChannel_set_funding_pubkey(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Used to derive a revocation key for transactions broadcast by counterparty
     */
    get_revocation_basepoint() {
        const ret = bindings.OpenChannel_get_revocation_basepoint(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Used to derive a revocation key for transactions broadcast by counterparty
     */
    set_revocation_basepoint(val) {
        bindings.OpenChannel_set_revocation_basepoint(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * A payment key to sender for transactions broadcast by counterparty
     */
    get_payment_point() {
        const ret = bindings.OpenChannel_get_payment_point(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * A payment key to sender for transactions broadcast by counterparty
     */
    set_payment_point(val) {
        bindings.OpenChannel_set_payment_point(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Used to derive a payment key to sender for transactions broadcast by sender
     */
    get_delayed_payment_basepoint() {
        const ret = bindings.OpenChannel_get_delayed_payment_basepoint(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Used to derive a payment key to sender for transactions broadcast by sender
     */
    set_delayed_payment_basepoint(val) {
        bindings.OpenChannel_set_delayed_payment_basepoint(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Used to derive an HTLC payment key to sender
     */
    get_htlc_basepoint() {
        const ret = bindings.OpenChannel_get_htlc_basepoint(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Used to derive an HTLC payment key to sender
     */
    set_htlc_basepoint(val) {
        bindings.OpenChannel_set_htlc_basepoint(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The first to-be-broadcast-by-sender transaction's per commitment point
     */
    get_first_per_commitment_point() {
        const ret = bindings.OpenChannel_get_first_per_commitment_point(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The first to-be-broadcast-by-sender transaction's per commitment point
     */
    set_first_per_commitment_point(val) {
        bindings.OpenChannel_set_first_per_commitment_point(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Channel flags
     */
    get_channel_flags() {
        const ret = bindings.OpenChannel_get_channel_flags(this.ptr);
        return ret;
    }
    /**
     * Channel flags
     */
    set_channel_flags(val) {
        bindings.OpenChannel_set_channel_flags(this.ptr, val);
    }
    /**
     * The channel type that this channel will represent. If none is set, we derive the channel
     * type from the intersection of our feature bits with our counterparty's feature bits from
     * the Init message.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_channel_type() {
        const ret = bindings.OpenChannel_get_channel_type(this.ptr);
        const ret_hu_conv = new ChannelTypeFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The channel type that this channel will represent. If none is set, we derive the channel
     * type from the intersection of our feature bits with our counterparty's feature bits from
     * the Init message.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_channel_type(val) {
        bindings.OpenChannel_set_channel_type(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    clone_ptr() {
        const ret = bindings.OpenChannel_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the OpenChannel
     */
    clone() {
        const ret = bindings.OpenChannel_clone(this.ptr);
        const ret_hu_conv = new OpenChannel(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the OpenChannel object into a byte array which can be read by OpenChannel_read
     */
    write() {
        const ret = bindings.OpenChannel_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a OpenChannel from a byte array, created by OpenChannel_write
     */
    static constructor_read(ser) {
        const ret = bindings.OpenChannel_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_OpenChannelDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=OpenChannel.mjs.map