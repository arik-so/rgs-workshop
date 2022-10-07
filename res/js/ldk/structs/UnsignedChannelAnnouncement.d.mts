import { ChannelFeatures } from '../structs/ChannelFeatures.mjs';
import { Result_UnsignedChannelAnnouncementDecodeErrorZ } from '../structs/Result_UnsignedChannelAnnouncementDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * The unsigned part of a channel_announcement
 */
export declare class UnsignedChannelAnnouncement extends CommonBase {
    /**
     * The advertised channel features
     */
    get_features(): ChannelFeatures;
    /**
     * The advertised channel features
     */
    set_features(val: ChannelFeatures): void;
    /**
     * The genesis hash of the blockchain where the channel is to be opened
     */
    get_chain_hash(): Uint8Array;
    /**
     * The genesis hash of the blockchain where the channel is to be opened
     */
    set_chain_hash(val: Uint8Array): void;
    /**
     * The short channel ID
     */
    get_short_channel_id(): bigint;
    /**
     * The short channel ID
     */
    set_short_channel_id(val: bigint): void;
    /**
     * One of the two node_ids which are endpoints of this channel
     */
    get_node_id_1(): Uint8Array;
    /**
     * One of the two node_ids which are endpoints of this channel
     */
    set_node_id_1(val: Uint8Array): void;
    /**
     * The other of the two node_ids which are endpoints of this channel
     */
    get_node_id_2(): Uint8Array;
    /**
     * The other of the two node_ids which are endpoints of this channel
     */
    set_node_id_2(val: Uint8Array): void;
    /**
     * The funding key for the first node
     */
    get_bitcoin_key_1(): Uint8Array;
    /**
     * The funding key for the first node
     */
    set_bitcoin_key_1(val: Uint8Array): void;
    /**
     * The funding key for the second node
     */
    get_bitcoin_key_2(): Uint8Array;
    /**
     * The funding key for the second node
     */
    set_bitcoin_key_2(val: Uint8Array): void;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the UnsignedChannelAnnouncement
     */
    clone(): UnsignedChannelAnnouncement;
    /**
     * Serialize the UnsignedChannelAnnouncement object into a byte array which can be read by UnsignedChannelAnnouncement_read
     */
    write(): Uint8Array;
    /**
     * Read a UnsignedChannelAnnouncement from a byte array, created by UnsignedChannelAnnouncement_write
     */
    static constructor_read(ser: Uint8Array): Result_UnsignedChannelAnnouncementDecodeErrorZ;
}
