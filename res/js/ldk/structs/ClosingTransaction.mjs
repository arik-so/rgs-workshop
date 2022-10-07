import { TrustedClosingTransaction } from '../structs/TrustedClosingTransaction.mjs';
import { Result_TrustedClosingTransactionNoneZ } from '../structs/Result_TrustedClosingTransactionNoneZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * This class tracks the per-transaction information needed to build a closing transaction and will
 * actually build it and sign.
 *
 * This class can be used inside a signer implementation to generate a signature given the relevant
 * secret key.
 */
export class ClosingTransaction extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ClosingTransaction_free);
    }
    clone_ptr() {
        const ret = bindings.ClosingTransaction_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ClosingTransaction
     */
    clone() {
        const ret = bindings.ClosingTransaction_clone(this.ptr);
        const ret_hu_conv = new ClosingTransaction(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two ClosingTransactions contain equal inner contents.
     */
    hash() {
        const ret = bindings.ClosingTransaction_hash(this.ptr);
        return ret;
    }
    /**
     * Construct an object of the class
     */
    static constructor_new(to_holder_value_sat, to_counterparty_value_sat, to_holder_script, to_counterparty_script, funding_outpoint) {
        const ret = bindings.ClosingTransaction_new(to_holder_value_sat, to_counterparty_value_sat, bindings.encodeUint8Array(to_holder_script), bindings.encodeUint8Array(to_counterparty_script), funding_outpoint == null ? 0n : CommonBase.get_ptr_of(funding_outpoint));
        const ret_hu_conv = new ClosingTransaction(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, funding_outpoint);
        return ret_hu_conv;
    }
    /**
     * Trust our pre-built transaction.
     *
     * Applies a wrapper which allows access to the transaction.
     *
     * This should only be used if you fully trust the builder of this object. It should not
     * be used by an external signer - instead use the verify function.
     */
    trust() {
        const ret = bindings.ClosingTransaction_trust(this.ptr);
        const ret_hu_conv = new TrustedClosingTransaction(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Verify our pre-built transaction.
     *
     * Applies a wrapper which allows access to the transaction.
     *
     * An external validating signer must call this method before signing
     * or using the built transaction.
     */
    verify(funding_outpoint) {
        const ret = bindings.ClosingTransaction_verify(this.ptr, funding_outpoint == null ? 0n : CommonBase.get_ptr_of(funding_outpoint));
        const ret_hu_conv = Result_TrustedClosingTransactionNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, funding_outpoint);
        return ret_hu_conv;
    }
    /**
     * The value to be sent to the holder, or zero if the output will be omitted
     */
    to_holder_value_sat() {
        const ret = bindings.ClosingTransaction_to_holder_value_sat(this.ptr);
        return ret;
    }
    /**
     * The value to be sent to the counterparty, or zero if the output will be omitted
     */
    to_counterparty_value_sat() {
        const ret = bindings.ClosingTransaction_to_counterparty_value_sat(this.ptr);
        return ret;
    }
    /**
     * The destination of the holder's output
     */
    to_holder_script() {
        const ret = bindings.ClosingTransaction_to_holder_script(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The destination of the counterparty's output
     */
    to_counterparty_script() {
        const ret = bindings.ClosingTransaction_to_counterparty_script(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
}
//# sourceMappingURL=ClosingTransaction.mjs.map