import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { Result_InFlightHtlcsDecodeErrorZ } from '../structs/Result_InFlightHtlcsDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A map with liquidity value (in msat) keyed by a short channel id and the direction the HTLC
 * is traveling in. The direction boolean is determined by checking if the HTLC source's public
 * key is less than its destination. See [`InFlightHtlcs::used_liquidity_msat`] for more
 * details.
 */
export class InFlightHtlcs extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.InFlightHtlcs_free);
    }
    /**
     * Returns liquidity in msat given the public key of the HTLC source, target, and short channel
     * id.
     */
    used_liquidity_msat(source, target, channel_scid) {
        const ret = bindings.InFlightHtlcs_used_liquidity_msat(this.ptr, source == null ? 0n : CommonBase.get_ptr_of(source), target == null ? 0n : CommonBase.get_ptr_of(target), channel_scid);
        const ret_hu_conv = Option_u64Z.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        CommonBase.add_ref_from(this, source);
        CommonBase.add_ref_from(this, target);
        return ret_hu_conv;
    }
    /**
     * Serialize the InFlightHtlcs object into a byte array which can be read by InFlightHtlcs_read
     */
    write() {
        const ret = bindings.InFlightHtlcs_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a InFlightHtlcs from a byte array, created by InFlightHtlcs_write
     */
    static constructor_read(ser) {
        const ret = bindings.InFlightHtlcs_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_InFlightHtlcsDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=InFlightHtlcs.mjs.map