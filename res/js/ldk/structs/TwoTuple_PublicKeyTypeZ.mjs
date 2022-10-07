import { Type } from '../structs/Type.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A Tuple
 */
export class TwoTuple_PublicKeyTypeZ extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.C2Tuple_PublicKeyTypeZ_free);
    }
    /**
     *
     */
    get_a() {
        const ret = bindings.C2Tuple_PublicKeyTypeZ_get_a(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     *
     */
    get_b() {
        const ret = bindings.C2Tuple_PublicKeyTypeZ_get_b(this.ptr);
        const ret_hu_conv = new Type(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.C2Tuple_PublicKeyTypeZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.C2Tuple_PublicKeyTypeZ_clone(this.ptr);
        const ret_hu_conv = new TwoTuple_PublicKeyTypeZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Creates a new C2Tuple_PublicKeyTypeZ from the contained elements.
     */
    static constructor_new(a, b) {
        const ret = bindings.C2Tuple_PublicKeyTypeZ_new(bindings.encodeUint8Array(bindings.check_arr_len(a, 33)), b == null ? 0n : CommonBase.get_ptr_of(b));
        const ret_hu_conv = new TwoTuple_PublicKeyTypeZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, b);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=TwoTuple_PublicKeyTypeZ.mjs.map