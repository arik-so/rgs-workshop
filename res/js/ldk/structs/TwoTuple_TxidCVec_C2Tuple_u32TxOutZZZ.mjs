import { TwoTuple_u32TxOutZ } from '../structs/TwoTuple_u32TxOutZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A Tuple
 */
export class TwoTuple_TxidCVec_C2Tuple_u32TxOutZZZ extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.C2Tuple_TxidCVec_C2Tuple_u32TxOutZZZ_free);
    }
    /**
     *
     */
    get_a() {
        const ret = bindings.C2Tuple_TxidCVec_C2Tuple_u32TxOutZZZ_get_a(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     *
     */
    get_b() {
        const ret = bindings.C2Tuple_TxidCVec_C2Tuple_u32TxOutZZZ_get_b(this.ptr);
        const ret_conv_20_len = bindings.getArrayLength(ret);
        const ret_conv_20_arr = new Array(ret_conv_20_len).fill(null);
        for (var u = 0; u < ret_conv_20_len; u++) {
            const ret_conv_20 = bindings.getU64ArrayElem(ret, u);
            const ret_conv_20_hu_conv = new TwoTuple_u32TxOutZ(null, ret_conv_20);
            CommonBase.add_ref_from(ret_conv_20_hu_conv, this);
            ret_conv_20_arr[u] = ret_conv_20_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_20_arr;
    }
    clone_ptr() {
        const ret = bindings.C2Tuple_TxidCVec_C2Tuple_u32TxOutZZZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.C2Tuple_TxidCVec_C2Tuple_u32TxOutZZZ_clone(this.ptr);
        const ret_hu_conv = new TwoTuple_TxidCVec_C2Tuple_u32TxOutZZZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Creates a new C2Tuple_TxidCVec_C2Tuple_u32TxOutZZZ from the contained elements.
     */
    static constructor_new(a, b) {
        const ret = bindings.C2Tuple_TxidCVec_C2Tuple_u32TxOutZZZ_new(bindings.encodeUint8Array(bindings.check_arr_len(a, 32)), bindings.encodeUint64Array(b != null ? b.map(b_conv_20 => b_conv_20 != null ? CommonBase.get_ptr_of(b_conv_20) : 0n) : null));
        const ret_hu_conv = new TwoTuple_TxidCVec_C2Tuple_u32TxOutZZZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=TwoTuple_TxidCVec_C2Tuple_u32TxOutZZZ.mjs.map