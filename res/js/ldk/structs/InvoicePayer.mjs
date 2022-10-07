import { Result_PaymentIdPaymentErrorZ } from '../structs/Result_PaymentIdPaymentErrorZ.mjs';
import { EventHandler } from '../structs/EventHandler.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A utility for paying [`Invoice`]s and sending spontaneous payments.
 *
 * See [module-level documentation] for details.
 *
 * [module-level documentation]: crate::payment
 */
export class InvoicePayer extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.InvoicePayer_free);
    }
    /**
     * Creates an invoice payer that retries failed payment paths.
     *
     * Will forward any [`Event::PaymentPathFailed`] events to the decorated `event_handler` once
     * `retry` has been exceeded for a given [`Invoice`].
     */
    static constructor_new(payer, router, logger, event_handler, retry) {
        const ret = bindings.InvoicePayer_new(payer == null ? 0n : CommonBase.get_ptr_of(payer), router == null ? 0n : CommonBase.get_ptr_of(router), logger == null ? 0n : CommonBase.get_ptr_of(logger), event_handler == null ? 0n : CommonBase.get_ptr_of(event_handler), CommonBase.get_ptr_of(retry));
        const ret_hu_conv = new InvoicePayer(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, payer);
        CommonBase.add_ref_from(ret_hu_conv, router);
        CommonBase.add_ref_from(ret_hu_conv, logger);
        CommonBase.add_ref_from(ret_hu_conv, event_handler);
        return ret_hu_conv;
    }
    /**
     * Pays the given [`Invoice`], caching it for later use in case a retry is needed.
     *
     * You should ensure that the `invoice.payment_hash()` is unique and the same payment_hash has
     * never been paid before. Because [`InvoicePayer`] is stateless no effort is made to do so
     * for you.
     */
    pay_invoice(invoice) {
        const ret = bindings.InvoicePayer_pay_invoice(this.ptr, invoice == null ? 0n : CommonBase.get_ptr_of(invoice));
        const ret_hu_conv = Result_PaymentIdPaymentErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, invoice);
        return ret_hu_conv;
    }
    /**
     * Pays the given zero-value [`Invoice`] using the given amount, caching it for later use in
     * case a retry is needed.
     *
     * You should ensure that the `invoice.payment_hash()` is unique and the same payment_hash has
     * never been paid before. Because [`InvoicePayer`] is stateless no effort is made to do so
     * for you.
     */
    pay_zero_value_invoice(invoice, amount_msats) {
        const ret = bindings.InvoicePayer_pay_zero_value_invoice(this.ptr, invoice == null ? 0n : CommonBase.get_ptr_of(invoice), amount_msats);
        const ret_hu_conv = Result_PaymentIdPaymentErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, invoice);
        return ret_hu_conv;
    }
    /**
     * Pays `pubkey` an amount using the hash of the given preimage, caching it for later use in
     * case a retry is needed.
     *
     * You should ensure that `payment_preimage` is unique and that its `payment_hash` has never
     * been paid before. Because [`InvoicePayer`] is stateless no effort is made to do so for you.
     */
    pay_pubkey(pubkey, payment_preimage, amount_msats, final_cltv_expiry_delta) {
        const ret = bindings.InvoicePayer_pay_pubkey(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(pubkey, 33)), bindings.encodeUint8Array(bindings.check_arr_len(payment_preimage, 32)), amount_msats, final_cltv_expiry_delta);
        const ret_hu_conv = Result_PaymentIdPaymentErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Removes the payment cached by the given payment hash.
     *
     * Should be called once a payment has failed or succeeded if not using [`InvoicePayer`] as an
     * [`EventHandler`]. Otherwise, calling this method is unnecessary.
     */
    remove_cached_payment(payment_hash) {
        bindings.InvoicePayer_remove_cached_payment(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)));
    }
    /**
     * Constructs a new EventHandler which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned EventHandler must be freed before this_arg is
     */
    as_EventHandler() {
        const ret = bindings.InvoicePayer_as_EventHandler(this.ptr);
        const ret_hu_conv = new EventHandler(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=InvoicePayer.mjs.map