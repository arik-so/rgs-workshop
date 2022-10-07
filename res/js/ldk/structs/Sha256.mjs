import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * SHA-256 hash
 */
export class Sha256 extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Sha256_free);
    }
    clone_ptr() {
        const ret = bindings.Sha256_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the Sha256
     */
    clone() {
        const ret = bindings.Sha256_clone(this.ptr);
        const ret_hu_conv = new Sha256(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two Sha256s contain equal inner contents.
     */
    hash() {
        const ret = bindings.Sha256_hash(this.ptr);
        return ret;
    }
    /**
     * Checks if two Sha256s contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.Sha256_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
}
//# sourceMappingURL=Sha256.mjs.map