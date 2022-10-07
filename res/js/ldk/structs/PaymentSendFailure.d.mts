import { RouteParameters } from '../structs/RouteParameters.mjs';
import { APIError } from '../structs/APIError.mjs';
import { Result_NoneAPIErrorZ } from '../structs/Result_NoneAPIErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * If a payment fails to send, it can be in one of several states. This enum is returned as the
 * Err() type describing which state the payment is in, see the description of individual enum
 * states for more.
 */
export declare class PaymentSendFailure extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the PaymentSendFailure
     */
    clone(): PaymentSendFailure;
    /**
     * Utility method to constructs a new ParameterError-variant PaymentSendFailure
     */
    static constructor_parameter_error(a: APIError): PaymentSendFailure;
    /**
     * Utility method to constructs a new PathParameterError-variant PaymentSendFailure
     */
    static constructor_path_parameter_error(a: Result_NoneAPIErrorZ[]): PaymentSendFailure;
    /**
     * Utility method to constructs a new AllFailedRetrySafe-variant PaymentSendFailure
     */
    static constructor_all_failed_retry_safe(a: APIError[]): PaymentSendFailure;
    /**
     * Utility method to constructs a new PartialFailure-variant PaymentSendFailure
     */
    static constructor_partial_failure(results: Result_NoneAPIErrorZ[], failed_paths_retry: RouteParameters, payment_id: Uint8Array): PaymentSendFailure;
}
/** A PaymentSendFailure of type ParameterError */
export declare class PaymentSendFailure_ParameterError extends PaymentSendFailure {
    parameter_error: APIError;
}
/** A PaymentSendFailure of type PathParameterError */
export declare class PaymentSendFailure_PathParameterError extends PaymentSendFailure {
    path_parameter_error: Result_NoneAPIErrorZ[];
}
/** A PaymentSendFailure of type AllFailedRetrySafe */
export declare class PaymentSendFailure_AllFailedRetrySafe extends PaymentSendFailure {
    all_failed_retry_safe: APIError[];
}
/** A PaymentSendFailure of type PartialFailure */
export declare class PaymentSendFailure_PartialFailure extends PaymentSendFailure {
    /**
     * The errors themselves, in the same order as the route hops.
     */
    results: Result_NoneAPIErrorZ[];
    /**
     * If some paths failed without irrevocably committing to the new HTLC(s), this will
     * contain a [`RouteParameters`] object which can be used to calculate a new route that
     * will pay all remaining unpaid balance.
     *
     * Note that this (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    failed_paths_retry: RouteParameters;
    /**
     * The payment id for the payment, which is now at least partially pending.
     */
    payment_id: Uint8Array;
}
