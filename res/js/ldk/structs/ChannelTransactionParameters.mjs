import { ChannelPublicKeys } from '../structs/ChannelPublicKeys.mjs';
import { CounterpartyChannelTransactionParameters } from '../structs/CounterpartyChannelTransactionParameters.mjs';
import { Result_ChannelTransactionParametersDecodeErrorZ } from '../structs/Result_ChannelTransactionParametersDecodeErrorZ.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { DirectedChannelTransactionParameters } from '../structs/DirectedChannelTransactionParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Per-channel data used to build transactions in conjunction with the per-commitment data (CommitmentTransaction).
 * The fields are organized by holder/counterparty.
 *
 * Normally, this is converted to the broadcaster/countersignatory-organized DirectedChannelTransactionParameters
 * before use, via the as_holder_broadcastable and as_counterparty_broadcastable functions.
 */
export class ChannelTransactionParameters extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelTransactionParameters_free);
    }
    /**
     * Holder public keys
     */
    get_holder_pubkeys() {
        const ret = bindings.ChannelTransactionParameters_get_holder_pubkeys(this.ptr);
        const ret_hu_conv = new ChannelPublicKeys(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Holder public keys
     */
    set_holder_pubkeys(val) {
        bindings.ChannelTransactionParameters_set_holder_pubkeys(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * The contest delay selected by the holder, which applies to counterparty-broadcast transactions
     */
    get_holder_selected_contest_delay() {
        const ret = bindings.ChannelTransactionParameters_get_holder_selected_contest_delay(this.ptr);
        return ret;
    }
    /**
     * The contest delay selected by the holder, which applies to counterparty-broadcast transactions
     */
    set_holder_selected_contest_delay(val) {
        bindings.ChannelTransactionParameters_set_holder_selected_contest_delay(this.ptr, val);
    }
    /**
     * Whether the holder is the initiator of this channel.
     * This is an input to the commitment number obscure factor computation.
     */
    get_is_outbound_from_holder() {
        const ret = bindings.ChannelTransactionParameters_get_is_outbound_from_holder(this.ptr);
        return ret;
    }
    /**
     * Whether the holder is the initiator of this channel.
     * This is an input to the commitment number obscure factor computation.
     */
    set_is_outbound_from_holder(val) {
        bindings.ChannelTransactionParameters_set_is_outbound_from_holder(this.ptr, val);
    }
    /**
     * The late-bound counterparty channel transaction parameters.
     * These parameters are populated at the point in the protocol where the counterparty provides them.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_counterparty_parameters() {
        const ret = bindings.ChannelTransactionParameters_get_counterparty_parameters(this.ptr);
        const ret_hu_conv = new CounterpartyChannelTransactionParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The late-bound counterparty channel transaction parameters.
     * These parameters are populated at the point in the protocol where the counterparty provides them.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_counterparty_parameters(val) {
        bindings.ChannelTransactionParameters_set_counterparty_parameters(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * The late-bound funding outpoint
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_funding_outpoint() {
        const ret = bindings.ChannelTransactionParameters_get_funding_outpoint(this.ptr);
        const ret_hu_conv = new OutPoint(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The late-bound funding outpoint
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_funding_outpoint(val) {
        bindings.ChannelTransactionParameters_set_funding_outpoint(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Are anchors used for this channel.  Boolean is serialization backwards-compatible
     */
    get_opt_anchors() {
        const ret = bindings.ChannelTransactionParameters_get_opt_anchors(this.ptr);
        return ret;
    }
    /**
     * Are anchors used for this channel.  Boolean is serialization backwards-compatible
     */
    set_opt_anchors(val) {
        bindings.ChannelTransactionParameters_set_opt_anchors(this.ptr, val);
    }
    /**
     * Constructs a new ChannelTransactionParameters given each field
     */
    static constructor_new(holder_pubkeys_arg, holder_selected_contest_delay_arg, is_outbound_from_holder_arg, counterparty_parameters_arg, funding_outpoint_arg, opt_anchors_arg) {
        const ret = bindings.ChannelTransactionParameters_new(holder_pubkeys_arg == null ? 0n : CommonBase.get_ptr_of(holder_pubkeys_arg), holder_selected_contest_delay_arg, is_outbound_from_holder_arg, counterparty_parameters_arg == null ? 0n : CommonBase.get_ptr_of(counterparty_parameters_arg), funding_outpoint_arg == null ? 0n : CommonBase.get_ptr_of(funding_outpoint_arg), opt_anchors_arg);
        const ret_hu_conv = new ChannelTransactionParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, holder_pubkeys_arg);
        CommonBase.add_ref_from(ret_hu_conv, counterparty_parameters_arg);
        CommonBase.add_ref_from(ret_hu_conv, funding_outpoint_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ChannelTransactionParameters_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChannelTransactionParameters
     */
    clone() {
        const ret = bindings.ChannelTransactionParameters_clone(this.ptr);
        const ret_hu_conv = new ChannelTransactionParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Whether the late bound parameters are populated.
     */
    is_populated() {
        const ret = bindings.ChannelTransactionParameters_is_populated(this.ptr);
        return ret;
    }
    /**
     * Convert the holder/counterparty parameters to broadcaster/countersignatory-organized parameters,
     * given that the holder is the broadcaster.
     *
     * self.is_populated() must be true before calling this function.
     */
    as_holder_broadcastable() {
        const ret = bindings.ChannelTransactionParameters_as_holder_broadcastable(this.ptr);
        const ret_hu_conv = new DirectedChannelTransactionParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Convert the holder/counterparty parameters to broadcaster/countersignatory-organized parameters,
     * given that the counterparty is the broadcaster.
     *
     * self.is_populated() must be true before calling this function.
     */
    as_counterparty_broadcastable() {
        const ret = bindings.ChannelTransactionParameters_as_counterparty_broadcastable(this.ptr);
        const ret_hu_conv = new DirectedChannelTransactionParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ChannelTransactionParameters object into a byte array which can be read by ChannelTransactionParameters_read
     */
    write() {
        const ret = bindings.ChannelTransactionParameters_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ChannelTransactionParameters from a byte array, created by ChannelTransactionParameters_write
     */
    static constructor_read(ser) {
        const ret = bindings.ChannelTransactionParameters_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ChannelTransactionParametersDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChannelTransactionParameters.mjs.map