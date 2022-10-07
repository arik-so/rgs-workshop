import { Result_ChannelConfigDecodeErrorZ } from '../structs/Result_ChannelConfigDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Options which apply on a per-channel basis and may change at runtime or based on negotiation
 * with our counterparty.
 */
export declare class ChannelConfig extends CommonBase {
    /**
     * Amount (in millionths of a satoshi) charged per satoshi for payments forwarded outbound
     * over the channel.
     * This may be allowed to change at runtime in a later update, however doing so must result in
     * update messages sent to notify all nodes of our updated relay fee.
     *
     * Default value: 0.
     */
    get_forwarding_fee_proportional_millionths(): number;
    /**
     * Amount (in millionths of a satoshi) charged per satoshi for payments forwarded outbound
     * over the channel.
     * This may be allowed to change at runtime in a later update, however doing so must result in
     * update messages sent to notify all nodes of our updated relay fee.
     *
     * Default value: 0.
     */
    set_forwarding_fee_proportional_millionths(val: number): void;
    /**
     * Amount (in milli-satoshi) charged for payments forwarded outbound over the channel, in
     * excess of [`forwarding_fee_proportional_millionths`].
     * This may be allowed to change at runtime in a later update, however doing so must result in
     * update messages sent to notify all nodes of our updated relay fee.
     *
     * The default value of a single satoshi roughly matches the market rate on many routing nodes
     * as of July 2021. Adjusting it upwards or downwards may change whether nodes route through
     * this node.
     *
     * Default value: 1000.
     *
     * [`forwarding_fee_proportional_millionths`]: ChannelConfig::forwarding_fee_proportional_millionths
     */
    get_forwarding_fee_base_msat(): number;
    /**
     * Amount (in milli-satoshi) charged for payments forwarded outbound over the channel, in
     * excess of [`forwarding_fee_proportional_millionths`].
     * This may be allowed to change at runtime in a later update, however doing so must result in
     * update messages sent to notify all nodes of our updated relay fee.
     *
     * The default value of a single satoshi roughly matches the market rate on many routing nodes
     * as of July 2021. Adjusting it upwards or downwards may change whether nodes route through
     * this node.
     *
     * Default value: 1000.
     *
     * [`forwarding_fee_proportional_millionths`]: ChannelConfig::forwarding_fee_proportional_millionths
     */
    set_forwarding_fee_base_msat(val: number): void;
    /**
     * The difference in the CLTV value between incoming HTLCs and an outbound HTLC forwarded over
     * the channel this config applies to.
     *
     * This is analogous to [`ChannelHandshakeConfig::our_to_self_delay`] but applies to in-flight
     * HTLC balance when a channel appears on-chain whereas
     * [`ChannelHandshakeConfig::our_to_self_delay`] applies to the remaining
     * (non-HTLC-encumbered) balance.
     *
     * Thus, for HTLC-encumbered balances to be enforced on-chain when a channel is force-closed,
     * we (or one of our watchtowers) MUST be online to check for broadcast of the current
     * commitment transaction at least once per this many blocks (minus some margin to allow us
     * enough time to broadcast and confirm a transaction, possibly with time in between to RBF
     * the spending transaction).
     *
     * Default value: 72 (12 hours at an average of 6 blocks/hour).
     * Minimum value: [`MIN_CLTV_EXPIRY_DELTA`], any values less than this will be treated as
     * [`MIN_CLTV_EXPIRY_DELTA`] instead.
     *
     * [`MIN_CLTV_EXPIRY_DELTA`]: crate::ln::channelmanager::MIN_CLTV_EXPIRY_DELTA
     */
    get_cltv_expiry_delta(): number;
    /**
     * The difference in the CLTV value between incoming HTLCs and an outbound HTLC forwarded over
     * the channel this config applies to.
     *
     * This is analogous to [`ChannelHandshakeConfig::our_to_self_delay`] but applies to in-flight
     * HTLC balance when a channel appears on-chain whereas
     * [`ChannelHandshakeConfig::our_to_self_delay`] applies to the remaining
     * (non-HTLC-encumbered) balance.
     *
     * Thus, for HTLC-encumbered balances to be enforced on-chain when a channel is force-closed,
     * we (or one of our watchtowers) MUST be online to check for broadcast of the current
     * commitment transaction at least once per this many blocks (minus some margin to allow us
     * enough time to broadcast and confirm a transaction, possibly with time in between to RBF
     * the spending transaction).
     *
     * Default value: 72 (12 hours at an average of 6 blocks/hour).
     * Minimum value: [`MIN_CLTV_EXPIRY_DELTA`], any values less than this will be treated as
     * [`MIN_CLTV_EXPIRY_DELTA`] instead.
     *
     * [`MIN_CLTV_EXPIRY_DELTA`]: crate::ln::channelmanager::MIN_CLTV_EXPIRY_DELTA
     */
    set_cltv_expiry_delta(val: number): void;
    /**
     * Limit our total exposure to in-flight HTLCs which are burned to fees as they are too
     * small to claim on-chain.
     *
     * When an HTLC present in one of our channels is below a \"dust\" threshold, the HTLC will
     * not be claimable on-chain, instead being turned into additional miner fees if either
     * party force-closes the channel. Because the threshold is per-HTLC, our total exposure
     * to such payments may be sustantial if there are many dust HTLCs present when the
     * channel is force-closed.
     *
     * This limit is applied for sent, forwarded, and received HTLCs and limits the total
     * exposure across all three types per-channel. Setting this too low may prevent the
     * sending or receipt of low-value HTLCs on high-traffic nodes, and this limit is very
     * important to prevent stealing of dust HTLCs by miners.
     *
     * Default value: 5_000_000 msat.
     */
    get_max_dust_htlc_exposure_msat(): bigint;
    /**
     * Limit our total exposure to in-flight HTLCs which are burned to fees as they are too
     * small to claim on-chain.
     *
     * When an HTLC present in one of our channels is below a \"dust\" threshold, the HTLC will
     * not be claimable on-chain, instead being turned into additional miner fees if either
     * party force-closes the channel. Because the threshold is per-HTLC, our total exposure
     * to such payments may be sustantial if there are many dust HTLCs present when the
     * channel is force-closed.
     *
     * This limit is applied for sent, forwarded, and received HTLCs and limits the total
     * exposure across all three types per-channel. Setting this too low may prevent the
     * sending or receipt of low-value HTLCs on high-traffic nodes, and this limit is very
     * important to prevent stealing of dust HTLCs by miners.
     *
     * Default value: 5_000_000 msat.
     */
    set_max_dust_htlc_exposure_msat(val: bigint): void;
    /**
     * The additional fee we're willing to pay to avoid waiting for the counterparty's
     * `to_self_delay` to reclaim funds.
     *
     * When we close a channel cooperatively with our counterparty, we negotiate a fee for the
     * closing transaction which both sides find acceptable, ultimately paid by the channel
     * funder/initiator.
     *
     * When we are the funder, because we have to pay the channel closing fee, we bound the
     * acceptable fee by our [`Background`] and [`Normal`] fees, with the upper bound increased by
     * this value. Because the on-chain fee we'd pay to force-close the channel is kept near our
     * [`Normal`] feerate during normal operation, this value represents the additional fee we're
     * willing to pay in order to avoid waiting for our counterparty's to_self_delay to reclaim our
     * funds.
     *
     * When we are not the funder, we require the closing transaction fee pay at least our
     * [`Background`] fee estimate, but allow our counterparty to pay as much fee as they like.
     * Thus, this value is ignored when we are not the funder.
     *
     * Default value: 1000 satoshis.
     *
     * [`Normal`]: crate::chain::chaininterface::ConfirmationTarget::Normal
     * [`Background`]: crate::chain::chaininterface::ConfirmationTarget::Background
     */
    get_force_close_avoidance_max_fee_satoshis(): bigint;
    /**
     * The additional fee we're willing to pay to avoid waiting for the counterparty's
     * `to_self_delay` to reclaim funds.
     *
     * When we close a channel cooperatively with our counterparty, we negotiate a fee for the
     * closing transaction which both sides find acceptable, ultimately paid by the channel
     * funder/initiator.
     *
     * When we are the funder, because we have to pay the channel closing fee, we bound the
     * acceptable fee by our [`Background`] and [`Normal`] fees, with the upper bound increased by
     * this value. Because the on-chain fee we'd pay to force-close the channel is kept near our
     * [`Normal`] feerate during normal operation, this value represents the additional fee we're
     * willing to pay in order to avoid waiting for our counterparty's to_self_delay to reclaim our
     * funds.
     *
     * When we are not the funder, we require the closing transaction fee pay at least our
     * [`Background`] fee estimate, but allow our counterparty to pay as much fee as they like.
     * Thus, this value is ignored when we are not the funder.
     *
     * Default value: 1000 satoshis.
     *
     * [`Normal`]: crate::chain::chaininterface::ConfirmationTarget::Normal
     * [`Background`]: crate::chain::chaininterface::ConfirmationTarget::Background
     */
    set_force_close_avoidance_max_fee_satoshis(val: bigint): void;
    /**
     * Constructs a new ChannelConfig given each field
     */
    static constructor_new(forwarding_fee_proportional_millionths_arg: number, forwarding_fee_base_msat_arg: number, cltv_expiry_delta_arg: number, max_dust_htlc_exposure_msat_arg: bigint, force_close_avoidance_max_fee_satoshis_arg: bigint): ChannelConfig;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ChannelConfig
     */
    clone(): ChannelConfig;
    /**
     * Creates a "default" ChannelConfig. See struct and individual field documentaiton for details on which values are used.
     */
    static constructor_default(): ChannelConfig;
    /**
     * Serialize the ChannelConfig object into a byte array which can be read by ChannelConfig_read
     */
    write(): Uint8Array;
    /**
     * Read a ChannelConfig from a byte array, created by ChannelConfig_write
     */
    static constructor_read(ser: Uint8Array): Result_ChannelConfigDecodeErrorZ;
}
