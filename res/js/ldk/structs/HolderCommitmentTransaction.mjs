import { Result_HolderCommitmentTransactionDecodeErrorZ } from '../structs/Result_HolderCommitmentTransactionDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Information needed to build and sign a holder's commitment transaction.
 *
 * The transaction is only signed once we are ready to broadcast.
 */
export class HolderCommitmentTransaction extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.HolderCommitmentTransaction_free);
    }
    /**
     * Our counterparty's signature for the transaction
     */
    get_counterparty_sig() {
        const ret = bindings.HolderCommitmentTransaction_get_counterparty_sig(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Our counterparty's signature for the transaction
     */
    set_counterparty_sig(val) {
        bindings.HolderCommitmentTransaction_set_counterparty_sig(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 64)));
    }
    /**
     * All non-dust counterparty HTLC signatures, in the order they appear in the transaction
     *
     * Returns a copy of the field.
     */
    get_counterparty_htlc_sigs() {
        const ret = bindings.HolderCommitmentTransaction_get_counterparty_htlc_sigs(this.ptr);
        const ret_conv_12_len = bindings.getArrayLength(ret);
        const ret_conv_12_arr = new Array(ret_conv_12_len).fill(null);
        for (var m = 0; m < ret_conv_12_len; m++) {
            const ret_conv_12 = bindings.getU32ArrayElem(ret, m);
            const ret_conv_12_conv = bindings.decodeUint8Array(ret_conv_12);
            ret_conv_12_arr[m] = ret_conv_12_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_12_arr;
    }
    /**
     * All non-dust counterparty HTLC signatures, in the order they appear in the transaction
     */
    set_counterparty_htlc_sigs(val) {
        bindings.HolderCommitmentTransaction_set_counterparty_htlc_sigs(this.ptr, bindings.encodeUint32Array(val != null ? val.map(val_conv_12 => bindings.encodeUint8Array(bindings.check_arr_len(val_conv_12, 64))) : null));
    }
    clone_ptr() {
        const ret = bindings.HolderCommitmentTransaction_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the HolderCommitmentTransaction
     */
    clone() {
        const ret = bindings.HolderCommitmentTransaction_clone(this.ptr);
        const ret_hu_conv = new HolderCommitmentTransaction(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the HolderCommitmentTransaction object into a byte array which can be read by HolderCommitmentTransaction_read
     */
    write() {
        const ret = bindings.HolderCommitmentTransaction_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a HolderCommitmentTransaction from a byte array, created by HolderCommitmentTransaction_write
     */
    static constructor_read(ser) {
        const ret = bindings.HolderCommitmentTransaction_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_HolderCommitmentTransactionDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Create a new holder transaction with the given counterparty signatures.
     * The funding keys are used to figure out which signature should go first when building the transaction for broadcast.
     */
    static constructor_new(commitment_tx, counterparty_sig, counterparty_htlc_sigs, holder_funding_key, counterparty_funding_key) {
        const ret = bindings.HolderCommitmentTransaction_new(commitment_tx == null ? 0n : CommonBase.get_ptr_of(commitment_tx), bindings.encodeUint8Array(bindings.check_arr_len(counterparty_sig, 64)), bindings.encodeUint32Array(counterparty_htlc_sigs != null ? counterparty_htlc_sigs.map(counterparty_htlc_sigs_conv_12 => bindings.encodeUint8Array(bindings.check_arr_len(counterparty_htlc_sigs_conv_12, 64))) : null), bindings.encodeUint8Array(bindings.check_arr_len(holder_funding_key, 33)), bindings.encodeUint8Array(bindings.check_arr_len(counterparty_funding_key, 33)));
        const ret_hu_conv = new HolderCommitmentTransaction(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, commitment_tx);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=HolderCommitmentTransaction.mjs.map