import { ChannelPublicKeys } from '../structs/ChannelPublicKeys.mjs';
import { Result_CommitmentTransactionDecodeErrorZ } from '../structs/Result_CommitmentTransactionDecodeErrorZ.mjs';
import { TrustedCommitmentTransaction } from '../structs/TrustedCommitmentTransaction.mjs';
import { Result_TrustedCommitmentTransactionNoneZ } from '../structs/Result_TrustedCommitmentTransactionNoneZ.mjs';
import { DirectedChannelTransactionParameters } from '../structs/DirectedChannelTransactionParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * This class tracks the per-transaction information needed to build a commitment transaction and will
 * actually build it and sign.  It is used for holder transactions that we sign only when needed
 * and for transactions we sign for the counterparty.
 *
 * This class can be used inside a signer implementation to generate a signature given the relevant
 * secret key.
 */
export declare class CommitmentTransaction extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the CommitmentTransaction
     */
    clone(): CommitmentTransaction;
    /**
     * Serialize the CommitmentTransaction object into a byte array which can be read by CommitmentTransaction_read
     */
    write(): Uint8Array;
    /**
     * Read a CommitmentTransaction from a byte array, created by CommitmentTransaction_write
     */
    static constructor_read(ser: Uint8Array): Result_CommitmentTransactionDecodeErrorZ;
    /**
     * The backwards-counting commitment number
     */
    commitment_number(): bigint;
    /**
     * The value to be sent to the broadcaster
     */
    to_broadcaster_value_sat(): bigint;
    /**
     * The value to be sent to the counterparty
     */
    to_countersignatory_value_sat(): bigint;
    /**
     * The feerate paid per 1000-weight-unit in this commitment transaction.
     */
    feerate_per_kw(): number;
    /**
     * Trust our pre-built transaction and derived transaction creation public keys.
     *
     * Applies a wrapper which allows access to these fields.
     *
     * This should only be used if you fully trust the builder of this object.  It should not
     * be used by an external signer - instead use the verify function.
     */
    trust(): TrustedCommitmentTransaction;
    /**
     * Verify our pre-built transaction and derived transaction creation public keys.
     *
     * Applies a wrapper which allows access to these fields.
     *
     * An external validating signer must call this method before signing
     * or using the built transaction.
     */
    verify(channel_parameters: DirectedChannelTransactionParameters, broadcaster_keys: ChannelPublicKeys, countersignatory_keys: ChannelPublicKeys): Result_TrustedCommitmentTransactionNoneZ;
}