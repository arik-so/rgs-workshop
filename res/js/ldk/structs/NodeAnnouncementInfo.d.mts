import { NodeFeatures } from '../structs/NodeFeatures.mjs';
import { NetAddress } from '../structs/NetAddress.mjs';
import { Result_NodeAnnouncementInfoDecodeErrorZ } from '../structs/Result_NodeAnnouncementInfoDecodeErrorZ.mjs';
import { NodeAlias } from '../structs/NodeAlias.mjs';
import { NodeAnnouncement } from '../structs/NodeAnnouncement.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Information received in the latest node_announcement from this node.
 */
export declare class NodeAnnouncementInfo extends CommonBase {
    /**
     * Protocol features the node announced support for
     */
    get_features(): NodeFeatures;
    /**
     * Protocol features the node announced support for
     */
    set_features(val: NodeFeatures): void;
    /**
     * When the last known update to the node state was issued.
     * Value is opaque, as set in the announcement.
     */
    get_last_update(): number;
    /**
     * When the last known update to the node state was issued.
     * Value is opaque, as set in the announcement.
     */
    set_last_update(val: number): void;
    /**
     * Color assigned to the node
     */
    get_rgb(): Uint8Array;
    /**
     * Color assigned to the node
     */
    set_rgb(val: Uint8Array): void;
    /**
     * Moniker assigned to the node.
     * May be invalid or malicious (eg control chars),
     * should not be exposed to the user.
     */
    get_alias(): NodeAlias;
    /**
     * Moniker assigned to the node.
     * May be invalid or malicious (eg control chars),
     * should not be exposed to the user.
     */
    set_alias(val: NodeAlias): void;
    /**
     * Internet-level addresses via which one can connect to the node
     *
     * Returns a copy of the field.
     */
    get_addresses(): NetAddress[];
    /**
     * Internet-level addresses via which one can connect to the node
     */
    set_addresses(val: NetAddress[]): void;
    /**
     * An initial announcement of the node
     * Mostly redundant with the data we store in fields explicitly.
     * Everything else is useful only for sending out for initial routing sync.
     * Not stored if contains excess data to prevent DoS.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_announcement_message(): NodeAnnouncement;
    /**
     * An initial announcement of the node
     * Mostly redundant with the data we store in fields explicitly.
     * Everything else is useful only for sending out for initial routing sync.
     * Not stored if contains excess data to prevent DoS.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_announcement_message(val: NodeAnnouncement): void;
    /**
     * Constructs a new NodeAnnouncementInfo given each field
     */
    static constructor_new(features_arg: NodeFeatures, last_update_arg: number, rgb_arg: Uint8Array, alias_arg: NodeAlias, addresses_arg: NetAddress[], announcement_message_arg: NodeAnnouncement): NodeAnnouncementInfo;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the NodeAnnouncementInfo
     */
    clone(): NodeAnnouncementInfo;
    /**
     * Serialize the NodeAnnouncementInfo object into a byte array which can be read by NodeAnnouncementInfo_read
     */
    write(): Uint8Array;
    /**
     * Read a NodeAnnouncementInfo from a byte array, created by NodeAnnouncementInfo_write
     */
    static constructor_read(ser: Uint8Array): Result_NodeAnnouncementInfoDecodeErrorZ;
}
