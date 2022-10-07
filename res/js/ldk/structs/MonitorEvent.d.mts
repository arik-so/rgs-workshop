import { OutPoint } from '../structs/OutPoint.mjs';
import { HTLCUpdate } from '../structs/HTLCUpdate.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An event to be processed by the ChannelManager.
 */
export declare class MonitorEvent extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the MonitorEvent
     */
    clone(): MonitorEvent;
    /**
     * Utility method to constructs a new HTLCEvent-variant MonitorEvent
     */
    static constructor_htlcevent(a: HTLCUpdate): MonitorEvent;
    /**
     * Utility method to constructs a new CommitmentTxConfirmed-variant MonitorEvent
     */
    static constructor_commitment_tx_confirmed(a: OutPoint): MonitorEvent;
    /**
     * Utility method to constructs a new UpdateCompleted-variant MonitorEvent
     */
    static constructor_update_completed(funding_txo: OutPoint, monitor_update_id: bigint): MonitorEvent;
    /**
     * Utility method to constructs a new UpdateFailed-variant MonitorEvent
     */
    static constructor_update_failed(a: OutPoint): MonitorEvent;
    /**
     * Serialize the MonitorEvent object into a byte array which can be read by MonitorEvent_read
     */
    write(): Uint8Array;
}
/** A MonitorEvent of type HTLCEvent */
export declare class MonitorEvent_HTLCEvent extends MonitorEvent {
    htlc_event: HTLCUpdate;
}
/** A MonitorEvent of type CommitmentTxConfirmed */
export declare class MonitorEvent_CommitmentTxConfirmed extends MonitorEvent {
    commitment_tx_confirmed: OutPoint;
}
/** A MonitorEvent of type UpdateCompleted */
export declare class MonitorEvent_UpdateCompleted extends MonitorEvent {
    /**
     * The funding outpoint of the [`ChannelMonitor`] that was updated
     */
    funding_txo: OutPoint;
    /**
     * The Update ID from [`ChannelMonitorUpdate::update_id`] which was applied or
     * [`ChannelMonitor::get_latest_update_id`].
     *
     * Note that this should only be set to a given update's ID if all previous updates for the
     * same [`ChannelMonitor`] have been applied and persisted.
     */
    monitor_update_id: bigint;
}
/** A MonitorEvent of type UpdateFailed */
export declare class MonitorEvent_UpdateFailed extends MonitorEvent {
    update_failed: OutPoint;
}
