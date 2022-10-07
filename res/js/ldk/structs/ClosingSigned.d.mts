import { Result_ClosingSignedDecodeErrorZ } from '../structs/Result_ClosingSignedDecodeErrorZ.mjs';
import { ClosingSignedFeeRange } from '../structs/ClosingSignedFeeRange.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A closing_signed message to be sent or received from a peer
 */
export declare class ClosingSigned extends CommonBase {
    /**
     * The channel ID
     */
    get_channel_id(): Uint8Array;
    /**
     * The channel ID
     */
    set_channel_id(val: Uint8Array): void;
    /**
     * The proposed total fee for the closing transaction
     */
    get_fee_satoshis(): bigint;
    /**
     * The proposed total fee for the closing transaction
     */
    set_fee_satoshis(val: bigint): void;
    /**
     * A signature on the closing transaction
     */
    get_signature(): Uint8Array;
    /**
     * A signature on the closing transaction
     */
    set_signature(val: Uint8Array): void;
    /**
     * The minimum and maximum fees which the sender is willing to accept, provided only by new
     * nodes.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_fee_range(): ClosingSignedFeeRange;
    /**
     * The minimum and maximum fees which the sender is willing to accept, provided only by new
     * nodes.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_fee_range(val: ClosingSignedFeeRange): void;
    /**
     * Constructs a new ClosingSigned given each field
     */
    static constructor_new(channel_id_arg: Uint8Array, fee_satoshis_arg: bigint, signature_arg: Uint8Array, fee_range_arg: ClosingSignedFeeRange): ClosingSigned;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ClosingSigned
     */
    clone(): ClosingSigned;
    /**
     * Serialize the ClosingSigned object into a byte array which can be read by ClosingSigned_read
     */
    write(): Uint8Array;
    /**
     * Read a ClosingSigned from a byte array, created by ClosingSigned_write
     */
    static constructor_read(ser: Uint8Array): Result_ClosingSignedDecodeErrorZ;
}