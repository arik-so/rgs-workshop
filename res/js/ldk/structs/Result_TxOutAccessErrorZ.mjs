import { TxOut } from '../structs/TxOut.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_TxOutAccessErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_TxOutAccessErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_TxOutAccessErrorZ_is_ok(ptr)) {
            return new Result_TxOutAccessErrorZ_OK(null, ptr);
        }
        else {
            return new Result_TxOutAccessErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_TxOutAccessErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_TxOutAccessErrorZ_ok(CommonBase.get_ptr_of(o));
        const ret_hu_conv = Result_TxOutAccessErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_TxOutAccessErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_TxOutAccessErrorZ_err(e);
        const ret_hu_conv = Result_TxOutAccessErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_TxOutAccessErrorZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_TxOutAccessErrorZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_TxOutAccessErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_TxOutAccessErrorZ_clone(this.ptr);
        const ret_hu_conv = Result_TxOutAccessErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_TxOutAccessErrorZ_OK extends Result_TxOutAccessErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_TxOutAccessErrorZ_get_ok(ptr);
        const res_conv = new TxOut(null, res);
        this.res = res_conv;
    }
}
export class Result_TxOutAccessErrorZ_Err extends Result_TxOutAccessErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        this.err = bindings.CResult_TxOutAccessErrorZ_get_err(ptr);
    }
}
//# sourceMappingURL=Result_TxOutAccessErrorZ.mjs.map