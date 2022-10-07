import { ChannelUpdate } from '../structs/ChannelUpdate.mjs';
import { ChannelAnnouncement } from '../structs/ChannelAnnouncement.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A Tuple
 */
export class ThreeTuple_ChannelAnnouncementChannelUpdateChannelUpdateZ extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZ_free);
    }
    /**
     *
     */
    get_a() {
        const ret = bindings.C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZ_get_a(this.ptr);
        const ret_hu_conv = new ChannelAnnouncement(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     *
     */
    get_b() {
        const ret = bindings.C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZ_get_b(this.ptr);
        const ret_hu_conv = new ChannelUpdate(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     *
     */
    get_c() {
        const ret = bindings.C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZ_get_c(this.ptr);
        const ret_hu_conv = new ChannelUpdate(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZ_clone(this.ptr);
        const ret_hu_conv = new ThreeTuple_ChannelAnnouncementChannelUpdateChannelUpdateZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Creates a new C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZ from the contained elements.
     */
    static constructor_new(a, b, c) {
        const ret = bindings.C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZ_new(a == null ? 0n : CommonBase.get_ptr_of(a), b == null ? 0n : CommonBase.get_ptr_of(b), c == null ? 0n : CommonBase.get_ptr_of(c));
        const ret_hu_conv = new ThreeTuple_ChannelAnnouncementChannelUpdateChannelUpdateZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, a);
        CommonBase.add_ref_from(ret_hu_conv, b);
        CommonBase.add_ref_from(ret_hu_conv, c);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ThreeTuple_ChannelAnnouncementChannelUpdateChannelUpdateZ.mjs.map