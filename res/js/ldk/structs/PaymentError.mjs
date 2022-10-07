import { LightningError } from '../structs/LightningError.mjs';
import { PaymentSendFailure } from '../structs/PaymentSendFailure.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An error that may occur when making a payment.
 */
export class PaymentError extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.PaymentError_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKPaymentError_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new PaymentError_Invoice(ptr);
            case 1: return new PaymentError_Routing(ptr);
            case 2: return new PaymentError_Sending(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.PaymentError_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the PaymentError
     */
    clone() {
        const ret = bindings.PaymentError_clone(this.ptr);
        const ret_hu_conv = PaymentError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new Invoice-variant PaymentError
     */
    static constructor_invoice(a) {
        const ret = bindings.PaymentError_invoice(bindings.encodeString(a));
        const ret_hu_conv = PaymentError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new Routing-variant PaymentError
     */
    static constructor_routing(a) {
        const ret = bindings.PaymentError_routing(a == null ? 0n : CommonBase.get_ptr_of(a));
        const ret_hu_conv = PaymentError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, a);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new Sending-variant PaymentError
     */
    static constructor_sending(a) {
        const ret = bindings.PaymentError_sending(CommonBase.get_ptr_of(a));
        const ret_hu_conv = PaymentError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
}
/** A PaymentError of type Invoice */
export class PaymentError_Invoice extends PaymentError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const invoice = bindings.LDKPaymentError_Invoice_get_invoice(ptr);
        const invoice_conv = bindings.decodeString(invoice);
        this.invoice = invoice_conv;
    }
}
/** A PaymentError of type Routing */
export class PaymentError_Routing extends PaymentError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const routing = bindings.LDKPaymentError_Routing_get_routing(ptr);
        const routing_hu_conv = new LightningError(null, routing);
        CommonBase.add_ref_from(routing_hu_conv, this);
        this.routing = routing_hu_conv;
    }
}
/** A PaymentError of type Sending */
export class PaymentError_Sending extends PaymentError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const sending = bindings.LDKPaymentError_Sending_get_sending(ptr);
        const sending_hu_conv = PaymentSendFailure.constr_from_ptr(sending);
        CommonBase.add_ref_from(sending_hu_conv, this);
        this.sending = sending_hu_conv;
    }
}
//# sourceMappingURL=PaymentError.mjs.map