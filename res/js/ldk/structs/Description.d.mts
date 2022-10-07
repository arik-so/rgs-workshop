import { Result_DescriptionCreationErrorZ } from '../structs/Result_DescriptionCreationErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Description string
 *
 * # Invariants
 * The description can be at most 639 __bytes__ long
 */
export declare class Description extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the Description
     */
    clone(): Description;
    /**
     * Checks if two Descriptions contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Checks if two Descriptions contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: Description): boolean;
    /**
     * Creates a new `Description` if `description` is at most 1023 __bytes__ long,
     * returns `CreationError::DescriptionTooLong` otherwise
     *
     * Please note that single characters may use more than one byte due to UTF8 encoding.
     */
    static constructor_new(description: string): Result_DescriptionCreationErrorZ;
    /**
     * Returns the underlying description `String`
     */
    into_inner(): string;
}
