import { SendError } from '../structs/SendError.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_NoneSendErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_NoneSendErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_NoneSendErrorZ_is_ok(ptr)) {
            return new Result_NoneSendErrorZ_OK(null, ptr);
        }
        else {
            return new Result_NoneSendErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_NoneSendErrorZ in the success state.
     */
    static constructor_ok() {
        const ret = bindings.CResult_NoneSendErrorZ_ok();
        const ret_hu_conv = Result_NoneSendErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_NoneSendErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_NoneSendErrorZ_err(CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_NoneSendErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_NoneSendErrorZ_is_ok(this.ptr);
        return ret;
    }
}
export class Result_NoneSendErrorZ_OK extends Result_NoneSendErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
    }
}
export class Result_NoneSendErrorZ_Err extends Result_NoneSendErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_NoneSendErrorZ_get_err(ptr);
        const err_hu_conv = SendError.constr_from_ptr(err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_NoneSendErrorZ.mjs.map