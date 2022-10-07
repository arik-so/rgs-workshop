import { Level } from '../enums/Level.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A Record, unit of logging output with Metadata to enable filtering
 * Module_path, file, line to inform on log's source
 */
export declare class Record extends CommonBase {
    /**
     * The verbosity level of the message.
     */
    get_level(): Level;
    /**
     * The verbosity level of the message.
     */
    set_level(val: Level): void;
    /**
     * The message body.
     */
    get_args(): string;
    /**
     * The message body.
     */
    set_args(val: string): void;
    /**
     * The module path of the message.
     */
    get_module_path(): string;
    /**
     * The module path of the message.
     */
    set_module_path(val: string): void;
    /**
     * The source file containing the message.
     */
    get_file(): string;
    /**
     * The source file containing the message.
     */
    set_file(val: string): void;
    /**
     * The line containing the message.
     */
    get_line(): number;
    /**
     * The line containing the message.
     */
    set_line(val: number): void;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the Record
     */
    clone(): Record;
}
