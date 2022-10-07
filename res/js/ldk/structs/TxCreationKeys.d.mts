import { Result_TxCreationKeysDecodeErrorZ } from '../structs/Result_TxCreationKeysDecodeErrorZ.mjs';
import { ChannelPublicKeys } from '../structs/ChannelPublicKeys.mjs';
import { Result_TxCreationKeysErrorZ } from '../structs/Result_TxCreationKeysErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * The set of public keys which are used in the creation of one commitment transaction.
 * These are derived from the channel base keys and per-commitment data.
 *
 * A broadcaster key is provided from potential broadcaster of the computed transaction.
 * A countersignatory key is coming from a protocol participant unable to broadcast the
 * transaction.
 *
 * These keys are assumed to be good, either because the code derived them from
 * channel basepoints via the new function, or they were obtained via
 * CommitmentTransaction.trust().keys() because we trusted the source of the
 * pre-calculated keys.
 */
export declare class TxCreationKeys extends CommonBase {
    /**
     * The broadcaster's per-commitment public key which was used to derive the other keys.
     */
    get_per_commitment_point(): Uint8Array;
    /**
     * The broadcaster's per-commitment public key which was used to derive the other keys.
     */
    set_per_commitment_point(val: Uint8Array): void;
    /**
     * The revocation key which is used to allow the broadcaster of the commitment
     * transaction to provide their counterparty the ability to punish them if they broadcast
     * an old state.
     */
    get_revocation_key(): Uint8Array;
    /**
     * The revocation key which is used to allow the broadcaster of the commitment
     * transaction to provide their counterparty the ability to punish them if they broadcast
     * an old state.
     */
    set_revocation_key(val: Uint8Array): void;
    /**
     * Broadcaster's HTLC Key
     */
    get_broadcaster_htlc_key(): Uint8Array;
    /**
     * Broadcaster's HTLC Key
     */
    set_broadcaster_htlc_key(val: Uint8Array): void;
    /**
     * Countersignatory's HTLC Key
     */
    get_countersignatory_htlc_key(): Uint8Array;
    /**
     * Countersignatory's HTLC Key
     */
    set_countersignatory_htlc_key(val: Uint8Array): void;
    /**
     * Broadcaster's Payment Key (which isn't allowed to be spent from for some delay)
     */
    get_broadcaster_delayed_payment_key(): Uint8Array;
    /**
     * Broadcaster's Payment Key (which isn't allowed to be spent from for some delay)
     */
    set_broadcaster_delayed_payment_key(val: Uint8Array): void;
    /**
     * Constructs a new TxCreationKeys given each field
     */
    static constructor_new(per_commitment_point_arg: Uint8Array, revocation_key_arg: Uint8Array, broadcaster_htlc_key_arg: Uint8Array, countersignatory_htlc_key_arg: Uint8Array, broadcaster_delayed_payment_key_arg: Uint8Array): TxCreationKeys;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the TxCreationKeys
     */
    clone(): TxCreationKeys;
    /**
     * Serialize the TxCreationKeys object into a byte array which can be read by TxCreationKeys_read
     */
    write(): Uint8Array;
    /**
     * Read a TxCreationKeys from a byte array, created by TxCreationKeys_write
     */
    static constructor_read(ser: Uint8Array): Result_TxCreationKeysDecodeErrorZ;
    /**
     * Create per-state keys from channel base points and the per-commitment point.
     * Key set is asymmetric and can't be used as part of counter-signatory set of transactions.
     */
    static constructor_derive_new(per_commitment_point: Uint8Array, broadcaster_delayed_payment_base: Uint8Array, broadcaster_htlc_base: Uint8Array, countersignatory_revocation_base: Uint8Array, countersignatory_htlc_base: Uint8Array): Result_TxCreationKeysErrorZ;
    /**
     * Generate per-state keys from channel static keys.
     * Key set is asymmetric and can't be used as part of counter-signatory set of transactions.
     */
    static constructor_from_channel_static_keys(per_commitment_point: Uint8Array, broadcaster_keys: ChannelPublicKeys, countersignatory_keys: ChannelPublicKeys): Result_TxCreationKeysErrorZ;
}
