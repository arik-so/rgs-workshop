import { Result_InvoiceFeaturesDecodeErrorZ } from '../structs/Result_InvoiceFeaturesDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Features used within an invoice.
 */
export class InvoiceFeatures extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.InvoiceFeatures_free);
    }
    /**
     * Checks if two InvoiceFeaturess contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.InvoiceFeatures_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.InvoiceFeatures_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the InvoiceFeatures
     */
    clone() {
        const ret = bindings.InvoiceFeatures_clone(this.ptr);
        const ret_hu_conv = new InvoiceFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Create a blank Features with no features set
     */
    static constructor_empty() {
        const ret = bindings.InvoiceFeatures_empty();
        const ret_hu_conv = new InvoiceFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Creates a Features with the bits set which are known by the implementation
     */
    static constructor_known() {
        const ret = bindings.InvoiceFeatures_known();
        const ret_hu_conv = new InvoiceFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Returns true if this `Features` object contains unknown feature flags which are set as
     * \"required\".
     */
    requires_unknown_bits() {
        const ret = bindings.InvoiceFeatures_requires_unknown_bits(this.ptr);
        return ret;
    }
    /**
     * Serialize the InvoiceFeatures object into a byte array which can be read by InvoiceFeatures_read
     */
    write() {
        const ret = bindings.InvoiceFeatures_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a InvoiceFeatures from a byte array, created by InvoiceFeatures_write
     */
    static constructor_read(ser) {
        const ret = bindings.InvoiceFeatures_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_InvoiceFeaturesDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Set this feature as optional.
     */
    set_variable_length_onion_optional() {
        bindings.InvoiceFeatures_set_variable_length_onion_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_variable_length_onion_required() {
        bindings.InvoiceFeatures_set_variable_length_onion_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_variable_length_onion() {
        const ret = bindings.InvoiceFeatures_supports_variable_length_onion(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_variable_length_onion() {
        const ret = bindings.InvoiceFeatures_requires_variable_length_onion(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_payment_secret_optional() {
        bindings.InvoiceFeatures_set_payment_secret_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_payment_secret_required() {
        bindings.InvoiceFeatures_set_payment_secret_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_payment_secret() {
        const ret = bindings.InvoiceFeatures_supports_payment_secret(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_payment_secret() {
        const ret = bindings.InvoiceFeatures_requires_payment_secret(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_basic_mpp_optional() {
        bindings.InvoiceFeatures_set_basic_mpp_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_basic_mpp_required() {
        bindings.InvoiceFeatures_set_basic_mpp_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_basic_mpp() {
        const ret = bindings.InvoiceFeatures_supports_basic_mpp(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_basic_mpp() {
        const ret = bindings.InvoiceFeatures_requires_basic_mpp(this.ptr);
        return ret;
    }
}
//# sourceMappingURL=InvoiceFeatures.mjs.map