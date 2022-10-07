import { Type } from '../structs/Type.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An enum which can either contain a crate::lightning::ln::wire::Type or not
 */
export class Option_TypeZ extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.COption_TypeZ_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKCOption_TypeZ_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new Option_TypeZ_Some(ptr);
            case 1: return new Option_TypeZ_None(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    /**
     * Constructs a new COption_TypeZ containing a crate::lightning::ln::wire::Type
     */
    static constructor_some(o) {
        const ret = bindings.COption_TypeZ_some(o == null ? 0n : CommonBase.get_ptr_of(o));
        const ret_hu_conv = Option_TypeZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, o);
        return ret_hu_conv;
    }
    /**
     * Constructs a new COption_TypeZ containing nothing
     */
    static constructor_none() {
        const ret = bindings.COption_TypeZ_none();
        const ret_hu_conv = Option_TypeZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.COption_TypeZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new COption_TypeZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.COption_TypeZ_clone(this.ptr);
        const ret_hu_conv = Option_TypeZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
/** A Option_TypeZ of type Some */
export class Option_TypeZ_Some extends Option_TypeZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const some = bindings.LDKCOption_TypeZ_Some_get_some(ptr);
        const ret_hu_conv = new Type(null, some);
        CommonBase.add_ref_from(ret_hu_conv, this);
        this.some = ret_hu_conv;
    }
}
/** A Option_TypeZ of type None */
export class Option_TypeZ_None extends Option_TypeZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
//# sourceMappingURL=Option_TypeZ.mjs.map