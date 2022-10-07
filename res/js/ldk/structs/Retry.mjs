import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Strategies available to retry payment path failures for an [`Invoice`].
 */
export class Retry extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.Retry_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKRetry_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new Retry_Attempts(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.Retry_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the Retry
     */
    clone() {
        const ret = bindings.Retry_clone(this.ptr);
        const ret_hu_conv = Retry.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new Attempts-variant Retry
     */
    static constructor_attempts(a) {
        const ret = bindings.Retry_attempts(a);
        const ret_hu_conv = Retry.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Checks if two Retrys contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     */
    eq(b) {
        const ret = bindings.Retry_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        return ret;
    }
    /**
     * Checks if two Retrys contain equal inner contents.
     */
    hash() {
        const ret = bindings.Retry_hash(this.ptr);
        return ret;
    }
}
/** A Retry of type Attempts */
export class Retry_Attempts extends Retry {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.attempts = bindings.LDKRetry_Attempts_get_attempts(ptr);
    }
}
//# sourceMappingURL=Retry.mjs.map