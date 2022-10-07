import { ChannelPublicKeys } from '../structs/ChannelPublicKeys.mjs';
import { ChannelTransactionParameters } from '../structs/ChannelTransactionParameters.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { BaseSign } from '../structs/BaseSign.mjs';
import { Sign } from '../structs/Sign.mjs';
import { Result_CVec_CVec_u8ZZNoneZ } from '../structs/Result_CVec_CVec_u8ZZNoneZ.mjs';
import { Result_InMemorySignerDecodeErrorZ } from '../structs/Result_InMemorySignerDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A simple implementation of Sign that just keeps the private keys in memory.
 *
 * This implementation performs no policy checks and is insufficient by itself as
 * a secure external signer.
 */
export class InMemorySigner extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.InMemorySigner_free);
    }
    /**
     * Private key of anchor tx
     */
    get_funding_key() {
        const ret = bindings.InMemorySigner_get_funding_key(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Private key of anchor tx
     */
    set_funding_key(val) {
        bindings.InMemorySigner_set_funding_key(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * Holder secret key for blinded revocation pubkey
     */
    get_revocation_base_key() {
        const ret = bindings.InMemorySigner_get_revocation_base_key(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Holder secret key for blinded revocation pubkey
     */
    set_revocation_base_key(val) {
        bindings.InMemorySigner_set_revocation_base_key(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * Holder secret key used for our balance in counterparty-broadcasted commitment transactions
     */
    get_payment_key() {
        const ret = bindings.InMemorySigner_get_payment_key(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Holder secret key used for our balance in counterparty-broadcasted commitment transactions
     */
    set_payment_key(val) {
        bindings.InMemorySigner_set_payment_key(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * Holder secret key used in HTLC tx
     */
    get_delayed_payment_base_key() {
        const ret = bindings.InMemorySigner_get_delayed_payment_base_key(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Holder secret key used in HTLC tx
     */
    set_delayed_payment_base_key(val) {
        bindings.InMemorySigner_set_delayed_payment_base_key(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * Holder htlc secret key used in commitment tx htlc outputs
     */
    get_htlc_base_key() {
        const ret = bindings.InMemorySigner_get_htlc_base_key(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Holder htlc secret key used in commitment tx htlc outputs
     */
    set_htlc_base_key(val) {
        bindings.InMemorySigner_set_htlc_base_key(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * Commitment seed
     */
    get_commitment_seed() {
        const ret = bindings.InMemorySigner_get_commitment_seed(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Commitment seed
     */
    set_commitment_seed(val) {
        bindings.InMemorySigner_set_commitment_seed(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    clone_ptr() {
        const ret = bindings.InMemorySigner_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the InMemorySigner
     */
    clone() {
        const ret = bindings.InMemorySigner_clone(this.ptr);
        const ret_hu_conv = new InMemorySigner(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Create a new InMemorySigner
     */
    static constructor_new(node_secret, funding_key, revocation_base_key, payment_key, delayed_payment_base_key, htlc_base_key, commitment_seed, channel_value_satoshis, channel_keys_id) {
        const ret = bindings.InMemorySigner_new(bindings.encodeUint8Array(bindings.check_arr_len(node_secret, 32)), bindings.encodeUint8Array(bindings.check_arr_len(funding_key, 32)), bindings.encodeUint8Array(bindings.check_arr_len(revocation_base_key, 32)), bindings.encodeUint8Array(bindings.check_arr_len(payment_key, 32)), bindings.encodeUint8Array(bindings.check_arr_len(delayed_payment_base_key, 32)), bindings.encodeUint8Array(bindings.check_arr_len(htlc_base_key, 32)), bindings.encodeUint8Array(bindings.check_arr_len(commitment_seed, 32)), channel_value_satoshis, bindings.encodeUint8Array(bindings.check_arr_len(channel_keys_id, 32)));
        const ret_hu_conv = new InMemorySigner(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Counterparty pubkeys.
     * Will panic if ready_channel wasn't called.
     */
    counterparty_pubkeys() {
        const ret = bindings.InMemorySigner_counterparty_pubkeys(this.ptr);
        const ret_hu_conv = new ChannelPublicKeys(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The contest_delay value specified by our counterparty and applied on holder-broadcastable
     * transactions, ie the amount of time that we have to wait to recover our funds if we
     * broadcast a transaction.
     * Will panic if ready_channel wasn't called.
     */
    counterparty_selected_contest_delay() {
        const ret = bindings.InMemorySigner_counterparty_selected_contest_delay(this.ptr);
        return ret;
    }
    /**
     * The contest_delay value specified by us and applied on transactions broadcastable
     * by our counterparty, ie the amount of time that they have to wait to recover their funds
     * if they broadcast a transaction.
     * Will panic if ready_channel wasn't called.
     */
    holder_selected_contest_delay() {
        const ret = bindings.InMemorySigner_holder_selected_contest_delay(this.ptr);
        return ret;
    }
    /**
     * Whether the holder is the initiator
     * Will panic if ready_channel wasn't called.
     */
    is_outbound() {
        const ret = bindings.InMemorySigner_is_outbound(this.ptr);
        return ret;
    }
    /**
     * Funding outpoint
     * Will panic if ready_channel wasn't called.
     */
    funding_outpoint() {
        const ret = bindings.InMemorySigner_funding_outpoint(this.ptr);
        const ret_hu_conv = new OutPoint(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Obtain a ChannelTransactionParameters for this channel, to be used when verifying or
     * building transactions.
     *
     * Will panic if ready_channel wasn't called.
     */
    get_channel_parameters() {
        const ret = bindings.InMemorySigner_get_channel_parameters(this.ptr);
        const ret_hu_conv = new ChannelTransactionParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Whether anchors should be used.
     * Will panic if ready_channel wasn't called.
     */
    opt_anchors() {
        const ret = bindings.InMemorySigner_opt_anchors(this.ptr);
        return ret;
    }
    /**
     * Sign the single input of spend_tx at index `input_idx` which spends the output
     * described by descriptor, returning the witness stack for the input.
     *
     * Returns an Err if the input at input_idx does not exist, has a non-empty script_sig,
     * is not spending the outpoint described by `descriptor.outpoint`,
     * or if an output descriptor script_pubkey does not match the one we can spend.
     */
    sign_counterparty_payment_input(spend_tx, input_idx, descriptor) {
        const ret = bindings.InMemorySigner_sign_counterparty_payment_input(this.ptr, bindings.encodeUint8Array(spend_tx), input_idx, descriptor == null ? 0n : CommonBase.get_ptr_of(descriptor));
        const ret_hu_conv = Result_CVec_CVec_u8ZZNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, descriptor);
        return ret_hu_conv;
    }
    /**
     * Sign the single input of spend_tx at index `input_idx` which spends the output
     * described by descriptor, returning the witness stack for the input.
     *
     * Returns an Err if the input at input_idx does not exist, has a non-empty script_sig,
     * is not spending the outpoint described by `descriptor.outpoint`, does not have a
     * sequence set to `descriptor.to_self_delay`, or if an output descriptor
     * script_pubkey does not match the one we can spend.
     */
    sign_dynamic_p2wsh_input(spend_tx, input_idx, descriptor) {
        const ret = bindings.InMemorySigner_sign_dynamic_p2wsh_input(this.ptr, bindings.encodeUint8Array(spend_tx), input_idx, descriptor == null ? 0n : CommonBase.get_ptr_of(descriptor));
        const ret_hu_conv = Result_CVec_CVec_u8ZZNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, descriptor);
        return ret_hu_conv;
    }
    /**
     * Constructs a new BaseSign which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned BaseSign must be freed before this_arg is
     */
    as_BaseSign() {
        const ret = bindings.InMemorySigner_as_BaseSign(this.ptr);
        const ret_hu_conv = new BaseSign(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new Sign which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Sign must be freed before this_arg is
     */
    as_Sign() {
        const ret = bindings.InMemorySigner_as_Sign(this.ptr);
        const ret_hu_conv = new Sign(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the InMemorySigner object into a byte array which can be read by InMemorySigner_read
     */
    write() {
        const ret = bindings.InMemorySigner_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a InMemorySigner from a byte array, created by InMemorySigner_write
     */
    static constructor_read(ser, arg) {
        const ret = bindings.InMemorySigner_read(bindings.encodeUint8Array(ser), bindings.encodeUint8Array(bindings.check_arr_len(arg, 32)));
        const ret_hu_conv = Result_InMemorySignerDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=InMemorySigner.mjs.map