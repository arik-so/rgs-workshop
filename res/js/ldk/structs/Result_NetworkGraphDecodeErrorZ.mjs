import { DecodeError } from '../structs/DecodeError.mjs';
import { NetworkGraph } from '../structs/NetworkGraph.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_NetworkGraphDecodeErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_NetworkGraphDecodeErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_NetworkGraphDecodeErrorZ_is_ok(ptr)) {
            return new Result_NetworkGraphDecodeErrorZ_OK(null, ptr);
        }
        else {
            return new Result_NetworkGraphDecodeErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_NetworkGraphDecodeErrorZ in the success state.
     */
    static constructor_ok(o_genesis_hash, o_logger) {
        const ret = bindings.CResult_NetworkGraphDecodeErrorZ_ok(bindings.NetworkGraph_new(bindings.encodeUint8Array(bindings.check_arr_len(o_genesis_hash, 32)), o_logger == null ? 0n : CommonBase.get_ptr_of(o_logger)));
        const ret_hu_conv = Result_NetworkGraphDecodeErrorZ.constr_from_ptr(ret);
        ;
        CommonBase.add_ref_from(ret_hu_conv, o_logger);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_NetworkGraphDecodeErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_NetworkGraphDecodeErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_NetworkGraphDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_NetworkGraphDecodeErrorZ_is_ok(this.ptr);
        return ret;
    }
}
export class Result_NetworkGraphDecodeErrorZ_OK extends Result_NetworkGraphDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_NetworkGraphDecodeErrorZ_get_ok(ptr);
        const res_hu_conv = new NetworkGraph(null, res);
        CommonBase.add_ref_from(res_hu_conv, this);
        this.res = res_hu_conv;
    }
}
export class Result_NetworkGraphDecodeErrorZ_Err extends Result_NetworkGraphDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_NetworkGraphDecodeErrorZ_get_err(ptr);
        const err_hu_conv = new DecodeError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_NetworkGraphDecodeErrorZ.mjs.map