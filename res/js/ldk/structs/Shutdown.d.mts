import { Result_ShutdownDecodeErrorZ } from '../structs/Result_ShutdownDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A shutdown message to be sent or received from a peer
 */
export declare class Shutdown extends CommonBase {
    /**
     * The channel ID
     */
    get_channel_id(): Uint8Array;
    /**
     * The channel ID
     */
    set_channel_id(val: Uint8Array): void;
    /**
     * The destination of this peer's funds on closing.
     * Must be in one of these forms: p2pkh, p2sh, p2wpkh, p2wsh.
     */
    get_scriptpubkey(): Uint8Array;
    /**
     * The destination of this peer's funds on closing.
     * Must be in one of these forms: p2pkh, p2sh, p2wpkh, p2wsh.
     */
    set_scriptpubkey(val: Uint8Array): void;
    /**
     * Constructs a new Shutdown given each field
     */
    static constructor_new(channel_id_arg: Uint8Array, scriptpubkey_arg: Uint8Array): Shutdown;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the Shutdown
     */
    clone(): Shutdown;
    /**
     * Serialize the Shutdown object into a byte array which can be read by Shutdown_read
     */
    write(): Uint8Array;
    /**
     * Read a Shutdown from a byte array, created by Shutdown_write
     */
    static constructor_read(ser: Uint8Array): Result_ShutdownDecodeErrorZ;
}
