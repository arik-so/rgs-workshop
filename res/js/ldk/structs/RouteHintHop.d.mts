import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { Result_RouteHintHopDecodeErrorZ } from '../structs/Result_RouteHintHopDecodeErrorZ.mjs';
import { RoutingFees } from '../structs/RoutingFees.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A channel descriptor for a hop along a payment path.
 */
export declare class RouteHintHop extends CommonBase {
    /**
     * The node_id of the non-target end of the route
     */
    get_src_node_id(): Uint8Array;
    /**
     * The node_id of the non-target end of the route
     */
    set_src_node_id(val: Uint8Array): void;
    /**
     * The short_channel_id of this channel
     */
    get_short_channel_id(): bigint;
    /**
     * The short_channel_id of this channel
     */
    set_short_channel_id(val: bigint): void;
    /**
     * The fees which must be paid to use this channel
     */
    get_fees(): RoutingFees;
    /**
     * The fees which must be paid to use this channel
     */
    set_fees(val: RoutingFees): void;
    /**
     * The difference in CLTV values between this node and the next node.
     */
    get_cltv_expiry_delta(): number;
    /**
     * The difference in CLTV values between this node and the next node.
     */
    set_cltv_expiry_delta(val: number): void;
    /**
     * The minimum value, in msat, which must be relayed to the next hop.
     */
    get_htlc_minimum_msat(): Option_u64Z;
    /**
     * The minimum value, in msat, which must be relayed to the next hop.
     */
    set_htlc_minimum_msat(val: Option_u64Z): void;
    /**
     * The maximum value in msat available for routing with a single HTLC.
     */
    get_htlc_maximum_msat(): Option_u64Z;
    /**
     * The maximum value in msat available for routing with a single HTLC.
     */
    set_htlc_maximum_msat(val: Option_u64Z): void;
    /**
     * Constructs a new RouteHintHop given each field
     */
    static constructor_new(src_node_id_arg: Uint8Array, short_channel_id_arg: bigint, fees_arg: RoutingFees, cltv_expiry_delta_arg: number, htlc_minimum_msat_arg: Option_u64Z, htlc_maximum_msat_arg: Option_u64Z): RouteHintHop;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the RouteHintHop
     */
    clone(): RouteHintHop;
    /**
     * Checks if two RouteHintHops contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Checks if two RouteHintHops contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: RouteHintHop): boolean;
    /**
     * Serialize the RouteHintHop object into a byte array which can be read by RouteHintHop_read
     */
    write(): Uint8Array;
    /**
     * Read a RouteHintHop from a byte array, created by RouteHintHop_write
     */
    static constructor_read(ser: Uint8Array): Result_RouteHintHopDecodeErrorZ;
}