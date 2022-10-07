import { Result_PaymentPurposeDecodeErrorZ } from '../structs/Result_PaymentPurposeDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Some information provided on receipt of payment depends on whether the payment received is a
 * spontaneous payment or a \"conventional\" lightning payment that's paying an invoice.
 */
export class PaymentPurpose extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.PaymentPurpose_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKPaymentPurpose_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new PaymentPurpose_InvoicePayment(ptr);
            case 1: return new PaymentPurpose_SpontaneousPayment(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.PaymentPurpose_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the PaymentPurpose
     */
    clone() {
        const ret = bindings.PaymentPurpose_clone(this.ptr);
        const ret_hu_conv = PaymentPurpose.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new InvoicePayment-variant PaymentPurpose
     */
    static constructor_invoice_payment(payment_preimage, payment_secret) {
        const ret = bindings.PaymentPurpose_invoice_payment(bindings.encodeUint8Array(bindings.check_arr_len(payment_preimage, 32)), bindings.encodeUint8Array(bindings.check_arr_len(payment_secret, 32)));
        const ret_hu_conv = PaymentPurpose.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new SpontaneousPayment-variant PaymentPurpose
     */
    static constructor_spontaneous_payment(a) {
        const ret = bindings.PaymentPurpose_spontaneous_payment(bindings.encodeUint8Array(bindings.check_arr_len(a, 32)));
        const ret_hu_conv = PaymentPurpose.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Serialize the PaymentPurpose object into a byte array which can be read by PaymentPurpose_read
     */
    write() {
        const ret = bindings.PaymentPurpose_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a PaymentPurpose from a byte array, created by PaymentPurpose_write
     */
    static constructor_read(ser) {
        const ret = bindings.PaymentPurpose_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_PaymentPurposeDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
/** A PaymentPurpose of type InvoicePayment */
export class PaymentPurpose_InvoicePayment extends PaymentPurpose {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const payment_preimage = bindings.LDKPaymentPurpose_InvoicePayment_get_payment_preimage(ptr);
        const payment_preimage_conv = bindings.decodeUint8Array(payment_preimage);
        this.payment_preimage = payment_preimage_conv;
        const payment_secret = bindings.LDKPaymentPurpose_InvoicePayment_get_payment_secret(ptr);
        const payment_secret_conv = bindings.decodeUint8Array(payment_secret);
        this.payment_secret = payment_secret_conv;
    }
}
/** A PaymentPurpose of type SpontaneousPayment */
export class PaymentPurpose_SpontaneousPayment extends PaymentPurpose {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const spontaneous_payment = bindings.LDKPaymentPurpose_SpontaneousPayment_get_spontaneous_payment(ptr);
        const spontaneous_payment_conv = bindings.decodeUint8Array(spontaneous_payment);
        this.spontaneous_payment = spontaneous_payment_conv;
    }
}
//# sourceMappingURL=PaymentPurpose.mjs.map