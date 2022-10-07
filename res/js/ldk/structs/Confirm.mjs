import { TwoTuple_usizeTransactionZ } from '../structs/TwoTuple_usizeTransactionZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKConfirmHolder {
}
/**
 * The `Confirm` trait is used to notify when transactions have been confirmed on chain or
 * unconfirmed during a chain reorganization.
 *
 * Clients sourcing chain data using a transaction-oriented API should prefer this interface over
 * [`Listen`]. For instance, an Electrum client may implement [`Filter`] by subscribing to activity
 * related to registered transactions and outputs. Upon notification, it would pass along the
 * matching transactions using this interface.
 *
 * # Use
 *
 * The intended use is as follows:
 * - Call [`transactions_confirmed`] to process any on-chain activity of interest.
 * - Call [`transaction_unconfirmed`] to process any transaction returned by [`get_relevant_txids`]
 * that has been reorganized out of the chain.
 * - Call [`best_block_updated`] whenever a new chain tip becomes available.
 *
 * # Order
 *
 * Clients must call these methods in chain order. Specifically:
 * - Transactions confirmed in a block must be given before transactions confirmed in a later
 * block.
 * - Dependent transactions within the same block must be given in topological order, possibly in
 * separate calls.
 * - Unconfirmed transactions must be given after the original confirmations and before any
 * reconfirmation.
 *
 * See individual method documentation for further details.
 *
 * [`transactions_confirmed`]: Self::transactions_confirmed
 * [`transaction_unconfirmed`]: Self::transaction_unconfirmed
 * [`best_block_updated`]: Self::best_block_updated
 * [`get_relevant_txids`]: Self::get_relevant_txids
 */
export class Confirm extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Confirm_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of Confirm from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKConfirmHolder();
        let structImplementation = {
            transactions_confirmed(header, txdata, height) {
                const header_conv = bindings.decodeUint8Array(header);
                const txdata_conv_28_len = bindings.getArrayLength(txdata);
                const txdata_conv_28_arr = new Array(txdata_conv_28_len).fill(null);
                for (var c = 0; c < txdata_conv_28_len; c++) {
                    const txdata_conv_28 = bindings.getU64ArrayElem(txdata, c);
                    const txdata_conv_28_hu_conv = new TwoTuple_usizeTransactionZ(null, txdata_conv_28);
                    CommonBase.add_ref_from(txdata_conv_28_hu_conv, this);
                    txdata_conv_28_arr[c] = txdata_conv_28_hu_conv;
                }
                bindings.freeWasmMemory(txdata);
                arg.transactions_confirmed(header_conv, txdata_conv_28_arr, height);
            },
            transaction_unconfirmed(txid) {
                const txid_conv = bindings.decodeUint8Array(txid);
                arg.transaction_unconfirmed(txid_conv);
            },
            best_block_updated(header, height) {
                const header_conv = bindings.decodeUint8Array(header);
                arg.best_block_updated(header_conv, height);
            },
            get_relevant_txids() {
                const ret = arg.get_relevant_txids();
                const result = bindings.encodeUint32Array(ret != null ? ret.map(ret_conv_12 => bindings.encodeUint8Array(bindings.check_arr_len(ret_conv_12, 32))) : null);
                return result;
            },
        };
        const ptr_idx = bindings.LDKConfirm_new(structImplementation);
        impl_holder.held = new Confirm(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Processes transactions confirmed in a block with a given header and height.
     *
     * Should be called for any transactions registered by [`Filter::register_tx`] or any
     * transactions spending an output registered by [`Filter::register_output`]. Such transactions
     * appearing in the same block do not need to be included in the same call; instead, multiple
     * calls with additional transactions may be made so long as they are made in [chain order].
     *
     * May be called before or after [`best_block_updated`] for the corresponding block. However,
     * in the event of a chain reorganization, it must not be called with a `header` that is no
     * longer in the chain as of the last call to [`best_block_updated`].
     *
     * [chain order]: Confirm#order
     * [`best_block_updated`]: Self::best_block_updated
     */
    transactions_confirmed(header, txdata, height) {
        bindings.Confirm_transactions_confirmed(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(header, 80)), bindings.encodeUint64Array(txdata != null ? txdata.map(txdata_conv_28 => txdata_conv_28 != null ? CommonBase.get_ptr_of(txdata_conv_28) : 0n) : null), height);
    }
    /**
     * Processes a transaction that is no longer confirmed as result of a chain reorganization.
     *
     * Should be called for any transaction returned by [`get_relevant_txids`] if it has been
     * reorganized out of the best chain. Once called, the given transaction will not be returned
     * by [`get_relevant_txids`], unless it has been reconfirmed via [`transactions_confirmed`].
     *
     * [`get_relevant_txids`]: Self::get_relevant_txids
     * [`transactions_confirmed`]: Self::transactions_confirmed
     */
    transaction_unconfirmed(txid) {
        bindings.Confirm_transaction_unconfirmed(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(txid, 32)));
    }
    /**
     * Processes an update to the best header connected at the given height.
     *
     * Should be called when a new header is available but may be skipped for intermediary blocks
     * if they become available at the same time.
     */
    best_block_updated(header, height) {
        bindings.Confirm_best_block_updated(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(header, 80)), height);
    }
    /**
     * Returns transactions that should be monitored for reorganization out of the chain.
     *
     * Will include any transactions passed to [`transactions_confirmed`] that have insufficient
     * confirmations to be safe from a chain reorganization. Will not include any transactions
     * passed to [`transaction_unconfirmed`], unless later reconfirmed.
     *
     * May be called to determine the subset of transactions that must still be monitored for
     * reorganization. Will be idempotent between calls but may change as a result of calls to the
     * other interface methods. Thus, this is useful to determine which transactions may need to be
     * given to [`transaction_unconfirmed`].
     *
     * [`transactions_confirmed`]: Self::transactions_confirmed
     * [`transaction_unconfirmed`]: Self::transaction_unconfirmed
     */
    get_relevant_txids() {
        const ret = bindings.Confirm_get_relevant_txids(this.ptr);
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
}
//# sourceMappingURL=Confirm.mjs.map