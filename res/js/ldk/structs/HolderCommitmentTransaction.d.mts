import { Result_HolderCommitmentTransactionDecodeErrorZ } from '../structs/Result_HolderCommitmentTransactionDecodeErrorZ.mjs';
import { CommitmentTransaction } from '../structs/CommitmentTransaction.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Information needed to build and sign a holder's commitment transaction.
 *
 * The transaction is only signed once we are ready to broadcast.
 */
export declare class HolderCommitmentTransaction extends CommonBase {
    /**
     * Our counterparty's signature for the transaction
     */
    get_counterparty_sig(): Uint8Array;
    /**
     * Our counterparty's signature for the transaction
     */
    set_counterparty_sig(val: Uint8Array): void;
    /**
     * All non-dust counterparty HTLC signatures, in the order they appear in the transaction
     *
     * Returns a copy of the field.
     */
    get_counterparty_htlc_sigs(): Uint8Array[];
    /**
     * All non-dust counterparty HTLC signatures, in the order they appear in the transaction
     */
    set_counterparty_htlc_sigs(val: Uint8Array[]): void;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the HolderCommitmentTransaction
     */
    clone(): HolderCommitmentTransaction;
    /**
     * Serialize the HolderCommitmentTransaction object into a byte array which can be read by HolderCommitmentTransaction_read
     */
    write(): Uint8Array;
    /**
     * Read a HolderCommitmentTransaction from a byte array, created by HolderCommitmentTransaction_write
     */
    static constructor_read(ser: Uint8Array): Result_HolderCommitmentTransactionDecodeErrorZ;
    /**
     * Create a new holder transaction with the given counterparty signatures.
     * The funding keys are used to figure out which signature should go first when building the transaction for broadcast.
     */
    static constructor_new(commitment_tx: CommitmentTransaction, counterparty_sig: Uint8Array, counterparty_htlc_sigs: Uint8Array[], holder_funding_key: Uint8Array, counterparty_funding_key: Uint8Array): HolderCommitmentTransaction;
}
