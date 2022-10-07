import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Positive duration that defines when (relatively to the timestamp) in the future the invoice
 * expires
 */
export class ExpiryTime extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ExpiryTime_free);
    }
    clone_ptr() {
        const ret = bindings.ExpiryTime_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ExpiryTime
     */
    clone() {
        const ret = bindings.ExpiryTime_clone(this.ptr);
        const ret_hu_conv = new ExpiryTime(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two ExpiryTimes contain equal inner contents.
     */
    hash() {
        const ret = bindings.ExpiryTime_hash(this.ptr);
        return ret;
    }
    /**
     * Checks if two ExpiryTimes contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.ExpiryTime_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    /**
     * Construct an `ExpiryTime` from seconds.
     */
    static constructor_from_seconds(seconds) {
        const ret = bindings.ExpiryTime_from_seconds(seconds);
        const ret_hu_conv = new ExpiryTime(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Construct an `ExpiryTime` from a `Duration`.
     */
    static constructor_from_duration(duration) {
        const ret = bindings.ExpiryTime_from_duration(duration);
        const ret_hu_conv = new ExpiryTime(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Returns the expiry time in seconds
     */
    as_seconds() {
        const ret = bindings.ExpiryTime_as_seconds(this.ptr);
        return ret;
    }
    /**
     * Returns a reference to the underlying `Duration` (=expiry time)
     */
    as_duration() {
        const ret = bindings.ExpiryTime_as_duration(this.ptr);
        return ret;
    }
}
//# sourceMappingURL=ExpiryTime.mjs.map