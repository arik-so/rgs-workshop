import { RouteHint } from '../structs/RouteHint.mjs';
import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { Result_PaymentParametersDecodeErrorZ } from '../structs/Result_PaymentParametersDecodeErrorZ.mjs';
import { InvoiceFeatures } from '../structs/InvoiceFeatures.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * The recipient of a payment.
 */
export declare class PaymentParameters extends CommonBase {
    /**
     * The node id of the payee.
     */
    get_payee_pubkey(): Uint8Array;
    /**
     * The node id of the payee.
     */
    set_payee_pubkey(val: Uint8Array): void;
    /**
     * Features supported by the payee.
     *
     * May be set from the payee's invoice or via [`for_keysend`]. May be `None` if the invoice
     * does not contain any features.
     *
     * [`for_keysend`]: Self::for_keysend
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_features(): InvoiceFeatures;
    /**
     * Features supported by the payee.
     *
     * May be set from the payee's invoice or via [`for_keysend`]. May be `None` if the invoice
     * does not contain any features.
     *
     * [`for_keysend`]: Self::for_keysend
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_features(val: InvoiceFeatures): void;
    /**
     * Hints for routing to the payee, containing channels connecting the payee to public nodes.
     */
    get_route_hints(): RouteHint[];
    /**
     * Hints for routing to the payee, containing channels connecting the payee to public nodes.
     */
    set_route_hints(val: RouteHint[]): void;
    /**
     * Expiration of a payment to the payee, in seconds relative to the UNIX epoch.
     */
    get_expiry_time(): Option_u64Z;
    /**
     * Expiration of a payment to the payee, in seconds relative to the UNIX epoch.
     */
    set_expiry_time(val: Option_u64Z): void;
    /**
     * The maximum total CLTV delta we accept for the route.
     * Defaults to [`DEFAULT_MAX_TOTAL_CLTV_EXPIRY_DELTA`].
     */
    get_max_total_cltv_expiry_delta(): number;
    /**
     * The maximum total CLTV delta we accept for the route.
     * Defaults to [`DEFAULT_MAX_TOTAL_CLTV_EXPIRY_DELTA`].
     */
    set_max_total_cltv_expiry_delta(val: number): void;
    /**
     * The maximum number of paths that may be used by (MPP) payments.
     * Defaults to [`DEFAULT_MAX_PATH_COUNT`].
     */
    get_max_path_count(): number;
    /**
     * The maximum number of paths that may be used by (MPP) payments.
     * Defaults to [`DEFAULT_MAX_PATH_COUNT`].
     */
    set_max_path_count(val: number): void;
    /**
     * Selects the maximum share of a channel's total capacity which will be sent over a channel,
     * as a power of 1/2. A higher value prefers to send the payment using more MPP parts whereas
     * a lower value prefers to send larger MPP parts, potentially saturating channels and
     * increasing failure probability for those paths.
     *
     * Note that this restriction will be relaxed during pathfinding after paths which meet this
     * restriction have been found. While paths which meet this criteria will be searched for, it
     * is ultimately up to the scorer to select them over other paths.
     *
     * A value of 0 will allow payments up to and including a channel's total announced usable
     * capacity, a value of one will only use up to half its capacity, two 1/4, etc.
     *
     * Default value: 2
     */
    get_max_channel_saturation_power_of_half(): number;
    /**
     * Selects the maximum share of a channel's total capacity which will be sent over a channel,
     * as a power of 1/2. A higher value prefers to send the payment using more MPP parts whereas
     * a lower value prefers to send larger MPP parts, potentially saturating channels and
     * increasing failure probability for those paths.
     *
     * Note that this restriction will be relaxed during pathfinding after paths which meet this
     * restriction have been found. While paths which meet this criteria will be searched for, it
     * is ultimately up to the scorer to select them over other paths.
     *
     * A value of 0 will allow payments up to and including a channel's total announced usable
     * capacity, a value of one will only use up to half its capacity, two 1/4, etc.
     *
     * Default value: 2
     */
    set_max_channel_saturation_power_of_half(val: number): void;
    /**
     * A list of SCIDs which this payment was previously attempted over and which caused the
     * payment to fail. Future attempts for the same payment shouldn't be relayed through any of
     * these SCIDs.
     *
     * Returns a copy of the field.
     */
    get_previously_failed_channels(): bigint[];
    /**
     * A list of SCIDs which this payment was previously attempted over and which caused the
     * payment to fail. Future attempts for the same payment shouldn't be relayed through any of
     * these SCIDs.
     */
    set_previously_failed_channels(val: bigint[]): void;
    /**
     * Constructs a new PaymentParameters given each field
     */
    static constructor_new(payee_pubkey_arg: Uint8Array, features_arg: InvoiceFeatures, route_hints_arg: RouteHint[], expiry_time_arg: Option_u64Z, max_total_cltv_expiry_delta_arg: number, max_path_count_arg: number, max_channel_saturation_power_of_half_arg: number, previously_failed_channels_arg: bigint[]): PaymentParameters;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the PaymentParameters
     */
    clone(): PaymentParameters;
    /**
     * Checks if two PaymentParameterss contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Checks if two PaymentParameterss contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: PaymentParameters): boolean;
    /**
     * Serialize the PaymentParameters object into a byte array which can be read by PaymentParameters_read
     */
    write(): Uint8Array;
    /**
     * Read a PaymentParameters from a byte array, created by PaymentParameters_write
     */
    static constructor_read(ser: Uint8Array): Result_PaymentParametersDecodeErrorZ;
    /**
     * Creates a payee with the node id of the given `pubkey`.
     */
    static constructor_from_node_id(payee_pubkey: Uint8Array): PaymentParameters;
    /**
     * Creates a payee with the node id of the given `pubkey` to use for keysend payments.
     */
    static constructor_for_keysend(payee_pubkey: Uint8Array): PaymentParameters;
}
