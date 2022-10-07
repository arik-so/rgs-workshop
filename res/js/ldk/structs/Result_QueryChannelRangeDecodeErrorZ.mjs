import { DecodeError } from '../structs/DecodeError.mjs';
import { QueryChannelRange } from '../structs/QueryChannelRange.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_QueryChannelRangeDecodeErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_QueryChannelRangeDecodeErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_QueryChannelRangeDecodeErrorZ_is_ok(ptr)) {
            return new Result_QueryChannelRangeDecodeErrorZ_OK(null, ptr);
        }
        else {
            return new Result_QueryChannelRangeDecodeErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_QueryChannelRangeDecodeErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_QueryChannelRangeDecodeErrorZ_ok(o == null ? 0n : CommonBase.get_ptr_of(o));
        const ret_hu_conv = Result_QueryChannelRangeDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, o);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_QueryChannelRangeDecodeErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_QueryChannelRangeDecodeErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_QueryChannelRangeDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_QueryChannelRangeDecodeErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_QueryChannelRangeDecodeErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_QueryChannelRangeDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_QueryChannelRangeDecodeErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_QueryChannelRangeDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_QueryChannelRangeDecodeErrorZ_OK extends Result_QueryChannelRangeDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_QueryChannelRangeDecodeErrorZ_get_ok(ptr);
        const res_hu_conv = new QueryChannelRange(null, res);
        CommonBase.add_ref_from(res_hu_conv, this);
        this.res = res_hu_conv;
    }
}
export class Result_QueryChannelRangeDecodeErrorZ_Err extends Result_QueryChannelRangeDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_QueryChannelRangeDecodeErrorZ_get_err(ptr);
        const err_hu_conv = new DecodeError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_QueryChannelRangeDecodeErrorZ.mjs.map