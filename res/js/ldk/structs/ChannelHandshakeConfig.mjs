import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Configuration we set when applicable.
 *
 * Default::default() provides sane defaults.
 */
export class ChannelHandshakeConfig extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelHandshakeConfig_free);
    }
    /**
     * Confirmations we will wait for before considering the channel locked in.
     * Applied only for inbound channels (see ChannelHandshakeLimits::max_minimum_depth for the
     * equivalent limit applied to outbound channels).
     *
     * A lower-bound of 1 is applied, requiring all channels to have a confirmed commitment
     * transaction before operation. If you wish to accept channels with zero confirmations, see
     * [`UserConfig::manually_accept_inbound_channels`] and
     * [`ChannelManager::accept_inbound_channel_from_trusted_peer_0conf`].
     *
     * Default value: 6.
     *
     * [`ChannelManager::accept_inbound_channel`]: crate::ln::channelmanager::ChannelManager::accept_inbound_channel
     * [`ChannelManager::accept_inbound_channel_from_trusted_peer_0conf`]: crate::ln::channelmanager::ChannelManager::accept_inbound_channel_from_trusted_peer_0conf
     */
    get_minimum_depth() {
        const ret = bindings.ChannelHandshakeConfig_get_minimum_depth(this.ptr);
        return ret;
    }
    /**
     * Confirmations we will wait for before considering the channel locked in.
     * Applied only for inbound channels (see ChannelHandshakeLimits::max_minimum_depth for the
     * equivalent limit applied to outbound channels).
     *
     * A lower-bound of 1 is applied, requiring all channels to have a confirmed commitment
     * transaction before operation. If you wish to accept channels with zero confirmations, see
     * [`UserConfig::manually_accept_inbound_channels`] and
     * [`ChannelManager::accept_inbound_channel_from_trusted_peer_0conf`].
     *
     * Default value: 6.
     *
     * [`ChannelManager::accept_inbound_channel`]: crate::ln::channelmanager::ChannelManager::accept_inbound_channel
     * [`ChannelManager::accept_inbound_channel_from_trusted_peer_0conf`]: crate::ln::channelmanager::ChannelManager::accept_inbound_channel_from_trusted_peer_0conf
     */
    set_minimum_depth(val) {
        bindings.ChannelHandshakeConfig_set_minimum_depth(this.ptr, val);
    }
    /**
     * Set to the number of blocks we require our counterparty to wait to claim their money (ie
     * the number of blocks we have to punish our counterparty if they broadcast a revoked
     * transaction).
     *
     * This is one of the main parameters of our security model. We (or one of our watchtowers) MUST
     * be online to check for revoked transactions on-chain at least once every our_to_self_delay
     * blocks (minus some margin to allow us enough time to broadcast and confirm a transaction,
     * possibly with time in between to RBF the spending transaction).
     *
     * Meanwhile, asking for a too high delay, we bother peer to freeze funds for nothing in
     * case of an honest unilateral channel close, which implicitly decrease the economic value of
     * our channel.
     *
     * Default value: [`BREAKDOWN_TIMEOUT`], we enforce it as a minimum at channel opening so you
     * can tweak config to ask for more security, not less.
     */
    get_our_to_self_delay() {
        const ret = bindings.ChannelHandshakeConfig_get_our_to_self_delay(this.ptr);
        return ret;
    }
    /**
     * Set to the number of blocks we require our counterparty to wait to claim their money (ie
     * the number of blocks we have to punish our counterparty if they broadcast a revoked
     * transaction).
     *
     * This is one of the main parameters of our security model. We (or one of our watchtowers) MUST
     * be online to check for revoked transactions on-chain at least once every our_to_self_delay
     * blocks (minus some margin to allow us enough time to broadcast and confirm a transaction,
     * possibly with time in between to RBF the spending transaction).
     *
     * Meanwhile, asking for a too high delay, we bother peer to freeze funds for nothing in
     * case of an honest unilateral channel close, which implicitly decrease the economic value of
     * our channel.
     *
     * Default value: [`BREAKDOWN_TIMEOUT`], we enforce it as a minimum at channel opening so you
     * can tweak config to ask for more security, not less.
     */
    set_our_to_self_delay(val) {
        bindings.ChannelHandshakeConfig_set_our_to_self_delay(this.ptr, val);
    }
    /**
     * Set to the smallest value HTLC we will accept to process.
     *
     * This value is sent to our counterparty on channel-open and we close the channel any time
     * our counterparty misbehaves by sending us an HTLC with a value smaller than this.
     *
     * Default value: 1. If the value is less than 1, it is ignored and set to 1, as is required
     * by the protocol.
     */
    get_our_htlc_minimum_msat() {
        const ret = bindings.ChannelHandshakeConfig_get_our_htlc_minimum_msat(this.ptr);
        return ret;
    }
    /**
     * Set to the smallest value HTLC we will accept to process.
     *
     * This value is sent to our counterparty on channel-open and we close the channel any time
     * our counterparty misbehaves by sending us an HTLC with a value smaller than this.
     *
     * Default value: 1. If the value is less than 1, it is ignored and set to 1, as is required
     * by the protocol.
     */
    set_our_htlc_minimum_msat(val) {
        bindings.ChannelHandshakeConfig_set_our_htlc_minimum_msat(this.ptr, val);
    }
    /**
     * Sets the percentage of the channel value we will cap the total value of outstanding inbound
     * HTLCs to.
     *
     * This can be set to a value between 1-100, where the value corresponds to the percent of the
     * channel value in whole percentages.
     *
     * Note that:
     * If configured to another value than the default value 10, any new channels created with
     * the non default value will cause versions of LDK prior to 0.0.104 to refuse to read the
     * `ChannelManager`.
     *
     * This caps the total value for inbound HTLCs in-flight only, and there's currently
     * no way to configure the cap for the total value of outbound HTLCs in-flight.
     *
     * The requirements for your node being online to ensure the safety of HTLC-encumbered funds
     * are different from the non-HTLC-encumbered funds. This makes this an important knob to
     * restrict exposure to loss due to being offline for too long.
     * See [`ChannelHandshakeConfig::our_to_self_delay`] and [`ChannelConfig::cltv_expiry_delta`]
     * for more information.
     *
     * Default value: 10.
     * Minimum value: 1, any values less than 1 will be treated as 1 instead.
     * Maximum value: 100, any values larger than 100 will be treated as 100 instead.
     */
    get_max_inbound_htlc_value_in_flight_percent_of_channel() {
        const ret = bindings.ChannelHandshakeConfig_get_max_inbound_htlc_value_in_flight_percent_of_channel(this.ptr);
        return ret;
    }
    /**
     * Sets the percentage of the channel value we will cap the total value of outstanding inbound
     * HTLCs to.
     *
     * This can be set to a value between 1-100, where the value corresponds to the percent of the
     * channel value in whole percentages.
     *
     * Note that:
     * If configured to another value than the default value 10, any new channels created with
     * the non default value will cause versions of LDK prior to 0.0.104 to refuse to read the
     * `ChannelManager`.
     *
     * This caps the total value for inbound HTLCs in-flight only, and there's currently
     * no way to configure the cap for the total value of outbound HTLCs in-flight.
     *
     * The requirements for your node being online to ensure the safety of HTLC-encumbered funds
     * are different from the non-HTLC-encumbered funds. This makes this an important knob to
     * restrict exposure to loss due to being offline for too long.
     * See [`ChannelHandshakeConfig::our_to_self_delay`] and [`ChannelConfig::cltv_expiry_delta`]
     * for more information.
     *
     * Default value: 10.
     * Minimum value: 1, any values less than 1 will be treated as 1 instead.
     * Maximum value: 100, any values larger than 100 will be treated as 100 instead.
     */
    set_max_inbound_htlc_value_in_flight_percent_of_channel(val) {
        bindings.ChannelHandshakeConfig_set_max_inbound_htlc_value_in_flight_percent_of_channel(this.ptr, val);
    }
    /**
     * If set, we attempt to negotiate the `scid_privacy` (referred to as `scid_alias` in the
     * BOLTs) option for outbound private channels. This provides better privacy by not including
     * our real on-chain channel UTXO in each invoice and requiring that our counterparty only
     * relay HTLCs to us using the channel's SCID alias.
     *
     * If this option is set, channels may be created that will not be readable by LDK versions
     * prior to 0.0.106, causing [`ChannelManager`]'s read method to return a
     * [`DecodeError::InvalidValue`].
     *
     * Note that setting this to true does *not* prevent us from opening channels with
     * counterparties that do not support the `scid_alias` option; we will simply fall back to a
     * private channel without that option.
     *
     * Ignored if the channel is negotiated to be announced, see
     * [`ChannelHandshakeConfig::announced_channel`] and
     * [`ChannelHandshakeLimits::force_announced_channel_preference`] for more.
     *
     * Default value: false. This value is likely to change to true in the future.
     *
     * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
     * [`DecodeError::InvalidValue`]: crate::ln::msgs::DecodeError::InvalidValue
     */
    get_negotiate_scid_privacy() {
        const ret = bindings.ChannelHandshakeConfig_get_negotiate_scid_privacy(this.ptr);
        return ret;
    }
    /**
     * If set, we attempt to negotiate the `scid_privacy` (referred to as `scid_alias` in the
     * BOLTs) option for outbound private channels. This provides better privacy by not including
     * our real on-chain channel UTXO in each invoice and requiring that our counterparty only
     * relay HTLCs to us using the channel's SCID alias.
     *
     * If this option is set, channels may be created that will not be readable by LDK versions
     * prior to 0.0.106, causing [`ChannelManager`]'s read method to return a
     * [`DecodeError::InvalidValue`].
     *
     * Note that setting this to true does *not* prevent us from opening channels with
     * counterparties that do not support the `scid_alias` option; we will simply fall back to a
     * private channel without that option.
     *
     * Ignored if the channel is negotiated to be announced, see
     * [`ChannelHandshakeConfig::announced_channel`] and
     * [`ChannelHandshakeLimits::force_announced_channel_preference`] for more.
     *
     * Default value: false. This value is likely to change to true in the future.
     *
     * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
     * [`DecodeError::InvalidValue`]: crate::ln::msgs::DecodeError::InvalidValue
     */
    set_negotiate_scid_privacy(val) {
        bindings.ChannelHandshakeConfig_set_negotiate_scid_privacy(this.ptr, val);
    }
    /**
     * Set to announce the channel publicly and notify all nodes that they can route via this
     * channel.
     *
     * This should only be set to true for nodes which expect to be online reliably.
     *
     * As the node which funds a channel picks this value this will only apply for new outbound
     * channels unless [`ChannelHandshakeLimits::force_announced_channel_preference`] is set.
     *
     * Default value: false.
     */
    get_announced_channel() {
        const ret = bindings.ChannelHandshakeConfig_get_announced_channel(this.ptr);
        return ret;
    }
    /**
     * Set to announce the channel publicly and notify all nodes that they can route via this
     * channel.
     *
     * This should only be set to true for nodes which expect to be online reliably.
     *
     * As the node which funds a channel picks this value this will only apply for new outbound
     * channels unless [`ChannelHandshakeLimits::force_announced_channel_preference`] is set.
     *
     * Default value: false.
     */
    set_announced_channel(val) {
        bindings.ChannelHandshakeConfig_set_announced_channel(this.ptr, val);
    }
    /**
     * When set, we commit to an upfront shutdown_pubkey at channel open. If our counterparty
     * supports it, they will then enforce the mutual-close output to us matches what we provided
     * at intialization, preventing us from closing to an alternate pubkey.
     *
     * This is set to true by default to provide a slight increase in security, though ultimately
     * any attacker who is able to take control of a channel can just as easily send the funds via
     * lightning payments, so we never require that our counterparties support this option.
     *
     * The upfront key committed is provided from [`KeysInterface::get_shutdown_scriptpubkey`].
     *
     * Default value: true.
     *
     * [`KeysInterface::get_shutdown_scriptpubkey`]: crate::chain::keysinterface::KeysInterface::get_shutdown_scriptpubkey
     */
    get_commit_upfront_shutdown_pubkey() {
        const ret = bindings.ChannelHandshakeConfig_get_commit_upfront_shutdown_pubkey(this.ptr);
        return ret;
    }
    /**
     * When set, we commit to an upfront shutdown_pubkey at channel open. If our counterparty
     * supports it, they will then enforce the mutual-close output to us matches what we provided
     * at intialization, preventing us from closing to an alternate pubkey.
     *
     * This is set to true by default to provide a slight increase in security, though ultimately
     * any attacker who is able to take control of a channel can just as easily send the funds via
     * lightning payments, so we never require that our counterparties support this option.
     *
     * The upfront key committed is provided from [`KeysInterface::get_shutdown_scriptpubkey`].
     *
     * Default value: true.
     *
     * [`KeysInterface::get_shutdown_scriptpubkey`]: crate::chain::keysinterface::KeysInterface::get_shutdown_scriptpubkey
     */
    set_commit_upfront_shutdown_pubkey(val) {
        bindings.ChannelHandshakeConfig_set_commit_upfront_shutdown_pubkey(this.ptr, val);
    }
    /**
     * The Proportion of the channel value to configure as counterparty's channel reserve,
     * i.e., `their_channel_reserve_satoshis` for both outbound and inbound channels.
     *
     * `their_channel_reserve_satoshis` is the minimum balance that the other node has to maintain
     * on their side, at all times.
     * This ensures that if our counterparty broadcasts a revoked state, we can punish them by
     * claiming at least this value on chain.
     *
     * Channel reserve values greater than 30% could be considered highly unreasonable, since that
     * amount can never be used for payments.
     * Also, if our selected channel reserve for counterparty and counterparty's selected
     * channel reserve for us sum up to equal or greater than channel value, channel negotiations
     * will fail.
     *
     * Note: Versions of LDK earlier than v0.0.104 will fail to read channels with any channel reserve
     * other than the default value.
     *
     * Default value: 1% of channel value, i.e., configured as 10,000 millionths.
     * Minimum value: If the calculated proportional value is less than 1000 sats, it will be treated
     * as 1000 sats instead, which is a safe implementation-specific lower bound.
     * Maximum value: 1,000,000, any values larger than 1 Million will be treated as 1 Million (or 100%)
     * instead, although channel negotiations will fail in that case.
     */
    get_their_channel_reserve_proportional_millionths() {
        const ret = bindings.ChannelHandshakeConfig_get_their_channel_reserve_proportional_millionths(this.ptr);
        return ret;
    }
    /**
     * The Proportion of the channel value to configure as counterparty's channel reserve,
     * i.e., `their_channel_reserve_satoshis` for both outbound and inbound channels.
     *
     * `their_channel_reserve_satoshis` is the minimum balance that the other node has to maintain
     * on their side, at all times.
     * This ensures that if our counterparty broadcasts a revoked state, we can punish them by
     * claiming at least this value on chain.
     *
     * Channel reserve values greater than 30% could be considered highly unreasonable, since that
     * amount can never be used for payments.
     * Also, if our selected channel reserve for counterparty and counterparty's selected
     * channel reserve for us sum up to equal or greater than channel value, channel negotiations
     * will fail.
     *
     * Note: Versions of LDK earlier than v0.0.104 will fail to read channels with any channel reserve
     * other than the default value.
     *
     * Default value: 1% of channel value, i.e., configured as 10,000 millionths.
     * Minimum value: If the calculated proportional value is less than 1000 sats, it will be treated
     * as 1000 sats instead, which is a safe implementation-specific lower bound.
     * Maximum value: 1,000,000, any values larger than 1 Million will be treated as 1 Million (or 100%)
     * instead, although channel negotiations will fail in that case.
     */
    set_their_channel_reserve_proportional_millionths(val) {
        bindings.ChannelHandshakeConfig_set_their_channel_reserve_proportional_millionths(this.ptr, val);
    }
    /**
     * Constructs a new ChannelHandshakeConfig given each field
     */
    static constructor_new(minimum_depth_arg, our_to_self_delay_arg, our_htlc_minimum_msat_arg, max_inbound_htlc_value_in_flight_percent_of_channel_arg, negotiate_scid_privacy_arg, announced_channel_arg, commit_upfront_shutdown_pubkey_arg, their_channel_reserve_proportional_millionths_arg) {
        const ret = bindings.ChannelHandshakeConfig_new(minimum_depth_arg, our_to_self_delay_arg, our_htlc_minimum_msat_arg, max_inbound_htlc_value_in_flight_percent_of_channel_arg, negotiate_scid_privacy_arg, announced_channel_arg, commit_upfront_shutdown_pubkey_arg, their_channel_reserve_proportional_millionths_arg);
        const ret_hu_conv = new ChannelHandshakeConfig(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ChannelHandshakeConfig_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChannelHandshakeConfig
     */
    clone() {
        const ret = bindings.ChannelHandshakeConfig_clone(this.ptr);
        const ret_hu_conv = new ChannelHandshakeConfig(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Creates a "default" ChannelHandshakeConfig. See struct and individual field documentaiton for details on which values are used.
     */
    static constructor_default() {
        const ret = bindings.ChannelHandshakeConfig_default();
        const ret_hu_conv = new ChannelHandshakeConfig(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChannelHandshakeConfig.mjs.map