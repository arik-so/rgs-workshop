import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A set of keys that were HKDF-expanded from an initial call to
 * [`KeysInterface::get_inbound_payment_key_material`].
 *
 * [`KeysInterface::get_inbound_payment_key_material`]: crate::chain::keysinterface::KeysInterface::get_inbound_payment_key_material
 */
export class ExpandedKey extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ExpandedKey_free);
    }
    /**
     * Create a  new [`ExpandedKey`] for generating an inbound payment hash and secret.
     *
     * It is recommended to cache this value and not regenerate it for each new inbound payment.
     */
    static constructor_new(key_material) {
        const ret = bindings.ExpandedKey_new(bindings.encodeUint8Array(bindings.check_arr_len(key_material, 32)));
        const ret_hu_conv = new ExpandedKey(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ExpandedKey.mjs.map