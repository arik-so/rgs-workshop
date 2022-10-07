import { ChannelDetails } from '../structs/ChannelDetails.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { Logger } from '../structs/Logger.mjs';
import { Result_NoneAPIErrorZ } from '../structs/Result_NoneAPIErrorZ.mjs';
import { Watch } from '../structs/Watch.mjs';
import { BroadcasterInterface } from '../structs/BroadcasterInterface.mjs';
import { FeeEstimator } from '../structs/FeeEstimator.mjs';
import { Balance } from '../structs/Balance.mjs';
import { Option_FilterZ } from '../structs/Option_FilterZ.mjs';
import { Result_LockedChannelMonitorNoneZ } from '../structs/Result_LockedChannelMonitorNoneZ.mjs';
import { EventsProvider } from '../structs/EventsProvider.mjs';
import { Listen } from '../structs/Listen.mjs';
import { Confirm } from '../structs/Confirm.mjs';
import { MonitorUpdateId } from '../structs/MonitorUpdateId.mjs';
import { Persist } from '../structs/Persist.mjs';
import { CommonBase } from './CommonBase.mjs';
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
export declare class ChainMonitor extends CommonBase {
    /**
     * Creates a new `ChainMonitor` used to watch on-chain activity pertaining to channels.
     *
     * When an optional chain source implementing [`chain::Filter`] is provided, the chain monitor
     * will call back to it indicating transactions and outputs of interest. This allows clients to
     * pre-filter blocks or only fetch blocks matching a compact filter. Otherwise, clients may
     * always need to fetch full blocks absent another means for determining which blocks contain
     * transactions relevant to the watched channels.
     */
    static constructor_new(chain_source: Option_FilterZ, broadcaster: BroadcasterInterface, logger: Logger, feeest: FeeEstimator, persister: Persist): ChainMonitor;
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
    get_claimable_balances(ignored_channels: ChannelDetails[]): Balance[];
    /**
     * Gets the [`LockedChannelMonitor`] for a given funding outpoint, returning an `Err` if no
     * such [`ChannelMonitor`] is currently being monitored for.
     *
     * Note that the result holds a mutex over our monitor set, and should not be held
     * indefinitely.
     */
    get_monitor(funding_txo: OutPoint): Result_LockedChannelMonitorNoneZ;
    /**
     * Lists the funding outpoint of each [`ChannelMonitor`] being monitored.
     *
     * Note that [`ChannelMonitor`]s are not removed when a channel is closed as they are always
     * monitoring for on-chain state resolutions.
     */
    list_monitors(): OutPoint[];
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
    channel_monitor_updated(funding_txo: OutPoint, completed_update_id: MonitorUpdateId): Result_NoneAPIErrorZ;
    /**
     * Constructs a new Listen which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Listen must be freed before this_arg is
     */
    as_Listen(): Listen;
    /**
     * Constructs a new Confirm which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Confirm must be freed before this_arg is
     */
    as_Confirm(): Confirm;
    /**
     * Constructs a new Watch which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Watch must be freed before this_arg is
     */
    as_Watch(): Watch;
    /**
     * Constructs a new EventsProvider which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned EventsProvider must be freed before this_arg is
     */
    as_EventsProvider(): EventsProvider;
}
