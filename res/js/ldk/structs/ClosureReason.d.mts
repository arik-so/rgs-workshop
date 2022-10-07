import { CommonBase } from './CommonBase.mjs';
/**
 * The reason the channel was closed. See individual variants more details.
 */
export declare class ClosureReason extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ClosureReason
     */
    clone(): ClosureReason;
    /**
     * Utility method to constructs a new CounterpartyForceClosed-variant ClosureReason
     */
    static constructor_counterparty_force_closed(peer_msg: string): ClosureReason;
    /**
     * Utility method to constructs a new HolderForceClosed-variant ClosureReason
     */
    static constructor_holder_force_closed(): ClosureReason;
    /**
     * Utility method to constructs a new CooperativeClosure-variant ClosureReason
     */
    static constructor_cooperative_closure(): ClosureReason;
    /**
     * Utility method to constructs a new CommitmentTxConfirmed-variant ClosureReason
     */
    static constructor_commitment_tx_confirmed(): ClosureReason;
    /**
     * Utility method to constructs a new FundingTimedOut-variant ClosureReason
     */
    static constructor_funding_timed_out(): ClosureReason;
    /**
     * Utility method to constructs a new ProcessingError-variant ClosureReason
     */
    static constructor_processing_error(err: string): ClosureReason;
    /**
     * Utility method to constructs a new DisconnectedPeer-variant ClosureReason
     */
    static constructor_disconnected_peer(): ClosureReason;
    /**
     * Utility method to constructs a new OutdatedChannelManager-variant ClosureReason
     */
    static constructor_outdated_channel_manager(): ClosureReason;
    /**
     * Serialize the ClosureReason object into a byte array which can be read by ClosureReason_read
     */
    write(): Uint8Array;
}
/** A ClosureReason of type CounterpartyForceClosed */
export declare class ClosureReason_CounterpartyForceClosed extends ClosureReason {
    /**
     * The error which the peer sent us.
     *
     * The string should be sanitized before it is used (e.g emitted to logs
     * or printed to stdout). Otherwise, a well crafted error message may exploit
     * a security vulnerability in the terminal emulator or the logging subsystem.
     */
    peer_msg: string;
}
/** A ClosureReason of type HolderForceClosed */
export declare class ClosureReason_HolderForceClosed extends ClosureReason {
}
/** A ClosureReason of type CooperativeClosure */
export declare class ClosureReason_CooperativeClosure extends ClosureReason {
}
/** A ClosureReason of type CommitmentTxConfirmed */
export declare class ClosureReason_CommitmentTxConfirmed extends ClosureReason {
}
/** A ClosureReason of type FundingTimedOut */
export declare class ClosureReason_FundingTimedOut extends ClosureReason {
}
/** A ClosureReason of type ProcessingError */
export declare class ClosureReason_ProcessingError extends ClosureReason {
    /**
     * A developer-readable error message which we generated.
     */
    err: string;
}
/** A ClosureReason of type DisconnectedPeer */
export declare class ClosureReason_DisconnectedPeer extends ClosureReason {
}
/** A ClosureReason of type OutdatedChannelManager */
export declare class ClosureReason_OutdatedChannelManager extends ClosureReason {
}
