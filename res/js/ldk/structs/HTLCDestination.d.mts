import { CommonBase } from './CommonBase.mjs';
/**
 * Intended destination of a failed HTLC as indicated in [`Event::HTLCHandlingFailed`].
 */
export declare class HTLCDestination extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the HTLCDestination
     */
    clone(): HTLCDestination;
    /**
     * Utility method to constructs a new NextHopChannel-variant HTLCDestination
     */
    static constructor_next_hop_channel(node_id: Uint8Array, channel_id: Uint8Array): HTLCDestination;
    /**
     * Utility method to constructs a new UnknownNextHop-variant HTLCDestination
     */
    static constructor_unknown_next_hop(requested_forward_scid: bigint): HTLCDestination;
    /**
     * Utility method to constructs a new FailedPayment-variant HTLCDestination
     */
    static constructor_failed_payment(payment_hash: Uint8Array): HTLCDestination;
    /**
     * Serialize the HTLCDestination object into a byte array which can be read by HTLCDestination_read
     */
    write(): Uint8Array;
}
/** A HTLCDestination of type NextHopChannel */
export declare class HTLCDestination_NextHopChannel extends HTLCDestination {
    /**
     * The `node_id` of the next node. For backwards compatibility, this field is
     * marked as optional, versions prior to 0.0.110 may not always be able to provide
     * counterparty node information.
     *
     * Note that this (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    node_id: Uint8Array;
    /**
     * The outgoing `channel_id` between us and the next node.
     */
    channel_id: Uint8Array;
}
/** A HTLCDestination of type UnknownNextHop */
export declare class HTLCDestination_UnknownNextHop extends HTLCDestination {
    /**
     * Short channel id we are requesting to forward an HTLC to.
     */
    requested_forward_scid: bigint;
}
/** A HTLCDestination of type FailedPayment */
export declare class HTLCDestination_FailedPayment extends HTLCDestination {
    /**
     * The payment hash of the payment we attempted to process.
     */
    payment_hash: Uint8Array;
}
