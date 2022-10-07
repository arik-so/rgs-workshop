import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Lightning TLV uses a custom variable-length integer called BigSize. It is similar to Bitcoin's
 * variable-length integers except that it is serialized in big-endian instead of little-endian.
 *
 * Like Bitcoin's variable-length integer, it exhibits ambiguity in that certain values can be
 * encoded in several different ways, which we must check for at deserialization-time. Thus, if
 * you're looking for an example of a variable-length integer to use for your own project, move
 * along, this is a rather poor design.
 */
export class BigSize extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.BigSize_free);
    }
    get_a() {
        const ret = bindings.BigSize_get_a(this.ptr);
        return ret;
    }
    set_a(val) {
        bindings.BigSize_set_a(this.ptr, val);
    }
    /**
     * Constructs a new BigSize given each field
     */
    static constructor_new(a_arg) {
        const ret = bindings.BigSize_new(a_arg);
        const ret_hu_conv = new BigSize(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=BigSize.mjs.map