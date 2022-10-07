import { RouteHop } from '../structs/RouteHop.mjs';
import { Result_RouteDecodeErrorZ } from '../structs/Result_RouteDecodeErrorZ.mjs';
import { PaymentParameters } from '../structs/PaymentParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A route directs a payment from the sender (us) to the recipient. If the recipient supports MPP,
 * it can take multiple paths. Each path is composed of one or more hops through the network.
 */
export declare class Route extends CommonBase {
    /**
     * The list of routes taken for a single (potentially-)multi-part payment. The pubkey of the
     * last RouteHop in each path must be the same. Each entry represents a list of hops, NOT
     * INCLUDING our own, where the last hop is the destination. Thus, this must always be at
     * least length one. While the maximum length of any given path is variable, keeping the length
     * of any path less or equal to 19 should currently ensure it is viable.
     */
    get_paths(): RouteHop[][];
    /**
     * The list of routes taken for a single (potentially-)multi-part payment. The pubkey of the
     * last RouteHop in each path must be the same. Each entry represents a list of hops, NOT
     * INCLUDING our own, where the last hop is the destination. Thus, this must always be at
     * least length one. While the maximum length of any given path is variable, keeping the length
     * of any path less or equal to 19 should currently ensure it is viable.
     */
    set_paths(val: RouteHop[][]): void;
    /**
     * The `payment_params` parameter passed to [`find_route`].
     * This is used by `ChannelManager` to track information which may be required for retries,
     * provided back to you via [`Event::PaymentPathFailed`].
     *
     * [`Event::PaymentPathFailed`]: crate::util::events::Event::PaymentPathFailed
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_payment_params(): PaymentParameters;
    /**
     * The `payment_params` parameter passed to [`find_route`].
     * This is used by `ChannelManager` to track information which may be required for retries,
     * provided back to you via [`Event::PaymentPathFailed`].
     *
     * [`Event::PaymentPathFailed`]: crate::util::events::Event::PaymentPathFailed
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_payment_params(val: PaymentParameters): void;
    /**
     * Constructs a new Route given each field
     */
    static constructor_new(paths_arg: RouteHop[][], payment_params_arg: PaymentParameters): Route;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the Route
     */
    clone(): Route;
    /**
     * Checks if two Routes contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Checks if two Routes contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: Route): boolean;
    /**
     * Returns the total amount of fees paid on this [`Route`].
     *
     * This doesn't include any extra payment made to the recipient, which can happen in excess of
     * the amount passed to [`find_route`]'s `params.final_value_msat`.
     */
    get_total_fees(): bigint;
    /**
     * Returns the total amount paid on this [`Route`], excluding the fees.
     */
    get_total_amount(): bigint;
    /**
     * Serialize the Route object into a byte array which can be read by Route_read
     */
    write(): Uint8Array;
    /**
     * Read a Route from a byte array, created by Route_write
     */
    static constructor_read(ser: Uint8Array): Result_RouteDecodeErrorZ;
}
