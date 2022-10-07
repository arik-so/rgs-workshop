import { ChannelTypeFeatures } from '../structs/ChannelTypeFeatures.mjs';
import { Result_AcceptChannelDecodeErrorZ } from '../structs/Result_AcceptChannelDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An accept_channel message to be sent or received from a peer
 */
export declare class AcceptChannel extends CommonBase {
    /**
     * A temporary channel ID, until the funding outpoint is announced
     */
    get_temporary_channel_id(): Uint8Array;
    /**
     * A temporary channel ID, until the funding outpoint is announced
     */
    set_temporary_channel_id(val: Uint8Array): void;
    /**
     * The threshold below which outputs on transactions broadcast by sender will be omitted
     */
    get_dust_limit_satoshis(): bigint;
    /**
     * The threshold below which outputs on transactions broadcast by sender will be omitted
     */
    set_dust_limit_satoshis(val: bigint): void;
    /**
     * The maximum inbound HTLC value in flight towards sender, in milli-satoshi
     */
    get_max_htlc_value_in_flight_msat(): bigint;
    /**
     * The maximum inbound HTLC value in flight towards sender, in milli-satoshi
     */
    set_max_htlc_value_in_flight_msat(val: bigint): void;
    /**
     * The minimum value unencumbered by HTLCs for the counterparty to keep in the channel
     */
    get_channel_reserve_satoshis(): bigint;
    /**
     * The minimum value unencumbered by HTLCs for the counterparty to keep in the channel
     */
    set_channel_reserve_satoshis(val: bigint): void;
    /**
     * The minimum HTLC size incoming to sender, in milli-satoshi
     */
    get_htlc_minimum_msat(): bigint;
    /**
     * The minimum HTLC size incoming to sender, in milli-satoshi
     */
    set_htlc_minimum_msat(val: bigint): void;
    /**
     * Minimum depth of the funding transaction before the channel is considered open
     */
    get_minimum_depth(): number;
    /**
     * Minimum depth of the funding transaction before the channel is considered open
     */
    set_minimum_depth(val: number): void;
    /**
     * The number of blocks which the counterparty will have to wait to claim on-chain funds if they broadcast a commitment transaction
     */
    get_to_self_delay(): number;
    /**
     * The number of blocks which the counterparty will have to wait to claim on-chain funds if they broadcast a commitment transaction
     */
    set_to_self_delay(val: number): void;
    /**
     * The maximum number of inbound HTLCs towards sender
     */
    get_max_accepted_htlcs(): number;
    /**
     * The maximum number of inbound HTLCs towards sender
     */
    set_max_accepted_htlcs(val: number): void;
    /**
     * The sender's key controlling the funding transaction
     */
    get_funding_pubkey(): Uint8Array;
    /**
     * The sender's key controlling the funding transaction
     */
    set_funding_pubkey(val: Uint8Array): void;
    /**
     * Used to derive a revocation key for transactions broadcast by counterparty
     */
    get_revocation_basepoint(): Uint8Array;
    /**
     * Used to derive a revocation key for transactions broadcast by counterparty
     */
    set_revocation_basepoint(val: Uint8Array): void;
    /**
     * A payment key to sender for transactions broadcast by counterparty
     */
    get_payment_point(): Uint8Array;
    /**
     * A payment key to sender for transactions broadcast by counterparty
     */
    set_payment_point(val: Uint8Array): void;
    /**
     * Used to derive a payment key to sender for transactions broadcast by sender
     */
    get_delayed_payment_basepoint(): Uint8Array;
    /**
     * Used to derive a payment key to sender for transactions broadcast by sender
     */
    set_delayed_payment_basepoint(val: Uint8Array): void;
    /**
     * Used to derive an HTLC payment key to sender for transactions broadcast by counterparty
     */
    get_htlc_basepoint(): Uint8Array;
    /**
     * Used to derive an HTLC payment key to sender for transactions broadcast by counterparty
     */
    set_htlc_basepoint(val: Uint8Array): void;
    /**
     * The first to-be-broadcast-by-sender transaction's per commitment point
     */
    get_first_per_commitment_point(): Uint8Array;
    /**
     * The first to-be-broadcast-by-sender transaction's per commitment point
     */
    set_first_per_commitment_point(val: Uint8Array): void;
    /**
     * The channel type that this channel will represent. If none is set, we derive the channel
     * type from the intersection of our feature bits with our counterparty's feature bits from
     * the Init message.
     *
     * This is required to match the equivalent field in [`OpenChannel::channel_type`].
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_channel_type(): ChannelTypeFeatures;
    /**
     * The channel type that this channel will represent. If none is set, we derive the channel
     * type from the intersection of our feature bits with our counterparty's feature bits from
     * the Init message.
     *
     * This is required to match the equivalent field in [`OpenChannel::channel_type`].
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_channel_type(val: ChannelTypeFeatures): void;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the AcceptChannel
     */
    clone(): AcceptChannel;
    /**
     * Serialize the AcceptChannel object into a byte array which can be read by AcceptChannel_read
     */
    write(): Uint8Array;
    /**
     * Read a AcceptChannel from a byte array, created by AcceptChannel_write
     */
    static constructor_read(ser: Uint8Array): Result_AcceptChannelDecodeErrorZ;
}
