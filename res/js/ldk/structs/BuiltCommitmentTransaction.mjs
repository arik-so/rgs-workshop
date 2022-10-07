import { Result_BuiltCommitmentTransactionDecodeErrorZ } from '../structs/Result_BuiltCommitmentTransactionDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A pre-built Bitcoin commitment transaction and its txid.
 */
export class BuiltCommitmentTransaction extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.BuiltCommitmentTransaction_free);
    }
    /**
     * The commitment transaction
     */
    get_transaction() {
        const ret = bindings.BuiltCommitmentTransaction_get_transaction(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The commitment transaction
     */
    set_transaction(val) {
        bindings.BuiltCommitmentTransaction_set_transaction(this.ptr, bindings.encodeUint8Array(val));
    }
    /**
     * The txid for the commitment transaction.
     *
     * This is provided as a performance optimization, instead of calling transaction.txid()
     * multiple times.
     */
    get_txid() {
        const ret = bindings.BuiltCommitmentTransaction_get_txid(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The txid for the commitment transaction.
     *
     * This is provided as a performance optimization, instead of calling transaction.txid()
     * multiple times.
     */
    set_txid(val) {
        bindings.BuiltCommitmentTransaction_set_txid(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * Constructs a new BuiltCommitmentTransaction given each field
     */
    static constructor_new(transaction_arg, txid_arg) {
        const ret = bindings.BuiltCommitmentTransaction_new(bindings.encodeUint8Array(transaction_arg), bindings.encodeUint8Array(bindings.check_arr_len(txid_arg, 32)));
        const ret_hu_conv = new BuiltCommitmentTransaction(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.BuiltCommitmentTransaction_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the BuiltCommitmentTransaction
     */
    clone() {
        const ret = bindings.BuiltCommitmentTransaction_clone(this.ptr);
        const ret_hu_conv = new BuiltCommitmentTransaction(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the BuiltCommitmentTransaction object into a byte array which can be read by BuiltCommitmentTransaction_read
     */
    write() {
        const ret = bindings.BuiltCommitmentTransaction_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a BuiltCommitmentTransaction from a byte array, created by BuiltCommitmentTransaction_write
     */
    static constructor_read(ser) {
        const ret = bindings.BuiltCommitmentTransaction_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_BuiltCommitmentTransactionDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Get the SIGHASH_ALL sighash value of the transaction.
     *
     * This can be used to verify a signature.
     */
    get_sighash_all(funding_redeemscript, channel_value_satoshis) {
        const ret = bindings.BuiltCommitmentTransaction_get_sighash_all(this.ptr, bindings.encodeUint8Array(funding_redeemscript), channel_value_satoshis);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Sign a transaction, either because we are counter-signing the counterparty's transaction or
     * because we are about to broadcast a holder transaction.
     */
    sign(funding_key, funding_redeemscript, channel_value_satoshis) {
        const ret = bindings.BuiltCommitmentTransaction_sign(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(funding_key, 32)), bindings.encodeUint8Array(funding_redeemscript), channel_value_satoshis);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
}
//# sourceMappingURL=BuiltCommitmentTransaction.mjs.map