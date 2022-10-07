import { EffectiveCapacity } from '../structs/EffectiveCapacity.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Proposed use of a channel passed as a parameter to [`Score::channel_penalty_msat`].
 */
export class ChannelUsage extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelUsage_free);
    }
    /**
     * The amount to send through the channel, denominated in millisatoshis.
     */
    get_amount_msat() {
        const ret = bindings.ChannelUsage_get_amount_msat(this.ptr);
        return ret;
    }
    /**
     * The amount to send through the channel, denominated in millisatoshis.
     */
    set_amount_msat(val) {
        bindings.ChannelUsage_set_amount_msat(this.ptr, val);
    }
    /**
     * Total amount, denominated in millisatoshis, already allocated to send through the channel
     * as part of a multi-path payment.
     */
    get_inflight_htlc_msat() {
        const ret = bindings.ChannelUsage_get_inflight_htlc_msat(this.ptr);
        return ret;
    }
    /**
     * Total amount, denominated in millisatoshis, already allocated to send through the channel
     * as part of a multi-path payment.
     */
    set_inflight_htlc_msat(val) {
        bindings.ChannelUsage_set_inflight_htlc_msat(this.ptr, val);
    }
    /**
     * The effective capacity of the channel.
     */
    get_effective_capacity() {
        const ret = bindings.ChannelUsage_get_effective_capacity(this.ptr);
        const ret_hu_conv = EffectiveCapacity.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The effective capacity of the channel.
     */
    set_effective_capacity(val) {
        bindings.ChannelUsage_set_effective_capacity(this.ptr, CommonBase.get_ptr_of(val));
    }
    /**
     * Constructs a new ChannelUsage given each field
     */
    static constructor_new(amount_msat_arg, inflight_htlc_msat_arg, effective_capacity_arg) {
        const ret = bindings.ChannelUsage_new(amount_msat_arg, inflight_htlc_msat_arg, CommonBase.get_ptr_of(effective_capacity_arg));
        const ret_hu_conv = new ChannelUsage(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ChannelUsage_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChannelUsage
     */
    clone() {
        const ret = bindings.ChannelUsage_clone(this.ptr);
        const ret_hu_conv = new ChannelUsage(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChannelUsage.mjs.map