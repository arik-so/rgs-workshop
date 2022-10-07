import { Result_BlindedHopDecodeErrorZ } from '../structs/Result_BlindedHopDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Used to construct the blinded hops portion of a blinded route. These hops cannot be identified
 * by outside observers and thus can be used to hide the identity of the recipient.
 */
export class BlindedHop extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.BlindedHop_free);
    }
    /**
     * Serialize the BlindedHop object into a byte array which can be read by BlindedHop_read
     */
    write() {
        const ret = bindings.BlindedHop_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a BlindedHop from a byte array, created by BlindedHop_write
     */
    static constructor_read(ser) {
        const ret = bindings.BlindedHop_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_BlindedHopDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=BlindedHop.mjs.map