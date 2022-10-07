import { OutPoint } from '../structs/OutPoint.mjs';
import { MonitorEvent } from '../structs/MonitorEvent.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A Tuple
 */
export class ThreeTuple_OutPointCVec_MonitorEventZPublicKeyZ extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.C3Tuple_OutPointCVec_MonitorEventZPublicKeyZ_free);
    }
    /**
     *
     */
    get_a() {
        const ret = bindings.C3Tuple_OutPointCVec_MonitorEventZPublicKeyZ_get_a(this.ptr);
        const ret_hu_conv = new OutPoint(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     *
     */
    get_b() {
        const ret = bindings.C3Tuple_OutPointCVec_MonitorEventZPublicKeyZ_get_b(this.ptr);
        const ret_conv_14_len = bindings.getArrayLength(ret);
        const ret_conv_14_arr = new Array(ret_conv_14_len).fill(null);
        for (var o = 0; o < ret_conv_14_len; o++) {
            const ret_conv_14 = bindings.getU64ArrayElem(ret, o);
            const ret_conv_14_hu_conv = MonitorEvent.constr_from_ptr(ret_conv_14);
            CommonBase.add_ref_from(ret_conv_14_hu_conv, this);
            ret_conv_14_arr[o] = ret_conv_14_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_14_arr;
    }
    /**
     *
     */
    get_c() {
        const ret = bindings.C3Tuple_OutPointCVec_MonitorEventZPublicKeyZ_get_c(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    clone_ptr() {
        const ret = bindings.C3Tuple_OutPointCVec_MonitorEventZPublicKeyZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.C3Tuple_OutPointCVec_MonitorEventZPublicKeyZ_clone(this.ptr);
        const ret_hu_conv = new ThreeTuple_OutPointCVec_MonitorEventZPublicKeyZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Creates a new C3Tuple_OutPointCVec_MonitorEventZPublicKeyZ from the contained elements.
     */
    static constructor_new(a, b, c) {
        const ret = bindings.C3Tuple_OutPointCVec_MonitorEventZPublicKeyZ_new(a == null ? 0n : CommonBase.get_ptr_of(a), bindings.encodeUint64Array(b != null ? b.map(b_conv_14 => CommonBase.get_ptr_of(b_conv_14)) : null), bindings.encodeUint8Array(bindings.check_arr_len(c, 33)));
        const ret_hu_conv = new ThreeTuple_OutPointCVec_MonitorEventZPublicKeyZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, a);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ThreeTuple_OutPointCVec_MonitorEventZPublicKeyZ.mjs.map