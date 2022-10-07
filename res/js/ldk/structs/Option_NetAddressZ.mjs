import { NetAddress } from '../structs/NetAddress.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An enum which can either contain a crate::lightning::ln::msgs::NetAddress or not
 */
export class Option_NetAddressZ extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.COption_NetAddressZ_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKCOption_NetAddressZ_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new Option_NetAddressZ_Some(ptr);
            case 1: return new Option_NetAddressZ_None(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    /**
     * Constructs a new COption_NetAddressZ containing a crate::lightning::ln::msgs::NetAddress
     */
    static constructor_some(o) {
        const ret = bindings.COption_NetAddressZ_some(CommonBase.get_ptr_of(o));
        const ret_hu_conv = Option_NetAddressZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Constructs a new COption_NetAddressZ containing nothing
     */
    static constructor_none() {
        const ret = bindings.COption_NetAddressZ_none();
        const ret_hu_conv = Option_NetAddressZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.COption_NetAddressZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new COption_NetAddressZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.COption_NetAddressZ_clone(this.ptr);
        const ret_hu_conv = Option_NetAddressZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
/** A Option_NetAddressZ of type Some */
export class Option_NetAddressZ_Some extends Option_NetAddressZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const some = bindings.LDKCOption_NetAddressZ_Some_get_some(ptr);
        const some_hu_conv = NetAddress.constr_from_ptr(some);
        CommonBase.add_ref_from(some_hu_conv, this);
        this.some = some_hu_conv;
    }
}
/** A Option_NetAddressZ of type None */
export class Option_NetAddressZ_None extends Option_NetAddressZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
//# sourceMappingURL=Option_NetAddressZ.mjs.map