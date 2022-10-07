import { Result_NoneNoneZ } from '../structs/Result_NoneNoneZ.mjs';
import { Event } from '../structs/Event.mjs';
import { MonitorEvent } from '../structs/MonitorEvent.mjs';
import { TwoTuple_OutPointScriptZ } from '../structs/TwoTuple_OutPointScriptZ.mjs';
import { TwoTuple_TxidCVec_C2Tuple_u32ScriptZZZ } from '../structs/TwoTuple_TxidCVec_C2Tuple_u32ScriptZZZ.mjs';
import { TwoTuple_TxidCVec_C2Tuple_u32TxOutZZZ } from '../structs/TwoTuple_TxidCVec_C2Tuple_u32TxOutZZZ.mjs';
import { Balance } from '../structs/Balance.mjs';
import { BestBlock } from '../structs/BestBlock.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A ChannelMonitor handles chain events (blocks connected and disconnected) and generates
 * on-chain transactions to ensure no loss of funds occurs.
 *
 * You MUST ensure that no ChannelMonitors for a given channel anywhere contain out-of-date
 * information and are actively monitoring the chain.
 *
 * Pending Events or updated HTLCs which have not yet been read out by
 * get_and_clear_pending_monitor_events or get_and_clear_pending_events are serialized to disk and
 * reloaded at deserialize-time. Thus, you must ensure that, when handling events, all events
 * gotten are fully handled before re-serializing the new state.
 *
 * Note that the deserializer is only implemented for (BlockHash, ChannelMonitor), which
 * tells you the last block hash which was block_connect()ed. You MUST rescan any blocks along
 * the \"reorg path\" (ie disconnecting blocks until you find a common ancestor from both the
 * returned block hash and the the current chain and then reconnecting blocks to get to the
 * best chain) upon deserializing the object!
 */
