import { Result_CommitmentTransactionDecodeErrorZ } from '../structs/Result_CommitmentTransactionDecodeErrorZ.mjs';
import { TrustedCommitmentTransaction } from '../structs/TrustedCommitmentTransaction.mjs';
import { Result_TrustedCommitmentTransactionNoneZ } from '../structs/Result_TrustedCommitmentTransactionNoneZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * This class tracks the per-transaction information needed to build a commitment transaction and will
 * actually build it and sign.  It is used for holder transactions that we sign only when needed
 * and for transactions we sign for the counterparty.
 *
 * This class can be used inside a signer implementation to generate a signature given the relevant
 * secret key.
 */
export class CommitmentTransaction extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.CommitmentTransaction_free);
    }
    clone_ptr() {
        const ret = bindings.CommitmentTransaction_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the CommitmentTransaction
     */
    clone() {
        const ret = bindings.CommitmentTransaction_clone(this.ptr);
        const ret_hu_conv = new CommitmentTransaction(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the CommitmentTransaction object into a byte array which can be read by CommitmentTransaction_read
     */
    write() {
        const ret = bindings.CommitmentTransaction_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a CommitmentTransaction from a byte array, created by CommitmentTransaction_write
     */
    static constructor_read(ser) {
        const ret = bindings.CommitmentTransaction_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_CommitmentTransactionDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * The backwards-counting commitment number
     */
    commitment_number() {
        const ret = bindings.CommitmentTransaction_commitment_number(this.ptr);
        return ret;
    }
    /**
     * The value to be sent to the broadcaster
     */
    to_broadcaster_value_sat() {
        const ret = bindings.CommitmentTransaction_to_broadcaster_value_sat(this.ptr);
        return ret;
    }
    /**
     * The value to be sent to the counterparty
     */
    to_countersignatory_value_sat() {
        const ret = bindings.CommitmentTransaction_to_countersignatory_value_sat(this.ptr);
        return ret;
    }
    /**
     * The feerate paid per 1000-weight-unit in this commitment transaction.
     */
    feerate_per_kw() {
        const ret = bindings.CommitmentTransaction_feerate_per_kw(this.ptr);
        return ret;
    }
    /**
     * Trust our pre-built transaction and derived transaction creation public keys.
     *
     * Applies a wrapper which allows access to these fields.
     *
     * This should only be used if you fully trust the builder of this object.  It should not
     * be used by an external signer - instead use the verify function.
     */
    trust() {
        const ret = bindings.CommitmentTransaction_trust(this.ptr);
        const ret_hu_conv = new TrustedCommitmentTransaction(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Verify our pre-built transaction and derived transaction creation public keys.
     *
     * Applies a wrapper which allows access to these fields.
     *
     * An external validating signer must call this method before signing
     * or using the built transaction.
     */
    verify(channel_parameters, broadcaster_keys, countersignatory_keys) {
        const ret = bindings.CommitmentTransaction_verify(this.ptr, channel_parameters == null ? 0n : CommonBase.get_ptr_of(channel_parameters), broadcaster_keys == null ? 0n : CommonBase.get_ptr_of(broadcaster_keys), countersignatory_keys == null ? 0n : CommonBase.get_ptr_of(countersignatory_keys));
        const ret_hu_conv = Result_TrustedCommitmentTransactionNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, channel_parameters);
        CommonBase.add_ref_from(this, broadcaster_keys);
        CommonBase.add_ref_from(this, countersignatory_keys);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=CommitmentTransaction.mjs.map