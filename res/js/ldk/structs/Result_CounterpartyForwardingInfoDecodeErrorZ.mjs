import { DecodeError } from '../structs/DecodeError.mjs';
import { CounterpartyForwardingInfo } from '../structs/CounterpartyForwardingInfo.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_CounterpartyForwardingInfoDecodeErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_CounterpartyForwardingInfoDecodeErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_CounterpartyForwardingInfoDecodeErrorZ_is_ok(ptr)) {
            return new Result_CounterpartyForwardingInfoDecodeErrorZ_OK(null, ptr);
        }
        else {
            return new Result_CounterpartyForwardingInfoDecodeErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_CounterpartyForwardingInfoDecodeErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_CounterpartyForwardingInfoDecodeErrorZ_ok(o == null ? 0n : CommonBase.get_ptr_of(o));
        const ret_hu_conv = Result_CounterpartyForwardingInfoDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, o);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_CounterpartyForwardingInfoDecodeErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_CounterpartyForwardingInfoDecodeErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_CounterpartyForwardingInfoDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_CounterpartyForwardingInfoDecodeErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_CounterpartyForwardingInfoDecodeErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_CounterpartyForwardingInfoDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_CounterpartyForwardingInfoDecodeErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_CounterpartyForwardingInfoDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_CounterpartyForwardingInfoDecodeErrorZ_OK extends Result_CounterpartyForwardingInfoDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_CounterpartyForwardingInfoDecodeErrorZ_get_ok(ptr);
        const res_hu_conv = new CounterpartyForwardingInfo(null, res);
        CommonBase.add_ref_from(res_hu_conv, this);
        this.res = res_hu_conv;
    }
}
export class Result_CounterpartyForwardingInfoDecodeErrorZ_Err extends Result_CounterpartyForwardingInfoDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_CounterpartyForwardingInfoDecodeErrorZ_get_err(ptr);
        const err_hu_conv = new DecodeError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_CounterpartyForwardingInfoDecodeErrorZ.mjs.map