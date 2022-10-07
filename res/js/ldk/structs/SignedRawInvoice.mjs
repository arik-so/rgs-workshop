import { Result_SignedRawInvoiceParseErrorZ } from '../structs/Result_SignedRawInvoiceParseErrorZ.mjs';
import { RawInvoice } from '../structs/RawInvoice.mjs';
import { InvoiceSignature } from '../structs/InvoiceSignature.mjs';
import { ThreeTuple_RawInvoice_u832InvoiceSignatureZ } from '../structs/ThreeTuple_RawInvoice_u832InvoiceSignatureZ.mjs';
import { Result_PayeePubKeyErrorZ } from '../structs/Result_PayeePubKeyErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Represents a signed `RawInvoice` with cached hash. The signature is not checked and may be
 * invalid.
 *
 * # Invariants
 * The hash has to be either from the deserialized invoice or from the serialized `raw_invoice`.
 */
export class SignedRawInvoice extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.SignedRawInvoice_free);
    }
    /**
     * Checks if two SignedRawInvoices contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.SignedRawInvoice_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.SignedRawInvoice_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the SignedRawInvoice
     */
    clone() {
        const ret = bindings.SignedRawInvoice_clone(this.ptr);
        const ret_hu_conv = new SignedRawInvoice(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two SignedRawInvoices contain equal inner contents.
     */
    hash() {
        const ret = bindings.SignedRawInvoice_hash(this.ptr);
        return ret;
    }
    /**
     * Disassembles the `SignedRawInvoice` into its three parts:
     * 1. raw invoice
     * 2. hash of the raw invoice
     * 3. signature
     */
    into_parts() {
        const ret = bindings.SignedRawInvoice_into_parts(this.ptr);
        const ret_hu_conv = new ThreeTuple_RawInvoice_u832InvoiceSignatureZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The `RawInvoice` which was signed.
     */
    raw_invoice() {
        const ret = bindings.SignedRawInvoice_raw_invoice(this.ptr);
        const ret_hu_conv = new RawInvoice(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The hash of the `RawInvoice` that was signed.
     */
    signable_hash() {
        const ret = bindings.SignedRawInvoice_signable_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * InvoiceSignature for the invoice.
     */
    signature() {
        const ret = bindings.SignedRawInvoice_signature(this.ptr);
        const ret_hu_conv = new InvoiceSignature(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Recovers the public key used for signing the invoice from the recoverable signature.
     */
    recover_payee_pub_key() {
        const ret = bindings.SignedRawInvoice_recover_payee_pub_key(this.ptr);
        const ret_hu_conv = Result_PayeePubKeyErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the signature is valid for the included payee public key or if none exists if it's
     * valid for the recovered signature (which should always be true?).
     */
    check_signature() {
        const ret = bindings.SignedRawInvoice_check_signature(this.ptr);
        return ret;
    }
    /**
     * Read a SignedRawInvoice object from a string
     */
    static constructor_from_str(s) {
        const ret = bindings.SignedRawInvoice_from_str(bindings.encodeString(s));
        const ret_hu_conv = Result_SignedRawInvoiceParseErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Get the string representation of a SignedRawInvoice object
     */
    to_str() {
        const ret = bindings.SignedRawInvoice_to_str(this.ptr);
        const ret_conv = bindings.decodeString(ret);
        return ret_conv;
    }
}
//# sourceMappingURL=SignedRawInvoice.mjs.map