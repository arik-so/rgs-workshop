import { Result_HTLCUpdateDecodeErrorZ } from '../structs/Result_HTLCUpdateDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Simple structure sent back by `chain::Watch` when an HTLC from a forward channel is detected on
 * chain. Used to update the corresponding HTLC in the backward channel. Failing to pass the
 * preimage claim backward will lead to loss of funds.
 */
export class HTLCUpdate extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.HTLCUpdate_free);
    }
    clone_ptr() {
        const ret = bindings.HTLCUpdate_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the HTLCUpdate
     */
    clone() {
        const ret = bindings.HTLCUpdate_clone(this.ptr);
        const ret_hu_conv = new HTLCUpdate(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the HTLCUpdate object into a byte array which can be read by HTLCUpdate_read
     */
    write() {
        const ret = bindings.HTLCUpdate_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a HTLCUpdate from a byte array, created by HTLCUpdate_write
     */
    static constructor_read(ser) {
        const ret = bindings.HTLCUpdate_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_HTLCUpdateDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=HTLCUpdate.mjs.map