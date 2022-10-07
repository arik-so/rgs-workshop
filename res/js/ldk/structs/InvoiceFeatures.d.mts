import { Result_InvoiceFeaturesDecodeErrorZ } from '../structs/Result_InvoiceFeaturesDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Features used within an invoice.
 */
export declare class InvoiceFeatures extends CommonBase {
    /**
     * Checks if two InvoiceFeaturess contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: InvoiceFeatures): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the InvoiceFeatures
     */
    clone(): InvoiceFeatures;
    /**
     * Create a blank Features with no features set
     */
    static constructor_empty(): InvoiceFeatures;
    /**
     * Creates a Features with the bits set which are known by the implementation
     */
    static constructor_known(): InvoiceFeatures;
    /**
     * Returns true if this `Features` object contains unknown feature flags which are set as
     * \"required\".
     */
    requires_unknown_bits(): boolean;
    /**
     * Serialize the InvoiceFeatures object into a byte array which can be read by InvoiceFeatures_read
     */
    write(): Uint8Array;
    /**
     * Read a InvoiceFeatures from a byte array, created by InvoiceFeatures_write
     */
    static constructor_read(ser: Uint8Array): Result_InvoiceFeaturesDecodeErrorZ;
    /**
     * Set this feature as optional.
     */
    set_variable_length_onion_optional(): void;
    /**
     * Set this feature as required.
     */
    set_variable_length_onion_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_variable_length_onion(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_variable_length_onion(): boolean;
    /**
     * Set this feature as optional.
     */
    set_payment_secret_optional(): void;
    /**
     * Set this feature as required.
     */
    set_payment_secret_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_payment_secret(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_payment_secret(): boolean;
    /**
     * Set this feature as optional.
     */
    set_basic_mpp_optional(): void;
    /**
     * Set this feature as required.
     */
    set_basic_mpp_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_basic_mpp(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_basic_mpp(): boolean;
}
