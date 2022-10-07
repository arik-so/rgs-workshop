import { RawInvoice } from '../structs/RawInvoice.mjs';
import { InvoiceSignature } from '../structs/InvoiceSignature.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A Tuple
 */
export declare class ThreeTuple_RawInvoice_u832InvoiceSignatureZ extends CommonBase {
    /**
     *
     */
    get_a(): RawInvoice;
    /**
     *
     */
    get_b(): Uint8Array;
    /**
     *
     */
    get_c(): InvoiceSignature;
    clone_ptr(): bigint;
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): ThreeTuple_RawInvoice_u832InvoiceSignatureZ;
    /**
     * Creates a new C3Tuple_RawInvoice_u832InvoiceSignatureZ from the contained elements.
     */
    static constructor_new(a: RawInvoice, b: Uint8Array, c: InvoiceSignature): ThreeTuple_RawInvoice_u832InvoiceSignatureZ;
}
