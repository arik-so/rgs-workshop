import { OutPoint } from '../structs/OutPoint.mjs';
import { Result_NoneAPIErrorZ } from '../structs/Result_NoneAPIErrorZ.mjs';
import { Watch } from '../structs/Watch.mjs';
import { Balance } from '../structs/Balance.mjs';
import { Result_LockedChannelMonitorNoneZ } from '../structs/Result_LockedChannelMonitorNoneZ.mjs';
import { EventsProvider } from '../structs/EventsProvider.mjs';
import { Listen } from '../structs/Listen.mjs';
import { Confirm } from '../structs/Confirm.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An implementation of [`chain::Watch`] for monitoring channels.
 *
 * Connected and disconnected blocks must be provided to `ChainMonitor` as documented by
 * [`chain::Watch`]. May be used in conjunction with [`ChannelManager`] to monitor channels locally
 * or used independently to monitor channels remotely. See the [module-level documentation] for
 * details.
 *
 * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
 * [module-level documentation]: crate::chain::chainmonitor
 */
export class ChainMonitor extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChainMonitor_free);
    }
    /**
     * Creates a new `ChainMonitor` used to watch on-chain activity pertaining to channels.
     *
     * When an optional chain source implementing [`chain::Filter`] is provided, the chain monitor
     * will call back to it indicating transactions and outputs of interest. This allows clients to
     * pre-filter blocks or only fetch blocks matching a compact filter. Otherwise, clients may
     * always need to fetch full blocks absent another means for determining which blocks contain
     * transactions relevant to the watched channels.
     */
    static constructor_new(chain_source, broadcaster, logger, feeest, persister) {
        const ret = bindings.ChainMonitor_new(CommonBase.get_ptr_of(chain_source), broadcaster == null ? 0n : CommonBase.get_ptr_of(broadcaster), logger == null ? 0n : CommonBase.get_ptr_of(logger), feeest == null ? 0n : CommonBase.get_ptr_of(feeest), persister == null ? 0n : CommonBase.get_ptr_of(persister));
        const ret_hu_conv = new ChainMonitor(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, chain_source);
        CommonBase.add_ref_from(ret_hu_conv, broadcaster);
        CommonBase.add_ref_from(ret_hu_conv, logger);
        CommonBase.add_ref_from(ret_hu_conv, feeest);
        CommonBase.add_ref_from(ret_hu_conv, persister);
        return ret_hu_conv;
    }
    /**
     * Gets the balances in the contained [`ChannelMonitor`]s which are claimable on-chain or
     * claims which are awaiting confirmation.
     *
     * Includes the balances from each [`ChannelMonitor`] *except* those included in
     * `ignored_channels`, allowing you to filter out balances from channels which are still open
     * (and whose balance should likely be pulled from the [`ChannelDetails`]).
     *
     * See [`ChannelMonitor::get_claimable_balances`] for more details on the exact criteria for
     * inclusion in the return value.
     */
    get_claimable_balances(ignored_channels) {
        const ret = bindings.ChainMonitor_get_claimable_balances(this.ptr, bindings.encodeUint64Array(ignored_channels != null ? ignored_channels.map(ignored_channels_conv_16 => ignored_channels_conv_16 == null ? 0n : CommonBase.get_ptr_of(ignored_channels_conv_16)) : null));
        const ret_conv_9_len = bindings.getArrayLength(ret);
        const ret_conv_9_arr = new Array(ret_conv_9_len).fill(null);
        for (var j = 0; j < ret_conv_9_len; j++) {
            const ret_conv_9 = bindings.getU64ArrayElem(ret, j);
            const ret_conv_9_hu_conv = Balance.constr_from_ptr(ret_conv_9);
            CommonBase.add_ref_from(ret_conv_9_hu_conv, this);
            ret_conv_9_arr[j] = ret_conv_9_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        ignored_channels.forEach((ignored_channels_conv_16) => { CommonBase.add_ref_from(this, ignored_channels_conv_16); });
        return ret_conv_9_arr;
    }
    /**
     * Gets the [`LockedChannelMonitor`] for a given funding outpoint, returning an `Err` if no
     * such [`ChannelMonitor`] is currently being monitored for.
     *
     * Note that the result holds a mutex over our monitor set, and should not be held
     * indefinitely.
     */
    get_monitor(funding_txo) {
        const ret = bindings.ChainMonitor_get_monitor(this.ptr, funding_txo == null ? 0n : CommonBase.get_ptr_of(funding_txo));
        const ret_hu_conv = Result_LockedChannelMonitorNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, funding_txo);
        return ret_hu_conv;
    }
    /**
     * Lists the funding outpoint of each [`ChannelMonitor`] being monitored.
     *
     * Note that [`ChannelMonitor`]s are not removed when a channel is closed as they are always
     * monitoring for on-chain state resolutions.
     */
    list_monitors() {
        const ret = bindings.ChainMonitor_list_monitors(this.ptr);
        const ret_conv_10_len = bindings.getArrayLength(ret);
        const ret_conv_10_arr = new Array(ret_conv_10_len).fill(null);
        for (var k = 0; k < ret_conv_10_len; k++) {
            const ret_conv_10 = bindings.getU64ArrayElem(ret, k);
            const ret_conv_10_hu_conv = new OutPoint(null, ret_conv_10);
            CommonBase.add_ref_from(ret_conv_10_hu_conv, this);
            ret_conv_10_arr[k] = ret_conv_10_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_10_arr;
    }
    /**
     * Indicates the persistence of a [`ChannelMonitor`] has completed after
     * [`ChannelMonitorUpdateErr::TemporaryFailure`] was returned from an update operation.
     *
     * Thus, the anticipated use is, at a high level:
     * 1) This [`ChainMonitor`] calls [`Persist::update_persisted_channel`] which stores the
     * update to disk and begins updating any remote (e.g. watchtower/backup) copies,
     * returning [`ChannelMonitorUpdateErr::TemporaryFailure`],
     * 2) once all remote copies are updated, you call this function with the
     * `completed_update_id` that completed, and once all pending updates have completed the
     * channel will be re-enabled.
     *
     * Returns an [`APIError::APIMisuseError`] if `funding_txo` does not match any currently
     * registered [`ChannelMonitor`]s.
     */
    channel_monitor_updated(funding_txo, completed_update_id) {
        const ret = bindings.ChainMonitor_channel_monitor_updated(this.ptr, funding_txo == null ? 0n : CommonBase.get_ptr_of(funding_txo), completed_update_id == null ? 0n : CommonBase.get_ptr_of(completed_update_id));
        const ret_hu_conv = Result_NoneAPIErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, funding_txo);
        CommonBase.add_ref_from(this, completed_update_id);
        return ret_hu_conv;
    }
    /**
     * Constructs a new Listen which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Listen must be freed before this_arg is
     */
    as_Listen() {
        const ret = bindings.ChainMonitor_as_Listen(this.ptr);
        const ret_hu_conv = new Listen(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new Confirm which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Confirm must be freed before this_arg is
     */
    as_Confirm() {
        const ret = bindings.ChainMonitor_as_Confirm(this.ptr);
        const ret_hu_conv = new Confirm(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new Watch which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Watch must be freed before this_arg is
     */
    as_Watch() {
        const ret = bindings.ChainMonitor_as_Watch(this.ptr);
        const ret_hu_conv = new Watch(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new EventsProvider which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned EventsProvider must be freed before this_arg is
     */
    as_EventsProvider() {
        const ret = bindings.ChainMonitor_as_EventsProvider(this.ptr);
        const ret_hu_conv = new EventsProvider(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChainMonitor.mjs.map