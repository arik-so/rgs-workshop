import { ChannelUpdate } from '../structs/ChannelUpdate.mjs';
import { Result_ChannelUpdateInfoDecodeErrorZ } from '../structs/Result_ChannelUpdateInfoDecodeErrorZ.mjs';
import { RoutingFees } from '../structs/RoutingFees.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Details about one direction of a channel as received within a [`ChannelUpdate`].
 */
export class ChannelUpdateInfo extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelUpdateInfo_free);
    }
    /**
     * When the last update to the channel direction was issued.
     * Value is opaque, as set in the announcement.
     */
    get_last_update() {
        const ret = bindings.ChannelUpdateInfo_get_last_update(this.ptr);
        return ret;
    }
    /**
     * When the last update to the channel direction was issued.
     * Value is opaque, as set in the announcement.
     */
    set_last_update(val) {
        bindings.ChannelUpdateInfo_set_last_update(this.ptr, val);
    }
    /**
     * Whether the channel can be currently used for payments (in this one direction).
     */
    get_enabled() {
        const ret = bindings.ChannelUpdateInfo_get_enabled(this.ptr);
        return ret;
    }
    /**
     * Whether the channel can be currently used for payments (in this one direction).
     */
    set_enabled(val) {
        bindings.ChannelUpdateInfo_set_enabled(this.ptr, val);
    }
    /**
     * The difference in CLTV values that you must have when routing through this channel.
     */
    get_cltv_expiry_delta() {
        const ret = bindings.ChannelUpdateInfo_get_cltv_expiry_delta(this.ptr);
        return ret;
    }
    /**
     * The difference in CLTV values that you must have when routing through this channel.
     */
    set_cltv_expiry_delta(val) {
        bindings.ChannelUpdateInfo_set_cltv_expiry_delta(this.ptr, val);
    }
    /**
     * The minimum value, which must be relayed to the next hop via the channel
     */
    get_htlc_minimum_msat() {
        const ret = bindings.ChannelUpdateInfo_get_htlc_minimum_msat(this.ptr);
        return ret;
    }
    /**
     * The minimum value, which must be relayed to the next hop via the channel
     */
    set_htlc_minimum_msat(val) {
        bindings.ChannelUpdateInfo_set_htlc_minimum_msat(this.ptr, val);
    }
    /**
     * The maximum value which may be relayed to the next hop via the channel.
     */
    get_htlc_maximum_msat() {
        const ret = bindings.ChannelUpdateInfo_get_htlc_maximum_msat(this.ptr);
        return ret;
    }
    /**
     * The maximum value which may be relayed to the next hop via the channel.
     */
    set_htlc_maximum_msat(val) {
        bindings.ChannelUpdateInfo_set_htlc_maximum_msat(this.ptr, val);
    }
    /**
     * Fees charged when the channel is used for routing
     */
    get_fees() {
        const ret = bindings.ChannelUpdateInfo_get_fees(this.ptr);
        const ret_hu_conv = new RoutingFees(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Fees charged when the channel is used for routing
     */
    set_fees(val) {
        bindings.ChannelUpdateInfo_set_fees(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Most recent update for the channel received from the network
     * Mostly redundant with the data we store in fields explicitly.
     * Everything else is useful only for sending out for initial routing sync.
     * Not stored if contains excess data to prevent DoS.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_last_update_message() {
        const ret = bindings.ChannelUpdateInfo_get_last_update_message(this.ptr);
        const ret_hu_conv = new ChannelUpdate(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Most recent update for the channel received from the network
     * Mostly redundant with the data we store in fields explicitly.
     * Everything else is useful only for sending out for initial routing sync.
     * Not stored if contains excess data to prevent DoS.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_last_update_message(val) {
        bindings.ChannelUpdateInfo_set_last_update_message(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Constructs a new ChannelUpdateInfo given each field
     */
    static constructor_new(last_update_arg, enabled_arg, cltv_expiry_delta_arg, htlc_minimum_msat_arg, htlc_maximum_msat_arg, fees_arg, last_update_message_arg) {
        const ret = bindings.ChannelUpdateInfo_new(last_update_arg, enabled_arg, cltv_expiry_delta_arg, htlc_minimum_msat_arg, htlc_maximum_msat_arg, fees_arg == null ? 0n : CommonBase.get_ptr_of(fees_arg), last_update_message_arg == null ? 0n : CommonBase.get_ptr_of(last_update_message_arg));
        const ret_hu_conv = new ChannelUpdateInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, fees_arg);
        CommonBase.add_ref_from(ret_hu_conv, last_update_message_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ChannelUpdateInfo_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChannelUpdateInfo
     */
    clone() {
        const ret = bindings.ChannelUpdateInfo_clone(this.ptr);
        const ret_hu_conv = new ChannelUpdateInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ChannelUpdateInfo object into a byte array which can be read by ChannelUpdateInfo_read
     */
    write() {
        const ret = bindings.ChannelUpdateInfo_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ChannelUpdateInfo from a byte array, created by ChannelUpdateInfo_write
     */
    static constructor_read(ser) {
        const ret = bindings.ChannelUpdateInfo_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ChannelUpdateInfoDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChannelUpdateInfo.mjs.map