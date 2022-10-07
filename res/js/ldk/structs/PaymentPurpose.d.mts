import { Result_PaymentPurposeDecodeErrorZ } from '../structs/Result_PaymentPurposeDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Some information provided on receipt of payment depends on whether the payment received is a
 * spontaneous payment or a \"conventional\" lightning payment that's paying an invoice.
 */
export declare class PaymentPurpose extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the PaymentPurpose
     */
    clone(): PaymentPurpose;
    /**
     * Utility method to constructs a new InvoicePayment-variant PaymentPurpose
     */
    static constructor_invoice_payment(payment_preimage: Uint8Array, payment_secret: Uint8Array): PaymentPurpose;
    /**
     * Utility method to constructs a new SpontaneousPayment-variant PaymentPurpose
     */
    static constructor_spontaneous_payment(a: Uint8Array): PaymentPurpose;
    /**
     * Serialize the PaymentPurpose object into a byte array which can be read by PaymentPurpose_read
     */
    write(): Uint8Array;
    /**
     * Read a PaymentPurpose from a byte array, created by PaymentPurpose_write
     */
    static constructor_read(ser: Uint8Array): Result_PaymentPurposeDecodeErrorZ;
}
/** A PaymentPurpose of type InvoicePayment */
export declare class PaymentPurpose_InvoicePayment extends PaymentPurpose {
    /**
     * The preimage to the payment_hash, if the payment hash (and secret) were fetched via
     * [`ChannelManager::create_inbound_payment`]. If provided, this can be handed directly to
     * [`ChannelManager::claim_funds`].
     *
     * [`ChannelManager::create_inbound_payment`]: crate::ln::channelmanager::ChannelManager::create_inbound_payment
     * [`ChannelManager::claim_funds`]: crate::ln::channelmanager::ChannelManager::claim_funds
     *
     * Note that this (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    payment_preimage: Uint8Array;
    /**
     * The \"payment secret\". This authenticates the sender to the recipient, preventing a
     * number of deanonymization attacks during the routing process.
     * It is provided here for your reference, however its accuracy is enforced directly by
     * [`ChannelManager`] using the values you previously provided to
     * [`ChannelManager::create_inbound_payment`] or
     * [`ChannelManager::create_inbound_payment_for_hash`].
     *
     * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
     * [`ChannelManager::create_inbound_payment`]: crate::ln::channelmanager::ChannelManager::create_inbound_payment
     * [`ChannelManager::create_inbound_payment_for_hash`]: crate::ln::channelmanager::ChannelManager::create_inbound_payment_for_hash
     */
    payment_secret: Uint8Array;
}
/** A PaymentPurpose of type SpontaneousPayment */
export declare class PaymentPurpose_SpontaneousPayment extends PaymentPurpose {
    spontaneous_payment: Uint8Array;
}
