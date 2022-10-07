import { Result_UpdateFailMalformedHTLCDecodeErrorZ } from '../structs/Result_UpdateFailMalformedHTLCDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An update_fail_malformed_htlc message to be sent or received from a peer
 */
export declare class UpdateFailMalformedHTLC extends CommonBase {
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
    /**
     * The failure code
     */
    get_failure_code(): number;
    /**
     * The failure code
     */
    set_failure_code(val: number): void;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the UpdateFailMalformedHTLC
     */
    clone(): UpdateFailMalformedHTLC;
    /**
     * Serialize the UpdateFailMalformedHTLC object into a byte array which can be read by UpdateFailMalformedHTLC_read
     */
    write(): Uint8Array;
    /**
     * Read a UpdateFailMalformedHTLC from a byte array, created by UpdateFailMalformedHTLC_write
     */
    static constructor_read(ser: Uint8Array): Result_UpdateFailMalformedHTLCDecodeErrorZ;
}
