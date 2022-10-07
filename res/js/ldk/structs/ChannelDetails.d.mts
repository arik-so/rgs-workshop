import { Option_u32Z } from '../structs/Option_u32Z.mjs';
import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { ChannelTypeFeatures } from '../structs/ChannelTypeFeatures.mjs';
import { Option_u16Z } from '../structs/Option_u16Z.mjs';
import { ChannelCounterparty } from '../structs/ChannelCounterparty.mjs';
import { Result_ChannelDetailsDecodeErrorZ } from '../structs/Result_ChannelDetailsDecodeErrorZ.mjs';
import { ChannelConfig } from '../structs/ChannelConfig.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Details of a channel, as returned by ChannelManager::list_channels and ChannelManager::list_usable_channels
 */
export declare class ChannelDetails extends CommonBase {
    /**
     * The channel's ID (prior to funding transaction generation, this is a random 32 bytes,
     * thereafter this is the txid of the funding transaction xor the funding transaction output).
     * Note that this means this value is *not* persistent - it can change once during the
     * lifetime of the channel.
     */
    get_channel_id(): Uint8Array;
    /**
     * The channel's ID (prior to funding transaction generation, this is a random 32 bytes,
     * thereafter this is the txid of the funding transaction xor the funding transaction output).
     * Note that this means this value is *not* persistent - it can change once during the
     * lifetime of the channel.
     */
    set_channel_id(val: Uint8Array): void;
    /**
     * Parameters which apply to our counterparty. See individual fields for more information.
     */
    get_counterparty(): ChannelCounterparty;
    /**
     * Parameters which apply to our counterparty. See individual fields for more information.
     */
    set_counterparty(val: ChannelCounterparty): void;
    /**
     * The Channel's funding transaction output, if we've negotiated the funding transaction with
     * our counterparty already.
     *
     * Note that, if this has been set, `channel_id` will be equivalent to
     * `funding_txo.unwrap().to_channel_id()`.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_funding_txo(): OutPoint;
    /**
     * The Channel's funding transaction output, if we've negotiated the funding transaction with
     * our counterparty already.
     *
     * Note that, if this has been set, `channel_id` will be equivalent to
     * `funding_txo.unwrap().to_channel_id()`.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_funding_txo(val: OutPoint): void;
    /**
     * The features which this channel operates with. See individual features for more info.
     *
     * `None` until negotiation completes and the channel type is finalized.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_channel_type(): ChannelTypeFeatures;
    /**
     * The features which this channel operates with. See individual features for more info.
     *
     * `None` until negotiation completes and the channel type is finalized.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_channel_type(val: ChannelTypeFeatures): void;
    /**
     * The position of the funding transaction in the chain. None if the funding transaction has
     * not yet been confirmed and the channel fully opened.
     *
     * Note that if [`inbound_scid_alias`] is set, it must be used for invoices and inbound
     * payments instead of this. See [`get_inbound_payment_scid`].
     *
     * For channels with [`confirmations_required`] set to `Some(0)`, [`outbound_scid_alias`] may
     * be used in place of this in outbound routes. See [`get_outbound_payment_scid`].
     *
     * [`inbound_scid_alias`]: Self::inbound_scid_alias
     * [`outbound_scid_alias`]: Self::outbound_scid_alias
     * [`get_inbound_payment_scid`]: Self::get_inbound_payment_scid
     * [`get_outbound_payment_scid`]: Self::get_outbound_payment_scid
     * [`confirmations_required`]: Self::confirmations_required
     */
    get_short_channel_id(): Option_u64Z;
    /**
     * The position of the funding transaction in the chain. None if the funding transaction has
     * not yet been confirmed and the channel fully opened.
     *
     * Note that if [`inbound_scid_alias`] is set, it must be used for invoices and inbound
     * payments instead of this. See [`get_inbound_payment_scid`].
     *
     * For channels with [`confirmations_required`] set to `Some(0)`, [`outbound_scid_alias`] may
     * be used in place of this in outbound routes. See [`get_outbound_payment_scid`].
     *
     * [`inbound_scid_alias`]: Self::inbound_scid_alias
     * [`outbound_scid_alias`]: Self::outbound_scid_alias
     * [`get_inbound_payment_scid`]: Self::get_inbound_payment_scid
     * [`get_outbound_payment_scid`]: Self::get_outbound_payment_scid
     * [`confirmations_required`]: Self::confirmations_required
     */
    set_short_channel_id(val: Option_u64Z): void;
    /**
     * An optional [`short_channel_id`] alias for this channel, randomly generated by us and
     * usable in place of [`short_channel_id`] to reference the channel in outbound routes when
     * the channel has not yet been confirmed (as long as [`confirmations_required`] is
     * `Some(0)`).
     *
     * This will be `None` as long as the channel is not available for routing outbound payments.
     *
     * [`short_channel_id`]: Self::short_channel_id
     * [`confirmations_required`]: Self::confirmations_required
     */
    get_outbound_scid_alias(): Option_u64Z;
    /**
     * An optional [`short_channel_id`] alias for this channel, randomly generated by us and
     * usable in place of [`short_channel_id`] to reference the channel in outbound routes when
     * the channel has not yet been confirmed (as long as [`confirmations_required`] is
     * `Some(0)`).
     *
     * This will be `None` as long as the channel is not available for routing outbound payments.
     *
     * [`short_channel_id`]: Self::short_channel_id
     * [`confirmations_required`]: Self::confirmations_required
     */
    set_outbound_scid_alias(val: Option_u64Z): void;
    /**
     * An optional [`short_channel_id`] alias for this channel, randomly generated by our
     * counterparty and usable in place of [`short_channel_id`] in invoice route hints. Our
     * counterparty will recognize the alias provided here in place of the [`short_channel_id`]
     * when they see a payment to be routed to us.
     *
     * Our counterparty may choose to rotate this value at any time, though will always recognize
     * previous values for inbound payment forwarding.
     *
     * [`short_channel_id`]: Self::short_channel_id
     */
    get_inbound_scid_alias(): Option_u64Z;
    /**
     * An optional [`short_channel_id`] alias for this channel, randomly generated by our
     * counterparty and usable in place of [`short_channel_id`] in invoice route hints. Our
     * counterparty will recognize the alias provided here in place of the [`short_channel_id`]
     * when they see a payment to be routed to us.
     *
     * Our counterparty may choose to rotate this value at any time, though will always recognize
     * previous values for inbound payment forwarding.
     *
     * [`short_channel_id`]: Self::short_channel_id
     */
    set_inbound_scid_alias(val: Option_u64Z): void;
    /**
     * The value, in satoshis, of this channel as appears in the funding output
     */
    get_channel_value_satoshis(): bigint;
    /**
     * The value, in satoshis, of this channel as appears in the funding output
     */
    set_channel_value_satoshis(val: bigint): void;
    /**
     * The value, in satoshis, that must always be held in the channel for us. This value ensures
     * that if we broadcast a revoked state, our counterparty can punish us by claiming at least
     * this value on chain.
     *
     * This value is not included in [`outbound_capacity_msat`] as it can never be spent.
     *
     * This value will be `None` for outbound channels until the counterparty accepts the channel.
     *
     * [`outbound_capacity_msat`]: ChannelDetails::outbound_capacity_msat
     */
    get_unspendable_punishment_reserve(): Option_u64Z;
    /**
     * The value, in satoshis, that must always be held in the channel for us. This value ensures
     * that if we broadcast a revoked state, our counterparty can punish us by claiming at least
     * this value on chain.
     *
     * This value is not included in [`outbound_capacity_msat`] as it can never be spent.
     *
     * This value will be `None` for outbound channels until the counterparty accepts the channel.
     *
     * [`outbound_capacity_msat`]: ChannelDetails::outbound_capacity_msat
     */
    set_unspendable_punishment_reserve(val: Option_u64Z): void;
    /**
     * The `user_channel_id` passed in to create_channel, or 0 if the channel was inbound.
     */
    get_user_channel_id(): bigint;
    /**
     * The `user_channel_id` passed in to create_channel, or 0 if the channel was inbound.
     */
    set_user_channel_id(val: bigint): void;
    /**
     * Our total balance.  This is the amount we would get if we close the channel.
     * This value is not exact. Due to various in-flight changes and feerate changes, exactly this
     * amount is not likely to be recoverable on close.
     *
     * This does not include any pending HTLCs which are not yet fully resolved (and, thus, whose
     * balance is not available for inclusion in new outbound HTLCs). This further does not include
     * any pending outgoing HTLCs which are awaiting some other resolution to be sent.
     * This does not consider any on-chain fees.
     *
     * See also [`ChannelDetails::outbound_capacity_msat`]
     */
    get_balance_msat(): bigint;
    /**
     * Our total balance.  This is the amount we would get if we close the channel.
     * This value is not exact. Due to various in-flight changes and feerate changes, exactly this
     * amount is not likely to be recoverable on close.
     *
     * This does not include any pending HTLCs which are not yet fully resolved (and, thus, whose
     * balance is not available for inclusion in new outbound HTLCs). This further does not include
     * any pending outgoing HTLCs which are awaiting some other resolution to be sent.
     * This does not consider any on-chain fees.
     *
     * See also [`ChannelDetails::outbound_capacity_msat`]
     */
    set_balance_msat(val: bigint): void;
    /**
     * The available outbound capacity for sending HTLCs to the remote peer. This does not include
     * any pending HTLCs which are not yet fully resolved (and, thus, whose balance is not
     * available for inclusion in new outbound HTLCs). This further does not include any pending
     * outgoing HTLCs which are awaiting some other resolution to be sent.
     *
     * See also [`ChannelDetails::balance_msat`]
     *
     * This value is not exact. Due to various in-flight changes, feerate changes, and our
     * conflict-avoidance policy, exactly this amount is not likely to be spendable. However, we
     * should be able to spend nearly this amount.
     */
    get_outbound_capacity_msat(): bigint;
    /**
     * The available outbound capacity for sending HTLCs to the remote peer. This does not include
     * any pending HTLCs which are not yet fully resolved (and, thus, whose balance is not
     * available for inclusion in new outbound HTLCs). This further does not include any pending
     * outgoing HTLCs which are awaiting some other resolution to be sent.
     *
     * See also [`ChannelDetails::balance_msat`]
     *
     * This value is not exact. Due to various in-flight changes, feerate changes, and our
     * conflict-avoidance policy, exactly this amount is not likely to be spendable. However, we
     * should be able to spend nearly this amount.
     */
    set_outbound_capacity_msat(val: bigint): void;
    /**
     * The available outbound capacity for sending a single HTLC to the remote peer. This is
     * similar to [`ChannelDetails::outbound_capacity_msat`] but it may be further restricted by
     * the current state and per-HTLC limit(s). This is intended for use when routing, allowing us
     * to use a limit as close as possible to the HTLC limit we can currently send.
     *
     * See also [`ChannelDetails::balance_msat`] and [`ChannelDetails::outbound_capacity_msat`].
     */
    get_next_outbound_htlc_limit_msat(): bigint;
    /**
     * The available outbound capacity for sending a single HTLC to the remote peer. This is
     * similar to [`ChannelDetails::outbound_capacity_msat`] but it may be further restricted by
     * the current state and per-HTLC limit(s). This is intended for use when routing, allowing us
     * to use a limit as close as possible to the HTLC limit we can currently send.
     *
     * See also [`ChannelDetails::balance_msat`] and [`ChannelDetails::outbound_capacity_msat`].
     */
    set_next_outbound_htlc_limit_msat(val: bigint): void;
    /**
     * The available inbound capacity for the remote peer to send HTLCs to us. This does not
     * include any pending HTLCs which are not yet fully resolved (and, thus, whose balance is not
     * available for inclusion in new inbound HTLCs).
     * Note that there are some corner cases not fully handled here, so the actual available
     * inbound capacity may be slightly higher than this.
     *
     * This value is not exact. Due to various in-flight changes, feerate changes, and our
     * counterparty's conflict-avoidance policy, exactly this amount is not likely to be spendable.
     * However, our counterparty should be able to spend nearly this amount.
     */
    get_inbound_capacity_msat(): bigint;
    /**
     * The available inbound capacity for the remote peer to send HTLCs to us. This does not
     * include any pending HTLCs which are not yet fully resolved (and, thus, whose balance is not
     * available for inclusion in new inbound HTLCs).
     * Note that there are some corner cases not fully handled here, so the actual available
     * inbound capacity may be slightly higher than this.
     *
     * This value is not exact. Due to various in-flight changes, feerate changes, and our
     * counterparty's conflict-avoidance policy, exactly this amount is not likely to be spendable.
     * However, our counterparty should be able to spend nearly this amount.
     */
    set_inbound_capacity_msat(val: bigint): void;
    /**
     * The number of required confirmations on the funding transaction before the funding will be
     * considered \"locked\". This number is selected by the channel fundee (i.e. us if
     * [`is_outbound`] is *not* set), and can be selected for inbound channels with
     * [`ChannelHandshakeConfig::minimum_depth`] or limited for outbound channels with
     * [`ChannelHandshakeLimits::max_minimum_depth`].
     *
     * This value will be `None` for outbound channels until the counterparty accepts the channel.
     *
     * [`is_outbound`]: ChannelDetails::is_outbound
     * [`ChannelHandshakeConfig::minimum_depth`]: crate::util::config::ChannelHandshakeConfig::minimum_depth
     * [`ChannelHandshakeLimits::max_minimum_depth`]: crate::util::config::ChannelHandshakeLimits::max_minimum_depth
     */
    get_confirmations_required(): Option_u32Z;
    /**
     * The number of required confirmations on the funding transaction before the funding will be
     * considered \"locked\". This number is selected by the channel fundee (i.e. us if
     * [`is_outbound`] is *not* set), and can be selected for inbound channels with
     * [`ChannelHandshakeConfig::minimum_depth`] or limited for outbound channels with
     * [`ChannelHandshakeLimits::max_minimum_depth`].
     *
     * This value will be `None` for outbound channels until the counterparty accepts the channel.
     *
     * [`is_outbound`]: ChannelDetails::is_outbound
     * [`ChannelHandshakeConfig::minimum_depth`]: crate::util::config::ChannelHandshakeConfig::minimum_depth
     * [`ChannelHandshakeLimits::max_minimum_depth`]: crate::util::config::ChannelHandshakeLimits::max_minimum_depth
     */
    set_confirmations_required(val: Option_u32Z): void;
    /**
     * The number of blocks (after our commitment transaction confirms) that we will need to wait
     * until we can claim our funds after we force-close the channel. During this time our
     * counterparty is allowed to punish us if we broadcasted a stale state. If our counterparty
     * force-closes the channel and broadcasts a commitment transaction we do not have to wait any
     * time to claim our non-HTLC-encumbered funds.
     *
     * This value will be `None` for outbound channels until the counterparty accepts the channel.
     */
    get_force_close_spend_delay(): Option_u16Z;
    /**
     * The number of blocks (after our commitment transaction confirms) that we will need to wait
     * until we can claim our funds after we force-close the channel. During this time our
     * counterparty is allowed to punish us if we broadcasted a stale state. If our counterparty
     * force-closes the channel and broadcasts a commitment transaction we do not have to wait any
     * time to claim our non-HTLC-encumbered funds.
     *
     * This value will be `None` for outbound channels until the counterparty accepts the channel.
     */
    set_force_close_spend_delay(val: Option_u16Z): void;
    /**
     * True if the channel was initiated (and thus funded) by us.
     */
    get_is_outbound(): boolean;
    /**
     * True if the channel was initiated (and thus funded) by us.
     */
    set_is_outbound(val: boolean): void;
    /**
     * True if the channel is confirmed, channel_ready messages have been exchanged, and the
     * channel is not currently being shut down. `channel_ready` message exchange implies the
     * required confirmation count has been reached (and we were connected to the peer at some
     * point after the funding transaction received enough confirmations). The required
     * confirmation count is provided in [`confirmations_required`].
     *
     * [`confirmations_required`]: ChannelDetails::confirmations_required
     */
    get_is_channel_ready(): boolean;
    /**
     * True if the channel is confirmed, channel_ready messages have been exchanged, and the
     * channel is not currently being shut down. `channel_ready` message exchange implies the
     * required confirmation count has been reached (and we were connected to the peer at some
     * point after the funding transaction received enough confirmations). The required
     * confirmation count is provided in [`confirmations_required`].
     *
     * [`confirmations_required`]: ChannelDetails::confirmations_required
     */
    set_is_channel_ready(val: boolean): void;
    /**
     * True if the channel is (a) confirmed and channel_ready messages have been exchanged, (b)
     * the peer is connected, and (c) the channel is not currently negotiating a shutdown.
     *
     * This is a strict superset of `is_channel_ready`.
     */
    get_is_usable(): boolean;
    /**
     * True if the channel is (a) confirmed and channel_ready messages have been exchanged, (b)
     * the peer is connected, and (c) the channel is not currently negotiating a shutdown.
     *
     * This is a strict superset of `is_channel_ready`.
     */
    set_is_usable(val: boolean): void;
    /**
     * True if this channel is (or will be) publicly-announced.
     */
    get_is_public(): boolean;
    /**
     * True if this channel is (or will be) publicly-announced.
     */
    set_is_public(val: boolean): void;
    /**
     * The smallest value HTLC (in msat) we will accept, for this channel. This field
     * is only `None` for `ChannelDetails` objects serialized prior to LDK 0.0.107
     */
    get_inbound_htlc_minimum_msat(): Option_u64Z;
    /**
     * The smallest value HTLC (in msat) we will accept, for this channel. This field
     * is only `None` for `ChannelDetails` objects serialized prior to LDK 0.0.107
     */
    set_inbound_htlc_minimum_msat(val: Option_u64Z): void;
    /**
     * The largest value HTLC (in msat) we currently will accept, for this channel.
     */
    get_inbound_htlc_maximum_msat(): Option_u64Z;
    /**
     * The largest value HTLC (in msat) we currently will accept, for this channel.
     */
    set_inbound_htlc_maximum_msat(val: Option_u64Z): void;
    /**
     * Set of configurable parameters that affect channel operation.
     *
     * This field is only `None` for `ChannelDetails` objects serialized prior to LDK 0.0.109.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_config(): ChannelConfig;
    /**
     * Set of configurable parameters that affect channel operation.
     *
     * This field is only `None` for `ChannelDetails` objects serialized prior to LDK 0.0.109.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_config(val: ChannelConfig): void;
    /**
     * Constructs a new ChannelDetails given each field
     */
    static constructor_new(channel_id_arg: Uint8Array, counterparty_arg: ChannelCounterparty, funding_txo_arg: OutPoint, channel_type_arg: ChannelTypeFeatures, short_channel_id_arg: Option_u64Z, outbound_scid_alias_arg: Option_u64Z, inbound_scid_alias_arg: Option_u64Z, channel_value_satoshis_arg: bigint, unspendable_punishment_reserve_arg: Option_u64Z, user_channel_id_arg: bigint, balance_msat_arg: bigint, outbound_capacity_msat_arg: bigint, next_outbound_htlc_limit_msat_arg: bigint, inbound_capacity_msat_arg: bigint, confirmations_required_arg: Option_u32Z, force_close_spend_delay_arg: Option_u16Z, is_outbound_arg: boolean, is_channel_ready_arg: boolean, is_usable_arg: boolean, is_public_arg: boolean, inbound_htlc_minimum_msat_arg: Option_u64Z, inbound_htlc_maximum_msat_arg: Option_u64Z, config_arg: ChannelConfig): ChannelDetails;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ChannelDetails
     */
    clone(): ChannelDetails;
    /**
     * Gets the current SCID which should be used to identify this channel for inbound payments.
     * This should be used for providing invoice hints or in any other context where our
     * counterparty will forward a payment to us.
     *
     * This is either the [`ChannelDetails::inbound_scid_alias`], if set, or the
     * [`ChannelDetails::short_channel_id`]. See those for more information.
     */
    get_inbound_payment_scid(): Option_u64Z;
    /**
     * Gets the current SCID which should be used to identify this channel for outbound payments.
     * This should be used in [`Route`]s to describe the first hop or in other contexts where
     * we're sending or forwarding a payment outbound over this channel.
     *
     * This is either the [`ChannelDetails::short_channel_id`], if set, or the
     * [`ChannelDetails::outbound_scid_alias`]. See those for more information.
     */
    get_outbound_payment_scid(): Option_u64Z;
    /**
     * Serialize the ChannelDetails object into a byte array which can be read by ChannelDetails_read
     */
    write(): Uint8Array;
    /**
     * Read a ChannelDetails from a byte array, created by ChannelDetails_write
     */
    static constructor_read(ser: Uint8Array): Result_ChannelDetailsDecodeErrorZ;
}
