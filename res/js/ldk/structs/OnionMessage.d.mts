import { Result_OnionMessageDecodeErrorZ } from '../structs/Result_OnionMessageDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An onion message to be sent or received from a peer
 */
export declare class OnionMessage extends CommonBase {
    /**
     * Used in decrypting the onion packet's payload.
     */
    get_blinding_point(): Uint8Array;
    /**
     * Used in decrypting the onion packet's payload.
     */
    set_blinding_point(val: Uint8Array): void;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the OnionMessage
     */
    clone(): OnionMessage;
    /**
     * Read a OnionMessage from a byte array, created by OnionMessage_write
     */
    static constructor_read(ser: Uint8Array): Result_OnionMessageDecodeErrorZ;
    /**
     * Serialize the OnionMessage object into a byte array which can be read by OnionMessage_read
     */
    write(): Uint8Array;
}
