import { Result_RouteHopDecodeErrorZ } from '../structs/Result_RouteHopDecodeErrorZ.mjs';
import { ChannelFeatures } from '../structs/ChannelFeatures.mjs';
import { NodeFeatures } from '../structs/NodeFeatures.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A hop in a route
 */
export declare class RouteHop extends CommonBase {
    /**
     * The node_id of the node at this hop.
     */
    get_pubkey(): Uint8Array;
    /**
     * The node_id of the node at this hop.
     */
    set_pubkey(val: Uint8Array): void;
    /**
     * The node_announcement features of the node at this hop. For the last hop, these may be
     * amended to match the features present in the invoice this node generated.
     */
    get_node_features(): NodeFeatures;
    /**
     * The node_announcement features of the node at this hop. For the last hop, these may be
     * amended to match the features present in the invoice this node generated.
     */
    set_node_features(val: NodeFeatures): void;
    /**
     * The channel that should be used from the previous hop to reach this node.
     */
    get_short_channel_id(): bigint;
    /**
     * The channel that should be used from the previous hop to reach this node.
     */
    set_short_channel_id(val: bigint): void;
    /**
     * The channel_announcement features of the channel that should be used from the previous hop
     * to reach this node.
     */
    get_channel_features(): ChannelFeatures;
    /**
     * The channel_announcement features of the channel that should be used from the previous hop
     * to reach this node.
     */
    set_channel_features(val: ChannelFeatures): void;
    /**
     * The fee taken on this hop (for paying for the use of the *next* channel in the path).
     * For the last hop, this should be the full value of the payment (might be more than
     * requested if we had to match htlc_minimum_msat).
     */
    get_fee_msat(): bigint;
    /**
     * The fee taken on this hop (for paying for the use of the *next* channel in the path).
     * For the last hop, this should be the full value of the payment (might be more than
     * requested if we had to match htlc_minimum_msat).
     */
    set_fee_msat(val: bigint): void;
    /**
     * The CLTV delta added for this hop. For the last hop, this should be the full CLTV value
     * expected at the destination, in excess of the current block height.
     */
    get_cltv_expiry_delta(): number;
    /**
     * The CLTV delta added for this hop. For the last hop, this should be the full CLTV value
     * expected at the destination, in excess of the current block height.
     */
    set_cltv_expiry_delta(val: number): void;
    /**
     * Constructs a new RouteHop given each field
     */
    static constructor_new(pubkey_arg: Uint8Array, node_features_arg: NodeFeatures, short_channel_id_arg: bigint, channel_features_arg: ChannelFeatures, fee_msat_arg: bigint, cltv_expiry_delta_arg: number): RouteHop;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the RouteHop
     */
    clone(): RouteHop;
    /**
     * Checks if two RouteHops contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Checks if two RouteHops contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: RouteHop): boolean;
    /**
     * Serialize the RouteHop object into a byte array which can be read by RouteHop_read
     */
    write(): Uint8Array;
    /**
     * Read a RouteHop from a byte array, created by RouteHop_write
     */
    static constructor_read(ser: Uint8Array): Result_RouteHopDecodeErrorZ;
}
