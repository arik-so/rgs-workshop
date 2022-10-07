import { DecodeError } from '../structs/DecodeError.mjs';
import { ProbabilisticScorer } from '../structs/ProbabilisticScorer.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_ProbabilisticScorerDecodeErrorZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_ProbabilisticScorerDecodeErrorZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_ProbabilisticScorerDecodeErrorZ_is_ok(ptr)) {
            return new Result_ProbabilisticScorerDecodeErrorZ_OK(null, ptr);
        }
        else {
            return new Result_ProbabilisticScorerDecodeErrorZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_ProbabilisticScorerDecodeErrorZ in the success state.
     */
    static constructor_ok(o_params, o_network_graph, o_logger) {
        const ret = bindings.CResult_ProbabilisticScorerDecodeErrorZ_ok(bindings.ProbabilisticScorer_new(o_params == null ? 0n : CommonBase.get_ptr_of(o_params), o_network_graph == null ? 0n : CommonBase.get_ptr_of(o_network_graph), o_logger == null ? 0n : CommonBase.get_ptr_of(o_logger)));
        const ret_hu_conv = Result_ProbabilisticScorerDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, o_params);
        CommonBase.add_ref_from(ret_hu_conv, o_network_graph);
        CommonBase.add_ref_from(ret_hu_conv, o_logger);
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_ProbabilisticScorerDecodeErrorZ in the error state.
     */
    static constructor_err(e) {
        const ret = bindings.CResult_ProbabilisticScorerDecodeErrorZ_err(e == null ? 0n : CommonBase.get_ptr_of(e));
        const ret_hu_conv = Result_ProbabilisticScorerDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, e);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_ProbabilisticScorerDecodeErrorZ_is_ok(this.ptr);
        return ret;
    }
}
export class Result_ProbabilisticScorerDecodeErrorZ_OK extends Result_ProbabilisticScorerDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_ProbabilisticScorerDecodeErrorZ_get_ok(ptr);
        const res_hu_conv = new ProbabilisticScorer(null, res);
        CommonBase.add_ref_from(res_hu_conv, this);
        this.res = res_hu_conv;
    }
}
export class Result_ProbabilisticScorerDecodeErrorZ_Err extends Result_ProbabilisticScorerDecodeErrorZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const err = bindings.CResult_ProbabilisticScorerDecodeErrorZ_get_err(ptr);
        const err_hu_conv = new DecodeError(null, err);
        CommonBase.add_ref_from(err_hu_conv, this);
        this.err = err_hu_conv;
    }
}
//# sourceMappingURL=Result_ProbabilisticScorerDecodeErrorZ.mjs.map