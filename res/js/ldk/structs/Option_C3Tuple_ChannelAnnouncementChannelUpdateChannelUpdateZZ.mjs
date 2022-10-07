import { ThreeTuple_ChannelAnnouncementChannelUpdateChannelUpdateZ } from '../structs/ThreeTuple_ChannelAnnouncementChannelUpdateChannelUpdateZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An enum which can either contain a crate::c_types::derived::C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZ or not
 */
export class Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.COption_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKCOption_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ_Some(ptr);
            case 1: return new Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ_None(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    /**
     * Constructs a new COption_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ containing a crate::c_types::derived::C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZ
     */
    static constructor_some(o) {
        const ret = bindings.COption_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ_some(o != null ? CommonBase.get_ptr_of(o) : 0n);
        const ret_hu_conv = Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Constructs a new COption_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ containing nothing
     */
    static constructor_none() {
        const ret = bindings.COption_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ_none();
        const ret_hu_conv = Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.COption_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new COption_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.COption_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ_clone(this.ptr);
        const ret_hu_conv = Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
/** A Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ of type Some */
export class Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ_Some extends Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const some = bindings.LDKCOption_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ_Some_get_some(ptr);
        const some_hu_conv = new ThreeTuple_ChannelAnnouncementChannelUpdateChannelUpdateZ(null, some);
        CommonBase.add_ref_from(some_hu_conv, this);
        this.some = some_hu_conv;
    }
}
/** A Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ of type None */
export class Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ_None extends Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
//# sourceMappingURL=Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ.mjs.map