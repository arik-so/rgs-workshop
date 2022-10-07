import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Intended destination of a failed HTLC as indicated in [`Event::HTLCHandlingFailed`].
 */
export class HTLCDestination extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.HTLCDestination_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKHTLCDestination_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new HTLCDestination_NextHopChannel(ptr);
            case 1: return new HTLCDestination_UnknownNextHop(ptr);
            case 2: return new HTLCDestination_FailedPayment(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.HTLCDestination_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the HTLCDestination
     */
    clone() {
        const ret = bindings.HTLCDestination_clone(this.ptr);
        const ret_hu_conv = HTLCDestination.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new NextHopChannel-variant HTLCDestination
     */
    static constructor_next_hop_channel(node_id, channel_id) {
        const ret = bindings.HTLCDestination_next_hop_channel(bindings.encodeUint8Array(bindings.check_arr_len(node_id, 33)), bindings.encodeUint8Array(bindings.check_arr_len(channel_id, 32)));
        const ret_hu_conv = HTLCDestination.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new UnknownNextHop-variant HTLCDestination
     */
    static constructor_unknown_next_hop(requested_forward_scid) {
        const ret = bindings.HTLCDestination_unknown_next_hop(requested_forward_scid);
        const ret_hu_conv = HTLCDestination.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new FailedPayment-variant HTLCDestination
     */
    static constructor_failed_payment(payment_hash) {
        const ret = bindings.HTLCDestination_failed_payment(bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)));
        const ret_hu_conv = HTLCDestination.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Serialize the HTLCDestination object into a byte array which can be read by HTLCDestination_read
     */
    write() {
        const ret = bindings.HTLCDestination_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
}
/** A HTLCDestination of type NextHopChannel */
export class HTLCDestination_NextHopChannel extends HTLCDestination {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const node_id = bindings.LDKHTLCDestination_NextHopChannel_get_node_id(ptr);
        const node_id_conv = bindings.decodeUint8Array(node_id);
        this.node_id = node_id_conv;
        const channel_id = bindings.LDKHTLCDestination_NextHopChannel_get_channel_id(ptr);
        const channel_id_conv = bindings.decodeUint8Array(channel_id);
        this.channel_id = channel_id_conv;
    }
}
/** A HTLCDestination of type UnknownNextHop */
export class HTLCDestination_UnknownNextHop extends HTLCDestination {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.requested_forward_scid = bindings.LDKHTLCDestination_UnknownNextHop_get_requested_forward_scid(ptr);
    }
}
/** A HTLCDestination of type FailedPayment */
export class HTLCDestination_FailedPayment extends HTLCDestination {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const payment_hash = bindings.LDKHTLCDestination_FailedPayment_get_payment_hash(ptr);
        const payment_hash_conv = bindings.decodeUint8Array(payment_hash);
        this.payment_hash = payment_hash_conv;
    }
}
//# sourceMappingURL=HTLCDestination.mjs.map