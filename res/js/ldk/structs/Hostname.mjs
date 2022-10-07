import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Represents a hostname for serialization purposes.
 * Only the character set and length will be validated.
 * The character set consists of ASCII alphanumeric characters, hyphens, and periods.
 * Its length is guaranteed to be representable by a single byte.
 * This serialization is used by BOLT 7 hostnames.
 */
export class Hostname extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Hostname_free);
    }
    clone_ptr() {
        const ret = bindings.Hostname_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the Hostname
     */
    clone() {
        const ret = bindings.Hostname_clone(this.ptr);
        const ret_hu_conv = new Hostname(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Returns the length of the hostname.
     */
    len() {
        const ret = bindings.Hostname_len(this.ptr);
        return ret;
    }
}
//# sourceMappingURL=Hostname.mjs.map