import { DecodeError } from '../structs/DecodeError.mjs';
import { TwoTuple_BlockHashChannelManagerZ } from '../structs/TwoTuple_BlockHashChannelManagerZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_C2Tuple_BlockHashChannelManagerZDecodeErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_C2Tuple_BlockHashChannelManagerZDecodeErrorZ_is_ok(ptr)) {
            return new Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ_OK(null, ptr);
        }
        else {
            return new Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_C2Tuple_BlockHashChannelManagerZDecodeErrorZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_C2Tuple_BlockHashChannelManagerZDecodeErrorZ_ok(o != null ? CommonBase.get_ptr_of(o) : 0n);
        const ret_hu_conv = Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_C2Tuple_BlockHashChannelManagerZDecodeErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_C2Tuple_BlockHashChannelManagerZDecodeErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_C2Tuple_BlockHashChannelManagerZDecodeErrorZ_is_ok(this.ptr);
        return ret;
    }
}
export class Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ_OK extends Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_C2Tuple_BlockHashChannelManagerZDecodeErrorZ_get_ok(ptr);
        const res_hu_conv = new TwoTuple_BlockHashChannelManagerZ(null, res);
        CommonBase.add_ref_from(res_hu_conv, this);
        this.res = res_hu_conv;
    }
}
export class Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ_Err extends Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_C2Tuple_BlockHashChannelManagerZDecodeErrorZ_get_err(ptr);
        const err_hu_conv = new DecodeError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ.mjs.map