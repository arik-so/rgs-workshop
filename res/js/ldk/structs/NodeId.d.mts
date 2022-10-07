import { Result_NodeIdDecodeErrorZ } from '../structs/Result_NodeIdDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Represents the compressed public key of a node
 */
export declare class NodeId extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the NodeId
     */
    clone(): NodeId;
    /**
     * Create a new NodeId from a public key
     */
    static constructor_from_pubkey(pubkey: Uint8Array): NodeId;
    /**
     * Get the public key slice from this NodeId
     */
    as_slice(): Uint8Array;
    /**
     * Checks if two NodeIds contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Serialize the NodeId object into a byte array which can be read by NodeId_read
     */
    write(): Uint8Array;
    /**
     * Read a NodeId from a byte array, created by NodeId_write
     */
    static constructor_read(ser: Uint8Array): Result_NodeIdDecodeErrorZ;
}
