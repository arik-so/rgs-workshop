import { Result_PingDecodeErrorZ } from '../structs/Result_PingDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A ping message to be sent or received from a peer
 */
export declare class Ping extends CommonBase {
    /**
     * The desired response length
     */
    get_ponglen(): number;
    /**
     * The desired response length
     */
    set_ponglen(val: number): void;
    /**
     * The ping packet size.
     * This field is not sent on the wire. byteslen zeros are sent.
     */
    get_byteslen(): number;
    /**
     * The ping packet size.
     * This field is not sent on the wire. byteslen zeros are sent.
     */
    set_byteslen(val: number): void;
    /**
     * Constructs a new Ping given each field
     */
    static constructor_new(ponglen_arg: number, byteslen_arg: number): Ping;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the Ping
     */
    clone(): Ping;
    /**
     * Serialize the Ping object into a byte array which can be read by Ping_read
     */
    write(): Uint8Array;
    /**
     * Read a Ping from a byte array, created by Ping_write
     */
    static constructor_read(ser: Uint8Array): Result_PingDecodeErrorZ;
}
