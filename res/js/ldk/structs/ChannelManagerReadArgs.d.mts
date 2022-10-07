import { Logger } from '../structs/Logger.mjs';
import { ChannelMonitor } from '../structs/ChannelMonitor.mjs';
import { Watch } from '../structs/Watch.mjs';
import { BroadcasterInterface } from '../structs/BroadcasterInterface.mjs';
import { KeysInterface } from '../structs/KeysInterface.mjs';
import { FeeEstimator } from '../structs/FeeEstimator.mjs';
import { UserConfig } from '../structs/UserConfig.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Arguments for the creation of a ChannelManager that are not deserialized.
 *
 * At a high-level, the process for deserializing a ChannelManager and resuming normal operation
 * is:
 * 1) Deserialize all stored [`ChannelMonitor`]s.
 * 2) Deserialize the [`ChannelManager`] by filling in this struct and calling:
 * `<(BlockHash, ChannelManager)>::read(reader, args)`
 * This may result in closing some channels if the [`ChannelMonitor`] is newer than the stored
 * [`ChannelManager`] state to ensure no loss of funds. Thus, transactions may be broadcasted.
 * 3) If you are not fetching full blocks, register all relevant [`ChannelMonitor`] outpoints the
 * same way you would handle a [`chain::Filter`] call using
 * [`ChannelMonitor::get_outputs_to_watch`] and [`ChannelMonitor::get_funding_txo`].
 * 4) Reconnect blocks on your [`ChannelMonitor`]s.
 * 5) Disconnect/connect blocks on the [`ChannelManager`].
 * 6) Re-persist the [`ChannelMonitor`]s to ensure the latest state is on disk.
 * Note that if you're using a [`ChainMonitor`] for your [`chain::Watch`] implementation, you
 * will likely accomplish this as a side-effect of calling [`chain::Watch::watch_channel`] in
 * the next step.
 * 7) Move the [`ChannelMonitor`]s into your local [`chain::Watch`]. If you're using a
 * [`ChainMonitor`], this is done by calling [`chain::Watch::watch_channel`].
 *
 * Note that the ordering of #4-7 is not of importance, however all four must occur before you
 * call any other methods on the newly-deserialized [`ChannelManager`].
 *
 * Note that because some channels may be closed during deserialization, it is critical that you
 * always deserialize only the latest version of a ChannelManager and ChannelMonitors available to
 * you. If you deserialize an old ChannelManager (during which force-closure transactions may be
 * broadcast), and then later deserialize a newer version of the same ChannelManager (which will
 * not force-close the same channels but consider them live), you may end up revoking a state for
 * which you've already broadcasted the transaction.
 *
 * [`ChainMonitor`]: crate::chain::chainmonitor::ChainMonitor
 */
export declare class ChannelManagerReadArgs extends CommonBase {
    /**
     * The keys provider which will give us relevant keys. Some keys will be loaded during
     * deserialization and KeysInterface::read_chan_signer will be used to read per-Channel
     * signing data.
     */
    get_keys_manager(): KeysInterface;
    /**
     * The keys provider which will give us relevant keys. Some keys will be loaded during
     * deserialization and KeysInterface::read_chan_signer will be used to read per-Channel
     * signing data.
     */
    set_keys_manager(val: KeysInterface): void;
    /**
     * The fee_estimator for use in the ChannelManager in the future.
     *
     * No calls to the FeeEstimator will be made during deserialization.
     */
    get_fee_estimator(): FeeEstimator;
    /**
     * The fee_estimator for use in the ChannelManager in the future.
     *
     * No calls to the FeeEstimator will be made during deserialization.
     */
    set_fee_estimator(val: FeeEstimator): void;
    /**
     * The chain::Watch for use in the ChannelManager in the future.
     *
     * No calls to the chain::Watch will be made during deserialization. It is assumed that
     * you have deserialized ChannelMonitors separately and will add them to your
     * chain::Watch after deserializing this ChannelManager.
     */
    get_chain_monitor(): Watch;
    /**
     * The chain::Watch for use in the ChannelManager in the future.
     *
     * No calls to the chain::Watch will be made during deserialization. It is assumed that
     * you have deserialized ChannelMonitors separately and will add them to your
     * chain::Watch after deserializing this ChannelManager.
     */
    set_chain_monitor(val: Watch): void;
    /**
     * The BroadcasterInterface which will be used in the ChannelManager in the future and may be
     * used to broadcast the latest local commitment transactions of channels which must be
     * force-closed during deserialization.
     */
    get_tx_broadcaster(): BroadcasterInterface;
    /**
     * The BroadcasterInterface which will be used in the ChannelManager in the future and may be
     * used to broadcast the latest local commitment transactions of channels which must be
     * force-closed during deserialization.
     */
    set_tx_broadcaster(val: BroadcasterInterface): void;
    /**
     * The Logger for use in the ChannelManager and which may be used to log information during
     * deserialization.
     */
    get_logger(): Logger;
    /**
     * The Logger for use in the ChannelManager and which may be used to log information during
     * deserialization.
     */
    set_logger(val: Logger): void;
    /**
     * Default settings used for new channels. Any existing channels will continue to use the
     * runtime settings which were stored when the ChannelManager was serialized.
     */
    get_default_config(): UserConfig;
    /**
     * Default settings used for new channels. Any existing channels will continue to use the
     * runtime settings which were stored when the ChannelManager was serialized.
     */
    set_default_config(val: UserConfig): void;
    /**
     * Simple utility function to create a ChannelManagerReadArgs which creates the monitor
     * HashMap for you. This is primarily useful for C bindings where it is not practical to
     * populate a HashMap directly from C.
     */
    static constructor_new(keys_manager: KeysInterface, fee_estimator: FeeEstimator, chain_monitor: Watch, tx_broadcaster: BroadcasterInterface, logger: Logger, default_config: UserConfig, channel_monitors: ChannelMonitor[]): ChannelManagerReadArgs;
}