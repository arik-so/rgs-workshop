import { RouteHintHop } from '../structs/RouteHintHop.mjs';
import { Result_RouteHintDecodeErrorZ } from '../structs/Result_RouteHintDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A list of hops along a payment path terminating with a channel to the recipient.
 */
export declare class RouteHint extends CommonBase {
    get_a(): RouteHintHop[];
    set_a(val: RouteHintHop[]): void;
    /**
     * Constructs a new RouteHint given each field
     */
    static constructor_new(a_arg: RouteHintHop[]): RouteHint;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the RouteHint
     */
    clone(): RouteHint;
    /**
     * Checks if two RouteHints contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Checks if two RouteHints contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: RouteHint): boolean;
    /**
     * Serialize the RouteHint object into a byte array which can be read by RouteHint_read
     */
    write(): Uint8Array;
    /**
     * Read a RouteHint from a byte array, created by RouteHint_write
     */
    static constructor_read(ser: Uint8Array): Result_RouteHintDecodeErrorZ;
}
