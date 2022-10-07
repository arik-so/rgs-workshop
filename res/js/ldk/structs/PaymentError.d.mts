import { LightningError } from '../structs/LightningError.mjs';
import { PaymentSendFailure } from '../structs/PaymentSendFailure.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An error that may occur when making a payment.
 */
export declare class PaymentError extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the PaymentError
     */
    clone(): PaymentError;
    /**
     * Utility method to constructs a new Invoice-variant PaymentError
     */
    static constructor_invoice(a: string): PaymentError;
    /**
     * Utility method to constructs a new Routing-variant PaymentError
     */
    static constructor_routing(a: LightningError): PaymentError;
    /**
     * Utility method to constructs a new Sending-variant PaymentError
     */
    static constructor_sending(a: PaymentSendFailure): PaymentError;
}
/** A PaymentError of type Invoice */
export declare class PaymentError_Invoice extends PaymentError {
    invoice: string;
}
/** A PaymentError of type Routing */
export declare class PaymentError_Routing extends PaymentError {
    routing: LightningError;
}
/** A PaymentError of type Sending */
export declare class PaymentError_Sending extends PaymentError {
    sending: PaymentSendFailure;
}
