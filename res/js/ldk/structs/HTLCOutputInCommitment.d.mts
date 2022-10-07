import { Option_u32Z } from '../structs/Option_u32Z.mjs';
import { Result_HTLCOutputInCommitmentDecodeErrorZ } from '../structs/Result_HTLCOutputInCommitmentDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Information about an HTLC as it appears in a commitment transaction
 */
export declare class HTLCOutputInCommitment extends CommonBase {
    /**
     * Whether the HTLC was \"offered\" (ie outbound in relation to this commitment transaction).
     * Note that this is not the same as whether it is ountbound *from us*. To determine that you
     * need to compare this value to whether the commitment transaction in question is that of
     * the counterparty or our own.
     */
    get_offered(): boolean;
    /**
     * Whether the HTLC was \"offered\" (ie outbound in relation to this commitment transaction).
     * Note that this is not the same as whether it is ountbound *from us*. To determine that you
     * need to compare this value to whether the commitment transaction in question is that of
     * the counterparty or our own.
     */
    set_offered(val: boolean): void;
    /**
     * The value, in msat, of the HTLC. The value as it appears in the commitment transaction is
     * this divided by 1000.
     */
    get_amount_msat(): bigint;
    /**
     * The value, in msat, of the HTLC. The value as it appears in the commitment transaction is
     * this divided by 1000.
     */
    set_amount_msat(val: bigint): void;
    /**
     * The CLTV lock-time at which this HTLC expires.
     */
    get_cltv_expiry(): number;
    /**
     * The CLTV lock-time at which this HTLC expires.
     */
    set_cltv_expiry(val: number): void;
    /**
     * The hash of the preimage which unlocks this HTLC.
     */
    get_payment_hash(): Uint8Array;
    /**
     * The hash of the preimage which unlocks this HTLC.
     */
    set_payment_hash(val: Uint8Array): void;
    /**
     * The position within the commitment transactions' outputs. This may be None if the value is
     * below the dust limit (in which case no output appears in the commitment transaction and the
     * value is spent to additional transaction fees).
     */
    get_transaction_output_index(): Option_u32Z;
    /**
     * The position within the commitment transactions' outputs. This may be None if the value is
     * below the dust limit (in which case no output appears in the commitment transaction and the
     * value is spent to additional transaction fees).
     */
    set_transaction_output_index(val: Option_u32Z): void;
    /**
     * Constructs a new HTLCOutputInCommitment given each field
     */
    static constructor_new(offered_arg: boolean, amount_msat_arg: bigint, cltv_expiry_arg: number, payment_hash_arg: Uint8Array, transaction_output_index_arg: Option_u32Z): HTLCOutputInCommitment;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the HTLCOutputInCommitment
     */
    clone(): HTLCOutputInCommitment;
    /**
     * Serialize the HTLCOutputInCommitment object into a byte array which can be read by HTLCOutputInCommitment_read
     */
    write(): Uint8Array;
    /**
     * Read a HTLCOutputInCommitment from a byte array, created by HTLCOutputInCommitment_write
     */
    static constructor_read(ser: Uint8Array): Result_HTLCOutputInCommitmentDecodeErrorZ;
}
