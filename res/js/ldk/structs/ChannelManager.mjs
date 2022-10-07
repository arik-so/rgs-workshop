import { ChannelDetails } from '../structs/ChannelDetails.mjs';
import { Result_NoneAPIErrorZ } from '../structs/Result_NoneAPIErrorZ.mjs';
import { Result__u832APIErrorZ } from '../structs/Result__u832APIErrorZ.mjs';
import { Result_PaymentIdPaymentSendFailureZ } from '../structs/Result_PaymentIdPaymentSendFailureZ.mjs';
import { Result_NonePaymentSendFailureZ } from '../structs/Result_NonePaymentSendFailureZ.mjs';
import { Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ } from '../structs/Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ.mjs';
import { Result_C2Tuple_PaymentHashPaymentSecretZNoneZ } from '../structs/Result_C2Tuple_PaymentHashPaymentSecretZNoneZ.mjs';
import { Result_C2Tuple_PaymentHashPaymentSecretZAPIErrorZ } from '../structs/Result_C2Tuple_PaymentHashPaymentSecretZAPIErrorZ.mjs';
import { Result_PaymentSecretNoneZ } from '../structs/Result_PaymentSecretNoneZ.mjs';
import { Result_PaymentSecretAPIErrorZ } from '../structs/Result_PaymentSecretAPIErrorZ.mjs';
import { Result_PaymentPreimageAPIErrorZ } from '../structs/Result_PaymentPreimageAPIErrorZ.mjs';
import { PhantomRouteHints } from '../structs/PhantomRouteHints.mjs';
import { MessageSendEventsProvider } from '../structs/MessageSendEventsProvider.mjs';
import { EventsProvider } from '../structs/EventsProvider.mjs';
import { Future } from '../structs/Future.mjs';
import { UserConfig } from '../structs/UserConfig.mjs';
import { BestBlock } from '../structs/BestBlock.mjs';
import { Listen } from '../structs/Listen.mjs';
import { Confirm } from '../structs/Confirm.mjs';
import { ChannelMessageHandler } from '../structs/ChannelMessageHandler.mjs';
import { Payer } from '../structs/Payer.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Manager which keeps track of a number of channels and sends messages to the appropriate
 * channel, also tracking HTLC preimages and forwarding onion packets appropriately.
 *
 * Implements ChannelMessageHandler, handling the multi-channel parts and passing things through
 * to individual Channels.
 *
 * Implements Writeable to write out all channel state to disk. Implies peer_disconnected() for
 * all peers during write/read (though does not modify this instance, only the instance being
 * serialized). This will result in any channels which have not yet exchanged funding_created (ie
 * called funding_transaction_generated for outbound channels).
 *
 * Note that you can be a bit lazier about writing out ChannelManager than you can be with
 * ChannelMonitors. With ChannelMonitors you MUST write each monitor update out to disk before
 * returning from chain::Watch::watch_/update_channel, with ChannelManagers, writing updates
 * happens out-of-band (and will prevent any other ChannelManager operations from occurring during
 * the serialization process). If the deserialized version is out-of-date compared to the
 * ChannelMonitors passed by reference to read(), those channels will be force-closed based on the
 * ChannelMonitor state and no funds will be lost (mod on-chain transaction fees).
 *
 * Note that the deserializer is only implemented for (BlockHash, ChannelManager), which
 * tells you the last block hash which was block_connect()ed. You MUST rescan any blocks along
 * the \"reorg path\" (ie call block_disconnected() until you get to a common block and then call
 * block_connected() to step towards your best block) upon deserialization before using the
 * object!
 *
 * Note that ChannelManager is responsible for tracking liveness of its channels and generating
 * ChannelUpdate messages informing peers that the channel is temporarily disabled. To avoid
 * spam due to quick disconnection/reconnection, updates are not sent until the channel has been
 * offline for a full minute. In order to track this, you must call
 * timer_tick_occurred roughly once per minute, though it doesn't have to be perfect.
 *
 * Rather than using a plain ChannelManager, it is preferable to use either a SimpleArcChannelManager
 * a SimpleRefChannelManager, for conciseness. See their documentation for more details, but
 * essentially you should default to using a SimpleRefChannelManager, and use a
 * SimpleArcChannelManager when you require a ChannelManager with a static lifetime, such as when
 * you're using lightning-net-tokio.
 */
