import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_SharedSecretNoneZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_SharedSecretNoneZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_SharedSecretNoneZ_is_ok(ptr)) {
            return new Result_SharedSecretNoneZ_OK(null, ptr);
        }
        else {
            return new Result_SharedSecretNoneZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_SharedSecretNoneZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_SharedSecretNoneZ_ok(bindings.encodeUint8Array(bindings.check_arr_len(o, 32)));
        const ret_hu_conv = Result_SharedSecretNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_SharedSecretNoneZ in the error state.
     */
    static constructor_err() {
        const ret = bindings.CResult_SharedSecretNoneZ_err();
        const ret_hu_conv = Result_SharedSecretNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_SharedSecretNoneZ_is_ok(this.ptr);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.CResult_SharedSecretNoneZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new CResult_SharedSecretNoneZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.CResult_SharedSecretNoneZ_clone(this.ptr);
        const ret_hu_conv = Result_SharedSecretNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
export class Result_SharedSecretNoneZ_OK extends Result_SharedSecretNoneZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_SharedSecretNoneZ_get_ok(ptr);
        const res_conv = bindings.decodeUint8Array(res);
        this.res = res_conv;
    }
}
export class Result_SharedSecretNoneZ_Err extends Result_SharedSecretNoneZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
    }
}
//# sourceMappingURL=Result_SharedSecretNoneZ.mjs.map