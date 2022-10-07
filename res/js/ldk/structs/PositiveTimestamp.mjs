import { Result_PositiveTimestampCreationErrorZ } from '../structs/Result_PositiveTimestampCreationErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A timestamp that refers to a date after 1 January 1970.
 *
 * # Invariants
 *
 * The Unix timestamp representing the stored time has to be positive and no greater than
 * [`MAX_TIMESTAMP`].
 */
export class PositiveTimestamp extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.PositiveTimestamp_free);
    }
    /**
     * Checks if two PositiveTimestamps contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.PositiveTimestamp_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.PositiveTimestamp_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the PositiveTimestamp
     */
    clone() {
        const ret = bindings.PositiveTimestamp_clone(this.ptr);
        const ret_hu_conv = new PositiveTimestamp(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two PositiveTimestamps contain equal inner contents.
     */
    hash() {
        const ret = bindings.PositiveTimestamp_hash(this.ptr);
        return ret;
    }
    /**
     * Creates a `PositiveTimestamp` from a Unix timestamp in the range `0..=MAX_TIMESTAMP`.
     *
     * Otherwise, returns a [`CreationError::TimestampOutOfBounds`].
     */
    static constructor_from_unix_timestamp(unix_seconds) {
        const ret = bindings.PositiveTimestamp_from_unix_timestamp(unix_seconds);
        const ret_hu_conv = Result_PositiveTimestampCreationErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a `PositiveTimestamp` from a [`Duration`] since the Unix epoch in the range
     * `0..=MAX_TIMESTAMP`.
     *
     * Otherwise, returns a [`CreationError::TimestampOutOfBounds`].
     */
    static constructor_from_duration_since_epoch(duration) {
        const ret = bindings.PositiveTimestamp_from_duration_since_epoch(duration);
        const ret_hu_conv = Result_PositiveTimestampCreationErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Returns the Unix timestamp representing the stored time
     */
    as_unix_timestamp() {
        const ret = bindings.PositiveTimestamp_as_unix_timestamp(this.ptr);
        return ret;
    }
    /**
     * Returns the duration of the stored time since the Unix epoch
     */
    as_duration_since_epoch() {
        const ret = bindings.PositiveTimestamp_as_duration_since_epoch(this.ptr);
        return ret;
    }
}
//# sourceMappingURL=PositiveTimestamp.mjs.map