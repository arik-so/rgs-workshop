import { Result_FixedPenaltyScorerDecodeErrorZ } from '../structs/Result_FixedPenaltyScorerDecodeErrorZ.mjs';
import { Score } from '../structs/Score.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * [`Score`] implementation that uses a fixed penalty.
 */
export class FixedPenaltyScorer extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.FixedPenaltyScorer_free);
    }
    clone_ptr() {
        const ret = bindings.FixedPenaltyScorer_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the FixedPenaltyScorer
     */
    clone() {
        const ret = bindings.FixedPenaltyScorer_clone(this.ptr);
        const ret_hu_conv = new FixedPenaltyScorer(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Creates a new scorer using `penalty_msat`.
     */
    static constructor_with_penalty(penalty_msat) {
        const ret = bindings.FixedPenaltyScorer_with_penalty(penalty_msat);
        const ret_hu_conv = new FixedPenaltyScorer(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Constructs a new Score which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Score must be freed before this_arg is
     */
    as_Score() {
        const ret = bindings.FixedPenaltyScorer_as_Score(this.ptr);
        const ret_hu_conv = new Score(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the FixedPenaltyScorer object into a byte array which can be read by FixedPenaltyScorer_read
     */
    write() {
        const ret = bindings.FixedPenaltyScorer_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a FixedPenaltyScorer from a byte array, created by FixedPenaltyScorer_write
     */
    static constructor_read(ser, arg) {
        const ret = bindings.FixedPenaltyScorer_read(bindings.encodeUint8Array(ser), arg);
        const ret_hu_conv = Result_FixedPenaltyScorerDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=FixedPenaltyScorer.mjs.map