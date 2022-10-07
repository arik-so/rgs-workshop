import { UnsignedNodeAnnouncement } from '../structs/UnsignedNodeAnnouncement.mjs';
import { Result_NodeAnnouncementDecodeErrorZ } from '../structs/Result_NodeAnnouncementDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A node_announcement message to be sent or received from a peer
 */
export declare class NodeAnnouncement extends CommonBase {
    /**
     * The signature by the node key
     */
    get_signature(): Uint8Array;
    /**
     * The signature by the node key
     */
    set_signature(val: Uint8Array): void;
    /**
     * The actual content of the announcement
     */
    get_contents(): UnsignedNodeAnnouncement;
    /**
     * The actual content of the announcement
     */
    set_contents(val: UnsignedNodeAnnouncement): void;
    /**
     * Constructs a new NodeAnnouncement given each field
     */
    static constructor_new(signature_arg: Uint8Array, contents_arg: UnsignedNodeAnnouncement): NodeAnnouncement;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the NodeAnnouncement
     */
    clone(): NodeAnnouncement;
    /**
     * Serialize the NodeAnnouncement object into a byte array which can be read by NodeAnnouncement_read
     */
    write(): Uint8Array;
    /**
     * Read a NodeAnnouncement from a byte array, created by NodeAnnouncement_write
     */
    static constructor_read(ser: Uint8Array): Result_NodeAnnouncementDecodeErrorZ;
}
