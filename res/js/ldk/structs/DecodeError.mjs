import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An error in decoding a message or struct.
 */
export class DecodeError extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.DecodeError_free);
    }
    clone_ptr() {
        const ret = bindings.DecodeError_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the DecodeError
     */
    clone() {
        const ret = bindings.DecodeError_clone(this.ptr);
        const ret_hu_conv = new DecodeError(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=DecodeError.mjs.map