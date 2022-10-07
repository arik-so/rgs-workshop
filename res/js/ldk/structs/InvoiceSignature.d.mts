import { CommonBase } from './CommonBase.mjs';
/**
 * Recoverable signature
 */
export declare class InvoiceSignature extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the InvoiceSignature
     */
    clone(): InvoiceSignature;
    /**
     * Checks if two InvoiceSignatures contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Checks if two InvoiceSignatures contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: InvoiceSignature): boolean;
}
