import { RouteHintHop } from '../structs/RouteHintHop.mjs';
import { Result_RouteHintDecodeErrorZ } from '../structs/Result_RouteHintDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A list of hops along a payment path terminating with a channel to the recipient.
 */
export class RouteHint extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.RouteHint_free);
    }
    get_a() {
        const ret = bindings.RouteHint_get_a(this.ptr);
        const ret_conv_14_len = bindings.getArrayLength(ret);
        const ret_conv_14_arr = new Array(ret_conv_14_len).fill(null);
        for (var o = 0; o < ret_conv_14_len; o++) {
            const ret_conv_14 = bindings.getU64ArrayElem(ret, o);
            const ret_conv_14_hu_conv = new RouteHintHop(null, ret_conv_14);
            CommonBase.add_ref_from(ret_conv_14_hu_conv, this);
            ret_conv_14_arr[o] = ret_conv_14_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_14_arr;
    }
    set_a(val) {
        bindings.RouteHint_set_a(this.ptr, bindings.encodeUint64Array(val != null ? val.map(val_conv_14 => val_conv_14 == null ? 0n : CommonBase.get_ptr_of(val_conv_14)) : null));
        val.forEach((val_conv_14) => { CommonBase.add_ref_from(this, val_conv_14); });
    }
    /**
     * Constructs a new RouteHint given each field
     */
    static constructor_new(a_arg) {
        const ret = bindings.RouteHint_new(bindings.encodeUint64Array(a_arg != null ? a_arg.map(a_arg_conv_14 => a_arg_conv_14 == null ? 0n : CommonBase.get_ptr_of(a_arg_conv_14)) : null));
        const ret_hu_conv = new RouteHint(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        a_arg.forEach((a_arg_conv_14) => { CommonBase.add_ref_from(ret_hu_conv, a_arg_conv_14); });
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.RouteHint_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the RouteHint
     */
    clone() {
        const ret = bindings.RouteHint_clone(this.ptr);
        const ret_hu_conv = new RouteHint(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two RouteHints contain equal inner contents.
     */
    hash() {
        const ret = bindings.RouteHint_hash(this.ptr);
        return ret;
    }
    /**
     * Checks if two RouteHints contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.RouteHint_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    /**
     * Serialize the RouteHint object into a byte array which can be read by RouteHint_read
     */
    write() {
        const ret = bindings.RouteHint_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a RouteHint from a byte array, created by RouteHint_write
     */
    static constructor_read(ser) {
        const ret = bindings.RouteHint_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_RouteHintDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=RouteHint.mjs.map