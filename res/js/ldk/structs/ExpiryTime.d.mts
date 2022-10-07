import { CommonBase } from './CommonBase.mjs';
/**
 * Positive duration that defines when (relatively to the timestamp) in the future the invoice
 * expires
 */
export declare class ExpiryTime extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ExpiryTime
     */
    clone(): ExpiryTime;
    /**
     * Checks if two ExpiryTimes contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Checks if two ExpiryTimes contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: ExpiryTime): boolean;
    /**
     * Construct an `ExpiryTime` from seconds.
     */
    static constructor_from_seconds(seconds: bigint): ExpiryTime;
    /**
     * Construct an `ExpiryTime` from a `Duration`.
     */
    static constructor_from_duration(duration: bigint): ExpiryTime;
    /**
     * Returns the expiry time in seconds
     */
    as_seconds(): bigint;
    /**
     * Returns a reference to the underlying `Duration` (=expiry time)
     */
    as_duration(): bigint;
}