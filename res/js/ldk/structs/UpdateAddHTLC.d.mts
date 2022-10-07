import { Result_UpdateAddHTLCDecodeErrorZ } from '../structs/Result_UpdateAddHTLCDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An update_add_htlc message to be sent or received from a peer
 */
export declare class UpdateAddHTLC extends CommonBase {
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
     * The HTLC value in milli-satoshi
     */
    get_amount_msat(): bigint;
    /**
     * The HTLC value in milli-satoshi
     */
    set_amount_msat(val: bigint): void;
    /**
     * The payment hash, the pre-image of which controls HTLC redemption
     */
    get_payment_hash(): Uint8Array;
    /**
     * The payment hash, the pre-image of which controls HTLC redemption
     */
    set_payment_hash(val: Uint8Array): void;
    /**
     * The expiry height of the HTLC
     */
    get_cltv_expiry(): number;
    /**
     * The expiry height of the HTLC
     */
    set_cltv_expiry(val: number): void;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the UpdateAddHTLC
     */
    clone(): UpdateAddHTLC;
    /**
     * Serialize the UpdateAddHTLC object into a byte array which can be read by UpdateAddHTLC_read
     */
    write(): Uint8Array;
    /**
     * Read a UpdateAddHTLC from a byte array, created by UpdateAddHTLC_write
     */
    static constructor_read(ser: Uint8Array): Result_UpdateAddHTLCDecodeErrorZ;
}
