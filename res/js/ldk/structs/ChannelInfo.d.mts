import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { ChannelAnnouncement } from '../structs/ChannelAnnouncement.mjs';
import { NodeId } from '../structs/NodeId.mjs';
import { ChannelFeatures } from '../structs/ChannelFeatures.mjs';
import { ChannelUpdateInfo } from '../structs/ChannelUpdateInfo.mjs';
import { Result_ChannelInfoDecodeErrorZ } from '../structs/Result_ChannelInfoDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Details about a channel (both directions).
 * Received within a channel announcement.
 */
export declare class ChannelInfo extends CommonBase {
    /**
     * Protocol features of a channel communicated during its announcement
     */
    get_features(): ChannelFeatures;
    /**
     * Protocol features of a channel communicated during its announcement
     */
    set_features(val: ChannelFeatures): void;
    /**
     * Source node of the first direction of a channel
     */
    get_node_one(): NodeId;
    /**
     * Source node of the first direction of a channel
     */
    set_node_one(val: NodeId): void;
    /**
     * Details about the first direction of a channel
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_one_to_two(): ChannelUpdateInfo;
    /**
     * Details about the first direction of a channel
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_one_to_two(val: ChannelUpdateInfo): void;
    /**
     * Source node of the second direction of a channel
     */
    get_node_two(): NodeId;
    /**
     * Source node of the second direction of a channel
     */
    set_node_two(val: NodeId): void;
    /**
     * Details about the second direction of a channel
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_two_to_one(): ChannelUpdateInfo;
    /**
     * Details about the second direction of a channel
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_two_to_one(val: ChannelUpdateInfo): void;
    /**
     * The channel capacity as seen on-chain, if chain lookup is available.
     */
    get_capacity_sats(): Option_u64Z;
    /**
     * The channel capacity as seen on-chain, if chain lookup is available.
     */
    set_capacity_sats(val: Option_u64Z): void;
    /**
     * An initial announcement of the channel
     * Mostly redundant with the data we store in fields explicitly.
     * Everything else is useful only for sending out for initial routing sync.
     * Not stored if contains excess data to prevent DoS.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_announcement_message(): ChannelAnnouncement;
    /**
     * An initial announcement of the channel
     * Mostly redundant with the data we store in fields explicitly.
     * Everything else is useful only for sending out for initial routing sync.
     * Not stored if contains excess data to prevent DoS.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_announcement_message(val: ChannelAnnouncement): void;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ChannelInfo
     */
    clone(): ChannelInfo;
    /**
     * Returns a [`ChannelUpdateInfo`] based on the direction implied by the channel_flag.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_directional_info(channel_flags: number): ChannelUpdateInfo;
    /**
     * Serialize the ChannelInfo object into a byte array which can be read by ChannelInfo_read
     */
    write(): Uint8Array;
    /**
     * Read a ChannelInfo from a byte array, created by ChannelInfo_write
     */
    static constructor_read(ser: Uint8Array): Result_ChannelInfoDecodeErrorZ;
}
