import { DecodeError } from '../structs/DecodeError.mjs';
import { ClosingSignedFeeRange } from '../structs/ClosingSignedFeeRange.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_ClosingSignedFeeRangeDecodeErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_ClosingSignedFeeRangeDecodeErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_ClosingSignedFeeRangeDecodeErrorZ_is_ok(ptr)) {
            return new Result_ClosingSignedFeeRangeDecodeErrorZ_OK(null, ptr);
        }
        else {
            return new Result_ClosingSignedFeeRangeDecodeErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_ClosingSignedFeeRangeDecodeErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_ClosingSignedFeeRangeDecodeErrorZ_ok(o == null ? 0n : CommonBase.get_ptr_of(o));
        const ret_hu_conv = Result_ClosingSignedFeeRangeDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, o);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_ClosingSignedFeeRangeDecodeErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_ClosingSignedFeeRangeDecodeErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_ClosingSignedFeeRangeDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_ClosingSignedFeeRangeDecodeErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_ClosingSignedFeeRangeDecodeErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_ClosingSignedFeeRangeDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_ClosingSignedFeeRangeDecodeErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_ClosingSignedFeeRangeDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_ClosingSignedFeeRangeDecodeErrorZ_OK extends Result_ClosingSignedFeeRangeDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_ClosingSignedFeeRangeDecodeErrorZ_get_ok(ptr);
        const res_hu_conv = new ClosingSignedFeeRange(null, res);
        CommonBase.add_ref_from(res_hu_conv, this);
        this.res = res_hu_conv;
    }
}
export class Result_ClosingSignedFeeRangeDecodeErrorZ_Err extends Result_ClosingSignedFeeRangeDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_ClosingSignedFeeRangeDecodeErrorZ_get_err(ptr);
        const err_hu_conv = new DecodeError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_ClosingSignedFeeRangeDecodeErrorZ.mjs.map