import { Result_FundingSignedDecodeErrorZ } from '../structs/Result_FundingSignedDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A funding_signed message to be sent or received from a peer
 */
export declare class FundingSigned extends CommonBase {
    /**
     * The channel ID
     */
    get_channel_id(): Uint8Array;
    /**
     * The channel ID
     */
    set_channel_id(val: Uint8Array): void;
    /**
     * The signature of the channel acceptor (fundee) on the initial commitment transaction
     */
    get_signature(): Uint8Array;
    /**
     * The signature of the channel acceptor (fundee) on the initial commitment transaction
     */
    set_signature(val: Uint8Array): void;
    /**
     * Constructs a new FundingSigned given each field
     */
    static constructor_new(channel_id_arg: Uint8Array, signature_arg: Uint8Array): FundingSigned;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the FundingSigned
     */
    clone(): FundingSigned;
    /**
     * Serialize the FundingSigned object into a byte array which can be read by FundingSigned_read
     */
    write(): Uint8Array;
    /**
     * Read a FundingSigned from a byte array, created by FundingSigned_write
     */
    static constructor_read(ser: Uint8Array): Result_FundingSignedDecodeErrorZ;
}
