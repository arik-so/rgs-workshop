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
/** An implementation of BaseSign */
export interface BaseSignInterface {
    /**Gets the per-commitment point for a specific commitment number
     *
     * Note that the commitment number starts at (1 << 48) - 1 and counts backwards.
     */
    get_per_commitment_point(idx: bigint): Uint8Array;
    /**Gets the commitment secret for a specific commitment number as part of the revocation process
     *
     * An external signer implementation should error here if the commitment was already signed
     * and should refuse to sign it in the future.
     *
     * May be called more than once for the same index.
     *
     * Note that the commitment number starts at (1 << 48) - 1 and counts backwards.
     */
    release_commitment_secret(idx: bigint): Uint8Array;
    /**Validate the counterparty's signatures on the holder commitment transaction and HTLCs.
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
    validate_holder_commitment(holder_tx: HolderCommitmentTransaction, preimages: Uint8Array[]): Result_NoneNoneZ;
    /**Gets an arbitrary identifier describing the set of keys which are provided back to you in
     * some SpendableOutputDescriptor types. This should be sufficient to identify this
     * Sign object uniquely and lookup or re-derive its keys.
     */
    channel_keys_id(): Uint8Array;
    /**Create a signature for a counterparty's commitment transaction and associated HTLC transactions.
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
    sign_counterparty_commitment(commitment_tx: CommitmentTransaction, preimages: Uint8Array[]): Result_C2Tuple_SignatureCVec_SignatureZZNoneZ;
    /**Validate the counterparty's revocation.
     *
     * This is required in order for the signer to make sure that the state has moved
     * forward and it is safe to sign the next counterparty commitment.
     */
    validate_counterparty_revocation(idx: bigint, secret: Uint8Array): Result_NoneNoneZ;
    /**Create a signatures for a holder's commitment transaction and its claiming HTLC transactions.
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
    sign_holder_commitment_and_htlcs(commitment_tx: HolderCommitmentTransaction): Result_C2Tuple_SignatureCVec_SignatureZZNoneZ;
    /**Create a signature for the given input in a transaction spending an HTLC transaction output
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
    sign_justice_revoked_output(justice_tx: Uint8Array, input: number, amount: bigint, per_commitment_key: Uint8Array): Result_SignatureNoneZ;
    /**Create a signature for the given input in a transaction spending a commitment transaction
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
    sign_justice_revoked_htlc(justice_tx: Uint8Array, input: number, amount: bigint, per_commitment_key: Uint8Array, htlc: HTLCOutputInCommitment): Result_SignatureNoneZ;
    /**Create a signature for a claiming transaction for a HTLC output on a counterparty's commitment
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
    sign_counterparty_htlc_transaction(htlc_tx: Uint8Array, input: number, amount: bigint, per_commitment_point: Uint8Array, htlc: HTLCOutputInCommitment): Result_SignatureNoneZ;
    /**Create a signature for a (proposed) closing transaction.
     *
     * Note that, due to rounding, there may be one \"missing\" satoshi, and either party may have
     * chosen to forgo their output as dust.
     */
    sign_closing_transaction(closing_tx: ClosingTransaction): Result_SignatureNoneZ;
    /**Signs a channel announcement message with our funding key and our node secret key (aka
     * node_id or network_key), proving it comes from one of the channel participants.
     *
     * The first returned signature should be from our node secret key, the second from our
     * funding key.
     *
     * Note that if this fails or is rejected, the channel will not be publicly announced and
     * our counterparty may (though likely will not) close the channel on us for violating the
     * protocol.
     */
    sign_channel_announcement(msg: UnsignedChannelAnnouncement): Result_C2Tuple_SignatureSignatureZNoneZ;
    /**Set the counterparty static channel data, including basepoints,
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
    ready_channel(channel_parameters: ChannelTransactionParameters): void;
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
export declare class BaseSign extends CommonBase {
    /** Creates a new instance of BaseSign from a given implementation */
    static new_impl(arg: BaseSignInterface, pubkeys: ChannelPublicKeys): BaseSign;
    /**
     * Gets the per-commitment point for a specific commitment number
     *
     * Note that the commitment number starts at (1 << 48) - 1 and counts backwards.
     */
    get_per_commitment_point(idx: bigint): Uint8Array;
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
    release_commitment_secret(idx: bigint): Uint8Array;
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
    validate_holder_commitment(holder_tx: HolderCommitmentTransaction, preimages: Uint8Array[]): Result_NoneNoneZ;
    /**
     * Gets an arbitrary identifier describing the set of keys which are provided back to you in
     * some SpendableOutputDescriptor types. This should be sufficient to identify this
     * Sign object uniquely and lookup or re-derive its keys.
     */
    channel_keys_id(): Uint8Array;
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
    sign_counterparty_commitment(commitment_tx: CommitmentTransaction, preimages: Uint8Array[]): Result_C2Tuple_SignatureCVec_SignatureZZNoneZ;
    /**
     * Validate the counterparty's revocation.
     *
     * This is required in order for the signer to make sure that the state has moved
     * forward and it is safe to sign the next counterparty commitment.
     */
    validate_counterparty_revocation(idx: bigint, secret: Uint8Array): Result_NoneNoneZ;
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
    sign_holder_commitment_and_htlcs(commitment_tx: HolderCommitmentTransaction): Result_C2Tuple_SignatureCVec_SignatureZZNoneZ;
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
    sign_justice_revoked_output(justice_tx: Uint8Array, input: number, amount: bigint, per_commitment_key: Uint8Array): Result_SignatureNoneZ;
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
    sign_justice_revoked_htlc(justice_tx: Uint8Array, input: number, amount: bigint, per_commitment_key: Uint8Array, htlc: HTLCOutputInCommitment): Result_SignatureNoneZ;
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
    sign_counterparty_htlc_transaction(htlc_tx: Uint8Array, input: number, amount: bigint, per_commitment_point: Uint8Array, htlc: HTLCOutputInCommitment): Result_SignatureNoneZ;
    /**
     * Create a signature for a (proposed) closing transaction.
     *
     * Note that, due to rounding, there may be one \"missing\" satoshi, and either party may have
     * chosen to forgo their output as dust.
     */
    sign_closing_transaction(closing_tx: ClosingTransaction): Result_SignatureNoneZ;
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
    sign_channel_announcement(msg: UnsignedChannelAnnouncement): Result_C2Tuple_SignatureSignatureZNoneZ;
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
    ready_channel(channel_parameters: ChannelTransactionParameters): void;
    /**
     * Frees any resources associated with this object given its this_arg pointer.
     * Does not need to free the outer struct containing function pointers and may be NULL is no resources need to be freed.
     */
    get_pubkeys(): ChannelPublicKeys;
}
