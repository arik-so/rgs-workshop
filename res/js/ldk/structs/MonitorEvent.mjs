import { OutPoint } from '../structs/OutPoint.mjs';
import { HTLCUpdate } from '../structs/HTLCUpdate.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An event to be processed by the ChannelManager.
 */
export class MonitorEvent extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.MonitorEvent_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKMonitorEvent_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new MonitorEvent_HTLCEvent(ptr);
            case 1: return new MonitorEvent_CommitmentTxConfirmed(ptr);
            case 2: return new MonitorEvent_UpdateCompleted(ptr);
            case 3: return new MonitorEvent_UpdateFailed(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.MonitorEvent_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the MonitorEvent
     */
    clone() {
        const ret = bindings.MonitorEvent_clone(this.ptr);
        const ret_hu_conv = MonitorEvent.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new HTLCEvent-variant MonitorEvent
     */
    static constructor_htlcevent(a) {
        const ret = bindings.MonitorEvent_htlcevent(a == null ? 0n : CommonBase.get_ptr_of(a));
        const ret_hu_conv = MonitorEvent.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, a);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new CommitmentTxConfirmed-variant MonitorEvent
     */
    static constructor_commitment_tx_confirmed(a) {
        const ret = bindings.MonitorEvent_commitment_tx_confirmed(a == null ? 0n : CommonBase.get_ptr_of(a));
        const ret_hu_conv = MonitorEvent.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, a);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new UpdateCompleted-variant MonitorEvent
     */
    static constructor_update_completed(funding_txo, monitor_update_id) {
        const ret = bindings.MonitorEvent_update_completed(funding_txo == null ? 0n : CommonBase.get_ptr_of(funding_txo), monitor_update_id);
        const ret_hu_conv = MonitorEvent.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, funding_txo);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new UpdateFailed-variant MonitorEvent
     */
    static constructor_update_failed(a) {
        const ret = bindings.MonitorEvent_update_failed(a == null ? 0n : CommonBase.get_ptr_of(a));
        const ret_hu_conv = MonitorEvent.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, a);
        return ret_hu_conv;
    }
    /**
     * Serialize the MonitorEvent object into a byte array which can be read by MonitorEvent_read
     */
    write() {
        const ret = bindings.MonitorEvent_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
}
/** A MonitorEvent of type HTLCEvent */
export class MonitorEvent_HTLCEvent extends MonitorEvent {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const htlc_event = bindings.LDKMonitorEvent_HTLCEvent_get_htlc_event(ptr);
        const htlc_event_hu_conv = new HTLCUpdate(null, htlc_event);
        CommonBase.add_ref_from(htlc_event_hu_conv, this);
        this.htlc_event = htlc_event_hu_conv;
    }
}
/** A MonitorEvent of type CommitmentTxConfirmed */
export class MonitorEvent_CommitmentTxConfirmed extends MonitorEvent {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const commitment_tx_confirmed = bindings.LDKMonitorEvent_CommitmentTxConfirmed_get_commitment_tx_confirmed(ptr);
        const commitment_tx_confirmed_hu_conv = new OutPoint(null, commitment_tx_confirmed);
        CommonBase.add_ref_from(commitment_tx_confirmed_hu_conv, this);
        this.commitment_tx_confirmed = commitment_tx_confirmed_hu_conv;
    }
}
/** A MonitorEvent of type UpdateCompleted */
export class MonitorEvent_UpdateCompleted extends MonitorEvent {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const funding_txo = bindings.LDKMonitorEvent_UpdateCompleted_get_funding_txo(ptr);
        const funding_txo_hu_conv = new OutPoint(null, funding_txo);
        CommonBase.add_ref_from(funding_txo_hu_conv, this);
        this.funding_txo = funding_txo_hu_conv;
        this.monitor_update_id = bindings.LDKMonitorEvent_UpdateCompleted_get_monitor_update_id(ptr);
    }
}
/** A MonitorEvent of type UpdateFailed */
export class MonitorEvent_UpdateFailed extends MonitorEvent {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const update_failed = bindings.LDKMonitorEvent_UpdateFailed_get_update_failed(ptr);
        const update_failed_hu_conv = new OutPoint(null, update_failed);
        CommonBase.add_ref_from(update_failed_hu_conv, this);
        this.update_failed = update_failed_hu_conv;
    }
}
//# sourceMappingURL=MonitorEvent.mjs.map