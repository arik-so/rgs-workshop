import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelAnnouncement } from '../structs/ChannelAnnouncement.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_ChannelAnnouncementDecodeErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_ChannelAnnouncementDecodeErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_ChannelAnnouncementDecodeErrorZ_is_ok(ptr)) {
            return new Result_ChannelAnnouncementDecodeErrorZ_OK(null, ptr);
        }
        else {
            return new Result_ChannelAnnouncementDecodeErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_ChannelAnnouncementDecodeErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_ChannelAnnouncementDecodeErrorZ_ok(o == null ? 0n : CommonBase.get_ptr_of(o));
        const ret_hu_conv = Result_ChannelAnnouncementDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, o);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_ChannelAnnouncementDecodeErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_ChannelAnnouncementDecodeErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_ChannelAnnouncementDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_ChannelAnnouncementDecodeErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_ChannelAnnouncementDecodeErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_ChannelAnnouncementDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_ChannelAnnouncementDecodeErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_ChannelAnnouncementDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_ChannelAnnouncementDecodeErrorZ_OK extends Result_ChannelAnnouncementDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_ChannelAnnouncementDecodeErrorZ_get_ok(ptr);
        const res_hu_conv = new ChannelAnnouncement(null, res);
        CommonBase.add_ref_from(res_hu_conv, this);
        this.res = res_hu_conv;
    }
}
export class Result_ChannelAnnouncementDecodeErrorZ_Err extends Result_ChannelAnnouncementDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_ChannelAnnouncementDecodeErrorZ_get_err(ptr);
        const err_hu_conv = new DecodeError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_ChannelAnnouncementDecodeErrorZ.mjs.map