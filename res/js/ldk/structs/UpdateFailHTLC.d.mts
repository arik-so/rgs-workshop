import { Result_UpdateFailHTLCDecodeErrorZ } from '../structs/Result_UpdateFailHTLCDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An update_fail_htlc message to be sent or received from a peer
 */
export declare class UpdateFailHTLC extends CommonBase {
    /**
     * The channel ID
     */
    get_channel_id(): Uint8Array;
    /**
     * The channel ID
     */
    set_channel_id(val: Uint8Array): void;
    /**
     * The HTLC ID
     */
    get_htlc_id(): bigint;
    /**
     * The HTLC ID
     */
    set_htlc_id(val: bigint): void;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the UpdateFailHTLC
     */
    clone(): UpdateFailHTLC;
    /**
     * Serialize the UpdateFailHTLC object into a byte array which can be read by UpdateFailHTLC_read
     */
    write(): Uint8Array;
    /**
     * Read a UpdateFailHTLC from a byte array, created by UpdateFailHTLC_write
     */
    static constructor_read(ser: Uint8Array): Result_UpdateFailHTLCDecodeErrorZ;
}
