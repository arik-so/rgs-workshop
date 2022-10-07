import { RawInvoice } from '../structs/RawInvoice.mjs';
import { InvoiceSignature } from '../structs/InvoiceSignature.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A Tuple
 */
export class ThreeTuple_RawInvoice_u832InvoiceSignatureZ extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.C3Tuple_RawInvoice_u832InvoiceSignatureZ_free);
    }
    /**
     *
     */
    get_a() {
        const ret = bindings.C3Tuple_RawInvoice_u832InvoiceSignatureZ_get_a(this.ptr);
        const ret_hu_conv = new RawInvoice(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     *
     */
    get_b() {
        const ret = bindings.C3Tuple_RawInvoice_u832InvoiceSignatureZ_get_b(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     *
     */
    get_c() {
        const ret = bindings.C3Tuple_RawInvoice_u832InvoiceSignatureZ_get_c(this.ptr);
        const ret_hu_conv = new InvoiceSignature(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.C3Tuple_RawInvoice_u832InvoiceSignatureZ_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone() {
        const ret = bindings.C3Tuple_RawInvoice_u832InvoiceSignatureZ_clone(this.ptr);
        const ret_hu_conv = new ThreeTuple_RawInvoice_u832InvoiceSignatureZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Creates a new C3Tuple_RawInvoice_u832InvoiceSignatureZ from the contained elements.
     */
    static constructor_new(a, b, c) {
        const ret = bindings.C3Tuple_RawInvoice_u832InvoiceSignatureZ_new(a == null ? 0n : CommonBase.get_ptr_of(a), bindings.encodeUint8Array(bindings.check_arr_len(b, 32)), c == null ? 0n : CommonBase.get_ptr_of(c));
        const ret_hu_conv = new ThreeTuple_RawInvoice_u832InvoiceSignatureZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, a);
        CommonBase.add_ref_from(ret_hu_conv, c);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ThreeTuple_RawInvoice_u832InvoiceSignatureZ.mjs.map