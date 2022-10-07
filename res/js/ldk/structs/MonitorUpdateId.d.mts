import { CommonBase } from './CommonBase.mjs';
/**
 * An opaque identifier describing a specific [`Persist`] method call.
 */
export declare class MonitorUpdateId extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the MonitorUpdateId
     */
    clone(): MonitorUpdateId;
    /**
     * Checks if two MonitorUpdateIds contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Checks if two MonitorUpdateIds contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: MonitorUpdateId): boolean;
}
