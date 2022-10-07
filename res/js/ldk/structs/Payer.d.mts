import { Route } from '../structs/Route.mjs';
import { ChannelDetails } from '../structs/ChannelDetails.mjs';
import { Result_PaymentIdPaymentSendFailureZ } from '../structs/Result_PaymentIdPaymentSendFailureZ.mjs';
import { Result_NonePaymentSendFailureZ } from '../structs/Result_NonePaymentSendFailureZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of Payer */
export interface PayerInterface {
    /**Returns the payer's node id.
     */
    node_id(): Uint8Array;
    /**Returns the payer's channels.
     */
    first_hops(): ChannelDetails[];
    /**Sends a payment over the Lightning Network using the given [`Route`].
     *
     * Note that payment_secret (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    send_payment(route: Route, payment_hash: Uint8Array, payment_secret: Uint8Array): Result_PaymentIdPaymentSendFailureZ;
    /**Sends a spontaneous payment over the Lightning Network using the given [`Route`].
     */
    send_spontaneous_payment(route: Route, payment_preimage: Uint8Array): Result_PaymentIdPaymentSendFailureZ;
    /**Retries a failed payment path for the [`PaymentId`] using the given [`Route`].
     */
    retry_payment(route: Route, payment_id: Uint8Array): Result_NonePaymentSendFailureZ;
    /**Signals that no further retries for the given payment will occur.
     */
    abandon_payment(payment_id: Uint8Array): void;
}
/**
 * A trait defining behavior of an [`Invoice`] payer.
 */
export declare class Payer extends CommonBase {
    /** Creates a new instance of Payer from a given implementation */
    static new_impl(arg: PayerInterface): Payer;
    /**
     * Returns the payer's node id.
     */
    node_id(): Uint8Array;
    /**
     * Returns the payer's channels.
     */
    first_hops(): ChannelDetails[];
    /**
     * Sends a payment over the Lightning Network using the given [`Route`].
     *
     * Note that payment_secret (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    send_payment(route: Route, payment_hash: Uint8Array, payment_secret: Uint8Array): Result_PaymentIdPaymentSendFailureZ;
    /**
     * Sends a spontaneous payment over the Lightning Network using the given [`Route`].
     */
    send_spontaneous_payment(route: Route, payment_preimage: Uint8Array): Result_PaymentIdPaymentSendFailureZ;
    /**
     * Retries a failed payment path for the [`PaymentId`] using the given [`Route`].
     */
    retry_payment(route: Route, payment_id: Uint8Array): Result_NonePaymentSendFailureZ;
    /**
     * Signals that no further retries for the given payment will occur.
     */
    abandon_payment(payment_id: Uint8Array): void;
}
