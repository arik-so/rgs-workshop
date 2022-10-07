import { Result_WarningMessageDecodeErrorZ } from '../structs/Result_WarningMessageDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A warning message to be sent or received from a peer
 */
export declare class WarningMessage extends CommonBase {
    /**
     * The channel ID involved in the warning.
     *
     * All-0s indicates a warning unrelated to a specific channel.
     */
    get_channel_id(): Uint8Array;
    /**
     * The channel ID involved in the warning.
     *
     * All-0s indicates a warning unrelated to a specific channel.
     */
    set_channel_id(val: Uint8Array): void;
    /**
     * A possibly human-readable warning description.
     * The string should be sanitized before it is used (e.g. emitted to logs or printed to
     * stdout). Otherwise, a well crafted error message may trigger a security vulnerability in
     * the terminal emulator or the logging subsystem.
     */
    get_data(): string;
    /**
     * A possibly human-readable warning description.
     * The string should be sanitized before it is used (e.g. emitted to logs or printed to
     * stdout). Otherwise, a well crafted error message may trigger a security vulnerability in
     * the terminal emulator or the logging subsystem.
     */
    set_data(val: string): void;
    /**
     * Constructs a new WarningMessage given each field
     */
    static constructor_new(channel_id_arg: Uint8Array, data_arg: string): WarningMessage;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the WarningMessage
     */
    clone(): WarningMessage;
    /**
     * Serialize the WarningMessage object into a byte array which can be read by WarningMessage_read
     */
    write(): Uint8Array;
    /**
     * Read a WarningMessage from a byte array, created by WarningMessage_write
     */
    static constructor_read(ser: Uint8Array): Result_WarningMessageDecodeErrorZ;
}
