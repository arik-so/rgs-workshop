import { OutPoint } from '../structs/OutPoint.mjs';
import { Result_NoneChannelMonitorUpdateErrZ } from '../structs/Result_NoneChannelMonitorUpdateErrZ.mjs';
import { ThreeTuple_OutPointCVec_MonitorEventZPublicKeyZ } from '../structs/ThreeTuple_OutPointCVec_MonitorEventZPublicKeyZ.mjs';
import { ChannelMonitor } from '../structs/ChannelMonitor.mjs';
import { ChannelMonitorUpdate } from '../structs/ChannelMonitorUpdate.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKWatchHolder {
}
/**
 * The `Watch` trait defines behavior for watching on-chain activity pertaining to channels as
 * blocks are connected and disconnected.
 *
 * Each channel is associated with a [`ChannelMonitor`]. Implementations of this trait are
 * responsible for maintaining a set of monitors such that they can be updated accordingly as
 * channel state changes and HTLCs are resolved. See method documentation for specific
 * requirements.
 *
 * Implementations **must** ensure that updates are successfully applied and persisted upon method
 * completion. If an update fails with a [`PermanentFailure`], then it must immediately shut down
 * without taking any further action such as persisting the current state.
 *
 * If an implementation maintains multiple instances of a channel's monitor (e.g., by storing
 * backup copies), then it must ensure that updates are applied across all instances. Otherwise, it
 * could result in a revoked transaction being broadcast, allowing the counterparty to claim all
 * funds in the channel. See [`ChannelMonitorUpdateErr`] for more details about how to handle
 * multiple instances.
 *
 * [`PermanentFailure`]: ChannelMonitorUpdateErr::PermanentFailure
 */
export class Watch extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Watch_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of Watch from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKWatchHolder();
        let structImplementation = {
            watch_channel(funding_txo, monitor) {
                const funding_txo_hu_conv = new OutPoint(null, funding_txo);
                CommonBase.add_ref_from(funding_txo_hu_conv, this);
                const monitor_hu_conv = new ChannelMonitor(null, monitor);
                CommonBase.add_ref_from(monitor_hu_conv, this);
                const ret = arg.watch_channel(funding_txo_hu_conv, monitor_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            update_channel(funding_txo, update) {
                const funding_txo_hu_conv = new OutPoint(null, funding_txo);
                CommonBase.add_ref_from(funding_txo_hu_conv, this);
                const update_hu_conv = new ChannelMonitorUpdate(null, update);
                CommonBase.add_ref_from(update_hu_conv, this);
                const ret = arg.update_channel(funding_txo_hu_conv, update_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            release_pending_monitor_events() {
                const ret = arg.release_pending_monitor_events();
                const result = bindings.encodeUint64Array(ret != null ? ret.map(ret_conv_49 => ret_conv_49 == null ? 0n : ret_conv_49.clone_ptr()) : null);
                return result;
            },
        };
        const ptr_idx = bindings.LDKWatch_new(structImplementation);
        impl_holder.held = new Watch(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Watches a channel identified by `funding_txo` using `monitor`.
     *
     * Implementations are responsible for watching the chain for the funding transaction along
     * with any spends of outputs returned by [`get_outputs_to_watch`]. In practice, this means
     * calling [`block_connected`] and [`block_disconnected`] on the monitor.
     *
     * Note: this interface MUST error with `ChannelMonitorUpdateErr::PermanentFailure` if
     * the given `funding_txo` has previously been registered via `watch_channel`.
     *
     * [`get_outputs_to_watch`]: channelmonitor::ChannelMonitor::get_outputs_to_watch
     * [`block_connected`]: channelmonitor::ChannelMonitor::block_connected
     * [`block_disconnected`]: channelmonitor::ChannelMonitor::block_disconnected
     */
    watch_channel(funding_txo, monitor) {
        const ret = bindings.Watch_watch_channel(this.ptr, funding_txo == null ? 0n : CommonBase.get_ptr_of(funding_txo), monitor == null ? 0n : CommonBase.get_ptr_of(monitor));
        const ret_hu_conv = Result_NoneChannelMonitorUpdateErrZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, funding_txo);
        CommonBase.add_ref_from(this, monitor);
        return ret_hu_conv;
    }
    /**
     * Updates a channel identified by `funding_txo` by applying `update` to its monitor.
     *
     * Implementations must call [`update_monitor`] with the given update. See
     * [`ChannelMonitorUpdateErr`] for invariants around returning an error.
     *
     * [`update_monitor`]: channelmonitor::ChannelMonitor::update_monitor
     */
    update_channel(funding_txo, update) {
        const ret = bindings.Watch_update_channel(this.ptr, funding_txo == null ? 0n : CommonBase.get_ptr_of(funding_txo), update == null ? 0n : CommonBase.get_ptr_of(update));
        const ret_hu_conv = Result_NoneChannelMonitorUpdateErrZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, funding_txo);
        CommonBase.add_ref_from(this, update);
        return ret_hu_conv;
    }
    /**
     * Returns any monitor events since the last call. Subsequent calls must only return new
     * events.
     *
     * Note that after any block- or transaction-connection calls to a [`ChannelMonitor`], no
     * further events may be returned here until the [`ChannelMonitor`] has been fully persisted
     * to disk.
     *
     * For details on asynchronous [`ChannelMonitor`] updating and returning
     * [`MonitorEvent::UpdateCompleted`] here, see [`ChannelMonitorUpdateErr::TemporaryFailure`].
     */
    release_pending_monitor_events() {
        const ret = bindings.Watch_release_pending_monitor_events(this.ptr);
        const ret_conv_49_len = bindings.getArrayLength(ret);
        const ret_conv_49_arr = new Array(ret_conv_49_len).fill(null);
        for (var x = 0; x < ret_conv_49_len; x++) {
            const ret_conv_49 = bindings.getU64ArrayElem(ret, x);
            const ret_conv_49_hu_conv = new ThreeTuple_OutPointCVec_MonitorEventZPublicKeyZ(null, ret_conv_49);
            CommonBase.add_ref_from(ret_conv_49_hu_conv, this);
            ret_conv_49_arr[x] = ret_conv_49_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_49_arr;
    }
}
//# sourceMappingURL=Watch.mjs.map