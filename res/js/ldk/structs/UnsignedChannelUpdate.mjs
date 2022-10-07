import { Result_UnsignedChannelUpdateDecodeErrorZ } from '../structs/Result_UnsignedChannelUpdateDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * The unsigned part of a channel_update
 */
export class UnsignedChannelUpdate extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.UnsignedChannelUpdate_free);
    }
    /**
     * The genesis hash of the blockchain where the channel is to be opened
     */
    get_chain_hash() {
        const ret = bindings.UnsignedChannelUpdate_get_chain_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The genesis hash of the blockchain where the channel is to be opened
     */
    set_chain_hash(val) {
        bindings.UnsignedChannelUpdate_set_chain_hash(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The short channel ID
     */
    get_short_channel_id() {
        const ret = bindings.UnsignedChannelUpdate_get_short_channel_id(this.ptr);
        return ret;
    }
    /**
     * The short channel ID
     */
    set_short_channel_id(val) {
        bindings.UnsignedChannelUpdate_set_short_channel_id(this.ptr, val);
    }
    /**
     * A strictly monotonic announcement counter, with gaps allowed, specific to this channel
     */
    get_timestamp() {
        const ret = bindings.UnsignedChannelUpdate_get_timestamp(this.ptr);
        return ret;
    }
    /**
     * A strictly monotonic announcement counter, with gaps allowed, specific to this channel
     */
    set_timestamp(val) {
        bindings.UnsignedChannelUpdate_set_timestamp(this.ptr, val);
    }
    /**
     * Channel flags
     */
    get_flags() {
        const ret = bindings.UnsignedChannelUpdate_get_flags(this.ptr);
        return ret;
    }
    /**
     * Channel flags
     */
    set_flags(val) {
        bindings.UnsignedChannelUpdate_set_flags(this.ptr, val);
    }
    /**
     * The number of blocks such that if:
     * `incoming_htlc.cltv_expiry < outgoing_htlc.cltv_expiry + cltv_expiry_delta`
     * then we need to fail the HTLC backwards. When forwarding an HTLC, cltv_expiry_delta determines
     * the outgoing HTLC's minimum cltv_expiry value -- so, if an incoming HTLC comes in with a
     * cltv_expiry of 100000, and the node we're forwarding to has a cltv_expiry_delta value of 10,
     * then we'll check that the outgoing HTLC's cltv_expiry value is at least 100010 before
     * forwarding. Note that the HTLC sender is the one who originally sets this value when
     * constructing the route.
     */
    get_cltv_expiry_delta() {
        const ret = bindings.UnsignedChannelUpdate_get_cltv_expiry_delta(this.ptr);
        return ret;
    }
    /**
     * The number of blocks such that if:
     * `incoming_htlc.cltv_expiry < outgoing_htlc.cltv_expiry + cltv_expiry_delta`
     * then we need to fail the HTLC backwards. When forwarding an HTLC, cltv_expiry_delta determines
     * the outgoing HTLC's minimum cltv_expiry value -- so, if an incoming HTLC comes in with a
     * cltv_expiry of 100000, and the node we're forwarding to has a cltv_expiry_delta value of 10,
     * then we'll check that the outgoing HTLC's cltv_expiry value is at least 100010 before
     * forwarding. Note that the HTLC sender is the one who originally sets this value when
     * constructing the route.
     */
    set_cltv_expiry_delta(val) {
        bindings.UnsignedChannelUpdate_set_cltv_expiry_delta(this.ptr, val);
    }
    /**
     * The minimum HTLC size incoming to sender, in milli-satoshi
     */
    get_htlc_minimum_msat() {
        const ret = bindings.UnsignedChannelUpdate_get_htlc_minimum_msat(this.ptr);
        return ret;
    }
    /**
     * The minimum HTLC size incoming to sender, in milli-satoshi
     */
    set_htlc_minimum_msat(val) {
        bindings.UnsignedChannelUpdate_set_htlc_minimum_msat(this.ptr, val);
    }
    /**
     * The maximum HTLC value incoming to sender, in milli-satoshi. Used to be optional.
     */
    get_htlc_maximum_msat() {
        const ret = bindings.UnsignedChannelUpdate_get_htlc_maximum_msat(this.ptr);
        return ret;
    }
    /**
     * The maximum HTLC value incoming to sender, in milli-satoshi. Used to be optional.
     */
    set_htlc_maximum_msat(val) {
        bindings.UnsignedChannelUpdate_set_htlc_maximum_msat(this.ptr, val);
    }
    /**
     * The base HTLC fee charged by sender, in milli-satoshi
     */
    get_fee_base_msat() {
        const ret = bindings.UnsignedChannelUpdate_get_fee_base_msat(this.ptr);
        return ret;
    }
    /**
     * The base HTLC fee charged by sender, in milli-satoshi
     */
    set_fee_base_msat(val) {
        bindings.UnsignedChannelUpdate_set_fee_base_msat(this.ptr, val);
    }
    /**
     * The amount to fee multiplier, in micro-satoshi
     */
    get_fee_proportional_millionths() {
        const ret = bindings.UnsignedChannelUpdate_get_fee_proportional_millionths(this.ptr);
        return ret;
    }
    /**
     * The amount to fee multiplier, in micro-satoshi
     */
    set_fee_proportional_millionths(val) {
        bindings.UnsignedChannelUpdate_set_fee_proportional_millionths(this.ptr, val);
    }
    /**
     * Excess data which was signed as a part of the message which we do not (yet) understand how
     * to decode. This is stored to ensure forward-compatibility as new fields are added to the
     * lightning gossip
     *
     * Returns a copy of the field.
     */
    get_excess_data() {
        const ret = bindings.UnsignedChannelUpdate_get_excess_data(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Excess data which was signed as a part of the message which we do not (yet) understand how
     * to decode. This is stored to ensure forward-compatibility as new fields are added to the
     * lightning gossip
     */
    set_excess_data(val) {
        bindings.UnsignedChannelUpdate_set_excess_data(this.ptr, bindings.encodeUint8Array(val));
    }
    /**
     * Constructs a new UnsignedChannelUpdate given each field
     */
    static constructor_new(chain_hash_arg, short_channel_id_arg, timestamp_arg, flags_arg, cltv_expiry_delta_arg, htlc_minimum_msat_arg, htlc_maximum_msat_arg, fee_base_msat_arg, fee_proportional_millionths_arg, excess_data_arg) {
        const ret = bindings.UnsignedChannelUpdate_new(bindings.encodeUint8Array(bindings.check_arr_len(chain_hash_arg, 32)), short_channel_id_arg, timestamp_arg, flags_arg, cltv_expiry_delta_arg, htlc_minimum_msat_arg, htlc_maximum_msat_arg, fee_base_msat_arg, fee_proportional_millionths_arg, bindings.encodeUint8Array(excess_data_arg));
        const ret_hu_conv = new UnsignedChannelUpdate(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.UnsignedChannelUpdate_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the UnsignedChannelUpdate
     */
    clone() {
        const ret = bindings.UnsignedChannelUpdate_clone(this.ptr);
        const ret_hu_conv = new UnsignedChannelUpdate(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the UnsignedChannelUpdate object into a byte array which can be read by UnsignedChannelUpdate_read
     */
    write() {
        const ret = bindings.UnsignedChannelUpdate_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a UnsignedChannelUpdate from a byte array, created by UnsignedChannelUpdate_write
     */
    static constructor_read(ser) {
        const ret = bindings.UnsignedChannelUpdate_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_UnsignedChannelUpdateDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=UnsignedChannelUpdate.mjs.map