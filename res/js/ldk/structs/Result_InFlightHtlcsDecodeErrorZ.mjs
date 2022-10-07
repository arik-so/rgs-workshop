import { DecodeError } from '../structs/DecodeError.mjs';
import { InFlightHtlcs } from '../structs/InFlightHtlcs.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_InFlightHtlcsDecodeErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_InFlightHtlcsDecodeErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_InFlightHtlcsDecodeErrorZ_is_ok(ptr)) {
            return new Result_InFlightHtlcsDecodeErrorZ_OK(null, ptr);
        }
        else {
            return new Result_InFlightHtlcsDecodeErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_InFlightHtlcsDecodeErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_InFlightHtlcsDecodeErrorZ_ok(o == null ? 0n : CommonBase.get_ptr_of(o));
        const ret_hu_conv = Result_InFlightHtlcsDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, o);
        // Due to rust's strict-ownership memory model, in some cases we need to "move"
        // an object to pass exclusive ownership to the function being called.
        // In most cases, we avoid ret_hu_conv being visible in GC'd languages by cloning the object
        // at the FFI layer, creating a new object which Rust can claim ownership of
        // However, in some cases (eg here), there is no way to clone an object, and thus
        // we actually have to pass full ownership to Rust.
        // Thus, after ret_hu_conv call, o is reset to null and is now a dummy object.
        CommonBase.set_null_skip_free(o);
        ;
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_InFlightHtlcsDecodeErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_InFlightHtlcsDecodeErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_InFlightHtlcsDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_InFlightHtlcsDecodeErrorZ_is_ok(this.ptr);
        return ret;
    }
}
export class Result_InFlightHtlcsDecodeErrorZ_OK extends Result_InFlightHtlcsDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_InFlightHtlcsDecodeErrorZ_get_ok(ptr);
        const res_hu_conv = new InFlightHtlcs(null, res);
        CommonBase.add_ref_from(res_hu_conv, this);
        this.res = res_hu_conv;
    }
}
export class Result_InFlightHtlcsDecodeErrorZ_Err extends Result_InFlightHtlcsDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_InFlightHtlcsDecodeErrorZ_get_err(ptr);
        const err_hu_conv = new DecodeError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_InFlightHtlcsDecodeErrorZ.mjs.map