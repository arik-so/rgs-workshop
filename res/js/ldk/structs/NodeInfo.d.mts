import { RoutingFees } from '../structs/RoutingFees.mjs';
import { NodeAnnouncementInfo } from '../structs/NodeAnnouncementInfo.mjs';
import { Result_NodeInfoDecodeErrorZ } from '../structs/Result_NodeInfoDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Details about a node in the network, known from the network announcement.
 */
export declare class NodeInfo extends CommonBase {
    /**
     * All valid channels a node has announced
     *
     * Returns a copy of the field.
     */
    get_channels(): bigint[];
    /**
     * All valid channels a node has announced
     */
    set_channels(val: bigint[]): void;
    /**
     * Lowest fees enabling routing via any of the enabled, known channels to a node.
     * The two fields (flat and proportional fee) are independent,
     * meaning they don't have to refer to the same channel.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_lowest_inbound_channel_fees(): RoutingFees;
    /**
     * Lowest fees enabling routing via any of the enabled, known channels to a node.
     * The two fields (flat and proportional fee) are independent,
     * meaning they don't have to refer to the same channel.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_lowest_inbound_channel_fees(val: RoutingFees): void;
    /**
     * More information about a node from node_announcement.
     * Optional because we store a Node entry after learning about it from
     * a channel announcement, but before receiving a node announcement.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_announcement_info(): NodeAnnouncementInfo;
    /**
     * More information about a node from node_announcement.
     * Optional because we store a Node entry after learning about it from
     * a channel announcement, but before receiving a node announcement.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_announcement_info(val: NodeAnnouncementInfo): void;
    /**
     * Constructs a new NodeInfo given each field
     */
    static constructor_new(channels_arg: bigint[], lowest_inbound_channel_fees_arg: RoutingFees, announcement_info_arg: NodeAnnouncementInfo): NodeInfo;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the NodeInfo
     */
    clone(): NodeInfo;
    /**
     * Serialize the NodeInfo object into a byte array which can be read by NodeInfo_read
     */
    write(): Uint8Array;
    /**
     * Read a NodeInfo from a byte array, created by NodeInfo_write
     */
    static constructor_read(ser: Uint8Array): Result_NodeInfoDecodeErrorZ;
}
