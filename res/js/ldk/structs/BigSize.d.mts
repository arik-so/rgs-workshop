import { CommonBase } from './CommonBase.mjs';
/**
 * Lightning TLV uses a custom variable-length integer called BigSize. It is similar to Bitcoin's
 * variable-length integers except that it is serialized in big-endian instead of little-endian.
 *
 * Like Bitcoin's variable-length integer, it exhibits ambiguity in that certain values can be
 * encoded in several different ways, which we must check for at deserialization-time. Thus, if
 * you're looking for an example of a variable-length integer to use for your own project, move
 * along, this is a rather poor design.
 */
export declare class BigSize extends CommonBase {
    get_a(): bigint;
    set_a(val: bigint): void;
    /**
     * Constructs a new BigSize given each field
     */
    static constructor_new(a_arg: bigint): BigSize;
}
