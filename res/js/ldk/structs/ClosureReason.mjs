import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * The reason the channel was closed. See individual variants more details.
 */
export class ClosureReason extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.ClosureReason_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKClosureReason_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new ClosureReason_CounterpartyForceClosed(ptr);
            case 1: return new ClosureReason_HolderForceClosed(ptr);
            case 2: return new ClosureReason_CooperativeClosure(ptr);
            case 3: return new ClosureReason_CommitmentTxConfirmed(ptr);
            case 4: return new ClosureReason_FundingTimedOut(ptr);
            case 5: return new ClosureReason_ProcessingError(ptr);
            case 6: return new ClosureReason_DisconnectedPeer(ptr);
            case 7: return new ClosureReason_OutdatedChannelManager(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.ClosureReason_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ClosureReason
     */
    clone() {
        const ret = bindings.ClosureReason_clone(this.ptr);
        const ret_hu_conv = ClosureReason.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new CounterpartyForceClosed-variant ClosureReason
     */
    static constructor_counterparty_force_closed(peer_msg) {
        const ret = bindings.ClosureReason_counterparty_force_closed(bindings.encodeString(peer_msg));
        const ret_hu_conv = ClosureReason.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new HolderForceClosed-variant ClosureReason
     */
    static constructor_holder_force_closed() {
        const ret = bindings.ClosureReason_holder_force_closed();
        const ret_hu_conv = ClosureReason.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new CooperativeClosure-variant ClosureReason
     */
    static constructor_cooperative_closure() {
        const ret = bindings.ClosureReason_cooperative_closure();
        const ret_hu_conv = ClosureReason.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new CommitmentTxConfirmed-variant ClosureReason
     */
    static constructor_commitment_tx_confirmed() {
        const ret = bindings.ClosureReason_commitment_tx_confirmed();
        const ret_hu_conv = ClosureReason.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new FundingTimedOut-variant ClosureReason
     */
    static constructor_funding_timed_out() {
        const ret = bindings.ClosureReason_funding_timed_out();
        const ret_hu_conv = ClosureReason.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ProcessingError-variant ClosureReason
     */
    static constructor_processing_error(err) {
        const ret = bindings.ClosureReason_processing_error(bindings.encodeString(err));
        const ret_hu_conv = ClosureReason.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new DisconnectedPeer-variant ClosureReason
     */
    static constructor_disconnected_peer() {
        const ret = bindings.ClosureReason_disconnected_peer();
        const ret_hu_conv = ClosureReason.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new OutdatedChannelManager-variant ClosureReason
     */
    static constructor_outdated_channel_manager() {
        const ret = bindings.ClosureReason_outdated_channel_manager();
        const ret_hu_conv = ClosureReason.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Serialize the ClosureReason object into a byte array which can be read by ClosureReason_read
     */
    write() {
        const ret = bindings.ClosureReason_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
}
/** A ClosureReason of type CounterpartyForceClosed */
export class ClosureReason_CounterpartyForceClosed extends ClosureReason {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const peer_msg = bindings.LDKClosureReason_CounterpartyForceClosed_get_peer_msg(ptr);
        const peer_msg_conv = bindings.decodeString(peer_msg);
        this.peer_msg = peer_msg_conv;
    }
}
/** A ClosureReason of type HolderForceClosed */
export class ClosureReason_HolderForceClosed extends ClosureReason {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ClosureReason of type CooperativeClosure */
export class ClosureReason_CooperativeClosure extends ClosureReason {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ClosureReason of type CommitmentTxConfirmed */
export class ClosureReason_CommitmentTxConfirmed extends ClosureReason {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ClosureReason of type FundingTimedOut */
export class ClosureReason_FundingTimedOut extends ClosureReason {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ClosureReason of type ProcessingError */
export class ClosureReason_ProcessingError extends ClosureReason {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const err = bindings.LDKClosureReason_ProcessingError_get_err(ptr);
        const err_conv = bindings.decodeString(err);
        this.err = err_conv;
    }
}
/** A ClosureReason of type DisconnectedPeer */
export class ClosureReason_DisconnectedPeer extends ClosureReason {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ClosureReason of type OutdatedChannelManager */
export class ClosureReason_OutdatedChannelManager extends ClosureReason {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
//# sourceMappingURL=ClosureReason.mjs.map