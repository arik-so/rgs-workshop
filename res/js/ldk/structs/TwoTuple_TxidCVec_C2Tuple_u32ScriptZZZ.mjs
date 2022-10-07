import { TwoTuple_u32ScriptZ } from '../structs/TwoTuple_u32ScriptZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A Tuple
 */
export class TwoTuple_TxidCVec_C2Tuple_u32ScriptZZZ extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.C2Tuple_TxidCVec_C2Tuple_u32ScriptZZZ_free);
    }
    /**
     *
     */
    get_a() {
        const ret = bindings.C2Tuple_TxidCVec_C2Tuple_u32ScriptZZZ_get_a(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     *
     */
    get_b() {
        const ret = bindings.C2Tuple_TxidCVec_C2Tuple_u32ScriptZZZ_get_b(this.ptr);
        const ret_conv_21_len = bindings.getArrayLength(ret);
        const ret_conv_21_arr = new Array(ret_conv_21_len).fill(null);
        for (var v = 0; v < ret_conv_21_len; v++) {
            const ret_conv_21 = bindings.getU64ArrayElem(ret, v);
            const ret_conv_21_hu_conv = new TwoTuple_u32ScriptZ(null, ret_conv_21);
            CommonBase.add_ref_from(ret_conv_21_hu_conv, this);
            ret_conv_21_arr[v] = ret_conv_21_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_21_arr;
    }
    clone_ptr() {
        const ret = bindings.C2Tuple_TxidCVec_C2Tuple_u32ScriptZZZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.C2Tuple_TxidCVec_C2Tuple_u32ScriptZZZ_clone(this.ptr);
        const ret_hu_conv = new TwoTuple_TxidCVec_C2Tuple_u32ScriptZZZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Creates a new C2Tuple_TxidCVec_C2Tuple_u32ScriptZZZ from the contained elements.
     */
    static constructor_new(a, b) {
        const ret = bindings.C2Tuple_TxidCVec_C2Tuple_u32ScriptZZZ_new(bindings.encodeUint8Array(bindings.check_arr_len(a, 32)), bindings.encodeUint64Array(b != null ? b.map(b_conv_21 => b_conv_21 != null ? CommonBase.get_ptr_of(b_conv_21) : 0n) : null));
        const ret_hu_conv = new TwoTuple_TxidCVec_C2Tuple_u32ScriptZZZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=TwoTuple_TxidCVec_C2Tuple_u32ScriptZZZ.mjs.map