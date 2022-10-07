import { OutPoint } from '../structs/OutPoint.mjs';
import { Result_NoneChannelMonitorUpdateErrZ } from '../structs/Result_NoneChannelMonitorUpdateErrZ.mjs';
import { ChannelMonitor } from '../structs/ChannelMonitor.mjs';
import { ChannelMonitorUpdate } from '../structs/ChannelMonitorUpdate.mjs';
import { MonitorUpdateId } from '../structs/MonitorUpdateId.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of Persist */
export interface PersistInterface {
    /**Persist a new channel's data in response to a [`chain::Watch::watch_channel`] call. This is
     * called by [`ChannelManager`] for new channels, or may be called directly, e.g. on startup.
     *
     * The data can be stored any way you want, but the identifier provided by LDK is the
     * channel's outpoint (and it is up to you to maintain a correct mapping between the outpoint
     * and the stored channel data). Note that you **must** persist every new monitor to disk.
     *
     * The `update_id` is used to identify this call to [`ChainMonitor::channel_monitor_updated`],
     * if you return [`ChannelMonitorUpdateErr::TemporaryFailure`].
     *
     * See [`Writeable::write`] on [`ChannelMonitor`] for writing out a `ChannelMonitor`
     * and [`ChannelMonitorUpdateErr`] for requirements when returning errors.
     *
     * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
     * [`Writeable::write`]: crate::util::ser::Writeable::write
     */
    persist_new_channel(channel_id: OutPoint, data: ChannelMonitor, update_id: MonitorUpdateId): Result_NoneChannelMonitorUpdateErrZ;
    /**Update one channel's data. The provided [`ChannelMonitor`] has already applied the given
     * update.
     *
     * Note that on every update, you **must** persist either the [`ChannelMonitorUpdate`] or the
     * updated monitor itself to disk/backups. See the [`Persist`] trait documentation for more
     * details.
     *
     * During blockchain synchronization operations, this may be called with no
     * [`ChannelMonitorUpdate`], in which case the full [`ChannelMonitor`] needs to be persisted.
     * Note that after the full [`ChannelMonitor`] is persisted any previous
     * [`ChannelMonitorUpdate`]s which were persisted should be discarded - they can no longer be
     * applied to the persisted [`ChannelMonitor`] as they were already applied.
     *
     * If an implementer chooses to persist the updates only, they need to make
     * sure that all the updates are applied to the `ChannelMonitors` *before
     * the set of channel monitors is given to the `ChannelManager`
     * deserialization routine. See [`ChannelMonitor::update_monitor`] for
     * applying a monitor update to a monitor. If full `ChannelMonitors` are
     * persisted, then there is no need to persist individual updates.
     *
     * Note that there could be a performance tradeoff between persisting complete
     * channel monitors on every update vs. persisting only updates and applying
     * them in batches. The size of each monitor grows `O(number of state updates)`
     * whereas updates are small and `O(1)`.
     *
     * The `update_id` is used to identify this call to [`ChainMonitor::channel_monitor_updated`],
     * if you return [`ChannelMonitorUpdateErr::TemporaryFailure`].
     *
     * See [`Writeable::write`] on [`ChannelMonitor`] for writing out a `ChannelMonitor`,
     * [`Writeable::write`] on [`ChannelMonitorUpdate`] for writing out an update, and
     * [`ChannelMonitorUpdateErr`] for requirements when returning errors.
     *
     * [`Writeable::write`]: crate::util::ser::Writeable::write
     *
     * Note that update (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    update_persisted_channel(channel_id: OutPoint, update: ChannelMonitorUpdate, data: ChannelMonitor, update_id: MonitorUpdateId): Result_NoneChannelMonitorUpdateErrZ;
}
/**
 * `Persist` defines behavior for persisting channel monitors: this could mean
 * writing once to disk, and/or uploading to one or more backup services.
 *
 * Each method can return three possible values:
 * If persistence (including any relevant `fsync()` calls) happens immediately, the
 * implementation should return `Ok(())`, indicating normal channel operation should continue.
 * If persistence happens asynchronously, implementations should first ensure the
 * [`ChannelMonitor`] or [`ChannelMonitorUpdate`] are written durably to disk, and then return
 * `Err(ChannelMonitorUpdateErr::TemporaryFailure)` while the update continues in the
 * background. Once the update completes, [`ChainMonitor::channel_monitor_updated`] should be
 * called with the corresponding [`MonitorUpdateId`].
 *
 * Note that unlike the direct [`chain::Watch`] interface,
 * [`ChainMonitor::channel_monitor_updated`] must be called once for *each* update which occurs.
 *
 * If persistence fails for some reason, implementations should return
 * `Err(ChannelMonitorUpdateErr::PermanentFailure)`, in which case the channel will likely be
 * closed without broadcasting the latest state. See
 * [`ChannelMonitorUpdateErr::PermanentFailure`] for more details.
 */
export declare class Persist extends CommonBase {
    /** Creates a new instance of Persist from a given implementation */
    static new_impl(arg: PersistInterface): Persist;
    /**
     * Persist a new channel's data in response to a [`chain::Watch::watch_channel`] call. This is
     * called by [`ChannelManager`] for new channels, or may be called directly, e.g. on startup.
     *
     * The data can be stored any way you want, but the identifier provided by LDK is the
     * channel's outpoint (and it is up to you to maintain a correct mapping between the outpoint
     * and the stored channel data). Note that you **must** persist every new monitor to disk.
     *
     * The `update_id` is used to identify this call to [`ChainMonitor::channel_monitor_updated`],
     * if you return [`ChannelMonitorUpdateErr::TemporaryFailure`].
     *
     * See [`Writeable::write`] on [`ChannelMonitor`] for writing out a `ChannelMonitor`
     * and [`ChannelMonitorUpdateErr`] for requirements when returning errors.
     *
     * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
     * [`Writeable::write`]: crate::util::ser::Writeable::write
     */
    persist_new_channel(channel_id: OutPoint, data: ChannelMonitor, update_id: MonitorUpdateId): Result_NoneChannelMonitorUpdateErrZ;
    /**
     * Update one channel's data. The provided [`ChannelMonitor`] has already applied the given
     * update.
     *
     * Note that on every update, you **must** persist either the [`ChannelMonitorUpdate`] or the
     * updated monitor itself to disk/backups. See the [`Persist`] trait documentation for more
     * details.
     *
     * During blockchain synchronization operations, this may be called with no
     * [`ChannelMonitorUpdate`], in which case the full [`ChannelMonitor`] needs to be persisted.
     * Note that after the full [`ChannelMonitor`] is persisted any previous
     * [`ChannelMonitorUpdate`]s which were persisted should be discarded - they can no longer be
     * applied to the persisted [`ChannelMonitor`] as they were already applied.
     *
     * If an implementer chooses to persist the updates only, they need to make
     * sure that all the updates are applied to the `ChannelMonitors` *before
     * the set of channel monitors is given to the `ChannelManager`
     * deserialization routine. See [`ChannelMonitor::update_monitor`] for
     * applying a monitor update to a monitor. If full `ChannelMonitors` are
     * persisted, then there is no need to persist individual updates.
     *
     * Note that there could be a performance tradeoff between persisting complete
     * channel monitors on every update vs. persisting only updates and applying
     * them in batches. The size of each monitor grows `O(number of state updates)`
     * whereas updates are small and `O(1)`.
     *
     * The `update_id` is used to identify this call to [`ChainMonitor::channel_monitor_updated`],
     * if you return [`ChannelMonitorUpdateErr::TemporaryFailure`].
     *
     * See [`Writeable::write`] on [`ChannelMonitor`] for writing out a `ChannelMonitor`,
     * [`Writeable::write`] on [`ChannelMonitorUpdate`] for writing out an update, and
     * [`ChannelMonitorUpdateErr`] for requirements when returning errors.
     *
     * [`Writeable::write`]: crate::util::ser::Writeable::write
     *
     * Note that update (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    update_persisted_channel(channel_id: OutPoint, update: ChannelMonitorUpdate, data: ChannelMonitor, update_id: MonitorUpdateId): Result_NoneChannelMonitorUpdateErrZ;
}
