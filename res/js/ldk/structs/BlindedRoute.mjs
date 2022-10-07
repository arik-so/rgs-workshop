import { Result_BlindedRouteNoneZ } from '../structs/Result_BlindedRouteNoneZ.mjs';
import { Result_BlindedRouteDecodeErrorZ } from '../structs/Result_BlindedRouteDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Onion messages can be sent and received to blinded routes, which serve to hide the identity of
 * the recipient.
 */
export class BlindedRoute extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.BlindedRoute_free);
    }
    /**
     * Create a blinded route to be forwarded along `node_pks`. The last node pubkey in `node_pks`
     * will be the destination node.
     *
     * Errors if less than two hops are provided or if `node_pk`(s) are invalid.
     */
    static constructor_new(node_pks, keys_manager) {
        const ret = bindings.BlindedRoute_new(bindings.encodeUint32Array(node_pks != null ? node_pks.map(node_pks_conv_12 => bindings.encodeUint8Array(bindings.check_arr_len(node_pks_conv_12, 33))) : null), keys_manager == null ? 0n : CommonBase.get_ptr_of(keys_manager));
        const ret_hu_conv = Result_BlindedRouteNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, keys_manager);
        return ret_hu_conv;
    }
    /**
     * Serialize the BlindedRoute object into a byte array which can be read by BlindedRoute_read
     */
    write() {
        const ret = bindings.BlindedRoute_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a BlindedRoute from a byte array, created by BlindedRoute_write
     */
    static constructor_read(ser) {
        const ret = bindings.BlindedRoute_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_BlindedRouteDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=BlindedRoute.mjs.map