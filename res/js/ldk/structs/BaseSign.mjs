import { Result_NoneNoneZ } from '../structs/Result_NoneNoneZ.mjs';
import { ChannelPublicKeys } from '../structs/ChannelPublicKeys.mjs';
import { HTLCOutputInCommitment } from '../structs/HTLCOutputInCommitment.mjs';
import { ChannelTransactionParameters } from '../structs/ChannelTransactionParameters.mjs';
import { HolderCommitmentTransaction } from '../structs/HolderCommitmentTransaction.mjs';
import { CommitmentTransaction } from '../structs/CommitmentTransaction.mjs';
import { Result_C2Tuple_SignatureCVec_SignatureZZNoneZ } from '../structs/Result_C2Tuple_SignatureCVec_SignatureZZNoneZ.mjs';
import { Result_SignatureNoneZ } from '../structs/Result_SignatureNoneZ.mjs';
import { Result_C2Tuple_SignatureSignatureZNoneZ } from '../structs/Result_C2Tuple_SignatureSignatureZNoneZ.mjs';
import { ClosingTransaction } from '../structs/ClosingTransaction.mjs';
import { UnsignedChannelAnnouncement } from '../structs/UnsignedChannelAnnouncement.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKBaseSignHolder {
}
/**
 * A trait to sign lightning channel transactions as described in BOLT 3.
 *
 * Signing services could be implemented on a hardware wallet. In this case,
 * the current Sign would be a front-end on top of a communication
 * channel connected to your secure device and lightning key material wouldn't
 * reside on a hot server. Nevertheless, a this deployment would still need
 * to trust the ChannelManager to avoid loss of funds as this latest component
 * could ask to sign commitment transaction with HTLCs paying to attacker pubkeys.
 *
 * A more secure iteration would be to use hashlock (or payment points) to pair
 * invoice/incoming HTLCs with outgoing HTLCs to implement a no-trust-ChannelManager
 * at the price of more state and computation on the hardware wallet side. In the future,
 * we are looking forward to design such interface.
 *
 * In any case, ChannelMonitor or fallback watchtowers are always going to be trusted
 * to act, as liveness and breach reply correctness are always going to be hard requirements
 * of LN security model, orthogonal of key management issues.
 */
