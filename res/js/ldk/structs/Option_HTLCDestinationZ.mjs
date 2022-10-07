import { HTLCDestination } from '../structs/HTLCDestination.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An enum which can either contain a crate::lightning::util::events::HTLCDestination or not
 */
export class Option_HTLCDestinationZ extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.COption_HTLCDestinationZ_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKCOption_HTLCDestinationZ_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new Option_HTLCDestinationZ_Some(ptr);
            case 1: return new Option_HTLCDestinationZ_None(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    /**
     * Constructs a new COption_HTLCDestinationZ containing a crate::lightning::util::events::HTLCDestination
     */
    static constructor_some(o) {
        const ret = bindings.COption_HTLCDestinationZ_some(CommonBase.get_ptr_of(o));
        const ret_hu_conv = Option_HTLCDestinationZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Constructs a new COption_HTLCDestinationZ containing nothing
     */
    static constructor_none() {
        const ret = bindings.COption_HTLCDestinationZ_none();
        const ret_hu_conv = Option_HTLCDestinationZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.COption_HTLCDestinationZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new COption_HTLCDestinationZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.COption_HTLCDestinationZ_clone(this.ptr);
        const ret_hu_conv = Option_HTLCDestinationZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
/** A Option_HTLCDestinationZ of type Some */
export class Option_HTLCDestinationZ_Some extends Option_HTLCDestinationZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const some = bindings.LDKCOption_HTLCDestinationZ_Some_get_some(ptr);
        const some_hu_conv = HTLCDestination.constr_from_ptr(some);
        CommonBase.add_ref_from(some_hu_conv, this);
        this.some = some_hu_conv;
    }
}
/** A Option_HTLCDestinationZ of type None */
export class Option_HTLCDestinationZ_None extends Option_HTLCDestinationZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
//# sourceMappingURL=Option_HTLCDestinationZ.mjs.map