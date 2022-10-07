import { UnsignedChannelAnnouncement } from '../structs/UnsignedChannelAnnouncement.mjs';
import { Result_ChannelAnnouncementDecodeErrorZ } from '../structs/Result_ChannelAnnouncementDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A channel_announcement message to be sent or received from a peer
 */
export declare class ChannelAnnouncement extends CommonBase {
    /**
     * Authentication of the announcement by the first public node
     */
    get_node_signature_1(): Uint8Array;
    /**
     * Authentication of the announcement by the first public node
     */
    set_node_signature_1(val: Uint8Array): void;
    /**
     * Authentication of the announcement by the second public node
     */
    get_node_signature_2(): Uint8Array;
    /**
     * Authentication of the announcement by the second public node
     */
    set_node_signature_2(val: Uint8Array): void;
    /**
     * Proof of funding UTXO ownership by the first public node
     */
    get_bitcoin_signature_1(): Uint8Array;
    /**
     * Proof of funding UTXO ownership by the first public node
     */
    set_bitcoin_signature_1(val: Uint8Array): void;
    /**
     * Proof of funding UTXO ownership by the second public node
     */
    get_bitcoin_signature_2(): Uint8Array;
    /**
     * Proof of funding UTXO ownership by the second public node
     */
    set_bitcoin_signature_2(val: Uint8Array): void;
    /**
     * The actual announcement
     */
    get_contents(): UnsignedChannelAnnouncement;
    /**
     * The actual announcement
     */
    set_contents(val: UnsignedChannelAnnouncement): void;
    /**
     * Constructs a new ChannelAnnouncement given each field
     */
    static constructor_new(node_signature_1_arg: Uint8Array, node_signature_2_arg: Uint8Array, bitcoin_signature_1_arg: Uint8Array, bitcoin_signature_2_arg: Uint8Array, contents_arg: UnsignedChannelAnnouncement): ChannelAnnouncement;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ChannelAnnouncement
     */
    clone(): ChannelAnnouncement;
    /**
     * Serialize the ChannelAnnouncement object into a byte array which can be read by ChannelAnnouncement_read
     */
    write(): Uint8Array;
    /**
     * Read a ChannelAnnouncement from a byte array, created by ChannelAnnouncement_write
     */
    static constructor_read(ser: Uint8Array): Result_ChannelAnnouncementDecodeErrorZ;
}