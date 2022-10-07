import { Result_RouteParametersDecodeErrorZ } from '../structs/Result_RouteParametersDecodeErrorZ.mjs';
import { PaymentParameters } from '../structs/PaymentParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Parameters needed to find a [`Route`].
 *
 * Passed to [`find_route`] and [`build_route_from_hops`], but also provided in
 * [`Event::PaymentPathFailed`] for retrying a failed payment path.
 *
 * [`Event::PaymentPathFailed`]: crate::util::events::Event::PaymentPathFailed
 */
export declare class RouteParameters extends CommonBase {
    /**
     * The parameters of the failed payment path.
     */
    get_payment_params(): PaymentParameters;
    /**
     * The parameters of the failed payment path.
     */
    set_payment_params(val: PaymentParameters): void;
    /**
     * The amount in msats sent on the failed payment path.
     */
    get_final_value_msat(): bigint;
    /**
     * The amount in msats sent on the failed payment path.
     */
    set_final_value_msat(val: bigint): void;
    /**
     * The CLTV on the final hop of the failed payment path.
     */
    get_final_cltv_expiry_delta(): number;
    /**
     * The CLTV on the final hop of the failed payment path.
     */
    set_final_cltv_expiry_delta(val: number): void;
    /**
     * Constructs a new RouteParameters given each field
     */
    static constructor_new(payment_params_arg: PaymentParameters, final_value_msat_arg: bigint, final_cltv_expiry_delta_arg: number): RouteParameters;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the RouteParameters
     */
    clone(): RouteParameters;
    /**
     * Serialize the RouteParameters object into a byte array which can be read by RouteParameters_read
     */
    write(): Uint8Array;
    /**
     * Read a RouteParameters from a byte array, created by RouteParameters_write
     */
    static constructor_read(ser: Uint8Array): Result_RouteParametersDecodeErrorZ;
}
