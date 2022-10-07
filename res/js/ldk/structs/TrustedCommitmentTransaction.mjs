import { TxCreationKeys } from '../structs/TxCreationKeys.mjs';
import { BuiltCommitmentTransaction } from '../structs/BuiltCommitmentTransaction.mjs';
import { Result_CVec_SignatureZNoneZ } from '../structs/Result_CVec_SignatureZNoneZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A wrapper on CommitmentTransaction indicating that the derived fields (the built bitcoin
 * transaction and the transaction creation keys) are trusted.
 *
 * See trust() and verify() functions on CommitmentTransaction.
 *
 * This structure implements Deref.
 */
export class TrustedCommitmentTransaction extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.TrustedCommitmentTransaction_free);
    }
    /**
     * The transaction ID of the built Bitcoin transaction
     */
    txid() {
        const ret = bindings.TrustedCommitmentTransaction_txid(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The pre-built Bitcoin commitment transaction
     */
    built_transaction() {
        const ret = bindings.TrustedCommitmentTransaction_built_transaction(this.ptr);
        const ret_hu_conv = new BuiltCommitmentTransaction(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The pre-calculated transaction creation public keys.
     */
    keys() {
        const ret = bindings.TrustedCommitmentTransaction_keys(this.ptr);
        const ret_hu_conv = new TxCreationKeys(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Should anchors be used.
     */
    opt_anchors() {
        const ret = bindings.TrustedCommitmentTransaction_opt_anchors(this.ptr);
        return ret;
    }
    /**
     * Get a signature for each HTLC which was included in the commitment transaction (ie for
     * which HTLCOutputInCommitment::transaction_output_index.is_some()).
     *
     * The returned Vec has one entry for each HTLC, and in the same order.
     *
     * This function is only valid in the holder commitment context, it always uses EcdsaSighashType::All.
     */
    get_htlc_sigs(htlc_base_key, channel_parameters) {
        const ret = bindings.TrustedCommitmentTransaction_get_htlc_sigs(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(htlc_base_key, 32)), channel_parameters == null ? 0n : CommonBase.get_ptr_of(channel_parameters));
        const ret_hu_conv = Result_CVec_SignatureZNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, channel_parameters);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=TrustedCommitmentTransaction.mjs.map