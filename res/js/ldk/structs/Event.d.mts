import { RouteHop } from '../structs/RouteHop.mjs';
import { RouteParameters } from '../structs/RouteParameters.mjs';
import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { PaymentPurpose } from '../structs/PaymentPurpose.mjs';
import { ClosureReason } from '../structs/ClosureReason.mjs';
import { HTLCDestination } from '../structs/HTLCDestination.mjs';
import { Option_NetworkUpdateZ } from '../structs/Option_NetworkUpdateZ.mjs';
import { SpendableOutputDescriptor } from '../structs/SpendableOutputDescriptor.mjs';
import { ChannelTypeFeatures } from '../structs/ChannelTypeFeatures.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An Event which you should probably take some action in response to.
 *
 * Note that while Writeable and Readable are implemented for Event, you probably shouldn't use
 * them directly as they don't round-trip exactly (for example FundingGenerationReady is never
 * written as it makes no sense to respond to it after reconnecting to peers).
 */
export declare class Event extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the Event
     */
    clone(): Event;
    /**
     * Utility method to constructs a new FundingGenerationReady-variant Event
     */
    static constructor_funding_generation_ready(temporary_channel_id: Uint8Array, counterparty_node_id: Uint8Array, channel_value_satoshis: bigint, output_script: Uint8Array, user_channel_id: bigint): Event;
    /**
     * Utility method to constructs a new PaymentReceived-variant Event
     */
    static constructor_payment_received(payment_hash: Uint8Array, amount_msat: bigint, purpose: PaymentPurpose): Event;
    /**
     * Utility method to constructs a new PaymentClaimed-variant Event
     */
    static constructor_payment_claimed(payment_hash: Uint8Array, amount_msat: bigint, purpose: PaymentPurpose): Event;
    /**
     * Utility method to constructs a new PaymentSent-variant Event
     */
    static constructor_payment_sent(payment_id: Uint8Array, payment_preimage: Uint8Array, payment_hash: Uint8Array, fee_paid_msat: Option_u64Z): Event;
    /**
     * Utility method to constructs a new PaymentFailed-variant Event
     */
    static constructor_payment_failed(payment_id: Uint8Array, payment_hash: Uint8Array): Event;
    /**
     * Utility method to constructs a new PaymentPathSuccessful-variant Event
     */
    static constructor_payment_path_successful(payment_id: Uint8Array, payment_hash: Uint8Array, path: RouteHop[]): Event;
    /**
     * Utility method to constructs a new PaymentPathFailed-variant Event
     */
    static constructor_payment_path_failed(payment_id: Uint8Array, payment_hash: Uint8Array, payment_failed_permanently: boolean, network_update: Option_NetworkUpdateZ, all_paths_failed: boolean, path: RouteHop[], short_channel_id: Option_u64Z, retry: RouteParameters): Event;
    /**
     * Utility method to constructs a new ProbeSuccessful-variant Event
     */
    static constructor_probe_successful(payment_id: Uint8Array, payment_hash: Uint8Array, path: RouteHop[]): Event;
    /**
     * Utility method to constructs a new ProbeFailed-variant Event
     */
    static constructor_probe_failed(payment_id: Uint8Array, payment_hash: Uint8Array, path: RouteHop[], short_channel_id: Option_u64Z): Event;
    /**
     * Utility method to constructs a new PendingHTLCsForwardable-variant Event
     */
    static constructor_pending_htlcs_forwardable(time_forwardable: bigint): Event;
    /**
     * Utility method to constructs a new SpendableOutputs-variant Event
     */
    static constructor_spendable_outputs(outputs: SpendableOutputDescriptor[]): Event;
    /**
     * Utility method to constructs a new PaymentForwarded-variant Event
     */
    static constructor_payment_forwarded(prev_channel_id: Uint8Array, next_channel_id: Uint8Array, fee_earned_msat: Option_u64Z, claim_from_onchain_tx: boolean): Event;
    /**
     * Utility method to constructs a new ChannelClosed-variant Event
     */
    static constructor_channel_closed(channel_id: Uint8Array, user_channel_id: bigint, reason: ClosureReason): Event;
    /**
     * Utility method to constructs a new DiscardFunding-variant Event
     */
    static constructor_discard_funding(channel_id: Uint8Array, transaction: Uint8Array): Event;
    /**
     * Utility method to constructs a new OpenChannelRequest-variant Event
     */
    static constructor_open_channel_request(temporary_channel_id: Uint8Array, counterparty_node_id: Uint8Array, funding_satoshis: bigint, push_msat: bigint, channel_type: ChannelTypeFeatures): Event;
    /**
     * Utility method to constructs a new HTLCHandlingFailed-variant Event
     */
    static constructor_htlchandling_failed(prev_channel_id: Uint8Array, failed_next_destination: HTLCDestination): Event;
    /**
     * Serialize the Event object into a byte array which can be read by Event_read
     */
    write(): Uint8Array;
}
/** A Event of type FundingGenerationReady */
export declare class Event_FundingGenerationReady extends Event {
    /**
     * The random channel_id we picked which you'll need to pass into
     * [`ChannelManager::funding_transaction_generated`].
     *
     * [`ChannelManager::funding_transaction_generated`]: crate::ln::channelmanager::ChannelManager::funding_transaction_generated
     */
    temporary_channel_id: Uint8Array;
    /**
     * The counterparty's node_id, which you'll need to pass back into
     * [`ChannelManager::funding_transaction_generated`].
     *
     * [`ChannelManager::funding_transaction_generated`]: crate::ln::channelmanager::ChannelManager::funding_transaction_generated
     */
    counterparty_node_id: Uint8Array;
    /**
     * The value, in satoshis, that the output should have.
     */
    channel_value_satoshis: bigint;
    /**
     * The script which should be used in the transaction output.
     */
    output_script: Uint8Array;
    /**
     * The `user_channel_id` value passed in to [`ChannelManager::create_channel`], or 0 for
     * an inbound channel.
     *
     * [`ChannelManager::create_channel`]: crate::ln::channelmanager::ChannelManager::create_channel
     */
    user_channel_id: bigint;
}
/** A Event of type PaymentReceived */
export declare class Event_PaymentReceived extends Event {
    /**
     * The hash for which the preimage should be handed to the ChannelManager. Note that LDK will
     * not stop you from registering duplicate payment hashes for inbound payments.
     */
    payment_hash: Uint8Array;
    /**
     * The value, in thousandths of a satoshi, that this payment is for.
     */
    amount_msat: bigint;
    /**
     * Information for claiming this received payment, based on whether the purpose of the
     * payment is to pay an invoice or to send a spontaneous payment.
     */
    purpose: PaymentPurpose;
}
/** A Event of type PaymentClaimed */
export declare class Event_PaymentClaimed extends Event {
    /**
     * The payment hash of the claimed payment. Note that LDK will not stop you from
     * registering duplicate payment hashes for inbound payments.
     */
    payment_hash: Uint8Array;
    /**
     * The value, in thousandths of a satoshi, that this payment is for.
     */
    amount_msat: bigint;
    /**
     * The purpose of this claimed payment, i.e. whether the payment was for an invoice or a
     * spontaneous payment.
     */
    purpose: PaymentPurpose;
}
/** A Event of type PaymentSent */
export declare class Event_PaymentSent extends Event {
    /**
     * The id returned by [`ChannelManager::send_payment`] and used with
     * [`ChannelManager::retry_payment`].
     *
     * [`ChannelManager::send_payment`]: crate::ln::channelmanager::ChannelManager::send_payment
     * [`ChannelManager::retry_payment`]: crate::ln::channelmanager::ChannelManager::retry_payment
     *
     * Note that this (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    payment_id: Uint8Array;
    /**
     * The preimage to the hash given to ChannelManager::send_payment.
     * Note that this serves as a payment receipt, if you wish to have such a thing, you must
     * store it somehow!
     */
    payment_preimage: Uint8Array;
    /**
     * The hash that was given to [`ChannelManager::send_payment`].
     *
     * [`ChannelManager::send_payment`]: crate::ln::channelmanager::ChannelManager::send_payment
     */
    payment_hash: Uint8Array;
    /**
     * The total fee which was spent at intermediate hops in this payment, across all paths.
     *
     * Note that, like [`Route::get_total_fees`] this does *not* include any potential
     * overpayment to the recipient node.
     *
     * If the recipient or an intermediate node misbehaves and gives us free money, this may
     * overstate the amount paid, though this is unlikely.
     *
     * [`Route::get_total_fees`]: crate::routing::router::Route::get_total_fees
     */
    fee_paid_msat: Option_u64Z;
}
/** A Event of type PaymentFailed */
export declare class Event_PaymentFailed extends Event {
    /**
     * The id returned by [`ChannelManager::send_payment`] and used with
     * [`ChannelManager::retry_payment`] and [`ChannelManager::abandon_payment`].
     *
     * [`ChannelManager::send_payment`]: crate::ln::channelmanager::ChannelManager::send_payment
     * [`ChannelManager::retry_payment`]: crate::ln::channelmanager::ChannelManager::retry_payment
     * [`ChannelManager::abandon_payment`]: crate::ln::channelmanager::ChannelManager::abandon_payment
     */
    payment_id: Uint8Array;
    /**
     * The hash that was given to [`ChannelManager::send_payment`].
     *
     * [`ChannelManager::send_payment`]: crate::ln::channelmanager::ChannelManager::send_payment
     */
    payment_hash: Uint8Array;
}
/** A Event of type PaymentPathSuccessful */
export declare class Event_PaymentPathSuccessful extends Event {
    /**
     * The id returned by [`ChannelManager::send_payment`] and used with
     * [`ChannelManager::retry_payment`].
     *
     * [`ChannelManager::send_payment`]: crate::ln::channelmanager::ChannelManager::send_payment
     * [`ChannelManager::retry_payment`]: crate::ln::channelmanager::ChannelManager::retry_payment
     */
    payment_id: Uint8Array;
    /**
     * The hash that was given to [`ChannelManager::send_payment`].
     *
     * [`ChannelManager::send_payment`]: crate::ln::channelmanager::ChannelManager::send_payment
     *
     * Note that this (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    payment_hash: Uint8Array;
    /**
     * The payment path that was successful.
     *
     * May contain a closed channel if the HTLC sent along the path was fulfilled on chain.
     */
    path: RouteHop[];
}
/** A Event of type PaymentPathFailed */
export declare class Event_PaymentPathFailed extends Event {
    /**
     * The id returned by [`ChannelManager::send_payment`] and used with
     * [`ChannelManager::retry_payment`] and [`ChannelManager::abandon_payment`].
     *
     * [`ChannelManager::send_payment`]: crate::ln::channelmanager::ChannelManager::send_payment
     * [`ChannelManager::retry_payment`]: crate::ln::channelmanager::ChannelManager::retry_payment
     * [`ChannelManager::abandon_payment`]: crate::ln::channelmanager::ChannelManager::abandon_payment
     *
     * Note that this (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    payment_id: Uint8Array;
    /**
     * The hash that was given to [`ChannelManager::send_payment`].
     *
     * [`ChannelManager::send_payment`]: crate::ln::channelmanager::ChannelManager::send_payment
     */
    payment_hash: Uint8Array;
    /**
     * Indicates the payment was rejected for some reason by the recipient. This implies that
     * the payment has failed, not just the route in question. If this is not set, you may
     * retry the payment via a different route.
     */
    payment_failed_permanently: boolean;
    /**
     * Any failure information conveyed via the Onion return packet by a node along the failed
     * payment route.
     *
     * Should be applied to the [`NetworkGraph`] so that routing decisions can take into
     * account the update.
     *
     * [`NetworkGraph`]: crate::routing::gossip::NetworkGraph
     */
    network_update: Option_NetworkUpdateZ;
    /**
     * For both single-path and multi-path payments, this is set if all paths of the payment have
     * failed. This will be set to false if (1) this is an MPP payment and (2) other parts of the
     * larger MPP payment were still in flight when this event was generated.
     *
     * Note that if you are retrying individual MPP parts, using this value to determine if a
     * payment has fully failed is race-y. Because multiple failures can happen prior to events
     * being processed, you may retry in response to a first failure, with a second failure
     * (with `all_paths_failed` set) still pending. Then, when the second failure is processed
     * you will see `all_paths_failed` set even though the retry of the first failure still
     * has an associated in-flight HTLC. See (1) for an example of such a failure.
     *
     * If you wish to retry individual MPP parts and learn when a payment has failed, you must
     * call [`ChannelManager::abandon_payment`] and wait for a [`Event::PaymentFailed`] event.
     *
     * (1) <https://github.com/lightningdevkit/rust-lightning/issues/1164>
     *
     * [`ChannelManager::abandon_payment`]: crate::ln::channelmanager::ChannelManager::abandon_payment
     */
    all_paths_failed: boolean;
    /**
     * The payment path that failed.
     */
    path: RouteHop[];
    /**
     * The channel responsible for the failed payment path.
     *
     * Note that for route hints or for the first hop in a path this may be an SCID alias and
     * may not refer to a channel in the public network graph. These aliases may also collide
     * with channels in the public network graph.
     *
     * If this is `Some`, then the corresponding channel should be avoided when the payment is
     * retried. May be `None` for older [`Event`] serializations.
     */
    short_channel_id: Option_u64Z;
    /**
     * Parameters needed to compute a new [`Route`] when retrying the failed payment path.
     *
     * See [`find_route`] for details.
     *
     * [`Route`]: crate::routing::router::Route
     * [`find_route`]: crate::routing::router::find_route
     *
     * Note that this (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    retry: RouteParameters;
}
/** A Event of type ProbeSuccessful */
export declare class Event_ProbeSuccessful extends Event {
    /**
     * The id returned by [`ChannelManager::send_probe`].
     *
     * [`ChannelManager::send_probe`]: crate::ln::channelmanager::ChannelManager::send_probe
     */
    payment_id: Uint8Array;
    /**
     * The hash generated by [`ChannelManager::send_probe`].
     *
     * [`ChannelManager::send_probe`]: crate::ln::channelmanager::ChannelManager::send_probe
     */
    payment_hash: Uint8Array;
    /**
     * The payment path that was successful.
     */
    path: RouteHop[];
}
/** A Event of type ProbeFailed */
export declare class Event_ProbeFailed extends Event {
    /**
     * The id returned by [`ChannelManager::send_probe`].
     *
     * [`ChannelManager::send_probe`]: crate::ln::channelmanager::ChannelManager::send_probe
     */
    payment_id: Uint8Array;
    /**
     * The hash generated by [`ChannelManager::send_probe`].
     *
     * [`ChannelManager::send_probe`]: crate::ln::channelmanager::ChannelManager::send_probe
     */
    payment_hash: Uint8Array;
    /**
     * The payment path that failed.
     */
    path: RouteHop[];
    /**
     * The channel responsible for the failed probe.
     *
     * Note that for route hints or for the first hop in a path this may be an SCID alias and
     * may not refer to a channel in the public network graph. These aliases may also collide
     * with channels in the public network graph.
     */
    short_channel_id: Option_u64Z;
}
/** A Event of type PendingHTLCsForwardable */
export declare class Event_PendingHTLCsForwardable extends Event {
    /**
     * The minimum amount of time that should be waited prior to calling
     * process_pending_htlc_forwards. To increase the effort required to correlate payments,
     * you should wait a random amount of time in roughly the range (now + time_forwardable,
     * now + 5*time_forwardable).
     */
    time_forwardable: bigint;
}
/** A Event of type SpendableOutputs */
export declare class Event_SpendableOutputs extends Event {
    /**
     * The outputs which you should store as spendable by you.
     */
    outputs: SpendableOutputDescriptor[];
}
/** A Event of type PaymentForwarded */
export declare class Event_PaymentForwarded extends Event {
    /**
     * The incoming channel between the previous node and us. This is only `None` for events
     * generated or serialized by versions prior to 0.0.107.
     *
     * Note that this (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    prev_channel_id: Uint8Array;
    /**
     * The outgoing channel between the next node and us. This is only `None` for events
     * generated or serialized by versions prior to 0.0.107.
     *
     * Note that this (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    next_channel_id: Uint8Array;
    /**
     * The fee, in milli-satoshis, which was earned as a result of the payment.
     *
     * Note that if we force-closed the channel over which we forwarded an HTLC while the HTLC
     * was pending, the amount the next hop claimed will have been rounded down to the nearest
     * whole satoshi. Thus, the fee calculated here may be higher than expected as we still
     * claimed the full value in millisatoshis from the source. In this case,
     * `claim_from_onchain_tx` will be set.
     *
     * If the channel which sent us the payment has been force-closed, we will claim the funds
     * via an on-chain transaction. In that case we do not yet know the on-chain transaction
     * fees which we will spend and will instead set this to `None`. It is possible duplicate
     * `PaymentForwarded` events are generated for the same payment iff `fee_earned_msat` is
     * `None`.
     */
    fee_earned_msat: Option_u64Z;
    /**
     * If this is `true`, the forwarded HTLC was claimed by our counterparty via an on-chain
     * transaction.
     */
    claim_from_onchain_tx: boolean;
}
/** A Event of type ChannelClosed */
export declare class Event_ChannelClosed extends Event {
    /**
     * The channel_id of the channel which has been closed. Note that on-chain transactions
     * resolving the channel are likely still awaiting confirmation.
     */
    channel_id: Uint8Array;
    /**
     * The `user_channel_id` value passed in to [`ChannelManager::create_channel`] for outbound
     * channels, or to [`ChannelManager::accept_inbound_channel`] for inbound channels if
     * [`UserConfig::manually_accept_inbound_channels`] config flag is set to true. Otherwise
     * `user_channel_id` will be 0 for an inbound channel.
     * This will always be zero for objects serialized with LDK versions prior to 0.0.102.
     *
     * [`ChannelManager::create_channel`]: crate::ln::channelmanager::ChannelManager::create_channel
     * [`ChannelManager::accept_inbound_channel`]: crate::ln::channelmanager::ChannelManager::accept_inbound_channel
     * [`UserConfig::manually_accept_inbound_channels`]: crate::util::config::UserConfig::manually_accept_inbound_channels
     */
    user_channel_id: bigint;
    /**
     * The reason the channel was closed.
     */
    reason: ClosureReason;
}
/** A Event of type DiscardFunding */
export declare class Event_DiscardFunding extends Event {
    /**
     * The channel_id of the channel which has been closed.
     */
    channel_id: Uint8Array;
    /**
     * The full transaction received from the user
     */
    transaction: Uint8Array;
}
/** A Event of type OpenChannelRequest */
export declare class Event_OpenChannelRequest extends Event {
    /**
     * The temporary channel ID of the channel requested to be opened.
     *
     * When responding to the request, the `temporary_channel_id` should be passed
     * back to the ChannelManager through [`ChannelManager::accept_inbound_channel`] to accept,
     * or through [`ChannelManager::force_close_without_broadcasting_txn`] to reject.
     *
     * [`ChannelManager::accept_inbound_channel`]: crate::ln::channelmanager::ChannelManager::accept_inbound_channel
     * [`ChannelManager::force_close_without_broadcasting_txn`]: crate::ln::channelmanager::ChannelManager::force_close_without_broadcasting_txn
     */
    temporary_channel_id: Uint8Array;
    /**
     * The node_id of the counterparty requesting to open the channel.
     *
     * When responding to the request, the `counterparty_node_id` should be passed
     * back to the `ChannelManager` through [`ChannelManager::accept_inbound_channel`] to
     * accept the request, or through [`ChannelManager::force_close_without_broadcasting_txn`] to reject the
     * request.
     *
     * [`ChannelManager::accept_inbound_channel`]: crate::ln::channelmanager::ChannelManager::accept_inbound_channel
     * [`ChannelManager::force_close_without_broadcasting_txn`]: crate::ln::channelmanager::ChannelManager::force_close_without_broadcasting_txn
     */
    counterparty_node_id: Uint8Array;
    /**
     * The channel value of the requested channel.
     */
    funding_satoshis: bigint;
    /**
     * Our starting balance in the channel if the request is accepted, in milli-satoshi.
     */
    push_msat: bigint;
    /**
     * The features that this channel will operate with. If you reject the channel, a
     * well-behaved counterparty may automatically re-attempt the channel with a new set of
     * feature flags.
     *
     * Note that if [`ChannelTypeFeatures::supports_scid_privacy`] returns true on this type,
     * the resulting [`ChannelManager`] will not be readable by versions of LDK prior to
     * 0.0.106.
     *
     * Furthermore, note that if [`ChannelTypeFeatures::supports_zero_conf`] returns true on this type,
     * the resulting [`ChannelManager`] will not be readable by versions of LDK prior to
     * 0.0.107. Channels setting this type also need to get manually accepted via
     * [`crate::ln::channelmanager::ChannelManager::accept_inbound_channel_from_trusted_peer_0conf`],
     * or will be rejected otherwise.
     *
     * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
     */
    channel_type: ChannelTypeFeatures;
}
/** A Event of type HTLCHandlingFailed */
export declare class Event_HTLCHandlingFailed extends Event {
    /**
     * The channel over which the HTLC was received.
     */
    prev_channel_id: Uint8Array;
    /**
     * Destination of the HTLC that failed to be processed.
     */
    failed_next_destination: HTLCDestination;
}
