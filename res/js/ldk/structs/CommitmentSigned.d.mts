import { Result_CommitmentSignedDecodeErrorZ } from '../structs/Result_CommitmentSignedDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A commitment_signed message to be sent or received from a peer
 */
export declare class CommitmentSigned extends CommonBase {
    /**
     * The channel ID
     */
    get_channel_id(): Uint8Array;
    /**
     * The channel ID
     */
    set_channel_id(val: Uint8Array): void;
    /**
     * A signature on the commitment transaction
     */
    get_signature(): Uint8Array;
    /**
     * A signature on the commitment transaction
     */
    set_signature(val: Uint8Array): void;
    /**
     * Signatures on the HTLC transactions
     *
     * Returns a copy of the field.
     */
    get_htlc_signatures(): Uint8Array[];
    /**
     * Signatures on the HTLC transactions
     */
    set_htlc_signatures(val: Uint8Array[]): void;
    /**
     * Constructs a new CommitmentSigned given each field
     */
    static constructor_new(channel_id_arg: Uint8Array, signature_arg: Uint8Array, htlc_signatures_arg: Uint8Array[]): CommitmentSigned;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the CommitmentSigned
     */
    clone(): CommitmentSigned;
    /**
     * Serialize the CommitmentSigned object into a byte array which can be read by CommitmentSigned_read
     */
    write(): Uint8Array;
    /**
     * Read a CommitmentSigned from a byte array, created by CommitmentSigned_write
     */
    static constructor_read(ser: Uint8Array): Result_CommitmentSignedDecodeErrorZ;
}