export class ChannelManager extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelManager_free);
    }
    /**
     * Constructs a new ChannelManager to hold several channels and route between them.
     *
     * This is the main \"logic hub\" for all channel-related actions, and implements
     * ChannelMessageHandler.
     *
     * Non-proportional fees are fixed according to our risk using the provided fee estimator.
     *
     * Users need to notify the new ChannelManager when a new block is connected or
     * disconnected using its `block_connected` and `block_disconnected` methods, starting
     * from after `params.latest_hash`.
     */
    static constructor_new(fee_est, chain_monitor, tx_broadcaster, logger, keys_manager, config, params) {
        const ret = bindings.ChannelManager_new(fee_est == null ? 0n : CommonBase.get_ptr_of(fee_est), chain_monitor == null ? 0n : CommonBase.get_ptr_of(chain_monitor), tx_broadcaster == null ? 0n : CommonBase.get_ptr_of(tx_broadcaster), logger == null ? 0n : CommonBase.get_ptr_of(logger), keys_manager == null ? 0n : CommonBase.get_ptr_of(keys_manager), config == null ? 0n : CommonBase.get_ptr_of(config), params == null ? 0n : CommonBase.get_ptr_of(params));
        const ret_hu_conv = new ChannelManager(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, fee_est);
        CommonBase.add_ref_from(ret_hu_conv, chain_monitor);
        CommonBase.add_ref_from(ret_hu_conv, tx_broadcaster);
        CommonBase.add_ref_from(ret_hu_conv, logger);
        CommonBase.add_ref_from(ret_hu_conv, keys_manager);
        CommonBase.add_ref_from(ret_hu_conv, config);
        CommonBase.add_ref_from(ret_hu_conv, params);
        return ret_hu_conv;
    }
    /**
     * Gets the current configuration applied to all new channels.
     */
    get_current_default_configuration() {
        const ret = bindings.ChannelManager_get_current_default_configuration(this.ptr);
        const ret_hu_conv = new UserConfig(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Creates a new outbound channel to the given remote node and with the given value.
     *
     * `user_channel_id` will be provided back as in
     * [`Event::FundingGenerationReady::user_channel_id`] to allow tracking of which events
     * correspond with which `create_channel` call. Note that the `user_channel_id` defaults to 0
     * for inbound channels, so you may wish to avoid using 0 for `user_channel_id` here.
     * `user_channel_id` has no meaning inside of LDK, it is simply copied to events and otherwise
     * ignored.
     *
     * Raises [`APIError::APIMisuseError`] when `channel_value_satoshis` > 2**24 or `push_msat` is
     * greater than `channel_value_satoshis * 1k` or `channel_value_satoshis < 1000`.
     *
     * Note that we do not check if you are currently connected to the given peer. If no
     * connection is available, the outbound `open_channel` message may fail to send, resulting in
     * the channel eventually being silently forgotten (dropped on reload).
     *
     * Returns the new Channel's temporary `channel_id`. This ID will appear as
     * [`Event::FundingGenerationReady::temporary_channel_id`] and in
     * [`ChannelDetails::channel_id`] until after
     * [`ChannelManager::funding_transaction_generated`] is called, swapping the Channel's ID for
     * one derived from the funding transaction's TXID. If the counterparty rejects the channel
     * immediately, this temporary ID will appear in [`Event::ChannelClosed::channel_id`].
     *
     * [`Event::FundingGenerationReady::user_channel_id`]: events::Event::FundingGenerationReady::user_channel_id
     * [`Event::FundingGenerationReady::temporary_channel_id`]: events::Event::FundingGenerationReady::temporary_channel_id
     * [`Event::ChannelClosed::channel_id`]: events::Event::ChannelClosed::channel_id
     *
     * Note that override_config (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    create_channel(their_network_key, channel_value_satoshis, push_msat, user_channel_id, override_config) {
        const ret = bindings.ChannelManager_create_channel(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_network_key, 33)), channel_value_satoshis, push_msat, user_channel_id, override_config == null ? 0n : CommonBase.get_ptr_of(override_config));
        const ret_hu_conv = Result__u832APIErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, override_config);
        return ret_hu_conv;
    }
    /**
     * Gets the list of open channels, in random order. See ChannelDetail field documentation for
     * more information.
     */
    list_channels() {
        const ret = bindings.ChannelManager_list_channels(this.ptr);
        const ret_conv_16_len = bindings.getArrayLength(ret);
        const ret_conv_16_arr = new Array(ret_conv_16_len).fill(null);
        for (var q = 0; q < ret_conv_16_len; q++) {
            const ret_conv_16 = bindings.getU64ArrayElem(ret, q);
            const ret_conv_16_hu_conv = new ChannelDetails(null, ret_conv_16);
            CommonBase.add_ref_from(ret_conv_16_hu_conv, this);
            ret_conv_16_arr[q] = ret_conv_16_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_16_arr;
    }
    /**
     * Gets the list of usable channels, in random order. Useful as an argument to [`find_route`]
     * to ensure non-announced channels are used.
     *
     * These are guaranteed to have their [`ChannelDetails::is_usable`] value set to true, see the
     * documentation for [`ChannelDetails::is_usable`] for more info on exactly what the criteria
     * are.
     *
     * [`find_route`]: crate::routing::router::find_route
     */
    list_usable_channels() {
        const ret = bindings.ChannelManager_list_usable_channels(this.ptr);
        const ret_conv_16_len = bindings.getArrayLength(ret);
        const ret_conv_16_arr = new Array(ret_conv_16_len).fill(null);
        for (var q = 0; q < ret_conv_16_len; q++) {
            const ret_conv_16 = bindings.getU64ArrayElem(ret, q);
            const ret_conv_16_hu_conv = new ChannelDetails(null, ret_conv_16);
            CommonBase.add_ref_from(ret_conv_16_hu_conv, this);
            ret_conv_16_arr[q] = ret_conv_16_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_16_arr;
    }
    /**
     * Begins the process of closing a channel. After this call (plus some timeout), no new HTLCs
     * will be accepted on the given channel, and after additional timeout/the closing of all
     * pending HTLCs, the channel will be closed on chain.
     *
     * If we are the channel initiator, we will pay between our [`Background`] and
     * [`ChannelConfig::force_close_avoidance_max_fee_satoshis`] plus our [`Normal`] fee
     * estimate.
     * If our counterparty is the channel initiator, we will require a channel closing
     * transaction feerate of at least our [`Background`] feerate or the feerate which
     * would appear on a force-closure transaction, whichever is lower. We will allow our
     * counterparty to pay as much fee as they'd like, however.
     *
     * May generate a SendShutdown message event on success, which should be relayed.
     *
     * [`ChannelConfig::force_close_avoidance_max_fee_satoshis`]: crate::util::config::ChannelConfig::force_close_avoidance_max_fee_satoshis
     * [`Background`]: crate::chain::chaininterface::ConfirmationTarget::Background
     * [`Normal`]: crate::chain::chaininterface::ConfirmationTarget::Normal
     */
    close_channel(channel_id, counterparty_node_id) {
        const ret = bindings.ChannelManager_close_channel(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(channel_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(counterparty_node_id, 33)));
        const ret_hu_conv = Result_NoneAPIErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Begins the process of closing a channel. After this call (plus some timeout), no new HTLCs
     * will be accepted on the given channel, and after additional timeout/the closing of all
     * pending HTLCs, the channel will be closed on chain.
     *
     * `target_feerate_sat_per_1000_weight` has different meanings depending on if we initiated
     * the channel being closed or not:
     * If we are the channel initiator, we will pay at least this feerate on the closing
     * transaction. The upper-bound is set by
     * [`ChannelConfig::force_close_avoidance_max_fee_satoshis`] plus our [`Normal`] fee
     * estimate (or `target_feerate_sat_per_1000_weight`, if it is greater).
     * If our counterparty is the channel initiator, we will refuse to accept a channel closure
     * transaction feerate below `target_feerate_sat_per_1000_weight` (or the feerate which
     * will appear on a force-closure transaction, whichever is lower).
     *
     * May generate a SendShutdown message event on success, which should be relayed.
     *
     * [`ChannelConfig::force_close_avoidance_max_fee_satoshis`]: crate::util::config::ChannelConfig::force_close_avoidance_max_fee_satoshis
     * [`Background`]: crate::chain::chaininterface::ConfirmationTarget::Background
     * [`Normal`]: crate::chain::chaininterface::ConfirmationTarget::Normal
     */
    close_channel_with_target_feerate(channel_id, counterparty_node_id, target_feerate_sats_per_1000_weight) {
        const ret = bindings.ChannelManager_close_channel_with_target_feerate(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(channel_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(counterparty_node_id, 33)), target_feerate_sats_per_1000_weight);
        const ret_hu_conv = Result_NoneAPIErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Force closes a channel, immediately broadcasting the latest local transaction(s) and
     * rejecting new HTLCs on the given channel. Fails if `channel_id` is unknown to
     * the manager, or if the `counterparty_node_id` isn't the counterparty of the corresponding
     * channel.
     */
    force_close_broadcasting_latest_txn(channel_id, counterparty_node_id) {
        const ret = bindings.ChannelManager_force_close_broadcasting_latest_txn(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(channel_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(counterparty_node_id, 33)));
        const ret_hu_conv = Result_NoneAPIErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Force closes a channel, rejecting new HTLCs on the given channel but skips broadcasting
     * the latest local transaction(s). Fails if `channel_id` is unknown to the manager, or if the
     * `counterparty_node_id` isn't the counterparty of the corresponding channel.
     *
     * You can always get the latest local transaction(s) to broadcast from
     * [`ChannelMonitor::get_latest_holder_commitment_txn`].
     */
    force_close_without_broadcasting_txn(channel_id, counterparty_node_id) {
        const ret = bindings.ChannelManager_force_close_without_broadcasting_txn(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(channel_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(counterparty_node_id, 33)));
        const ret_hu_conv = Result_NoneAPIErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Force close all channels, immediately broadcasting the latest local commitment transaction
     * for each to the chain and rejecting new HTLCs on each.
     */
    force_close_all_channels_broadcasting_latest_txn() {
        bindings.ChannelManager_force_close_all_channels_broadcasting_latest_txn(this.ptr);
    }
    /**
     * Force close all channels rejecting new HTLCs on each but without broadcasting the latest
     * local transaction(s).
     */
    force_close_all_channels_without_broadcasting_txn() {
        bindings.ChannelManager_force_close_all_channels_without_broadcasting_txn(this.ptr);
    }
    /**
     * Sends a payment along a given route.
     *
     * Value parameters are provided via the last hop in route, see documentation for RouteHop
     * fields for more info.
     *
     * Note that if the payment_hash already exists elsewhere (eg you're sending a duplicative
     * payment), we don't do anything to stop you! We always try to ensure that if the provided
     * next hop knows the preimage to payment_hash they can claim an additional amount as
     * specified in the last hop in the route! Thus, you should probably do your own
     * payment_preimage tracking (which you should already be doing as they represent \"proof of
     * payment\") and prevent double-sends yourself.
     *
     * May generate SendHTLCs message(s) event on success, which should be relayed.
     *
     * Each path may have a different return value, and PaymentSendValue may return a Vec with
     * each entry matching the corresponding-index entry in the route paths, see
     * PaymentSendFailure for more info.
     *
     * In general, a path may raise:
     * APIError::RouteError when an invalid route or forwarding parameter (cltv_delta, fee,
     * node public key) is specified.
     * APIError::ChannelUnavailable if the next-hop channel is not available for updates
     * (including due to previous monitor update failure or new permanent monitor update
     * failure).
     * APIError::MonitorUpdateFailed if a new monitor update failure prevented sending the
     * relevant updates.
     *
     * Note that depending on the type of the PaymentSendFailure the HTLC may have been
     * irrevocably committed to on our end. In such a case, do NOT retry the payment with a
     * different route unless you intend to pay twice!
     *
     * payment_secret is unrelated to payment_hash (or PaymentPreimage) and exists to authenticate
     * the sender to the recipient and prevent payment-probing (deanonymization) attacks. For
     * newer nodes, it will be provided to you in the invoice. If you do not have one, the Route
     * must not contain multiple paths as multi-path payments require a recipient-provided
     * payment_secret.
     * If a payment_secret *is* provided, we assume that the invoice had the payment_secret feature
     * bit set (either as required or as available). If multiple paths are present in the Route,
     * we assume the invoice had the basic_mpp feature set.
     *
     * Note that payment_secret (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    send_payment(route, payment_hash, payment_secret) {
        const ret = bindings.ChannelManager_send_payment(this.ptr, route == null ? 0n : CommonBase.get_ptr_of(route), bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)), bindings.encodeUint8Array(bindings.check_arr_len(payment_secret, 32)));
        const ret_hu_conv = Result_PaymentIdPaymentSendFailureZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, route);
        return ret_hu_conv;
    }
    /**
     * Retries a payment along the given [`Route`].
     *
     * Errors returned are a superset of those returned from [`send_payment`], so see
     * [`send_payment`] documentation for more details on errors. This method will also error if the
     * retry amount puts the payment more than 10% over the payment's total amount, if the payment
     * for the given `payment_id` cannot be found (likely due to timeout or success), or if
     * further retries have been disabled with [`abandon_payment`].
     *
     * [`send_payment`]: [`ChannelManager::send_payment`]
     * [`abandon_payment`]: [`ChannelManager::abandon_payment`]
     */
    retry_payment(route, payment_id) {
        const ret = bindings.ChannelManager_retry_payment(this.ptr, route == null ? 0n : CommonBase.get_ptr_of(route), bindings.encodeUint8Array(bindings.check_arr_len(payment_id, 32)));
        const ret_hu_conv = Result_NonePaymentSendFailureZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, route);
        return ret_hu_conv;
    }
    /**
     * Signals that no further retries for the given payment will occur.
     *
     * After this method returns, any future calls to [`retry_payment`] for the given `payment_id`
     * will fail with [`PaymentSendFailure::ParameterError`]. If no such event has been generated,
     * an [`Event::PaymentFailed`] event will be generated as soon as there are no remaining
     * pending HTLCs for this payment.
     *
     * Note that calling this method does *not* prevent a payment from succeeding. You must still
     * wait until you receive either a [`Event::PaymentFailed`] or [`Event::PaymentSent`] event to
     * determine the ultimate status of a payment.
     *
     * [`retry_payment`]: Self::retry_payment
     * [`Event::PaymentFailed`]: events::Event::PaymentFailed
     * [`Event::PaymentSent`]: events::Event::PaymentSent
     */
    abandon_payment(payment_id) {
        bindings.ChannelManager_abandon_payment(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(payment_id, 32)));
    }
    /**
     * Send a spontaneous payment, which is a payment that does not require the recipient to have
     * generated an invoice. Optionally, you may specify the preimage. If you do choose to specify
     * the preimage, it must be a cryptographically secure random value that no intermediate node
     * would be able to guess -- otherwise, an intermediate node may claim the payment and it will
     * never reach the recipient.
     *
     * See [`send_payment`] documentation for more details on the return value of this function.
     *
     * Similar to regular payments, you MUST NOT reuse a `payment_preimage` value. See
     * [`send_payment`] for more information about the risks of duplicate preimage usage.
     *
     * Note that `route` must have exactly one path.
     *
     * [`send_payment`]: Self::send_payment
     *
     * Note that payment_preimage (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    send_spontaneous_payment(route, payment_preimage) {
        const ret = bindings.ChannelManager_send_spontaneous_payment(this.ptr, route == null ? 0n : CommonBase.get_ptr_of(route), bindings.encodeUint8Array(bindings.check_arr_len(payment_preimage, 32)));
        const ret_hu_conv = Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, route);
        return ret_hu_conv;
    }
    /**
     * Send a payment that is probing the given route for liquidity. We calculate the
     * [`PaymentHash`] of probes based on a static secret and a random [`PaymentId`], which allows
     * us to easily discern them from real payments.
     */
    send_probe(hops) {
        const ret = bindings.ChannelManager_send_probe(this.ptr, bindings.encodeUint64Array(hops != null ? hops.map(hops_conv_10 => hops_conv_10 == null ? 0n : CommonBase.get_ptr_of(hops_conv_10)) : null));
        const ret_hu_conv = Result_C2Tuple_PaymentHashPaymentIdZPaymentSendFailureZ.constr_from_ptr(ret);
        hops.forEach((hops_conv_10) => { CommonBase.add_ref_from(this, hops_conv_10); });
        return ret_hu_conv;
    }
    /**
     * Call this upon creation of a funding transaction for the given channel.
     *
     * Returns an [`APIError::APIMisuseError`] if the funding_transaction spent non-SegWit outputs
     * or if no output was found which matches the parameters in [`Event::FundingGenerationReady`].
     *
     * Returns [`APIError::APIMisuseError`] if the funding transaction is not final for propagation
     * across the p2p network.
     *
     * Returns [`APIError::ChannelUnavailable`] if a funding transaction has already been provided
     * for the channel or if the channel has been closed as indicated by [`Event::ChannelClosed`].
     *
     * May panic if the output found in the funding transaction is duplicative with some other
     * channel (note that this should be trivially prevented by using unique funding transaction
     * keys per-channel).
     *
     * Do NOT broadcast the funding transaction yourself. When we have safely received our
     * counterparty's signature the funding transaction will automatically be broadcast via the
     * [`BroadcasterInterface`] provided when this `ChannelManager` was constructed.
     *
     * Note that this includes RBF or similar transaction replacement strategies - lightning does
     * not currently support replacing a funding transaction on an existing channel. Instead,
     * create a new channel with a conflicting funding transaction.
     *
     * Note to keep the miner incentives aligned in moving the blockchain forward, we recommend
     * the wallet software generating the funding transaction to apply anti-fee sniping as
     * implemented by Bitcoin Core wallet. See <https://bitcoinops.org/en/topics/fee-sniping/>
     * for more details.
     *
     * [`Event::FundingGenerationReady`]: crate::util::events::Event::FundingGenerationReady
     * [`Event::ChannelClosed`]: crate::util::events::Event::ChannelClosed
     */
    funding_transaction_generated(temporary_channel_id, counterparty_node_id, funding_transaction) {
        const ret = bindings.ChannelManager_funding_transaction_generated(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(temporary_channel_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(counterparty_node_id, 33)), bindings.encodeUint8Array(funding_transaction));
        const ret_hu_conv = Result_NoneAPIErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Atomically updates the [`ChannelConfig`] for the given channels.
     *
     * Once the updates are applied, each eligible channel (advertised with a known short channel
     * ID and a change in [`forwarding_fee_proportional_millionths`], [`forwarding_fee_base_msat`],
     * or [`cltv_expiry_delta`]) has a [`BroadcastChannelUpdate`] event message generated
     * containing the new [`ChannelUpdate`] message which should be broadcast to the network.
     *
     * Returns [`ChannelUnavailable`] when a channel is not found or an incorrect
     * `counterparty_node_id` is provided.
     *
     * Returns [`APIMisuseError`] when a [`cltv_expiry_delta`] update is to be applied with a value
     * below [`MIN_CLTV_EXPIRY_DELTA`].
     *
     * If an error is returned, none of the updates should be considered applied.
     *
     * [`forwarding_fee_proportional_millionths`]: ChannelConfig::forwarding_fee_proportional_millionths
     * [`forwarding_fee_base_msat`]: ChannelConfig::forwarding_fee_base_msat
     * [`cltv_expiry_delta`]: ChannelConfig::cltv_expiry_delta
     * [`BroadcastChannelUpdate`]: events::MessageSendEvent::BroadcastChannelUpdate
     * [`ChannelUpdate`]: msgs::ChannelUpdate
     * [`ChannelUnavailable`]: APIError::ChannelUnavailable
     * [`APIMisuseError`]: APIError::APIMisuseError
     */
    update_channel_config(counterparty_node_id, channel_ids, config) {
        const ret = bindings.ChannelManager_update_channel_config(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(counterparty_node_id, 33)), bindings.encodeUint32Array(channel_ids != null ? channel_ids.map(channel_ids_conv_12 => bindings.encodeUint8Array(bindings.check_arr_len(channel_ids_conv_12, 32))) : null), config == null ? 0n : CommonBase.get_ptr_of(config));
        const ret_hu_conv = Result_NoneAPIErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, config);
        return ret_hu_conv;
    }
    /**
     * Processes HTLCs which are pending waiting on random forward delay.
     *
     * Should only really ever be called in response to a PendingHTLCsForwardable event.
     * Will likely generate further events.
     */
    process_pending_htlc_forwards() {
        bindings.ChannelManager_process_pending_htlc_forwards(this.ptr);
    }
    /**
     * Performs actions which should happen on startup and roughly once per minute thereafter.
     *
     * This currently includes:
     * Increasing or decreasing the on-chain feerate estimates for our outbound channels,
     * Broadcasting `ChannelUpdate` messages if we've been disconnected from our peer for more
     * than a minute, informing the network that they should no longer attempt to route over
     * the channel.
     * Expiring a channel's previous `ChannelConfig` if necessary to only allow forwarding HTLCs
     * with the current `ChannelConfig`.
     *
     * Note that this may cause reentrancy through `chain::Watch::update_channel` calls or feerate
     * estimate fetches.
     */
    timer_tick_occurred() {
        bindings.ChannelManager_timer_tick_occurred(this.ptr);
    }
    /**
     * Indicates that the preimage for payment_hash is unknown or the received amount is incorrect
     * after a PaymentReceived event, failing the HTLC back to its origin and freeing resources
     * along the path (including in our own channel on which we received it).
     *
     * Note that in some cases around unclean shutdown, it is possible the payment may have
     * already been claimed by you via [`ChannelManager::claim_funds`] prior to you seeing (a
     * second copy of) the [`events::Event::PaymentReceived`] event. Alternatively, the payment
     * may have already been failed automatically by LDK if it was nearing its expiration time.
     *
     * While LDK will never claim a payment automatically on your behalf (i.e. without you calling
     * [`ChannelManager::claim_funds`]), you should still monitor for
     * [`events::Event::PaymentClaimed`] events even for payments you intend to fail, especially on
     * startup during which time claims that were in-progress at shutdown may be replayed.
     */
    fail_htlc_backwards(payment_hash) {
        bindings.ChannelManager_fail_htlc_backwards(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)));
    }
    /**
     * Provides a payment preimage in response to [`Event::PaymentReceived`], generating any
     * [`MessageSendEvent`]s needed to claim the payment.
     *
     * Note that calling this method does *not* guarantee that the payment has been claimed. You
     * must* wait for an [`Event::PaymentClaimed`] event which upon a successful claim will be
     * provided to your [`EventHandler`] when [`process_pending_events`] is next called.
     *
     * Note that if you did not set an `amount_msat` when calling [`create_inbound_payment`] or
     * [`create_inbound_payment_for_hash`] you must check that the amount in the `PaymentReceived`
     * event matches your expectation. If you fail to do so and call this method, you may provide
     * the sender \"proof-of-payment\" when they did not fulfill the full expected payment.
     *
     * [`Event::PaymentReceived`]: crate::util::events::Event::PaymentReceived
     * [`Event::PaymentClaimed`]: crate::util::events::Event::PaymentClaimed
     * [`process_pending_events`]: EventsProvider::process_pending_events
     * [`create_inbound_payment`]: Self::create_inbound_payment
     * [`create_inbound_payment_for_hash`]: Self::create_inbound_payment_for_hash
     * [`get_and_clear_pending_msg_events`]: MessageSendEventsProvider::get_and_clear_pending_msg_events
     */
    claim_funds(payment_preimage) {
        bindings.ChannelManager_claim_funds(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(payment_preimage, 32)));
    }
    /**
     * Gets the node_id held by this ChannelManager
     */
    get_our_node_id() {
        const ret = bindings.ChannelManager_get_our_node_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Accepts a request to open a channel after a [`Event::OpenChannelRequest`].
     *
     * The `temporary_channel_id` parameter indicates which inbound channel should be accepted,
     * and the `counterparty_node_id` parameter is the id of the peer which has requested to open
     * the channel.
     *
     * The `user_channel_id` parameter will be provided back in
     * [`Event::ChannelClosed::user_channel_id`] to allow tracking of which events correspond
     * with which `accept_inbound_channel`/`accept_inbound_channel_from_trusted_peer_0conf` call.
     *
     * Note that this method will return an error and reject the channel, if it requires support
     * for zero confirmations. Instead, `accept_inbound_channel_from_trusted_peer_0conf` must be
     * used to accept such channels.
     *
     * [`Event::OpenChannelRequest`]: events::Event::OpenChannelRequest
     * [`Event::ChannelClosed::user_channel_id`]: events::Event::ChannelClosed::user_channel_id
     */
    accept_inbound_channel(temporary_channel_id, counterparty_node_id, user_channel_id) {
        const ret = bindings.ChannelManager_accept_inbound_channel(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(temporary_channel_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(counterparty_node_id, 33)), user_channel_id);
        const ret_hu_conv = Result_NoneAPIErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Accepts a request to open a channel after a [`events::Event::OpenChannelRequest`], treating
     * it as confirmed immediately.
     *
     * The `user_channel_id` parameter will be provided back in
     * [`Event::ChannelClosed::user_channel_id`] to allow tracking of which events correspond
     * with which `accept_inbound_channel`/`accept_inbound_channel_from_trusted_peer_0conf` call.
     *
     * Unlike [`ChannelManager::accept_inbound_channel`], this method accepts the incoming channel
     * and (if the counterparty agrees), enables forwarding of payments immediately.
     *
     * This fully trusts that the counterparty has honestly and correctly constructed the funding
     * transaction and blindly assumes that it will eventually confirm.
     *
     * If it does not confirm before we decide to close the channel, or if the funding transaction
     * does not pay to the correct script the correct amount, *you will lose funds*.
     *
     * [`Event::OpenChannelRequest`]: events::Event::OpenChannelRequest
     * [`Event::ChannelClosed::user_channel_id`]: events::Event::ChannelClosed::user_channel_id
     */
    accept_inbound_channel_from_trusted_peer_0conf(temporary_channel_id, counterparty_node_id, user_channel_id) {
        const ret = bindings.ChannelManager_accept_inbound_channel_from_trusted_peer_0conf(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(temporary_channel_id, 32)), bindings.encodeUint8Array(bindings.check_arr_len(counterparty_node_id, 33)), user_channel_id);
        const ret_hu_conv = Result_NoneAPIErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Gets a payment secret and payment hash for use in an invoice given to a third party wishing
     * to pay us.
     *
     * This differs from [`create_inbound_payment_for_hash`] only in that it generates the
     * [`PaymentHash`] and [`PaymentPreimage`] for you.
     *
     * The [`PaymentPreimage`] will ultimately be returned to you in the [`PaymentReceived`], which
     * will have the [`PaymentReceived::payment_preimage`] field filled in. That should then be
     * passed directly to [`claim_funds`].
     *
     * See [`create_inbound_payment_for_hash`] for detailed documentation on behavior and requirements.
     *
     * Note that a malicious eavesdropper can intuit whether an inbound payment was created by
     * `create_inbound_payment` or `create_inbound_payment_for_hash` based on runtime.
     *
     * # Note
     *
     * If you register an inbound payment with this method, then serialize the `ChannelManager`, then
     * deserialize it with a node running 0.0.103 and earlier, the payment will fail to be received.
     *
     * Errors if `min_value_msat` is greater than total bitcoin supply.
     *
     * [`claim_funds`]: Self::claim_funds
     * [`PaymentReceived`]: events::Event::PaymentReceived
     * [`PaymentReceived::payment_preimage`]: events::Event::PaymentReceived::payment_preimage
     * [`create_inbound_payment_for_hash`]: Self::create_inbound_payment_for_hash
     */
    create_inbound_payment(min_value_msat, invoice_expiry_delta_secs) {
        const ret = bindings.ChannelManager_create_inbound_payment(this.ptr, CommonBase.get_ptr_of(min_value_msat), invoice_expiry_delta_secs);
        const ret_hu_conv = Result_C2Tuple_PaymentHashPaymentSecretZNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Legacy version of [`create_inbound_payment`]. Use this method if you wish to share
     * serialized state with LDK node(s) running 0.0.103 and earlier.
     *
     * May panic if `invoice_expiry_delta_secs` is greater than one year.
     *
     * # Note
     * This method is deprecated and will be removed soon.
     *
     * [`create_inbound_payment`]: Self::create_inbound_payment
     */
    create_inbound_payment_legacy(min_value_msat, invoice_expiry_delta_secs) {
        const ret = bindings.ChannelManager_create_inbound_payment_legacy(this.ptr, CommonBase.get_ptr_of(min_value_msat), invoice_expiry_delta_secs);
        const ret_hu_conv = Result_C2Tuple_PaymentHashPaymentSecretZAPIErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Gets a [`PaymentSecret`] for a given [`PaymentHash`], for which the payment preimage is
     * stored external to LDK.
     *
     * A [`PaymentReceived`] event will only be generated if the [`PaymentSecret`] matches a
     * payment secret fetched via this method or [`create_inbound_payment`], and which is at least
     * the `min_value_msat` provided here, if one is provided.
     *
     * The [`PaymentHash`] (and corresponding [`PaymentPreimage`]) should be globally unique, though
     * note that LDK will not stop you from registering duplicate payment hashes for inbound
     * payments.
     *
     * `min_value_msat` should be set if the invoice being generated contains a value. Any payment
     * received for the returned [`PaymentHash`] will be required to be at least `min_value_msat`
     * before a [`PaymentReceived`] event will be generated, ensuring that we do not provide the
     * sender \"proof-of-payment\" unless they have paid the required amount.
     *
     * `invoice_expiry_delta_secs` describes the number of seconds that the invoice is valid for
     * in excess of the current time. This should roughly match the expiry time set in the invoice.
     * After this many seconds, we will remove the inbound payment, resulting in any attempts to
     * pay the invoice failing. The BOLT spec suggests 3,600 secs as a default validity time for
     * invoices when no timeout is set.
     *
     * Note that we use block header time to time-out pending inbound payments (with some margin
     * to compensate for the inaccuracy of block header timestamps). Thus, in practice we will
     * accept a payment and generate a [`PaymentReceived`] event for some time after the expiry.
     * If you need exact expiry semantics, you should enforce them upon receipt of
     * [`PaymentReceived`].
     *
     * Note that invoices generated for inbound payments should have their `min_final_cltv_expiry`
     * set to at least [`MIN_FINAL_CLTV_EXPIRY`].
     *
     * Note that a malicious eavesdropper can intuit whether an inbound payment was created by
     * `create_inbound_payment` or `create_inbound_payment_for_hash` based on runtime.
     *
     * # Note
     *
     * If you register an inbound payment with this method, then serialize the `ChannelManager`, then
     * deserialize it with a node running 0.0.103 and earlier, the payment will fail to be received.
     *
     * Errors if `min_value_msat` is greater than total bitcoin supply.
     *
     * [`create_inbound_payment`]: Self::create_inbound_payment
     * [`PaymentReceived`]: events::Event::PaymentReceived
     */
    create_inbound_payment_for_hash(payment_hash, min_value_msat, invoice_expiry_delta_secs) {
        const ret = bindings.ChannelManager_create_inbound_payment_for_hash(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)), CommonBase.get_ptr_of(min_value_msat), invoice_expiry_delta_secs);
        const ret_hu_conv = Result_PaymentSecretNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Legacy version of [`create_inbound_payment_for_hash`]. Use this method if you wish to share
     * serialized state with LDK node(s) running 0.0.103 and earlier.
     *
     * May panic if `invoice_expiry_delta_secs` is greater than one year.
     *
     * # Note
     * This method is deprecated and will be removed soon.
     *
     * [`create_inbound_payment_for_hash`]: Self::create_inbound_payment_for_hash
     */
    create_inbound_payment_for_hash_legacy(payment_hash, min_value_msat, invoice_expiry_delta_secs) {
        const ret = bindings.ChannelManager_create_inbound_payment_for_hash_legacy(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)), CommonBase.get_ptr_of(min_value_msat), invoice_expiry_delta_secs);
        const ret_hu_conv = Result_PaymentSecretAPIErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Gets an LDK-generated payment preimage from a payment hash and payment secret that were
     * previously returned from [`create_inbound_payment`].
     *
     * [`create_inbound_payment`]: Self::create_inbound_payment
     */
    get_payment_preimage(payment_hash, payment_secret) {
        const ret = bindings.ChannelManager_get_payment_preimage(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)), bindings.encodeUint8Array(bindings.check_arr_len(payment_secret, 32)));
        const ret_hu_conv = Result_PaymentPreimageAPIErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Gets a fake short channel id for use in receiving [phantom node payments]. These fake scids
     * are used when constructing the phantom invoice's route hints.
     *
     * [phantom node payments]: crate::chain::keysinterface::PhantomKeysManager
     */
    get_phantom_scid() {
        const ret = bindings.ChannelManager_get_phantom_scid(this.ptr);
        return ret;
    }
    /**
     * Gets route hints for use in receiving [phantom node payments].
     *
     * [phantom node payments]: crate::chain::keysinterface::PhantomKeysManager
     */
    get_phantom_route_hints() {
        const ret = bindings.ChannelManager_get_phantom_route_hints(this.ptr);
        const ret_hu_conv = new PhantomRouteHints(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new MessageSendEventsProvider which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned MessageSendEventsProvider must be freed before this_arg is
     */
    as_MessageSendEventsProvider() {
        const ret = bindings.ChannelManager_as_MessageSendEventsProvider(this.ptr);
        const ret_hu_conv = new MessageSendEventsProvider(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new EventsProvider which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned EventsProvider must be freed before this_arg is
     */
    as_EventsProvider() {
        const ret = bindings.ChannelManager_as_EventsProvider(this.ptr);
        const ret_hu_conv = new EventsProvider(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new Listen which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Listen must be freed before this_arg is
     */
    as_Listen() {
        const ret = bindings.ChannelManager_as_Listen(this.ptr);
        const ret_hu_conv = new Listen(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new Confirm which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Confirm must be freed before this_arg is
     */
    as_Confirm() {
        const ret = bindings.ChannelManager_as_Confirm(this.ptr);
        const ret_hu_conv = new Confirm(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Blocks until ChannelManager needs to be persisted. Only one listener on
     * `await_persistable_update` or `await_persistable_update_timeout` is guaranteed to be woken
     * up.
     */
    await_persistable_update() {
        bindings.ChannelManager_await_persistable_update(this.ptr);
    }
    /**
     * Gets a [`Future`] that completes when a persistable update is available. Note that
     * callbacks registered on the [`Future`] MUST NOT call back into this [`ChannelManager`] and
     * should instead register actions to be taken later.
     */
    get_persistable_update_future() {
        const ret = bindings.ChannelManager_get_persistable_update_future(this.ptr);
        const ret_hu_conv = new Future(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Gets the latest best block which was connected either via the [`chain::Listen`] or
     * [`chain::Confirm`] interfaces.
     */
    current_best_block() {
        const ret = bindings.ChannelManager_current_best_block(this.ptr);
        const ret_hu_conv = new BestBlock(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new ChannelMessageHandler which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned ChannelMessageHandler must be freed before this_arg is
     */
    as_ChannelMessageHandler() {
        const ret = bindings.ChannelManager_as_ChannelMessageHandler(this.ptr);
        const ret_hu_conv = new ChannelMessageHandler(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ChannelManager object into a byte array which can be read by ChannelManager_read
     */
    write() {
        const ret = bindings.ChannelManager_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Constructs a new Payer which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Payer must be freed before this_arg is
     */
    as_Payer() {
        const ret = bindings.ChannelManager_as_Payer(this.ptr);
        const ret_hu_conv = new Payer(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChannelManager.mjs.map