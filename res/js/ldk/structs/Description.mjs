import { Result_DescriptionCreationErrorZ } from '../structs/Result_DescriptionCreationErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Description string
 *
 * # Invariants
 * The description can be at most 639 __bytes__ long
 */
export class Description extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Description_free);
    }
    clone_ptr() {
        const ret = bindings.Description_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the Description
     */
    clone() {
        const ret = bindings.Description_clone(this.ptr);
        const ret_hu_conv = new Description(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two Descriptions contain equal inner contents.
     */
    hash() {
        const ret = bindings.Description_hash(this.ptr);
        return ret;
    }
    /**
     * Checks if two Descriptions contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.Description_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    /**
     * Creates a new `Description` if `description` is at most 1023 __bytes__ long,
     * returns `CreationError::DescriptionTooLong` otherwise
     *
     * Please note that single characters may use more than one byte due to UTF8 encoding.
     */
    static constructor_new(description) {
        const ret = bindings.Description_new(bindings.encodeString(description));
        const ret_hu_conv = Result_DescriptionCreationErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Returns the underlying description `String`
     */
    into_inner() {
        const ret = bindings.Description_into_inner(this.ptr);
        const ret_conv = bindings.decodeString(ret);
        return ret_conv;
    }
}
//# sourceMappingURL=Description.mjs.map