import { Result_PongDecodeErrorZ } from '../structs/Result_PongDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A pong message to be sent or received from a peer
 */
export declare class Pong extends CommonBase {
    /**
     * The pong packet size.
     * This field is not sent on the wire. byteslen zeros are sent.
     */
    get_byteslen(): number;
    /**
     * The pong packet size.
     * This field is not sent on the wire. byteslen zeros are sent.
     */
    set_byteslen(val: number): void;
    /**
     * Constructs a new Pong given each field
     */
    static constructor_new(byteslen_arg: number): Pong;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the Pong
     */
    clone(): Pong;
    /**
     * Serialize the Pong object into a byte array which can be read by Pong_read
     */
    write(): Uint8Array;
    /**
     * Read a Pong from a byte array, created by Pong_write
     */
    static constructor_read(ser: Uint8Array): Result_PongDecodeErrorZ;
}
