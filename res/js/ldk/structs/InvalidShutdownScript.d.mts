import { CommonBase } from './CommonBase.mjs';
/**
 * An error occurring when converting from [`Script`] to [`ShutdownScript`].
 */
export declare class InvalidShutdownScript extends CommonBase {
    /**
     * The script that did not meet the requirements from [BOLT #2].
     *
     * [BOLT #2]: https://github.com/lightning/bolts/blob/master/02-peer-protocol.md
     */
    get_script(): Uint8Array;
    /**
     * The script that did not meet the requirements from [BOLT #2].
     *
     * [BOLT #2]: https://github.com/lightning/bolts/blob/master/02-peer-protocol.md
     */
    set_script(val: Uint8Array): void;
    /**
     * Constructs a new InvalidShutdownScript given each field
     */
    static constructor_new(script_arg: Uint8Array): InvalidShutdownScript;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the InvalidShutdownScript
     */
    clone(): InvalidShutdownScript;
}
