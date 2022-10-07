import { Result_UpdateFulfillHTLCDecodeErrorZ } from '../structs/Result_UpdateFulfillHTLCDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An update_fulfill_htlc message to be sent or received from a peer
 */
export declare class UpdateFulfillHTLC extends CommonBase {
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
     * The pre-image of the payment hash, allowing HTLC redemption
     */
    get_payment_preimage(): Uint8Array;
    /**
     * The pre-image of the payment hash, allowing HTLC redemption
     */
    set_payment_preimage(val: Uint8Array): void;
    /**
     * Constructs a new UpdateFulfillHTLC given each field
     */
    static constructor_new(channel_id_arg: Uint8Array, htlc_id_arg: bigint, payment_preimage_arg: Uint8Array): UpdateFulfillHTLC;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the UpdateFulfillHTLC
     */
    clone(): UpdateFulfillHTLC;
    /**
     * Serialize the UpdateFulfillHTLC object into a byte array which can be read by UpdateFulfillHTLC_read
     */
    write(): Uint8Array;
    /**
     * Read a UpdateFulfillHTLC from a byte array, created by UpdateFulfillHTLC_write
     */
    static constructor_read(ser: Uint8Array): Result_UpdateFulfillHTLCDecodeErrorZ;
}
