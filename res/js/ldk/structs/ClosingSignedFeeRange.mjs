import { Result_ClosingSignedFeeRangeDecodeErrorZ } from '../structs/Result_ClosingSignedFeeRangeDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * The minimum and maximum fees which the sender is willing to place on the closing transaction.
 * This is provided in [`ClosingSigned`] by both sides to indicate the fee range they are willing
 * to use.
 */
export class ClosingSignedFeeRange extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ClosingSignedFeeRange_free);
    }
    /**
     * The minimum absolute fee, in satoshis, which the sender is willing to place on the closing
     * transaction.
     */
    get_min_fee_satoshis() {
        const ret = bindings.ClosingSignedFeeRange_get_min_fee_satoshis(this.ptr);
        return ret;
    }
    /**
     * The minimum absolute fee, in satoshis, which the sender is willing to place on the closing
     * transaction.
     */
    set_min_fee_satoshis(val) {
        bindings.ClosingSignedFeeRange_set_min_fee_satoshis(this.ptr, val);
    }
    /**
     * The maximum absolute fee, in satoshis, which the sender is willing to place on the closing
     * transaction.
     */
    get_max_fee_satoshis() {
        const ret = bindings.ClosingSignedFeeRange_get_max_fee_satoshis(this.ptr);
        return ret;
    }
    /**
     * The maximum absolute fee, in satoshis, which the sender is willing to place on the closing
     * transaction.
     */
    set_max_fee_satoshis(val) {
        bindings.ClosingSignedFeeRange_set_max_fee_satoshis(this.ptr, val);
    }
    /**
     * Constructs a new ClosingSignedFeeRange given each field
     */
    static constructor_new(min_fee_satoshis_arg, max_fee_satoshis_arg) {
        const ret = bindings.ClosingSignedFeeRange_new(min_fee_satoshis_arg, max_fee_satoshis_arg);
        const ret_hu_conv = new ClosingSignedFeeRange(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ClosingSignedFeeRange_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ClosingSignedFeeRange
     */
    clone() {
        const ret = bindings.ClosingSignedFeeRange_clone(this.ptr);
        const ret_hu_conv = new ClosingSignedFeeRange(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ClosingSignedFeeRange object into a byte array which can be read by ClosingSignedFeeRange_read
     */
    write() {
        const ret = bindings.ClosingSignedFeeRange_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ClosingSignedFeeRange from a byte array, created by ClosingSignedFeeRange_write
     */
    static constructor_read(ser) {
        const ret = bindings.ClosingSignedFeeRange_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ClosingSignedFeeRangeDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ClosingSignedFeeRange.mjs.map