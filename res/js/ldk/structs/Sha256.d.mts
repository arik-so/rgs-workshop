import { CommonBase } from './CommonBase.mjs';
/**
 * SHA-256 hash
 */
export declare class Sha256 extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the Sha256
     */
    clone(): Sha256;
    /**
     * Checks if two Sha256s contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Checks if two Sha256s contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: Sha256): boolean;
}