export class ChannelMonitor extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelMonitor_free);
    }
    clone_ptr() {
        const ret = bindings.ChannelMonitor_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChannelMonitor
     */
    clone() {
        const ret = bindings.ChannelMonitor_clone(this.ptr);
        const ret_hu_conv = new ChannelMonitor(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ChannelMonitor object into a byte array which can be read by ChannelMonitor_read
     */
    write() {
        const ret = bindings.ChannelMonitor_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Updates a ChannelMonitor on the basis of some new information provided by the Channel
     * itself.
     *
     * panics if the given update is not the next update by update_id.
     */
    update_monitor(updates, broadcaster, fee_estimator, logger) {
        const ret = bindings.ChannelMonitor_update_monitor(this.ptr, updates == null ? 0n : CommonBase.get_ptr_of(updates), broadcaster == null ? 0n : CommonBase.get_ptr_of(broadcaster), fee_estimator == null ? 0n : CommonBase.get_ptr_of(fee_estimator), logger == null ? 0n : CommonBase.get_ptr_of(logger));
        const ret_hu_conv = Result_NoneNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, updates);
        CommonBase.add_ref_from(this, broadcaster);
        CommonBase.add_ref_from(this, fee_estimator);
        CommonBase.add_ref_from(this, logger);
        return ret_hu_conv;
    }
    /**
     * Gets the update_id from the latest ChannelMonitorUpdate which was applied to this
     * ChannelMonitor.
     */
    get_latest_update_id() {
        const ret = bindings.ChannelMonitor_get_latest_update_id(this.ptr);
        return ret;
    }
    /**
     * Gets the funding transaction outpoint of the channel this ChannelMonitor is monitoring for.
     */
    get_funding_txo() {
        const ret = bindings.ChannelMonitor_get_funding_txo(this.ptr);
        const ret_hu_conv = new TwoTuple_OutPointScriptZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Gets a list of txids, with their output scripts (in the order they appear in the
     * transaction), which we must learn about spends of via block_connected().
     */
    get_outputs_to_watch() {
        const ret = bindings.ChannelMonitor_get_outputs_to_watch(this.ptr);
        const ret_conv_40_len = bindings.getArrayLength(ret);
        const ret_conv_40_arr = new Array(ret_conv_40_len).fill(null);
        for (var o = 0; o < ret_conv_40_len; o++) {
            const ret_conv_40 = bindings.getU64ArrayElem(ret, o);
            const ret_conv_40_hu_conv = new TwoTuple_TxidCVec_C2Tuple_u32ScriptZZZ(null, ret_conv_40);
            CommonBase.add_ref_from(ret_conv_40_hu_conv, this);
            ret_conv_40_arr[o] = ret_conv_40_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_40_arr;
    }
    /**
     * Loads the funding txo and outputs to watch into the given `chain::Filter` by repeatedly
     * calling `chain::Filter::register_output` and `chain::Filter::register_tx` until all outputs
     * have been registered.
     */
    load_outputs_to_watch(filter) {
        bindings.ChannelMonitor_load_outputs_to_watch(this.ptr, filter == null ? 0n : CommonBase.get_ptr_of(filter));
        CommonBase.add_ref_from(this, filter);
    }
    /**
     * Get the list of HTLCs who's status has been updated on chain. This should be called by
     * ChannelManager via [`chain::Watch::release_pending_monitor_events`].
     */
    get_and_clear_pending_monitor_events() {
        const ret = bindings.ChannelMonitor_get_and_clear_pending_monitor_events(this.ptr);
        const ret_conv_14_len = bindings.getArrayLength(ret);
        const ret_conv_14_arr = new Array(ret_conv_14_len).fill(null);
        for (var o = 0; o < ret_conv_14_len; o++) {
            const ret_conv_14 = bindings.getU64ArrayElem(ret, o);
            const ret_conv_14_hu_conv = MonitorEvent.constr_from_ptr(ret_conv_14);
            CommonBase.add_ref_from(ret_conv_14_hu_conv, this);
            ret_conv_14_arr[o] = ret_conv_14_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_14_arr;
    }
    /**
     * Gets the list of pending events which were generated by previous actions, clearing the list
     * in the process.
     *
     * This is called by ChainMonitor::get_and_clear_pending_events() and is equivalent to
     * EventsProvider::get_and_clear_pending_events() except that it requires &mut self as we do
     * no internal locking in ChannelMonitors.
     */
    get_and_clear_pending_events() {
        const ret = bindings.ChannelMonitor_get_and_clear_pending_events(this.ptr);
        const ret_conv_7_len = bindings.getArrayLength(ret);
        const ret_conv_7_arr = new Array(ret_conv_7_len).fill(null);
        for (var h = 0; h < ret_conv_7_len; h++) {
            const ret_conv_7 = bindings.getU64ArrayElem(ret, h);
            const ret_conv_7_hu_conv = Event.constr_from_ptr(ret_conv_7);
            CommonBase.add_ref_from(ret_conv_7_hu_conv, this);
            ret_conv_7_arr[h] = ret_conv_7_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_7_arr;
    }
    /**
     * Gets the `node_id` of the counterparty for this channel.
     *
     * Will be `None` for channels constructed on LDK versions prior to 0.0.110 and always `Some`
     * otherwise.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_counterparty_node_id() {
        const ret = bindings.ChannelMonitor_get_counterparty_node_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Used by ChannelManager deserialization to broadcast the latest holder state if its copy of
     * the Channel was out-of-date. You may use it to get a broadcastable holder toxic tx in case of
     * fallen-behind, i.e when receiving a channel_reestablish with a proof that our counterparty side knows
     * a higher revocation secret than the holder commitment number we are aware of. Broadcasting these
     * transactions are UNSAFE, as they allow counterparty side to punish you. Nevertheless you may want to
     * broadcast them if counterparty don't close channel with his higher commitment transaction after a
     * substantial amount of time (a month or even a year) to get back funds. Best may be to contact
     * out-of-band the other node operator to coordinate with him if option is available to you.
     * In any-case, choice is up to the user.
     */
    get_latest_holder_commitment_txn(logger) {
        const ret = bindings.ChannelMonitor_get_latest_holder_commitment_txn(this.ptr, logger == null ? 0n : CommonBase.get_ptr_of(logger));
        const ret_conv_12_len = bindings.getArrayLength(ret);
        const ret_conv_12_arr = new Array(ret_conv_12_len).fill(null);
        for (var m = 0; m < ret_conv_12_len; m++) {
            const ret_conv_12 = bindings.getU32ArrayElem(ret, m);
            const ret_conv_12_conv = bindings.decodeUint8Array(ret_conv_12);
            ret_conv_12_arr[m] = ret_conv_12_conv;
        }
        bindings.freeWasmMemory(ret);
        CommonBase.add_ref_from(this, logger);
        return ret_conv_12_arr;
    }
    /**
     * Processes transactions in a newly connected block, which may result in any of the following:
     * - update the monitor's state against resolved HTLCs
     * - punish the counterparty in the case of seeing a revoked commitment transaction
     * - force close the channel and claim/timeout incoming/outgoing HTLCs if near expiration
     * - detect settled outputs for later spending
     * - schedule and bump any in-flight claims
     *
     * Returns any new outputs to watch from `txdata`; after called, these are also included in
     * [`get_outputs_to_watch`].
     *
     * [`get_outputs_to_watch`]: #method.get_outputs_to_watch
     */
    block_connected(header, txdata, height, broadcaster, fee_estimator, logger) {
        const ret = bindings.ChannelMonitor_block_connected(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(header, 80)), bindings.encodeUint64Array(txdata != null ? txdata.map(txdata_conv_28 => txdata_conv_28 != null ? CommonBase.get_ptr_of(txdata_conv_28) : 0n) : null), height, broadcaster == null ? 0n : CommonBase.get_ptr_of(broadcaster), fee_estimator == null ? 0n : CommonBase.get_ptr_of(fee_estimator), logger == null ? 0n : CommonBase.get_ptr_of(logger));
        const ret_conv_39_len = bindings.getArrayLength(ret);
        const ret_conv_39_arr = new Array(ret_conv_39_len).fill(null);
        for (var n = 0; n < ret_conv_39_len; n++) {
            const ret_conv_39 = bindings.getU64ArrayElem(ret, n);
            const ret_conv_39_hu_conv = new TwoTuple_TxidCVec_C2Tuple_u32TxOutZZZ(null, ret_conv_39);
            CommonBase.add_ref_from(ret_conv_39_hu_conv, this);
            ret_conv_39_arr[n] = ret_conv_39_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        CommonBase.add_ref_from(this, broadcaster);
        CommonBase.add_ref_from(this, fee_estimator);
        CommonBase.add_ref_from(this, logger);
        return ret_conv_39_arr;
    }
    /**
     * Determines if the disconnected block contained any transactions of interest and updates
     * appropriately.
     */
    block_disconnected(header, height, broadcaster, fee_estimator, logger) {
        bindings.ChannelMonitor_block_disconnected(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(header, 80)), height, broadcaster == null ? 0n : CommonBase.get_ptr_of(broadcaster), fee_estimator == null ? 0n : CommonBase.get_ptr_of(fee_estimator), logger == null ? 0n : CommonBase.get_ptr_of(logger));
        CommonBase.add_ref_from(this, broadcaster);
        CommonBase.add_ref_from(this, fee_estimator);
        CommonBase.add_ref_from(this, logger);
    }
    /**
     * Processes transactions confirmed in a block with the given header and height, returning new
     * outputs to watch. See [`block_connected`] for details.
     *
     * Used instead of [`block_connected`] by clients that are notified of transactions rather than
     * blocks. See [`chain::Confirm`] for calling expectations.
     *
     * [`block_connected`]: Self::block_connected
     */
    transactions_confirmed(header, txdata, height, broadcaster, fee_estimator, logger) {
        const ret = bindings.ChannelMonitor_transactions_confirmed(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(header, 80)), bindings.encodeUint64Array(txdata != null ? txdata.map(txdata_conv_28 => txdata_conv_28 != null ? CommonBase.get_ptr_of(txdata_conv_28) : 0n) : null), height, broadcaster == null ? 0n : CommonBase.get_ptr_of(broadcaster), fee_estimator == null ? 0n : CommonBase.get_ptr_of(fee_estimator), logger == null ? 0n : CommonBase.get_ptr_of(logger));
        const ret_conv_39_len = bindings.getArrayLength(ret);
        const ret_conv_39_arr = new Array(ret_conv_39_len).fill(null);
        for (var n = 0; n < ret_conv_39_len; n++) {
            const ret_conv_39 = bindings.getU64ArrayElem(ret, n);
            const ret_conv_39_hu_conv = new TwoTuple_TxidCVec_C2Tuple_u32TxOutZZZ(null, ret_conv_39);
            CommonBase.add_ref_from(ret_conv_39_hu_conv, this);
            ret_conv_39_arr[n] = ret_conv_39_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        CommonBase.add_ref_from(this, broadcaster);
        CommonBase.add_ref_from(this, fee_estimator);
        CommonBase.add_ref_from(this, logger);
        return ret_conv_39_arr;
    }
    /**
     * Processes a transaction that was reorganized out of the chain.
     *
     * Used instead of [`block_disconnected`] by clients that are notified of transactions rather
     * than blocks. See [`chain::Confirm`] for calling expectations.
     *
     * [`block_disconnected`]: Self::block_disconnected
     */
    transaction_unconfirmed(txid, broadcaster, fee_estimator, logger) {
        bindings.ChannelMonitor_transaction_unconfirmed(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(txid, 32)), broadcaster == null ? 0n : CommonBase.get_ptr_of(broadcaster), fee_estimator == null ? 0n : CommonBase.get_ptr_of(fee_estimator), logger == null ? 0n : CommonBase.get_ptr_of(logger));
        CommonBase.add_ref_from(this, broadcaster);
        CommonBase.add_ref_from(this, fee_estimator);
        CommonBase.add_ref_from(this, logger);
    }
    /**
     * Updates the monitor with the current best chain tip, returning new outputs to watch. See
     * [`block_connected`] for details.
     *
     * Used instead of [`block_connected`] by clients that are notified of transactions rather than
     * blocks. See [`chain::Confirm`] for calling expectations.
     *
     * [`block_connected`]: Self::block_connected
     */
    best_block_updated(header, height, broadcaster, fee_estimator, logger) {
        const ret = bindings.ChannelMonitor_best_block_updated(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(header, 80)), height, broadcaster == null ? 0n : CommonBase.get_ptr_of(broadcaster), fee_estimator == null ? 0n : CommonBase.get_ptr_of(fee_estimator), logger == null ? 0n : CommonBase.get_ptr_of(logger));
        const ret_conv_39_len = bindings.getArrayLength(ret);
        const ret_conv_39_arr = new Array(ret_conv_39_len).fill(null);
        for (var n = 0; n < ret_conv_39_len; n++) {
            const ret_conv_39 = bindings.getU64ArrayElem(ret, n);
            const ret_conv_39_hu_conv = new TwoTuple_TxidCVec_C2Tuple_u32TxOutZZZ(null, ret_conv_39);
            CommonBase.add_ref_from(ret_conv_39_hu_conv, this);
            ret_conv_39_arr[n] = ret_conv_39_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        CommonBase.add_ref_from(this, broadcaster);
        CommonBase.add_ref_from(this, fee_estimator);
        CommonBase.add_ref_from(this, logger);
        return ret_conv_39_arr;
    }
    /**
     * Returns the set of txids that should be monitored for re-organization out of the chain.
     */
    get_relevant_txids() {
        const ret = bindings.ChannelMonitor_get_relevant_txids(this.ptr);
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
     * Gets the latest best block which was connected either via the [`chain::Listen`] or
     * [`chain::Confirm`] interfaces.
     */
    current_best_block() {
        const ret = bindings.ChannelMonitor_current_best_block(this.ptr);
        const ret_hu_conv = new BestBlock(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Gets the balances in this channel which are either claimable by us if we were to
     * force-close the channel now or which are claimable on-chain (possibly awaiting
     * confirmation).
     *
     * Any balances in the channel which are available on-chain (excluding on-chain fees) are
     * included here until an [`Event::SpendableOutputs`] event has been generated for the
     * balance, or until our counterparty has claimed the balance and accrued several
     * confirmations on the claim transaction.
     *
     * Note that for `ChannelMonitors` which track a channel which went on-chain with versions of
     * LDK prior to 0.0.111, balances may not be fully captured if our counterparty broadcasted
     * a revoked state.
     *
     * See [`Balance`] for additional details on the types of claimable balances which
     * may be returned here and their meanings.
     */
    get_claimable_balances() {
        const ret = bindings.ChannelMonitor_get_claimable_balances(this.ptr);
        const ret_conv_9_len = bindings.getArrayLength(ret);
        const ret_conv_9_arr = new Array(ret_conv_9_len).fill(null);
        for (var j = 0; j < ret_conv_9_len; j++) {
            const ret_conv_9 = bindings.getU64ArrayElem(ret, j);
            const ret_conv_9_hu_conv = Balance.constr_from_ptr(ret_conv_9);
            CommonBase.add_ref_from(ret_conv_9_hu_conv, this);
            ret_conv_9_arr[j] = ret_conv_9_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_9_arr;
    }
}
//# sourceMappingURL=ChannelMonitor.mjs.map