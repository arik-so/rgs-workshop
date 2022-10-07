import { Result_PositiveTimestampCreationErrorZ } from '../structs/Result_PositiveTimestampCreationErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A timestamp that refers to a date after 1 January 1970.
 *
 * # Invariants
 *
 * The Unix timestamp representing the stored time has to be positive and no greater than
 * [`MAX_TIMESTAMP`].
 */
export declare class PositiveTimestamp extends CommonBase {
    /**
     * Checks if two PositiveTimestamps contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: PositiveTimestamp): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the PositiveTimestamp
     */
    clone(): PositiveTimestamp;
    /**
     * Checks if two PositiveTimestamps contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Creates a `PositiveTimestamp` from a Unix timestamp in the range `0..=MAX_TIMESTAMP`.
     *
     * Otherwise, returns a [`CreationError::TimestampOutOfBounds`].
     */
    static constructor_from_unix_timestamp(unix_seconds: bigint): Result_PositiveTimestampCreationErrorZ;
    /**
     * Creates a `PositiveTimestamp` from a [`Duration`] since the Unix epoch in the range
     * `0..=MAX_TIMESTAMP`.
     *
     * Otherwise, returns a [`CreationError::TimestampOutOfBounds`].
     */
    static constructor_from_duration_since_epoch(duration: bigint): Result_PositiveTimestampCreationErrorZ;
    /**
     * Returns the Unix timestamp representing the stored time
     */
    as_unix_timestamp(): bigint;
    /**
     * Returns the duration of the stored time since the Unix epoch
     */
    as_duration_since_epoch(): bigint;
}
