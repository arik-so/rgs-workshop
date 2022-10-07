import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An opaque identifier describing a specific [`Persist`] method call.
 */
export class MonitorUpdateId extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.MonitorUpdateId_free);
    }
    clone_ptr() {
        const ret = bindings.MonitorUpdateId_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the MonitorUpdateId
     */
    clone() {
        const ret = bindings.MonitorUpdateId_clone(this.ptr);
        const ret_hu_conv = new MonitorUpdateId(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two MonitorUpdateIds contain equal inner contents.
     */
    hash() {
        const ret = bindings.MonitorUpdateId_hash(this.ptr);
        return ret;
    }
    /**
     * Checks if two MonitorUpdateIds contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.MonitorUpdateId_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
}
//# sourceMappingURL=MonitorUpdateId.mjs.map