import { Result_AnnouncementSignaturesDecodeErrorZ } from '../structs/Result_AnnouncementSignaturesDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An announcement_signatures message to be sent or received from a peer
 */
export declare class AnnouncementSignatures extends CommonBase {
    /**
     * The channel ID
     */
    get_channel_id(): Uint8Array;
    /**
     * The channel ID
     */
    set_channel_id(val: Uint8Array): void;
    /**
     * The short channel ID
     */
    get_short_channel_id(): bigint;
    /**
     * The short channel ID
     */
    set_short_channel_id(val: bigint): void;
    /**
     * A signature by the node key
     */
    get_node_signature(): Uint8Array;
    /**
     * A signature by the node key
     */
    set_node_signature(val: Uint8Array): void;
    /**
     * A signature by the funding key
     */
    get_bitcoin_signature(): Uint8Array;
    /**
     * A signature by the funding key
     */
    set_bitcoin_signature(val: Uint8Array): void;
    /**
     * Constructs a new AnnouncementSignatures given each field
     */
    static constructor_new(channel_id_arg: Uint8Array, short_channel_id_arg: bigint, node_signature_arg: Uint8Array, bitcoin_signature_arg: Uint8Array): AnnouncementSignatures;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the AnnouncementSignatures
     */
    clone(): AnnouncementSignatures;
    /**
     * Serialize the AnnouncementSignatures object into a byte array which can be read by AnnouncementSignatures_read
     */
    write(): Uint8Array;
    /**
     * Read a AnnouncementSignatures from a byte array, created by AnnouncementSignatures_write
     */
    static constructor_read(ser: Uint8Array): Result_AnnouncementSignaturesDecodeErrorZ;
}
