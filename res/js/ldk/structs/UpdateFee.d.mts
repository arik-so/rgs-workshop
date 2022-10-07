import { Result_UpdateFeeDecodeErrorZ } from '../structs/Result_UpdateFeeDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An update_fee message to be sent or received from a peer
 */
export declare class UpdateFee extends CommonBase {
    /**
     * The channel ID
     */
    get_channel_id(): Uint8Array;
    /**
     * The channel ID
     */
    set_channel_id(val: Uint8Array): void;
    /**
     * Fee rate per 1000-weight of the transaction
     */
    get_feerate_per_kw(): number;
    /**
     * Fee rate per 1000-weight of the transaction
     */
    set_feerate_per_kw(val: number): void;
    /**
     * Constructs a new UpdateFee given each field
     */
    static constructor_new(channel_id_arg: Uint8Array, feerate_per_kw_arg: number): UpdateFee;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the UpdateFee
     */
    clone(): UpdateFee;
    /**
     * Serialize the UpdateFee object into a byte array which can be read by UpdateFee_read
     */
    write(): Uint8Array;
    /**
     * Read a UpdateFee from a byte array, created by UpdateFee_write
     */
    static constructor_read(ser: Uint8Array): Result_UpdateFeeDecodeErrorZ;
}
