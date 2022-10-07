import { OutPoint } from '../structs/OutPoint.mjs';
import { Result_NoneChannelMonitorUpdateErrZ } from '../structs/Result_NoneChannelMonitorUpdateErrZ.mjs';
import { ThreeTuple_OutPointCVec_MonitorEventZPublicKeyZ } from '../structs/ThreeTuple_OutPointCVec_MonitorEventZPublicKeyZ.mjs';
import { ChannelMonitor } from '../structs/ChannelMonitor.mjs';
import { ChannelMonitorUpdate } from '../structs/ChannelMonitorUpdate.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of Watch */
export interface WatchInterface {
    /**Watches a channel identified by `funding_txo` using `monitor`.
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
    watch_channel(funding_txo: OutPoint, monitor: ChannelMonitor): Result_NoneChannelMonitorUpdateErrZ;
    /**Updates a channel identified by `funding_txo` by applying `update` to its monitor.
     *
     * Implementations must call [`update_monitor`] with the given update. See
     * [`ChannelMonitorUpdateErr`] for invariants around returning an error.
     *
     * [`update_monitor`]: channelmonitor::ChannelMonitor::update_monitor
     */
    update_channel(funding_txo: OutPoint, update: ChannelMonitorUpdate): Result_NoneChannelMonitorUpdateErrZ;
    /**Returns any monitor events since the last call. Subsequent calls must only return new
     * events.
     *
     * Note that after any block- or transaction-connection calls to a [`ChannelMonitor`], no
     * further events may be returned here until the [`ChannelMonitor`] has been fully persisted
     * to disk.
     *
     * For details on asynchronous [`ChannelMonitor`] updating and returning
     * [`MonitorEvent::UpdateCompleted`] here, see [`ChannelMonitorUpdateErr::TemporaryFailure`].
     */
    release_pending_monitor_events(): ThreeTuple_OutPointCVec_MonitorEventZPublicKeyZ[];
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
export declare class Watch extends CommonBase {
    /** Creates a new instance of Watch from a given implementation */
    static new_impl(arg: WatchInterface): Watch;
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
    watch_channel(funding_txo: OutPoint, monitor: ChannelMonitor): Result_NoneChannelMonitorUpdateErrZ;
    /**
     * Updates a channel identified by `funding_txo` by applying `update` to its monitor.
     *
     * Implementations must call [`update_monitor`] with the given update. See
     * [`ChannelMonitorUpdateErr`] for invariants around returning an error.
     *
     * [`update_monitor`]: channelmonitor::ChannelMonitor::update_monitor
     */
    update_channel(funding_txo: OutPoint, update: ChannelMonitorUpdate): Result_NoneChannelMonitorUpdateErrZ;
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
    release_pending_monitor_events(): ThreeTuple_OutPointCVec_MonitorEventZPublicKeyZ[];
}
