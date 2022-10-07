import { Result_ClosingSignedFeeRangeDecodeErrorZ } from '../structs/Result_ClosingSignedFeeRangeDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * The minimum and maximum fees which the sender is willing to place on the closing transaction.
 * This is provided in [`ClosingSigned`] by both sides to indicate the fee range they are willing
 * to use.
 */
export declare class ClosingSignedFeeRange extends CommonBase {
    /**
     * The minimum absolute fee, in satoshis, which the sender is willing to place on the closing
     * transaction.
     */
    get_min_fee_satoshis(): bigint;
    /**
     * The minimum absolute fee, in satoshis, which the sender is willing to place on the closing
     * transaction.
     */
    set_min_fee_satoshis(val: bigint): void;
    /**
     * The maximum absolute fee, in satoshis, which the sender is willing to place on the closing
     * transaction.
     */
    get_max_fee_satoshis(): bigint;
    /**
     * The maximum absolute fee, in satoshis, which the sender is willing to place on the closing
     * transaction.
     */
    set_max_fee_satoshis(val: bigint): void;
    /**
     * Constructs a new ClosingSignedFeeRange given each field
     */
    static constructor_new(min_fee_satoshis_arg: bigint, max_fee_satoshis_arg: bigint): ClosingSignedFeeRange;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ClosingSignedFeeRange
     */
    clone(): ClosingSignedFeeRange;
    /**
     * Serialize the ClosingSignedFeeRange object into a byte array which can be read by ClosingSignedFeeRange_read
     */
    write(): Uint8Array;
    /**
     * Read a ClosingSignedFeeRange from a byte array, created by ClosingSignedFeeRange_write
     */
    static constructor_read(ser: Uint8Array): Result_ClosingSignedFeeRangeDecodeErrorZ;
}
