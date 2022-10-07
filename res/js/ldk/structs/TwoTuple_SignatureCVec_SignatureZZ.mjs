import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A Tuple
 */
export class TwoTuple_SignatureCVec_SignatureZZ extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.C2Tuple_SignatureCVec_SignatureZZ_free);
    }
    /**
     *
     */
    get_a() {
        const ret = bindings.C2Tuple_SignatureCVec_SignatureZZ_get_a(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     *
     */
    get_b() {
        const ret = bindings.C2Tuple_SignatureCVec_SignatureZZ_get_b(this.ptr);
        const ret_conv_12_len = bindings.getArrayLength(ret);
        const ret_conv_12_arr = new Array(ret_conv_12_len).fill(null);
        for (var m = 0; m < ret_conv_12_len; m++) {
            const ret_conv_12 = bindings.getU32ArrayElem(ret, m);
            const ret_conv_12_conv = bindings.decodeUint8Array(ret_conv_12);
            ret_conv_12_arr[m] = ret_conv_12_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_12_arr;
    }
    clone_ptr() {
        const ret = bindings.C2Tuple_SignatureCVec_SignatureZZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.C2Tuple_SignatureCVec_SignatureZZ_clone(this.ptr);
        const ret_hu_conv = new TwoTuple_SignatureCVec_SignatureZZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Creates a new C2Tuple_SignatureCVec_SignatureZZ from the contained elements.
     */
    static constructor_new(a, b) {
        const ret = bindings.C2Tuple_SignatureCVec_SignatureZZ_new(bindings.encodeUint8Array(bindings.check_arr_len(a, 64)), bindings.encodeUint32Array(b != null ? b.map(b_conv_12 => bindings.encodeUint8Array(bindings.check_arr_len(b_conv_12, 64))) : null));
        const ret_hu_conv = new TwoTuple_SignatureCVec_SignatureZZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=TwoTuple_SignatureCVec_SignatureZZ.mjs.map