import { CommonBase } from './CommonBase.mjs';
/**
 * `min_final_cltv_expiry` to use for the last HTLC in the route
 */
export declare class MinFinalCltvExpiry extends CommonBase {
    get_a(): bigint;
    set_a(val: bigint): void;
    /**
     * Constructs a new MinFinalCltvExpiry given each field
     */
    static constructor_new(a_arg: bigint): MinFinalCltvExpiry;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the MinFinalCltvExpiry
     */
    clone(): MinFinalCltvExpiry;
    /**
     * Checks if two MinFinalCltvExpirys contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Checks if two MinFinalCltvExpirys contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: MinFinalCltvExpiry): boolean;
}
