import { Result_SecretKeyErrorZ } from '../structs/Result_SecretKeyErrorZ.mjs';
import { Result_PublicKeyErrorZ } from '../structs/Result_PublicKeyErrorZ.mjs';
import { Result_RouteLightningErrorZ } from '../structs/Result_RouteLightningErrorZ.mjs';
import { Result_COption_ClosureReasonZDecodeErrorZ } from '../structs/Result_COption_ClosureReasonZDecodeErrorZ.mjs';
import { Result_COption_HTLCDestinationZDecodeErrorZ } from '../structs/Result_COption_HTLCDestinationZDecodeErrorZ.mjs';
import { Result_COption_EventZDecodeErrorZ } from '../structs/Result_COption_EventZDecodeErrorZ.mjs';
import { Result_COption_NetworkUpdateZDecodeErrorZ } from '../structs/Result_COption_NetworkUpdateZDecodeErrorZ.mjs';
import { Result_C2Tuple_PaymentHashPaymentSecretZNoneZ } from '../structs/Result_C2Tuple_PaymentHashPaymentSecretZNoneZ.mjs';
import { Result_PaymentSecretNoneZ } from '../structs/Result_PaymentSecretNoneZ.mjs';
import { Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ } from '../structs/Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ.mjs';
import { Result_StringErrorZ } from '../structs/Result_StringErrorZ.mjs';
import { Result_COption_MonitorEventZDecodeErrorZ } from '../structs/Result_COption_MonitorEventZDecodeErrorZ.mjs';
import { Result_C2Tuple_BlockHashChannelMonitorZDecodeErrorZ } from '../structs/Result_C2Tuple_BlockHashChannelMonitorZDecodeErrorZ.mjs';
import { Result_InvoiceSignOrCreationErrorZ } from '../structs/Result_InvoiceSignOrCreationErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class UtilMethods extends CommonBase {
    /**
     * Constructs a new COption_NoneZ containing a
     */
    static constructor_COption_NoneZ_some() {
        const ret = bindings.COption_NoneZ_some();
        return ret;
    }
    /**
     * Constructs a new COption_NoneZ containing nothing
     */
    static constructor_COption_NoneZ_none() {
        const ret = bindings.COption_NoneZ_none();
        return ret;
    }
    /**
     * Read a ClosureReason from a byte array, created by ClosureReason_write
     */
    static constructor_ClosureReason_read(ser) {
        const ret = bindings.ClosureReason_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_COption_ClosureReasonZDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Read a HTLCDestination from a byte array, created by HTLCDestination_write
     */
    static constructor_HTLCDestination_read(ser) {
        const ret = bindings.HTLCDestination_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_COption_HTLCDestinationZDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Read a Event from a byte array, created by Event_write
     */
    static constructor_Event_read(ser) {
        const ret = bindings.Event_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_COption_EventZDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Creates a digital signature of a message given a SecretKey, like the node's secret.
     * A receiver knowing the PublicKey (e.g. the node's id) and the message can be sure that the signature was generated by the caller.
     * Signatures are EC recoverable, meaning that given the message and the signature the PublicKey of the signer can be extracted.
     */
    static constructor_sign(msg, sk) {
        const ret = bindings.sign(bindings.encodeUint8Array(msg), bindings.encodeUint8Array(bindings.check_arr_len(sk, 32)));
        const ret_hu_conv = Result_StringErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Recovers the PublicKey of the signer of the message given the message and the signature.
     */
    static constructor_recover_pk(msg, sig) {
        const ret = bindings.recover_pk(bindings.encodeUint8Array(msg), bindings.encodeString(sig));
        const ret_hu_conv = Result_PublicKeyErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Verifies a message was signed by a PrivateKey that derives to a given PublicKey, given a message, a signature,
     * and the PublicKey.
     */
    static constructor_verify(msg, sig, pk) {
        const ret = bindings.verify(bindings.encodeUint8Array(msg), bindings.encodeString(sig), bindings.encodeUint8Array(bindings.check_arr_len(pk, 33)));
        return ret;
    }
    /**
     * Construct the invoice's HRP and signatureless data into a preimage to be hashed.
     */
    static constructor_construct_invoice_preimage(hrp_bytes, data_without_signature) {
        const ret = bindings.construct_invoice_preimage(bindings.encodeUint8Array(hrp_bytes), bindings.encodeUint8Array(data_without_signature != null ? bindings.uint5ArrToBytes(data_without_signature) : null));
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a MonitorEvent from a byte array, created by MonitorEvent_write
     */
    static constructor_MonitorEvent_read(ser) {
        const ret = bindings.MonitorEvent_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_COption_MonitorEventZDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Read a C2Tuple_BlockHashChannelMonitorZ from a byte array, created by C2Tuple_BlockHashChannelMonitorZ_write
     */
    static constructor_C2Tuple_BlockHashChannelMonitorZ_read(ser, arg) {
        const ret = bindings.C2Tuple_BlockHashChannelMonitorZ_read(bindings.encodeUint8Array(ser), arg == null ? 0n : CommonBase.get_ptr_of(arg));
        const ret_hu_conv = Result_C2Tuple_BlockHashChannelMonitorZDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, arg);
        return ret_hu_conv;
    }
    /**
     * Read a C2Tuple_BlockHashChannelManagerZ from a byte array, created by C2Tuple_BlockHashChannelManagerZ_write
     */
    static constructor_C2Tuple_BlockHashChannelManagerZ_read(ser, arg_keys_manager, arg_fee_estimator, arg_chain_monitor, arg_tx_broadcaster, arg_logger, arg_default_config, arg_channel_monitors) {
        const ret = bindings.C2Tuple_BlockHashChannelManagerZ_read(bindings.encodeUint8Array(ser), bindings.ChannelManagerReadArgs_new(arg_keys_manager == null ? 0n : CommonBase.get_ptr_of(arg_keys_manager), arg_fee_estimator == null ? 0n : CommonBase.get_ptr_of(arg_fee_estimator), arg_chain_monitor == null ? 0n : CommonBase.get_ptr_of(arg_chain_monitor), arg_tx_broadcaster == null ? 0n : CommonBase.get_ptr_of(arg_tx_broadcaster), arg_logger == null ? 0n : CommonBase.get_ptr_of(arg_logger), arg_default_config == null ? 0n : CommonBase.get_ptr_of(arg_default_config), bindings.encodeUint64Array(arg_channel_monitors != null ? arg_channel_monitors.map(arg_channel_monitors_conv_16 => arg_channel_monitors_conv_16 == null ? 0n : CommonBase.get_ptr_of(arg_channel_monitors_conv_16)) : null)));
        const ret_hu_conv = Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, arg_keys_manager);
        CommonBase.add_ref_from(ret_hu_conv, arg_fee_estimator);
        CommonBase.add_ref_from(ret_hu_conv, arg_chain_monitor);
        CommonBase.add_ref_from(ret_hu_conv, arg_tx_broadcaster);
        CommonBase.add_ref_from(ret_hu_conv, arg_logger);
        CommonBase.add_ref_from(ret_hu_conv, arg_default_config);
        arg_channel_monitors.forEach((arg_channel_monitors_conv_16) => { CommonBase.add_ref_from(ret_hu_conv, arg_channel_monitors_conv_16); });
        return ret_hu_conv;
    }
    /**
     * Equivalent to [`crate::ln::channelmanager::ChannelManager::create_inbound_payment`], but no
     * `ChannelManager` is required. Useful for generating invoices for [phantom node payments] without
     * a `ChannelManager`.
     *
     * `keys` is generated by calling [`KeysInterface::get_inbound_payment_key_material`] and then
     * calling [`ExpandedKey::new`] with its result. It is recommended to cache this value and not
     * regenerate it for each new inbound payment.
     *
     * `current_time` is a Unix timestamp representing the current time.
     *
     * [phantom node payments]: crate::chain::keysinterface::PhantomKeysManager
     */
    static constructor_create(keys, min_value_msat, invoice_expiry_delta_secs, keys_manager, current_time) {
        const ret = bindings.create(keys == null ? 0n : CommonBase.get_ptr_of(keys), CommonBase.get_ptr_of(min_value_msat), invoice_expiry_delta_secs, keys_manager == null ? 0n : CommonBase.get_ptr_of(keys_manager), current_time);
        const ret_hu_conv = Result_C2Tuple_PaymentHashPaymentSecretZNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, keys);
        CommonBase.add_ref_from(ret_hu_conv, keys_manager);
        return ret_hu_conv;
    }
    /**
     * Equivalent to [`crate::ln::channelmanager::ChannelManager::create_inbound_payment_for_hash`],
     * but no `ChannelManager` is required. Useful for generating invoices for [phantom node payments]
     * without a `ChannelManager`.
     *
     * See [`create`] for information on the `keys` and `current_time` parameters.
     *
     * [phantom node payments]: crate::chain::keysinterface::PhantomKeysManager
     */
    static constructor_create_from_hash(keys, min_value_msat, payment_hash, invoice_expiry_delta_secs, current_time) {
        const ret = bindings.create_from_hash(keys == null ? 0n : CommonBase.get_ptr_of(keys), CommonBase.get_ptr_of(min_value_msat), bindings.encodeUint8Array(bindings.check_arr_len(payment_hash, 32)), invoice_expiry_delta_secs, current_time);
        const ret_hu_conv = Result_PaymentSecretNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, keys);
        return ret_hu_conv;
    }
    /**
     * Gets the weight for an HTLC-Success transaction.
     */
    static constructor_htlc_success_tx_weight(opt_anchors) {
        const ret = bindings.htlc_success_tx_weight(opt_anchors);
        return ret;
    }
    /**
     * Gets the weight for an HTLC-Timeout transaction.
     */
    static constructor_htlc_timeout_tx_weight(opt_anchors) {
        const ret = bindings.htlc_timeout_tx_weight(opt_anchors);
        return ret;
    }
    /**
     * Build the commitment secret from the seed and the commitment number
     */
    static constructor_build_commitment_secret(commitment_seed, idx) {
        const ret = bindings.build_commitment_secret(bindings.encodeUint8Array(bindings.check_arr_len(commitment_seed, 32)), idx);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Build a closing transaction
     */
    static constructor_build_closing_transaction(to_holder_value_sat, to_counterparty_value_sat, to_holder_script, to_counterparty_script, funding_outpoint) {
        const ret = bindings.build_closing_transaction(to_holder_value_sat, to_counterparty_value_sat, bindings.encodeUint8Array(to_holder_script), bindings.encodeUint8Array(to_counterparty_script), funding_outpoint == null ? 0n : CommonBase.get_ptr_of(funding_outpoint));
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Derives a per-commitment-transaction private key (eg an htlc key or delayed_payment key)
     * from the base secret and the per_commitment_point.
     *
     * Note that this is infallible iff we trust that at least one of the two input keys are randomly
     * generated (ie our own).
     */
    static constructor_derive_private_key(per_commitment_point, base_secret) {
        const ret = bindings.derive_private_key(bindings.encodeUint8Array(bindings.check_arr_len(per_commitment_point, 33)), bindings.encodeUint8Array(bindings.check_arr_len(base_secret, 32)));
        const ret_hu_conv = Result_SecretKeyErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Derives a per-commitment-transaction public key (eg an htlc key or a delayed_payment key)
     * from the base point and the per_commitment_key. This is the public equivalent of
     * derive_private_key - using only public keys to derive a public key instead of private keys.
     *
     * Note that this is infallible iff we trust that at least one of the two input keys are randomly
     * generated (ie our own).
     */
    static constructor_derive_public_key(per_commitment_point, base_point) {
        const ret = bindings.derive_public_key(bindings.encodeUint8Array(bindings.check_arr_len(per_commitment_point, 33)), bindings.encodeUint8Array(bindings.check_arr_len(base_point, 33)));
        const ret_hu_conv = Result_PublicKeyErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Derives a per-commitment-transaction revocation key from its constituent parts.
     *
     * Only the cheating participant owns a valid witness to propagate a revoked
     * commitment transaction, thus per_commitment_secret always come from cheater
     * and revocation_base_secret always come from punisher, which is the broadcaster
     * of the transaction spending with this key knowledge.
     *
     * Note that this is infallible iff we trust that at least one of the two input keys are randomly
     * generated (ie our own).
     */
    static constructor_derive_private_revocation_key(per_commitment_secret, countersignatory_revocation_base_secret) {
        const ret = bindings.derive_private_revocation_key(bindings.encodeUint8Array(bindings.check_arr_len(per_commitment_secret, 32)), bindings.encodeUint8Array(bindings.check_arr_len(countersignatory_revocation_base_secret, 32)));
        const ret_hu_conv = Result_SecretKeyErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Derives a per-commitment-transaction revocation public key from its constituent parts. This is
     * the public equivalend of derive_private_revocation_key - using only public keys to derive a
     * public key instead of private keys.
     *
     * Only the cheating participant owns a valid witness to propagate a revoked
     * commitment transaction, thus per_commitment_point always come from cheater
     * and revocation_base_point always come from punisher, which is the broadcaster
     * of the transaction spending with this key knowledge.
     *
     * Note that this is infallible iff we trust that at least one of the two input keys are randomly
     * generated (ie our own).
     */
    static constructor_derive_public_revocation_key(per_commitment_point, countersignatory_revocation_base_point) {
        const ret = bindings.derive_public_revocation_key(bindings.encodeUint8Array(bindings.check_arr_len(per_commitment_point, 33)), bindings.encodeUint8Array(bindings.check_arr_len(countersignatory_revocation_base_point, 33)));
        const ret_hu_conv = Result_PublicKeyErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * A script either spendable by the revocation
     * key or the broadcaster_delayed_payment_key and satisfying the relative-locktime OP_CSV constrain.
     * Encumbering a `to_holder` output on a commitment transaction or 2nd-stage HTLC transactions.
     */
    static constructor_get_revokeable_redeemscript(revocation_key, contest_delay, broadcaster_delayed_payment_key) {
        const ret = bindings.get_revokeable_redeemscript(bindings.encodeUint8Array(bindings.check_arr_len(revocation_key, 33)), contest_delay, bindings.encodeUint8Array(bindings.check_arr_len(broadcaster_delayed_payment_key, 33)));
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Gets the witness redeemscript for an HTLC output in a commitment transaction. Note that htlc
     * does not need to have its previous_output_index filled.
     */
    static constructor_get_htlc_redeemscript(htlc, opt_anchors, keys) {
        const ret = bindings.get_htlc_redeemscript(htlc == null ? 0n : CommonBase.get_ptr_of(htlc), opt_anchors, keys == null ? 0n : CommonBase.get_ptr_of(keys));
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Gets the redeemscript for a funding output from the two funding public keys.
     * Note that the order of funding public keys does not matter.
     */
    static constructor_make_funding_redeemscript(broadcaster, countersignatory) {
        const ret = bindings.make_funding_redeemscript(bindings.encodeUint8Array(bindings.check_arr_len(broadcaster, 33)), bindings.encodeUint8Array(bindings.check_arr_len(countersignatory, 33)));
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Builds an unsigned HTLC-Success or HTLC-Timeout transaction from the given channel and HTLC
     * parameters. This is used by [`TrustedCommitmentTransaction::get_htlc_sigs`] to fetch the
     * transaction which needs signing, and can be used to construct an HTLC transaction which is
     * broadcastable given a counterparty HTLC signature.
     *
     * Panics if htlc.transaction_output_index.is_none() (as such HTLCs do not appear in the
     * commitment transaction).
     */
    static constructor_build_htlc_transaction(commitment_txid, feerate_per_kw, contest_delay, htlc, opt_anchors, broadcaster_delayed_payment_key, revocation_key) {
        const ret = bindings.build_htlc_transaction(bindings.encodeUint8Array(bindings.check_arr_len(commitment_txid, 32)), feerate_per_kw, contest_delay, htlc == null ? 0n : CommonBase.get_ptr_of(htlc), opt_anchors, bindings.encodeUint8Array(bindings.check_arr_len(broadcaster_delayed_payment_key, 33)), bindings.encodeUint8Array(bindings.check_arr_len(revocation_key, 33)));
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Gets the witnessScript for an anchor output from the funding public key.
     * The witness in the spending input must be:
     * <BIP 143 funding_signature>
     * After 16 blocks of confirmation, an alternative satisfying witness could be:
     * <>
     * (empty vector required to satisfy compliance with MINIMALIF-standard rule)
     */
    static constructor_get_anchor_redeemscript(funding_pubkey) {
        const ret = bindings.get_anchor_redeemscript(bindings.encodeUint8Array(bindings.check_arr_len(funding_pubkey, 33)));
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Commitment transaction numbers which appear in the transactions themselves are XOR'd with a
     * shared secret first. This prevents on-chain observers from discovering how many commitment
     * transactions occurred in a channel before it was closed.
     *
     * This function gets the shared secret from relevant channel public keys and can be used to
     * \"decrypt\" the commitment transaction number given a commitment transaction on-chain.
     */
    static constructor_get_commitment_transaction_number_obscure_factor(broadcaster_payment_basepoint, countersignatory_payment_basepoint, outbound_from_broadcaster) {
        const ret = bindings.get_commitment_transaction_number_obscure_factor(bindings.encodeUint8Array(bindings.check_arr_len(broadcaster_payment_basepoint, 33)), bindings.encodeUint8Array(bindings.check_arr_len(countersignatory_payment_basepoint, 33)), outbound_from_broadcaster);
        return ret;
    }
    /**
     * Read a NetworkUpdate from a byte array, created by NetworkUpdate_write
     */
    static constructor_NetworkUpdate_read(ser) {
        const ret = bindings.NetworkUpdate_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_COption_NetworkUpdateZDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Finds a route from us (payer) to the given target node (payee).
     *
     * If the payee provided features in their invoice, they should be provided via `params.payee`.
     * Without this, MPP will only be used if the payee's features are available in the network graph.
     *
     * Private routing paths between a public node and the target may be included in `params.payee`.
     *
     * If some channels aren't announced, it may be useful to fill in `first_hops` with the results
     * from [`ChannelManager::list_usable_channels`]. If it is filled in, the view of these channels
     * from `network_graph` will be ignored, and only those in `first_hops` will be used.
     *
     * The fees on channels from us to the next hop are ignored as they are assumed to all be equal.
     * However, the enabled/disabled bit on such channels as well as the `htlc_minimum_msat` /
     * `htlc_maximum_msat` *are* checked as they may change based on the receiving node.
     *
     * # Note
     *
     * May be used to re-compute a [`Route`] when handling a [`Event::PaymentPathFailed`]. Any
     * adjustments to the [`NetworkGraph`] and channel scores should be made prior to calling this
     * function.
     *
     * # Panics
     *
     * Panics if first_hops contains channels without short_channel_ids;
     * [`ChannelManager::list_usable_channels`] will never include such channels.
     *
     * [`ChannelManager::list_usable_channels`]: crate::ln::channelmanager::ChannelManager::list_usable_channels
     * [`Event::PaymentPathFailed`]: crate::util::events::Event::PaymentPathFailed
     * [`NetworkGraph`]: crate::routing::gossip::NetworkGraph
     *
     * Note that first_hops (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    static constructor_find_route(our_node_pubkey, route_params, network_graph, first_hops, logger, scorer, random_seed_bytes) {
        const ret = bindings.find_route(bindings.encodeUint8Array(bindings.check_arr_len(our_node_pubkey, 33)), route_params == null ? 0n : CommonBase.get_ptr_of(route_params), network_graph == null ? 0n : CommonBase.get_ptr_of(network_graph), bindings.encodeUint64Array(first_hops != null ? first_hops.map(first_hops_conv_16 => first_hops_conv_16 == null ? 0n : CommonBase.get_ptr_of(first_hops_conv_16)) : null), logger == null ? 0n : CommonBase.get_ptr_of(logger), scorer == null ? 0n : CommonBase.get_ptr_of(scorer), bindings.encodeUint8Array(bindings.check_arr_len(random_seed_bytes, 32)));
        const ret_hu_conv = Result_RouteLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, route_params);
        CommonBase.add_ref_from(ret_hu_conv, network_graph);
        first_hops.forEach((first_hops_conv_16) => { CommonBase.add_ref_from(ret_hu_conv, first_hops_conv_16); });
        CommonBase.add_ref_from(ret_hu_conv, logger);
        CommonBase.add_ref_from(ret_hu_conv, scorer);
        return ret_hu_conv;
    }
    /**
     * Construct a route from us (payer) to the target node (payee) via the given hops (which should
     * exclude the payer, but include the payee). This may be useful, e.g., for probing the chosen path.
     *
     * Re-uses logic from `find_route`, so the restrictions described there also apply here.
     */
    static constructor_build_route_from_hops(our_node_pubkey, hops, route_params, network_graph, logger, random_seed_bytes) {
        const ret = bindings.build_route_from_hops(bindings.encodeUint8Array(bindings.check_arr_len(our_node_pubkey, 33)), bindings.encodeUint32Array(hops != null ? hops.map(hops_conv_12 => bindings.encodeUint8Array(bindings.check_arr_len(hops_conv_12, 33))) : null), route_params == null ? 0n : CommonBase.get_ptr_of(route_params), network_graph == null ? 0n : CommonBase.get_ptr_of(network_graph), logger == null ? 0n : CommonBase.get_ptr_of(logger), bindings.encodeUint8Array(bindings.check_arr_len(random_seed_bytes, 32)));
        const ret_hu_conv = Result_RouteLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, route_params);
        CommonBase.add_ref_from(ret_hu_conv, network_graph);
        CommonBase.add_ref_from(ret_hu_conv, logger);
        return ret_hu_conv;
    }
    /**
     * See [`create_invoice_from_channelmanager_with_description_hash`]
     * This version can be used in a `no_std` environment, where [`std::time::SystemTime`] is not
     * available and the current time is supplied by the caller.
     */
    static constructor_create_invoice_from_channelmanager_with_description_hash_and_duration_since_epoch(channelmanager, keys_manager, network, amt_msat, description_hash, duration_since_epoch, invoice_expiry_delta_secs) {
        const ret = bindings.create_invoice_from_channelmanager_with_description_hash_and_duration_since_epoch(channelmanager == null ? 0n : CommonBase.get_ptr_of(channelmanager), keys_manager == null ? 0n : CommonBase.get_ptr_of(keys_manager), network, CommonBase.get_ptr_of(amt_msat), description_hash == null ? 0n : CommonBase.get_ptr_of(description_hash), duration_since_epoch, invoice_expiry_delta_secs);
        const ret_hu_conv = Result_InvoiceSignOrCreationErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, channelmanager);
        CommonBase.add_ref_from(ret_hu_conv, keys_manager);
        CommonBase.add_ref_from(ret_hu_conv, description_hash);
        return ret_hu_conv;
    }
    /**
     * See [`create_invoice_from_channelmanager`]
     * This version can be used in a `no_std` environment, where [`std::time::SystemTime`] is not
     * available and the current time is supplied by the caller.
     */
    static constructor_create_invoice_from_channelmanager_and_duration_since_epoch(channelmanager, keys_manager, network, amt_msat, description, duration_since_epoch, invoice_expiry_delta_secs) {
        const ret = bindings.create_invoice_from_channelmanager_and_duration_since_epoch(channelmanager == null ? 0n : CommonBase.get_ptr_of(channelmanager), keys_manager == null ? 0n : CommonBase.get_ptr_of(keys_manager), network, CommonBase.get_ptr_of(amt_msat), bindings.encodeString(description), duration_since_epoch, invoice_expiry_delta_secs);
        const ret_hu_conv = Result_InvoiceSignOrCreationErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, channelmanager);
        CommonBase.add_ref_from(ret_hu_conv, keys_manager);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=UtilMethods.mjs.map