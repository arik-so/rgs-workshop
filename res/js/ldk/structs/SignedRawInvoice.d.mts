import { Result_SignedRawInvoiceParseErrorZ } from '../structs/Result_SignedRawInvoiceParseErrorZ.mjs';
import { RawInvoice } from '../structs/RawInvoice.mjs';
import { InvoiceSignature } from '../structs/InvoiceSignature.mjs';
import { ThreeTuple_RawInvoice_u832InvoiceSignatureZ } from '../structs/ThreeTuple_RawInvoice_u832InvoiceSignatureZ.mjs';
import { Result_PayeePubKeyErrorZ } from '../structs/Result_PayeePubKeyErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Represents a signed `RawInvoice` with cached hash. The signature is not checked and may be
 * invalid.
 *
 * # Invariants
 * The hash has to be either from the deserialized invoice or from the serialized `raw_invoice`.
 */
export declare class SignedRawInvoice extends CommonBase {
    /**
     * Checks if two SignedRawInvoices contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: SignedRawInvoice): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the SignedRawInvoice
     */
    clone(): SignedRawInvoice;
    /**
     * Checks if two SignedRawInvoices contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Disassembles the `SignedRawInvoice` into its three parts:
     * 1. raw invoice
     * 2. hash of the raw invoice
     * 3. signature
     */
    into_parts(): ThreeTuple_RawInvoice_u832InvoiceSignatureZ;
    /**
     * The `RawInvoice` which was signed.
     */
    raw_invoice(): RawInvoice;
    /**
     * The hash of the `RawInvoice` that was signed.
     */
    signable_hash(): Uint8Array;
    /**
     * InvoiceSignature for the invoice.
     */
    signature(): InvoiceSignature;
    /**
     * Recovers the public key used for signing the invoice from the recoverable signature.
     */
    recover_payee_pub_key(): Result_PayeePubKeyErrorZ;
    /**
     * Checks if the signature is valid for the included payee public key or if none exists if it's
     * valid for the recovered signature (which should always be true?).
     */
    check_signature(): boolean;
    /**
     * Read a SignedRawInvoice object from a string
     */
    static constructor_from_str(s: string): Result_SignedRawInvoiceParseErrorZ;
    /**
     * Get the string representation of a SignedRawInvoice object
     */
    to_str(): string;
}
