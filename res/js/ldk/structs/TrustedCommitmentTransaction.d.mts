import { TxCreationKeys } from '../structs/TxCreationKeys.mjs';
import { BuiltCommitmentTransaction } from '../structs/BuiltCommitmentTransaction.mjs';
import { Result_CVec_SignatureZNoneZ } from '../structs/Result_CVec_SignatureZNoneZ.mjs';
import { DirectedChannelTransactionParameters } from '../structs/DirectedChannelTransactionParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A wrapper on CommitmentTransaction indicating that the derived fields (the built bitcoin
 * transaction and the transaction creation keys) are trusted.
 *
 * See trust() and verify() functions on CommitmentTransaction.
 *
 * This structure implements Deref.
 */
export declare class TrustedCommitmentTransaction extends CommonBase {
    /**
     * The transaction ID of the built Bitcoin transaction
     */
    txid(): Uint8Array;
    /**
     * The pre-built Bitcoin commitment transaction
     */
    built_transaction(): BuiltCommitmentTransaction;
    /**
     * The pre-calculated transaction creation public keys.
     */
    keys(): TxCreationKeys;
    /**
     * Should anchors be used.
     */
    opt_anchors(): boolean;
    /**
     * Get a signature for each HTLC which was included in the commitment transaction (ie for
     * which HTLCOutputInCommitment::transaction_output_index.is_some()).
     *
     * The returned Vec has one entry for each HTLC, and in the same order.
     *
     * This function is only valid in the holder commitment context, it always uses EcdsaSighashType::All.
     */
    get_htlc_sigs(htlc_base_key: Uint8Array, channel_parameters: DirectedChannelTransactionParameters): Result_CVec_SignatureZNoneZ;
}
