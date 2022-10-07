import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Recoverable signature
 */
export class InvoiceSignature extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.InvoiceSignature_free);
    }
    clone_ptr() {
        const ret = bindings.InvoiceSignature_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the InvoiceSignature
     */
    clone() {
        const ret = bindings.InvoiceSignature_clone(this.ptr);
        const ret_hu_conv = new InvoiceSignature(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two InvoiceSignatures contain equal inner contents.
     */
    hash() {
        const ret = bindings.InvoiceSignature_hash(this.ptr);
        return ret;
    }
    /**
     * Checks if two InvoiceSignatures contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.InvoiceSignature_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
}
//# sourceMappingURL=InvoiceSignature.mjs.map