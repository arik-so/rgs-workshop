import { Result_FundingCreatedDecodeErrorZ } from '../structs/Result_FundingCreatedDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A funding_created message to be sent or received from a peer
 */
export declare class FundingCreated extends CommonBase {
    /**
     * A temporary channel ID, until the funding is established
     */
    get_temporary_channel_id(): Uint8Array;
    /**
     * A temporary channel ID, until the funding is established
     */
    set_temporary_channel_id(val: Uint8Array): void;
    /**
     * The funding transaction ID
     */
    get_funding_txid(): Uint8Array;
    /**
     * The funding transaction ID
     */
    set_funding_txid(val: Uint8Array): void;
    /**
     * The specific output index funding this channel
     */
    get_funding_output_index(): number;
    /**
     * The specific output index funding this channel
     */
    set_funding_output_index(val: number): void;
    /**
     * The signature of the channel initiator (funder) on the initial commitment transaction
     */
    get_signature(): Uint8Array;
    /**
     * The signature of the channel initiator (funder) on the initial commitment transaction
     */
    set_signature(val: Uint8Array): void;
    /**
     * Constructs a new FundingCreated given each field
     */
    static constructor_new(temporary_channel_id_arg: Uint8Array, funding_txid_arg: Uint8Array, funding_output_index_arg: number, signature_arg: Uint8Array): FundingCreated;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the FundingCreated
     */
    clone(): FundingCreated;
    /**
     * Serialize the FundingCreated object into a byte array which can be read by FundingCreated_read
     */
    write(): Uint8Array;
    /**
     * Read a FundingCreated from a byte array, created by FundingCreated_write
     */
    static constructor_read(ser: Uint8Array): Result_FundingCreatedDecodeErrorZ;
}
