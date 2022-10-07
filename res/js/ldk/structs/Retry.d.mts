import { CommonBase } from './CommonBase.mjs';
/**
 * Strategies available to retry payment path failures for an [`Invoice`].
 */
export declare class Retry extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the Retry
     */
    clone(): Retry;
    /**
     * Utility method to constructs a new Attempts-variant Retry
     */
    static constructor_attempts(a: number): Retry;
    /**
     * Checks if two Retrys contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     */
    eq(b: Retry): boolean;
    /**
     * Checks if two Retrys contain equal inner contents.
     */
    hash(): bigint;
}
/** A Retry of type Attempts */
export declare class Retry_Attempts extends Retry {
    attempts: number;
}
