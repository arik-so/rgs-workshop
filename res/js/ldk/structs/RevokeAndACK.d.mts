import { Result_RevokeAndACKDecodeErrorZ } from '../structs/Result_RevokeAndACKDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A revoke_and_ack message to be sent or received from a peer
 */
export declare class RevokeAndACK extends CommonBase {
    /**
     * The channel ID
     */
    get_channel_id(): Uint8Array;
    /**
     * The channel ID
     */
    set_channel_id(val: Uint8Array): void;
    /**
     * The secret corresponding to the per-commitment point
     */
    get_per_commitment_secret(): Uint8Array;
    /**
     * The secret corresponding to the per-commitment point
     */
    set_per_commitment_secret(val: Uint8Array): void;
    /**
     * The next sender-broadcast commitment transaction's per-commitment point
     */
    get_next_per_commitment_point(): Uint8Array;
    /**
     * The next sender-broadcast commitment transaction's per-commitment point
     */
    set_next_per_commitment_point(val: Uint8Array): void;
    /**
     * Constructs a new RevokeAndACK given each field
     */
    static constructor_new(channel_id_arg: Uint8Array, per_commitment_secret_arg: Uint8Array, next_per_commitment_point_arg: Uint8Array): RevokeAndACK;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the RevokeAndACK
     */
    clone(): RevokeAndACK;
    /**
     * Serialize the RevokeAndACK object into a byte array which can be read by RevokeAndACK_read
     */
    write(): Uint8Array;
    /**
     * Read a RevokeAndACK from a byte array, created by RevokeAndACK_write
     */
    static constructor_read(ser: Uint8Array): Result_RevokeAndACKDecodeErrorZ;
}
