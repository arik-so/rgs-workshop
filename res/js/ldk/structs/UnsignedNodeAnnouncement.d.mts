import { NodeFeatures } from '../structs/NodeFeatures.mjs';
import { NetAddress } from '../structs/NetAddress.mjs';
import { Result_UnsignedNodeAnnouncementDecodeErrorZ } from '../structs/Result_UnsignedNodeAnnouncementDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * The unsigned part of a node_announcement
 */
export declare class UnsignedNodeAnnouncement extends CommonBase {
    /**
     * The advertised features
     */
    get_features(): NodeFeatures;
    /**
     * The advertised features
     */
    set_features(val: NodeFeatures): void;
    /**
     * A strictly monotonic announcement counter, with gaps allowed
     */
    get_timestamp(): number;
    /**
     * A strictly monotonic announcement counter, with gaps allowed
     */
    set_timestamp(val: number): void;
    /**
     * The node_id this announcement originated from (don't rebroadcast the node_announcement back
     * to this node).
     */
    get_node_id(): Uint8Array;
    /**
     * The node_id this announcement originated from (don't rebroadcast the node_announcement back
     * to this node).
     */
    set_node_id(val: Uint8Array): void;
    /**
     * An RGB color for UI purposes
     */
    get_rgb(): Uint8Array;
    /**
     * An RGB color for UI purposes
     */
    set_rgb(val: Uint8Array): void;
    /**
     * An alias, for UI purposes.  This should be sanitized before use.  There is no guarantee
     * of uniqueness.
     */
    get_alias(): Uint8Array;
    /**
     * An alias, for UI purposes.  This should be sanitized before use.  There is no guarantee
     * of uniqueness.
     */
    set_alias(val: Uint8Array): void;
    /**
     * List of addresses on which this node is reachable
     *
     * Returns a copy of the field.
     */
    get_addresses(): NetAddress[];
    /**
     * List of addresses on which this node is reachable
     */
    set_addresses(val: NetAddress[]): void;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the UnsignedNodeAnnouncement
     */
    clone(): UnsignedNodeAnnouncement;
    /**
     * Serialize the UnsignedNodeAnnouncement object into a byte array which can be read by UnsignedNodeAnnouncement_read
     */
    write(): Uint8Array;
    /**
     * Read a UnsignedNodeAnnouncement from a byte array, created by UnsignedNodeAnnouncement_write
     */
    static constructor_read(ser: Uint8Array): Result_UnsignedNodeAnnouncementDecodeErrorZ;
}
