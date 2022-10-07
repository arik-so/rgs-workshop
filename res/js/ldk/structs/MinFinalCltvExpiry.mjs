import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * `min_final_cltv_expiry` to use for the last HTLC in the route
 */
export class MinFinalCltvExpiry extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.MinFinalCltvExpiry_free);
    }
    get_a() {
        const ret = bindings.MinFinalCltvExpiry_get_a(this.ptr);
        return ret;
    }
    set_a(val) {
        bindings.MinFinalCltvExpiry_set_a(this.ptr, val);
    }
    /**
     * Constructs a new MinFinalCltvExpiry given each field
     */
    static constructor_new(a_arg) {
        const ret = bindings.MinFinalCltvExpiry_new(a_arg);
        const ret_hu_conv = new MinFinalCltvExpiry(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.MinFinalCltvExpiry_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the MinFinalCltvExpiry
     */
    clone() {
        const ret = bindings.MinFinalCltvExpiry_clone(this.ptr);
        const ret_hu_conv = new MinFinalCltvExpiry(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two MinFinalCltvExpirys contain equal inner contents.
     */
    hash() {
        const ret = bindings.MinFinalCltvExpiry_hash(this.ptr);
        return ret;
    }
    /**
     * Checks if two MinFinalCltvExpirys contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.MinFinalCltvExpiry_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
}
//# sourceMappingURL=MinFinalCltvExpiry.mjs.map