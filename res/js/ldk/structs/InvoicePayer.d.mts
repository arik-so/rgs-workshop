import { Logger } from '../structs/Logger.mjs';
import { Result_PaymentIdPaymentErrorZ } from '../structs/Result_PaymentIdPaymentErrorZ.mjs';
import { Invoice } from '../structs/Invoice.mjs';
import { EventHandler } from '../structs/EventHandler.mjs';
import { Payer } from '../structs/Payer.mjs';
import { Router } from '../structs/Router.mjs';
import { Retry } from '../structs/Retry.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A utility for paying [`Invoice`]s and sending spontaneous payments.
 *
 * See [module-level documentation] for details.
 *
 * [module-level documentation]: crate::payment
 */
export declare class InvoicePayer extends CommonBase {
    /**
     * Creates an invoice payer that retries failed payment paths.
     *
     * Will forward any [`Event::PaymentPathFailed`] events to the decorated `event_handler` once
     * `retry` has been exceeded for a given [`Invoice`].
     */
    static constructor_new(payer: Payer, router: Router, logger: Logger, event_handler: EventHandler, retry: Retry): InvoicePayer;
    /**
     * Pays the given [`Invoice`], caching it for later use in case a retry is needed.
     *
     * You should ensure that the `invoice.payment_hash()` is unique and the same payment_hash has
     * never been paid before. Because [`InvoicePayer`] is stateless no effort is made to do so
     * for you.
     */
    pay_invoice(invoice: Invoice): Result_PaymentIdPaymentErrorZ;
    /**
     * Pays the given zero-value [`Invoice`] using the given amount, caching it for later use in
     * case a retry is needed.
     *
     * You should ensure that the `invoice.payment_hash()` is unique and the same payment_hash has
     * never been paid before. Because [`InvoicePayer`] is stateless no effort is made to do so
     * for you.
     */
    pay_zero_value_invoice(invoice: Invoice, amount_msats: bigint): Result_PaymentIdPaymentErrorZ;
    /**
     * Pays `pubkey` an amount using the hash of the given preimage, caching it for later use in
     * case a retry is needed.
     *
     * You should ensure that `payment_preimage` is unique and that its `payment_hash` has never
     * been paid before. Because [`InvoicePayer`] is stateless no effort is made to do so for you.
     */
    pay_pubkey(pubkey: Uint8Array, payment_preimage: Uint8Array, amount_msats: bigint, final_cltv_expiry_delta: number): Result_PaymentIdPaymentErrorZ;
    /**
     * Removes the payment cached by the given payment hash.
     *
     * Should be called once a payment has failed or succeeded if not using [`InvoicePayer`] as an
     * [`EventHandler`]. Otherwise, calling this method is unnecessary.
     */
    remove_cached_payment(payment_hash: Uint8Array): void;
    /**
     * Constructs a new EventHandler which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned EventHandler must be freed before this_arg is
     */
    as_EventHandler(): EventHandler;
}
