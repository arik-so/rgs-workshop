import { BigEndianScalar } from '../structs/BigEndianScalar.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An enum which can either contain a crate::c_types::BigEndianScalar or not
 */
export class Option_ScalarZ extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.COption_ScalarZ_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKCOption_ScalarZ_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new Option_ScalarZ_Some(ptr);
            case 1: return new Option_ScalarZ_None(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    /**
     * Constructs a new COption_ScalarZ containing a crate::c_types::BigEndianScalar
     */
    static constructor_some(o_big_endian_bytes) {
        const ret = bindings.COption_ScalarZ_some(bindings.BigEndianScalar_new(bindings.encodeUint8Array(bindings.check_arr_len(o_big_endian_bytes, 32))));
        const ret_hu_conv = Option_ScalarZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        ;
        return ret_hu_conv;
    }
    /**
     * Constructs a new COption_ScalarZ containing nothing
     */
    static constructor_none() {
        const ret = bindings.COption_ScalarZ_none();
        const ret_hu_conv = Option_ScalarZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
}
/** A Option_ScalarZ of type Some */
export class Option_ScalarZ_Some extends Option_ScalarZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const some = bindings.LDKCOption_ScalarZ_Some_get_some(ptr);
        const some_conv = new BigEndianScalar(null, some);
        this.some = some_conv;
    }
}
/** A Option_ScalarZ of type None */
export class Option_ScalarZ_None extends Option_ScalarZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
//# sourceMappingURL=Option_ScalarZ.mjs.map