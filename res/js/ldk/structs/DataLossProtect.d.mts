import { CommonBase } from './CommonBase.mjs';
/**
 * Proof that the sender knows the per-commitment secret of the previous commitment transaction.
 * This is used to convince the recipient that the channel is at a certain commitment
 * number even if they lost that data due to a local failure.  Of course, the peer may lie
 * and even later commitments may have been revoked.
 */
export declare class DataLossProtect extends CommonBase {
    /**
     * Proof that the sender knows the per-commitment secret of a specific commitment transaction
     * belonging to the recipient
     */
    get_your_last_per_commitment_secret(): Uint8Array;
    /**
     * Proof that the sender knows the per-commitment secret of a specific commitment transaction
     * belonging to the recipient
     */
    set_your_last_per_commitment_secret(val: Uint8Array): void;
    /**
     * The sender's per-commitment point for their current commitment transaction
     */
    get_my_current_per_commitment_point(): Uint8Array;
    /**
     * The sender's per-commitment point for their current commitment transaction
     */
    set_my_current_per_commitment_point(val: Uint8Array): void;
    /**
     * Constructs a new DataLossProtect given each field
     */
    static constructor_new(your_last_per_commitment_secret_arg: Uint8Array, my_current_per_commitment_point_arg: Uint8Array): DataLossProtect;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the DataLossProtect
     */
    clone(): DataLossProtect;
}
