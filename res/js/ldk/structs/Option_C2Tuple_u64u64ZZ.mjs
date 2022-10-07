import { TwoTuple_u64u64Z } from '../structs/TwoTuple_u64u64Z.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An enum which can either contain a crate::c_types::derived::C2Tuple_u64u64Z or not
 */
export class Option_C2Tuple_u64u64ZZ extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.COption_C2Tuple_u64u64ZZ_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKCOption_C2Tuple_u64u64ZZ_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new Option_C2Tuple_u64u64ZZ_Some(ptr);
            case 1: return new Option_C2Tuple_u64u64ZZ_None(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    /**
     * Constructs a new COption_C2Tuple_u64u64ZZ containing a crate::c_types::derived::C2Tuple_u64u64Z
     */
    static constructor_some(o) {
        const ret = bindings.COption_C2Tuple_u64u64ZZ_some(o != null ? CommonBase.get_ptr_of(o) : 0n);
        const ret_hu_conv = Option_C2Tuple_u64u64ZZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Constructs a new COption_C2Tuple_u64u64ZZ containing nothing
     */
    static constructor_none() {
        const ret = bindings.COption_C2Tuple_u64u64ZZ_none();
        const ret_hu_conv = Option_C2Tuple_u64u64ZZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.COption_C2Tuple_u64u64ZZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new COption_C2Tuple_u64u64ZZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.COption_C2Tuple_u64u64ZZ_clone(this.ptr);
        const ret_hu_conv = Option_C2Tuple_u64u64ZZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
/** A Option_C2Tuple_u64u64ZZ of type Some */
export class Option_C2Tuple_u64u64ZZ_Some extends Option_C2Tuple_u64u64ZZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const some = bindings.LDKCOption_C2Tuple_u64u64ZZ_Some_get_some(ptr);
        const some_hu_conv = new TwoTuple_u64u64Z(null, some);
        CommonBase.add_ref_from(some_hu_conv, this);
        this.some = some_hu_conv;
    }
}
/** A Option_C2Tuple_u64u64ZZ of type None */
export class Option_C2Tuple_u64u64ZZ_None extends Option_C2Tuple_u64u64ZZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
//# sourceMappingURL=Option_C2Tuple_u64u64ZZ.mjs.map