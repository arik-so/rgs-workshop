import { Filter } from '../structs/Filter.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An enum which can either contain a crate::lightning::chain::Filter or not
 */
export class Option_FilterZ extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.COption_FilterZ_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKCOption_FilterZ_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new Option_FilterZ_Some(ptr);
            case 1: return new Option_FilterZ_None(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    /**
     * Constructs a new COption_FilterZ containing a crate::lightning::chain::Filter
     */
    static constructor_some(o) {
        const ret = bindings.COption_FilterZ_some(o == null ? 0n : CommonBase.get_ptr_of(o));
        const ret_hu_conv = Option_FilterZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, o);
        return ret_hu_conv;
    }
    /**
     * Constructs a new COption_FilterZ containing nothing
     */
    static constructor_none() {
        const ret = bindings.COption_FilterZ_none();
        const ret_hu_conv = Option_FilterZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
}
/** A Option_FilterZ of type Some */
export class Option_FilterZ_Some extends Option_FilterZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const some = bindings.LDKCOption_FilterZ_Some_get_some(ptr);
        const ret_hu_conv = new Filter(null, some);
        CommonBase.add_ref_from(ret_hu_conv, this);
        this.some = ret_hu_conv;
    }
}
/** A Option_FilterZ of type None */
export class Option_FilterZ_None extends Option_FilterZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
//# sourceMappingURL=Option_FilterZ.mjs.map