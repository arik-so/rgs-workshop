import { Result_ErrorMessageDecodeErrorZ } from '../structs/Result_ErrorMessageDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An error message to be sent or received from a peer
 */
export declare class ErrorMessage extends CommonBase {
    /**
     * The channel ID involved in the error.
     *
     * All-0s indicates a general error unrelated to a specific channel, after which all channels
     * with the sending peer should be closed.
     */
    get_channel_id(): Uint8Array;
    /**
     * The channel ID involved in the error.
     *
     * All-0s indicates a general error unrelated to a specific channel, after which all channels
     * with the sending peer should be closed.
     */
    set_channel_id(val: Uint8Array): void;
    /**
     * A possibly human-readable error description.
     * The string should be sanitized before it is used (e.g. emitted to logs or printed to
     * stdout). Otherwise, a well crafted error message may trigger a security vulnerability in
     * the terminal emulator or the logging subsystem.
     */
    get_data(): string;
    /**
     * A possibly human-readable error description.
     * The string should be sanitized before it is used (e.g. emitted to logs or printed to
     * stdout). Otherwise, a well crafted error message may trigger a security vulnerability in
     * the terminal emulator or the logging subsystem.
     */
    set_data(val: string): void;
    /**
     * Constructs a new ErrorMessage given each field
     */
    static constructor_new(channel_id_arg: Uint8Array, data_arg: string): ErrorMessage;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ErrorMessage
     */
    clone(): ErrorMessage;
    /**
     * Serialize the ErrorMessage object into a byte array which can be read by ErrorMessage_read
     */
    write(): Uint8Array;
    /**
     * Read a ErrorMessage from a byte array, created by ErrorMessage_write
     */
    static constructor_read(ser: Uint8Array): Result_ErrorMessageDecodeErrorZ;
}
