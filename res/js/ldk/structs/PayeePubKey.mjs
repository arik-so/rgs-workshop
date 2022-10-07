import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Payee public key
 */
export class PayeePubKey extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.PayeePubKey_free);
    }
    get_a() {
        const ret = bindings.PayeePubKey_get_a(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    set_a(val) {
        bindings.PayeePubKey_set_a(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Constructs a new PayeePubKey given each field
     */
    static constructor_new(a_arg) {
        const ret = bindings.PayeePubKey_new(bindings.encodeUint8Array(bindings.check_arr_len(a_arg, 33)));
        const ret_hu_conv = new PayeePubKey(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.PayeePubKey_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the PayeePubKey
     */
    clone() {
        const ret = bindings.PayeePubKey_clone(this.ptr);
        const ret_hu_conv = new PayeePubKey(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two PayeePubKeys contain equal inner contents.
     */
    hash() {
        const ret = bindings.PayeePubKey_hash(this.ptr);
        return ret;
    }
    /**
     * Checks if two PayeePubKeys contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.PayeePubKey_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
}
//# sourceMappingURL=PayeePubKey.mjs.map