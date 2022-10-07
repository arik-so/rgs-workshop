import { PositiveTimestamp } from '../structs/PositiveTimestamp.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Data of the `RawInvoice` that is encoded in the data part
 */
export class RawDataPart extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.RawDataPart_free);
    }
    /**
     * generation time of the invoice
     */
    get_timestamp() {
        const ret = bindings.RawDataPart_get_timestamp(this.ptr);
        const ret_hu_conv = new PositiveTimestamp(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * generation time of the invoice
     */
    set_timestamp(val) {
        bindings.RawDataPart_set_timestamp(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Checks if two RawDataParts contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.RawDataPart_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.RawDataPart_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the RawDataPart
     */
    clone() {
        const ret = bindings.RawDataPart_clone(this.ptr);
        const ret_hu_conv = new RawDataPart(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two RawDataParts contain equal inner contents.
     */
    hash() {
        const ret = bindings.RawDataPart_hash(this.ptr);
        return ret;
    }
}
//# sourceMappingURL=RawDataPart.mjs.map