export class BaseSign extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.BaseSign_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of BaseSign from a given implementation */
    static new_impl(arg, pubkeys) {
        const impl_holder = new LDKBaseSignHolder();
        let structImplementation = {
            get_per_commitment_point(idx) {
                const ret = arg.get_per_commitment_point(idx);
                const result = bindings.encodeUint8Array(bindings.check_arr_len(ret, 33));
                return result;
            },
            release_commitment_secret(idx) {
                const ret = arg.release_commitment_secret(idx);
                const result = bindings.encodeUint8Array(bindings.check_arr_len(ret, 32));
                return result;
            },
            validate_holder_commitment(holder_tx, preimages) {
                const holder_tx_hu_conv = new HolderCommitmentTransaction(null, holder_tx);
                const preimages_conv_12_len = bindings.getArrayLength(preimages);
                const preimages_conv_12_arr = new Array(preimages_conv_12_len).fill(null);
                for (var m = 0; m < preimages_conv_12_len; m++) {
                    const preimages_conv_12 = bindings.getU32ArrayElem(preimages, m);
                    const preimages_conv_12_conv = bindings.decodeUint8Array(preimages_conv_12);
                    preimages_conv_12_arr[m] = preimages_conv_12_conv;
                }
                bindings.freeWasmMemory(preimages);
                const ret = arg.validate_holder_commitment(holder_tx_hu_conv, preimages_conv_12_arr);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            channel_keys_id() {
                const ret = arg.channel_keys_id();
                const result = bindings.encodeUint8Array(bindings.check_arr_len(ret, 32));
                return result;
            },
            sign_counterparty_commitment(commitment_tx, preimages) {
                const commitment_tx_hu_conv = new CommitmentTransaction(null, commitment_tx);
                const preimages_conv_12_len = bindings.getArrayLength(preimages);
                const preimages_conv_12_arr = new Array(preimages_conv_12_len).fill(null);
                for (var m = 0; m < preimages_conv_12_len; m++) {
                    const preimages_conv_12 = bindings.getU32ArrayElem(preimages, m);
                    const preimages_conv_12_conv = bindings.decodeUint8Array(preimages_conv_12);
                    preimages_conv_12_arr[m] = preimages_conv_12_conv;
                }
                bindings.freeWasmMemory(preimages);
                const ret = arg.sign_counterparty_commitment(commitment_tx_hu_conv, preimages_conv_12_arr);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            validate_counterparty_revocation(idx, secret) {
                const secret_conv = bindings.decodeUint8Array(secret);
                const ret = arg.validate_counterparty_revocation(idx, secret_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            sign_holder_commitment_and_htlcs(commitment_tx) {
                const commitment_tx_hu_conv = new HolderCommitmentTransaction(null, commitment_tx);
                const ret = arg.sign_holder_commitment_and_htlcs(commitment_tx_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            sign_justice_revoked_output(justice_tx, input, amount, per_commitment_key) {
                const justice_tx_conv = bindings.decodeUint8Array(justice_tx);
                const per_commitment_key_conv = bindings.decodeUint8Array(per_commitment_key);
                const ret = arg.sign_justice_revoked_output(justice_tx_conv, input, amount, per_commitment_key_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            sign_justice_revoked_htlc(justice_tx, input, amount, per_commitment_key, htlc) {
                const justice_tx_conv = bindings.decodeUint8Array(justice_tx);
                const per_commitment_key_conv = bindings.decodeUint8Array(per_commitment_key);
                const htlc_hu_conv = new HTLCOutputInCommitment(null, htlc);
                const ret = arg.sign_justice_revoked_htlc(justice_tx_conv, input, amount, per_commitment_key_conv, htlc_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            sign_counterparty_htlc_transaction(htlc_tx, input, amount, per_commitment_point, htlc) {
                const htlc_tx_conv = bindings.decodeUint8Array(htlc_tx);
                const per_commitment_point_conv = bindings.decodeUint8Array(per_commitment_point);
                const htlc_hu_conv = new HTLCOutputInCommitment(null, htlc);
                const ret = arg.sign_counterparty_htlc_transaction(htlc_tx_conv, input, amount, per_commitment_point_conv, htlc_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            sign_closing_transaction(closing_tx) {
                const closing_tx_hu_conv = new ClosingTransaction(null, closing_tx);
                const ret = arg.sign_closing_transaction(closing_tx_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            sign_channel_announcement(msg) {
                const msg_hu_conv = new UnsignedChannelAnnouncement(null, msg);
                const ret = arg.sign_channel_announcement(msg_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            ready_channel(channel_parameters) {
                const channel_parameters_hu_conv = new ChannelTransactionParameters(null, channel_parameters);
                arg.ready_channel(channel_parameters_hu_conv);
            },
        };
        const ptr_idx = bindings.LDKBaseSign_new(structImplementation, pubkeys == null ? 0n : pubkeys.clone_ptr());
        impl_holder.held = new BaseSign(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Gets the per-commitment point for a specific commitment number
     *
     * Note that the commitment number starts at (1 << 48) - 1 and counts backwards.
     */
    get_per_commitment_point(idx) {
        const ret = bindings.BaseSign_get_per_commitment_point(this.ptr, idx);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Gets the commitment secret for a specific commitment number as part of the revocation process
     *
     * An external signer implementation should error here if the commitment was already signed
     * and should refuse to sign it in the future.
     *
     * May be called more than once for the same index.
     *
     * Note that the commitment number starts at (1 << 48) - 1 and counts backwards.
     */
    release_commitment_secret(idx) {
        const ret = bindings.BaseSign_release_commitment_secret(this.ptr, idx);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Validate the counterparty's signatures on the holder commitment transaction and HTLCs.
     *
     * This is required in order for the signer to make sure that releasing a commitment
     * secret won't leave us without a broadcastable holder transaction.
     * Policy checks should be implemented in this function, including checking the amount
     * sent to us and checking the HTLCs.
     *
     * The preimages of outgoing HTLCs that were fulfilled since the last commitment are provided.
     * A validating signer should ensure that an HTLC output is removed only when the matching
     * preimage is provided, or when the value to holder is restored.
     *
     * NOTE: all the relevant preimages will be provided, but there may also be additional
     * irrelevant or duplicate preimages.
     */
    validate_holder_commitment(holder_tx, preimages) {
        const ret = bindings.BaseSign_validate_holder_commitment(this.ptr, holder_tx == null ? 0n : CommonBase.get_ptr_of(holder_tx), bindings.encodeUint32Array(preimages != null ? preimages.map(preimages_conv_12 => bindings.encodeUint8Array(bindings.check_arr_len(preimages_conv_12, 32))) : null));
        const ret_hu_conv = Result_NoneNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, holder_tx);
        return ret_hu_conv;
    }
    /**
     * Gets an arbitrary identifier describing the set of keys which are provided back to you in
     * some SpendableOutputDescriptor types. This should be sufficient to identify this
     * Sign object uniquely and lookup or re-derive its keys.
     */
    channel_keys_id() {
        const ret = bindings.BaseSign_channel_keys_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Create a signature for a counterparty's commitment transaction and associated HTLC transactions.
     *
     * Note that if signing fails or is rejected, the channel will be force-closed.
     *
     * Policy checks should be implemented in this function, including checking the amount
     * sent to us and checking the HTLCs.
     *
     * The preimages of outgoing HTLCs that were fulfilled since the last commitment are provided.
     * A validating signer should ensure that an HTLC output is removed only when the matching
     * preimage is provided, or when the value to holder is restored.
     *
     * NOTE: all the relevant preimages will be provided, but there may also be additional
     * irrelevant or duplicate preimages.
     */
    sign_counterparty_commitment(commitment_tx, preimages) {
        const ret = bindings.BaseSign_sign_counterparty_commitment(this.ptr, commitment_tx == null ? 0n : CommonBase.get_ptr_of(commitment_tx), bindings.encodeUint32Array(preimages != null ? preimages.map(preimages_conv_12 => bindings.encodeUint8Array(bindings.check_arr_len(preimages_conv_12, 32))) : null));
        const ret_hu_conv = Result_C2Tuple_SignatureCVec_SignatureZZNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, commitment_tx);
        return ret_hu_conv;
    }
    /**
     * Validate the counterparty's revocation.
     *
     * This is required in order for the signer to make sure that the state has moved
     * forward and it is safe to sign the next counterparty commitment.
     */
    validate_counterparty_revocation(idx, secret) {
        const ret = bindings.BaseSign_validate_counterparty_revocation(this.ptr, idx, bindings.encodeUint8Array(bindings.check_arr_len(secret, 32)));
        const ret_hu_conv = Result_NoneNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Create a signatures for a holder's commitment transaction and its claiming HTLC transactions.
     * This will only ever be called with a non-revoked commitment_tx.  This will be called with the
     * latest commitment_tx when we initiate a force-close.
     * This will be called with the previous latest, just to get claiming HTLC signatures, if we are
     * reacting to a ChannelMonitor replica that decided to broadcast before it had been updated to
     * the latest.
     * This may be called multiple times for the same transaction.
     *
     * An external signer implementation should check that the commitment has not been revoked.
     *
     * May return Err if key derivation fails.  Callers, such as ChannelMonitor, will panic in such a case.
     */
    sign_holder_commitment_and_htlcs(commitment_tx) {
        const ret = bindings.BaseSign_sign_holder_commitment_and_htlcs(this.ptr, commitment_tx == null ? 0n : CommonBase.get_ptr_of(commitment_tx));
        const ret_hu_conv = Result_C2Tuple_SignatureCVec_SignatureZZNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, commitment_tx);
        return ret_hu_conv;
    }
    /**
     * Create a signature for the given input in a transaction spending an HTLC transaction output
     * or a commitment transaction `to_local` output when our counterparty broadcasts an old state.
     *
     * A justice transaction may claim multiple outputs at the same time if timelocks are
     * similar, but only a signature for the input at index `input` should be signed for here.
     * It may be called multiple times for same output(s) if a fee-bump is needed with regards
     * to an upcoming timelock expiration.
     *
     * Amount is value of the output spent by this input, committed to in the BIP 143 signature.
     *
     * per_commitment_key is revocation secret which was provided by our counterparty when they
     * revoked the state which they eventually broadcast. It's not a _holder_ secret key and does
     * not allow the spending of any funds by itself (you need our holder revocation_secret to do
     * so).
     */
    sign_justice_revoked_output(justice_tx, input, amount, per_commitment_key) {
        const ret = bindings.BaseSign_sign_justice_revoked_output(this.ptr, bindings.encodeUint8Array(justice_tx), input, amount, bindings.encodeUint8Array(bindings.check_arr_len(per_commitment_key, 32)));
        const ret_hu_conv = Result_SignatureNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Create a signature for the given input in a transaction spending a commitment transaction
     * HTLC output when our counterparty broadcasts an old state.
     *
     * A justice transaction may claim multiple outputs at the same time if timelocks are
     * similar, but only a signature for the input at index `input` should be signed for here.
     * It may be called multiple times for same output(s) if a fee-bump is needed with regards
     * to an upcoming timelock expiration.
     *
     * Amount is value of the output spent by this input, committed to in the BIP 143 signature.
     *
     * per_commitment_key is revocation secret which was provided by our counterparty when they
     * revoked the state which they eventually broadcast. It's not a _holder_ secret key and does
     * not allow the spending of any funds by itself (you need our holder revocation_secret to do
     * so).
     *
     * htlc holds HTLC elements (hash, timelock), thus changing the format of the witness script
     * (which is committed to in the BIP 143 signatures).
     */
    sign_justice_revoked_htlc(justice_tx, input, amount, per_commitment_key, htlc) {
        const ret = bindings.BaseSign_sign_justice_revoked_htlc(this.ptr, bindings.encodeUint8Array(justice_tx), input, amount, bindings.encodeUint8Array(bindings.check_arr_len(per_commitment_key, 32)), htlc == null ? 0n : CommonBase.get_ptr_of(htlc));
        const ret_hu_conv = Result_SignatureNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, htlc);
        return ret_hu_conv;
    }
    /**
     * Create a signature for a claiming transaction for a HTLC output on a counterparty's commitment
     * transaction, either offered or received.
     *
     * Such a transaction may claim multiples offered outputs at same time if we know the
     * preimage for each when we create it, but only the input at index `input` should be
     * signed for here. It may be called multiple times for same output(s) if a fee-bump is
     * needed with regards to an upcoming timelock expiration.
     *
     * Witness_script is either a offered or received script as defined in BOLT3 for HTLC
     * outputs.
     *
     * Amount is value of the output spent by this input, committed to in the BIP 143 signature.
     *
     * Per_commitment_point is the dynamic point corresponding to the channel state
     * detected onchain. It has been generated by our counterparty and is used to derive
     * channel state keys, which are then included in the witness script and committed to in the
     * BIP 143 signature.
     */
    sign_counterparty_htlc_transaction(htlc_tx, input, amount, per_commitment_point, htlc) {
        const ret = bindings.BaseSign_sign_counterparty_htlc_transaction(this.ptr, bindings.encodeUint8Array(htlc_tx), input, amount, bindings.encodeUint8Array(bindings.check_arr_len(per_commitment_point, 33)), htlc == null ? 0n : CommonBase.get_ptr_of(htlc));
        const ret_hu_conv = Result_SignatureNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, htlc);
        return ret_hu_conv;
    }
    /**
     * Create a signature for a (proposed) closing transaction.
     *
     * Note that, due to rounding, there may be one \"missing\" satoshi, and either party may have
     * chosen to forgo their output as dust.
     */
    sign_closing_transaction(closing_tx) {
        const ret = bindings.BaseSign_sign_closing_transaction(this.ptr, closing_tx == null ? 0n : CommonBase.get_ptr_of(closing_tx));
        const ret_hu_conv = Result_SignatureNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, closing_tx);
        return ret_hu_conv;
    }
    /**
     * Signs a channel announcement message with our funding key and our node secret key (aka
     * node_id or network_key), proving it comes from one of the channel participants.
     *
     * The first returned signature should be from our node secret key, the second from our
     * funding key.
     *
     * Note that if this fails or is rejected, the channel will not be publicly announced and
     * our counterparty may (though likely will not) close the channel on us for violating the
     * protocol.
     */
    sign_channel_announcement(msg) {
        const ret = bindings.BaseSign_sign_channel_announcement(this.ptr, msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = Result_C2Tuple_SignatureSignatureZNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, msg);
        return ret_hu_conv;
    }
    /**
     * Set the counterparty static channel data, including basepoints,
     * counterparty_selected/holder_selected_contest_delay and funding outpoint.
     * This is done as soon as the funding outpoint is known.  Since these are static channel data,
     * they MUST NOT be allowed to change to different values once set.
     *
     * channel_parameters.is_populated() MUST be true.
     *
     * We bind holder_selected_contest_delay late here for API convenience.
     *
     * Will be called before any signatures are applied.
     */
    ready_channel(channel_parameters) {
        bindings.BaseSign_ready_channel(this.ptr, channel_parameters == null ? 0n : CommonBase.get_ptr_of(channel_parameters));
        CommonBase.add_ref_from(this, channel_parameters);
    }
    /**
     * Frees any resources associated with this object given its this_arg pointer.
     * Does not need to free the outer struct containing function pointers and may be NULL is no resources need to be freed.
     */
    get_pubkeys() {
        const ret = bindings.BaseSign_get_pubkeys(this.ptr);
        const ret_hu_conv = new ChannelPublicKeys(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=BaseSign.mjs.map