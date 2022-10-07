import { Result_UnsignedChannelUpdateDecodeErrorZ } from '../structs/Result_UnsignedChannelUpdateDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * The unsigned part of a channel_update
 */
export declare class UnsignedChannelUpdate extends CommonBase {
    /**
     * The genesis hash of the blockchain where the channel is to be opened
     */
    get_chain_hash(): Uint8Array;
    /**
     * The genesis hash of the blockchain where the channel is to be opened
     */
    set_chain_hash(val: Uint8Array): void;
    /**
     * The short channel ID
     */
    get_short_channel_id(): bigint;
    /**
     * The short channel ID
     */
    set_short_channel_id(val: bigint): void;
    /**
     * A strictly monotonic announcement counter, with gaps allowed, specific to this channel
     */
    get_timestamp(): number;
    /**
     * A strictly monotonic announcement counter, with gaps allowed, specific to this channel
     */
    set_timestamp(val: number): void;
    /**
     * Channel flags
     */
    get_flags(): number;
    /**
     * Channel flags
     */
    set_flags(val: number): void;
    /**
     * The number of blocks such that if:
     * `incoming_htlc.cltv_expiry < outgoing_htlc.cltv_expiry + cltv_expiry_delta`
     * then we need to fail the HTLC backwards. When forwarding an HTLC, cltv_expiry_delta determines
     * the outgoing HTLC's minimum cltv_expiry value -- so, if an incoming HTLC comes in with a
     * cltv_expiry of 100000, and the node we're forwarding to has a cltv_expiry_delta value of 10,
     * then we'll check that the outgoing HTLC's cltv_expiry value is at least 100010 before
     * forwarding. Note that the HTLC sender is the one who originally sets this value when
     * constructing the route.
     */
    get_cltv_expiry_delta(): number;
    /**
     * The number of blocks such that if:
     * `incoming_htlc.cltv_expiry < outgoing_htlc.cltv_expiry + cltv_expiry_delta`
     * then we need to fail the HTLC backwards. When forwarding an HTLC, cltv_expiry_delta determines
     * the outgoing HTLC's minimum cltv_expiry value -- so, if an incoming HTLC comes in with a
     * cltv_expiry of 100000, and the node we're forwarding to has a cltv_expiry_delta value of 10,
     * then we'll check that the outgoing HTLC's cltv_expiry value is at least 100010 before
     * forwarding. Note that the HTLC sender is the one who originally sets this value when
     * constructing the route.
     */
    set_cltv_expiry_delta(val: number): void;
    /**
     * The minimum HTLC size incoming to sender, in milli-satoshi
     */
    get_htlc_minimum_msat(): bigint;
    /**
     * The minimum HTLC size incoming to sender, in milli-satoshi
     */
    set_htlc_minimum_msat(val: bigint): void;
    /**
     * The maximum HTLC value incoming to sender, in milli-satoshi. Used to be optional.
     */
    get_htlc_maximum_msat(): bigint;
    /**
     * The maximum HTLC value incoming to sender, in milli-satoshi. Used to be optional.
     */
    set_htlc_maximum_msat(val: bigint): void;
    /**
     * The base HTLC fee charged by sender, in milli-satoshi
     */
    get_fee_base_msat(): number;
    /**
     * The base HTLC fee charged by sender, in milli-satoshi
     */
    set_fee_base_msat(val: number): void;
    /**
     * The amount to fee multiplier, in micro-satoshi
     */
    get_fee_proportional_millionths(): number;
    /**
     * The amount to fee multiplier, in micro-satoshi
     */
    set_fee_proportional_millionths(val: number): void;
    /**
     * Excess data which was signed as a part of the message which we do not (yet) understand how
     * to decode. This is stored to ensure forward-compatibility as new fields are added to the
     * lightning gossip
     *
     * Returns a copy of the field.
     */
    get_excess_data(): Uint8Array;
    /**
     * Excess data which was signed as a part of the message which we do not (yet) understand how
     * to decode. This is stored to ensure forward-compatibility as new fields are added to the
     * lightning gossip
     */
    set_excess_data(val: Uint8Array): void;
    /**
     * Constructs a new UnsignedChannelUpdate given each field
     */
    static constructor_new(chain_hash_arg: Uint8Array, short_channel_id_arg: bigint, timestamp_arg: number, flags_arg: number, cltv_expiry_delta_arg: number, htlc_minimum_msat_arg: bigint, htlc_maximum_msat_arg: bigint, fee_base_msat_arg: number, fee_proportional_millionths_arg: number, excess_data_arg: Uint8Array): UnsignedChannelUpdate;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the UnsignedChannelUpdate
     */
    clone(): UnsignedChannelUpdate;
    /**
     * Serialize the UnsignedChannelUpdate object into a byte array which can be read by UnsignedChannelUpdate_read
     */
    write(): Uint8Array;
    /**
     * Read a UnsignedChannelUpdate from a byte array, created by UnsignedChannelUpdate_write
     */
    static constructor_read(ser: Uint8Array): Result_UnsignedChannelUpdateDecodeErrorZ;
}