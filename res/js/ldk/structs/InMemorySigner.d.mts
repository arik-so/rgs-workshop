import { ChannelPublicKeys } from '../structs/ChannelPublicKeys.mjs';
import { ChannelTransactionParameters } from '../structs/ChannelTransactionParameters.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { DelayedPaymentOutputDescriptor } from '../structs/DelayedPaymentOutputDescriptor.mjs';
import { StaticPaymentOutputDescriptor } from '../structs/StaticPaymentOutputDescriptor.mjs';
import { BaseSign } from '../structs/BaseSign.mjs';
import { Sign } from '../structs/Sign.mjs';
import { Result_CVec_CVec_u8ZZNoneZ } from '../structs/Result_CVec_CVec_u8ZZNoneZ.mjs';
import { Result_InMemorySignerDecodeErrorZ } from '../structs/Result_InMemorySignerDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A simple implementation of Sign that just keeps the private keys in memory.
 *
 * This implementation performs no policy checks and is insufficient by itself as
 * a secure external signer.
 */
export declare class InMemorySigner extends CommonBase {
    /**
     * Private key of anchor tx
     */
    get_funding_key(): Uint8Array;
    /**
     * Private key of anchor tx
     */
    set_funding_key(val: Uint8Array): void;
    /**
     * Holder secret key for blinded revocation pubkey
     */
    get_revocation_base_key(): Uint8Array;
    /**
     * Holder secret key for blinded revocation pubkey
     */
    set_revocation_base_key(val: Uint8Array): void;
    /**
     * Holder secret key used for our balance in counterparty-broadcasted commitment transactions
     */
    get_payment_key(): Uint8Array;
    /**
     * Holder secret key used for our balance in counterparty-broadcasted commitment transactions
     */
    set_payment_key(val: Uint8Array): void;
    /**
     * Holder secret key used in HTLC tx
     */
    get_delayed_payment_base_key(): Uint8Array;
    /**
     * Holder secret key used in HTLC tx
     */
    set_delayed_payment_base_key(val: Uint8Array): void;
    /**
     * Holder htlc secret key used in commitment tx htlc outputs
     */
    get_htlc_base_key(): Uint8Array;
    /**
     * Holder htlc secret key used in commitment tx htlc outputs
     */
    set_htlc_base_key(val: Uint8Array): void;
    /**
     * Commitment seed
     */
    get_commitment_seed(): Uint8Array;
    /**
     * Commitment seed
     */
    set_commitment_seed(val: Uint8Array): void;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the InMemorySigner
     */
    clone(): InMemorySigner;
    /**
     * Create a new InMemorySigner
     */
    static constructor_new(node_secret: Uint8Array, funding_key: Uint8Array, revocation_base_key: Uint8Array, payment_key: Uint8Array, delayed_payment_base_key: Uint8Array, htlc_base_key: Uint8Array, commitment_seed: Uint8Array, channel_value_satoshis: bigint, channel_keys_id: Uint8Array): InMemorySigner;
    /**
     * Counterparty pubkeys.
     * Will panic if ready_channel wasn't called.
     */
    counterparty_pubkeys(): ChannelPublicKeys;
    /**
     * The contest_delay value specified by our counterparty and applied on holder-broadcastable
     * transactions, ie the amount of time that we have to wait to recover our funds if we
     * broadcast a transaction.
     * Will panic if ready_channel wasn't called.
     */
    counterparty_selected_contest_delay(): number;
    /**
     * The contest_delay value specified by us and applied on transactions broadcastable
     * by our counterparty, ie the amount of time that they have to wait to recover their funds
     * if they broadcast a transaction.
     * Will panic if ready_channel wasn't called.
     */
    holder_selected_contest_delay(): number;
    /**
     * Whether the holder is the initiator
     * Will panic if ready_channel wasn't called.
     */
    is_outbound(): boolean;
    /**
     * Funding outpoint
     * Will panic if ready_channel wasn't called.
     */
    funding_outpoint(): OutPoint;
    /**
     * Obtain a ChannelTransactionParameters for this channel, to be used when verifying or
     * building transactions.
     *
     * Will panic if ready_channel wasn't called.
     */
    get_channel_parameters(): ChannelTransactionParameters;
    /**
     * Whether anchors should be used.
     * Will panic if ready_channel wasn't called.
     */
    opt_anchors(): boolean;
    /**
     * Sign the single input of spend_tx at index `input_idx` which spends the output
     * described by descriptor, returning the witness stack for the input.
     *
     * Returns an Err if the input at input_idx does not exist, has a non-empty script_sig,
     * is not spending the outpoint described by `descriptor.outpoint`,
     * or if an output descriptor script_pubkey does not match the one we can spend.
     */
    sign_counterparty_payment_input(spend_tx: Uint8Array, input_idx: number, descriptor: StaticPaymentOutputDescriptor): Result_CVec_CVec_u8ZZNoneZ;
    /**
     * Sign the single input of spend_tx at index `input_idx` which spends the output
     * described by descriptor, returning the witness stack for the input.
     *
     * Returns an Err if the input at input_idx does not exist, has a non-empty script_sig,
     * is not spending the outpoint described by `descriptor.outpoint`, does not have a
     * sequence set to `descriptor.to_self_delay`, or if an output descriptor
     * script_pubkey does not match the one we can spend.
     */
    sign_dynamic_p2wsh_input(spend_tx: Uint8Array, input_idx: number, descriptor: DelayedPaymentOutputDescriptor): Result_CVec_CVec_u8ZZNoneZ;
    /**
     * Constructs a new BaseSign which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned BaseSign must be freed before this_arg is
     */
    as_BaseSign(): BaseSign;
    /**
     * Constructs a new Sign which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Sign must be freed before this_arg is
     */
    as_Sign(): Sign;
    /**
     * Serialize the InMemorySigner object into a byte array which can be read by InMemorySigner_read
     */
    write(): Uint8Array;
    /**
     * Read a InMemorySigner from a byte array, created by InMemorySigner_write
     */
    static constructor_read(ser: Uint8Array, arg: Uint8Array): Result_InMemorySignerDecodeErrorZ;
}
