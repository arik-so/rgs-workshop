import { NetAddress } from '../structs/NetAddress.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An enum which can either contain a crate::c_types::derived::CVec_NetAddressZ or not
 */
export class Option_CVec_NetAddressZZ extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.COption_CVec_NetAddressZZ_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKCOption_CVec_NetAddressZZ_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new Option_CVec_NetAddressZZ_Some(ptr);
            case 1: return new Option_CVec_NetAddressZZ_None(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    /**
     * Constructs a new COption_CVec_NetAddressZZ containing a crate::c_types::derived::CVec_NetAddressZ
     */
    static constructor_some(o) {
        const ret = bindings.COption_CVec_NetAddressZZ_some(bindings.encodeUint64Array(o != null ? o.map(o_conv_12 => CommonBase.get_ptr_of(o_conv_12)) : null));
        const ret_hu_conv = Option_CVec_NetAddressZZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Constructs a new COption_CVec_NetAddressZZ containing nothing
     */
    static constructor_none() {
        const ret = bindings.COption_CVec_NetAddressZZ_none();
        const ret_hu_conv = Option_CVec_NetAddressZZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.COption_CVec_NetAddressZZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new COption_CVec_NetAddressZZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.COption_CVec_NetAddressZZ_clone(this.ptr);
        const ret_hu_conv = Option_CVec_NetAddressZZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
/** A Option_CVec_NetAddressZZ of type Some */
export class Option_CVec_NetAddressZZ_Some extends Option_CVec_NetAddressZZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const some = bindings.LDKCOption_CVec_NetAddressZZ_Some_get_some(ptr);
        const some_conv_12_len = bindings.getArrayLength(some);
        const some_conv_12_arr = new Array(some_conv_12_len).fill(null);
        for (var m = 0; m < some_conv_12_len; m++) {
            const some_conv_12 = bindings.getU64ArrayElem(some, m);
            const some_conv_12_hu_conv = NetAddress.constr_from_ptr(some_conv_12);
            CommonBase.add_ref_from(some_conv_12_hu_conv, this);
            some_conv_12_arr[m] = some_conv_12_hu_conv;
        }
        bindings.freeWasmMemory(some);
        this.some = some_conv_12_arr;
    }
}
/** A Option_CVec_NetAddressZZ of type None */
export class Option_CVec_NetAddressZZ_None extends Option_CVec_NetAddressZZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
//# sourceMappingURL=Option_CVec_NetAddressZZ.mjs.map