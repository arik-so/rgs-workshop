import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { InvoiceFeatures } from '../structs/InvoiceFeatures.mjs';
import { PayeePubKey } from '../structs/PayeePubKey.mjs';
import { PrivateRoute } from '../structs/PrivateRoute.mjs';
import { Description } from '../structs/Description.mjs';
import { RawDataPart } from '../structs/RawDataPart.mjs';
import { Sha256 } from '../structs/Sha256.mjs';
import { ExpiryTime } from '../structs/ExpiryTime.mjs';
import { MinFinalCltvExpiry } from '../structs/MinFinalCltvExpiry.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Represents an syntactically correct Invoice for a payment on the lightning network,
 * but without the signature information.
 * De- and encoding should not lead to information loss but may lead to different hashes.
 *
 * For methods without docs see the corresponding methods in `Invoice`.
 */
export class RawInvoice extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.RawInvoice_free);
    }
    /**
     * data part
     */
    get_data() {
        const ret = bindings.RawInvoice_get_data(this.ptr);
        const ret_hu_conv = new RawDataPart(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * data part
     */
    set_data(val) {
        bindings.RawInvoice_set_data(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Checks if two RawInvoices contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.RawInvoice_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.RawInvoice_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the RawInvoice
     */
    clone() {
        const ret = bindings.RawInvoice_clone(this.ptr);
        const ret_hu_conv = new RawInvoice(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two RawInvoices contain equal inner contents.
     */
    hash() {
        const ret = bindings.RawInvoice_hash(this.ptr);
        return ret;
    }
    /**
     * Calculate the hash of the encoded `RawInvoice` which should be signed.
     */
    signable_hash() {
        const ret = bindings.RawInvoice_signable_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    payment_hash() {
        const ret = bindings.RawInvoice_payment_hash(this.ptr);
        const ret_hu_conv = new Sha256(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    description() {
        const ret = bindings.RawInvoice_description(this.ptr);
        const ret_hu_conv = new Description(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    payee_pub_key() {
        const ret = bindings.RawInvoice_payee_pub_key(this.ptr);
        const ret_hu_conv = new PayeePubKey(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    description_hash() {
        const ret = bindings.RawInvoice_description_hash(this.ptr);
        const ret_hu_conv = new Sha256(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    expiry_time() {
        const ret = bindings.RawInvoice_expiry_time(this.ptr);
        const ret_hu_conv = new ExpiryTime(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    min_final_cltv_expiry() {
        const ret = bindings.RawInvoice_min_final_cltv_expiry(this.ptr);
        const ret_hu_conv = new MinFinalCltvExpiry(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    payment_secret() {
        const ret = bindings.RawInvoice_payment_secret(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    features() {
        const ret = bindings.RawInvoice_features(this.ptr);
        const ret_hu_conv = new InvoiceFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    private_routes() {
        const ret = bindings.RawInvoice_private_routes(this.ptr);
        const ret_conv_14_len = bindings.getArrayLength(ret);
        const ret_conv_14_arr = new Array(ret_conv_14_len).fill(null);
        for (var o = 0; o < ret_conv_14_len; o++) {
            const ret_conv_14 = bindings.getU64ArrayElem(ret, o);
            const ret_conv_14_hu_conv = new PrivateRoute(null, ret_conv_14);
            CommonBase.add_ref_from(ret_conv_14_hu_conv, this);
            ret_conv_14_arr[o] = ret_conv_14_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_14_arr;
    }
    amount_pico_btc() {
        const ret = bindings.RawInvoice_amount_pico_btc(this.ptr);
        const ret_hu_conv = Option_u64Z.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    currency() {
        const ret = bindings.RawInvoice_currency(this.ptr);
        return ret;
    }
}
//# sourceMappingURL=RawInvoice.mjs.map