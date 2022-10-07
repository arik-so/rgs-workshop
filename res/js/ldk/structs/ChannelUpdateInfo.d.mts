import { ChannelUpdate } from '../structs/ChannelUpdate.mjs';
import { Result_ChannelUpdateInfoDecodeErrorZ } from '../structs/Result_ChannelUpdateInfoDecodeErrorZ.mjs';
import { RoutingFees } from '../structs/RoutingFees.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Details about one direction of a channel as received within a [`ChannelUpdate`].
 */
export declare class ChannelUpdateInfo extends CommonBase {
    /**
     * When the last update to the channel direction was issued.
     * Value is opaque, as set in the announcement.
     */
    get_last_update(): number;
    /**
     * When the last update to the channel direction was issued.
     * Value is opaque, as set in the announcement.
     */
    set_last_update(val: number): void;
    /**
     * Whether the channel can be currently used for payments (in this one direction).
     */
    get_enabled(): boolean;
    /**
     * Whether the channel can be currently used for payments (in this one direction).
     */
    set_enabled(val: boolean): void;
    /**
     * The difference in CLTV values that you must have when routing through this channel.
     */
    get_cltv_expiry_delta(): number;
    /**
     * The difference in CLTV values that you must have when routing through this channel.
     */
    set_cltv_expiry_delta(val: number): void;
    /**
     * The minimum value, which must be relayed to the next hop via the channel
     */
    get_htlc_minimum_msat(): bigint;
    /**
     * The minimum value, which must be relayed to the next hop via the channel
     */
    set_htlc_minimum_msat(val: bigint): void;
    /**
     * The maximum value which may be relayed to the next hop via the channel.
     */
    get_htlc_maximum_msat(): bigint;
    /**
     * The maximum value which may be relayed to the next hop via the channel.
     */
    set_htlc_maximum_msat(val: bigint): void;
    /**
     * Fees charged when the channel is used for routing
     */
    get_fees(): RoutingFees;
    /**
     * Fees charged when the channel is used for routing
     */
    set_fees(val: RoutingFees): void;
    /**
     * Most recent update for the channel received from the network
     * Mostly redundant with the data we store in fields explicitly.
     * Everything else is useful only for sending out for initial routing sync.
     * Not stored if contains excess data to prevent DoS.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_last_update_message(): ChannelUpdate;
    /**
     * Most recent update for the channel received from the network
     * Mostly redundant with the data we store in fields explicitly.
     * Everything else is useful only for sending out for initial routing sync.
     * Not stored if contains excess data to prevent DoS.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_last_update_message(val: ChannelUpdate): void;
    /**
     * Constructs a new ChannelUpdateInfo given each field
     */
    static constructor_new(last_update_arg: number, enabled_arg: boolean, cltv_expiry_delta_arg: number, htlc_minimum_msat_arg: bigint, htlc_maximum_msat_arg: bigint, fees_arg: RoutingFees, last_update_message_arg: ChannelUpdate): ChannelUpdateInfo;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ChannelUpdateInfo
     */
    clone(): ChannelUpdateInfo;
    /**
     * Serialize the ChannelUpdateInfo object into a byte array which can be read by ChannelUpdateInfo_read
     */
    write(): Uint8Array;
    /**
     * Read a ChannelUpdateInfo from a byte array, created by ChannelUpdateInfo_write
     */
    static constructor_read(ser: Uint8Array): Result_ChannelUpdateInfoDecodeErrorZ;
}
