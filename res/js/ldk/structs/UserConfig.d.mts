import { ChannelConfig } from '../structs/ChannelConfig.mjs';
import { ChannelHandshakeConfig } from '../structs/ChannelHandshakeConfig.mjs';
import { ChannelHandshakeLimits } from '../structs/ChannelHandshakeLimits.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Top-level config which holds ChannelHandshakeLimits and ChannelConfig.
 *
 * Default::default() provides sane defaults for most configurations
 * (but currently with 0 relay fees!)
 */
export declare class UserConfig extends CommonBase {
    /**
     * Channel handshake config that we propose to our counterparty.
     */
    get_channel_handshake_config(): ChannelHandshakeConfig;
    /**
     * Channel handshake config that we propose to our counterparty.
     */
    set_channel_handshake_config(val: ChannelHandshakeConfig): void;
    /**
     * Limits applied to our counterparty's proposed channel handshake config settings.
     */
    get_channel_handshake_limits(): ChannelHandshakeLimits;
    /**
     * Limits applied to our counterparty's proposed channel handshake config settings.
     */
    set_channel_handshake_limits(val: ChannelHandshakeLimits): void;
    /**
     * Channel config which affects behavior during channel lifetime.
     */
    get_channel_config(): ChannelConfig;
    /**
     * Channel config which affects behavior during channel lifetime.
     */
    set_channel_config(val: ChannelConfig): void;
    /**
     * If this is set to false, we will reject any HTLCs which were to be forwarded over private
     * channels. This prevents us from taking on HTLC-forwarding risk when we intend to run as a
     * node which is not online reliably.
     *
     * For nodes which are not online reliably, you should set all channels to *not* be announced
     * (using [`ChannelHandshakeConfig::announced_channel`] and
     * [`ChannelHandshakeLimits::force_announced_channel_preference`]) and set this to false to
     * ensure you are not exposed to any forwarding risk.
     *
     * Note that because you cannot change a channel's announced state after creation, there is no
     * way to disable forwarding on public channels retroactively. Thus, in order to change a node
     * from a publicly-announced forwarding node to a private non-forwarding node you must close
     * all your channels and open new ones. For privacy, you should also change your node_id
     * (swapping all private and public key material for new ones) at that time.
     *
     * Default value: false.
     */
    get_accept_forwards_to_priv_channels(): boolean;
    /**
     * If this is set to false, we will reject any HTLCs which were to be forwarded over private
     * channels. This prevents us from taking on HTLC-forwarding risk when we intend to run as a
     * node which is not online reliably.
     *
     * For nodes which are not online reliably, you should set all channels to *not* be announced
     * (using [`ChannelHandshakeConfig::announced_channel`] and
     * [`ChannelHandshakeLimits::force_announced_channel_preference`]) and set this to false to
     * ensure you are not exposed to any forwarding risk.
     *
     * Note that because you cannot change a channel's announced state after creation, there is no
     * way to disable forwarding on public channels retroactively. Thus, in order to change a node
     * from a publicly-announced forwarding node to a private non-forwarding node you must close
     * all your channels and open new ones. For privacy, you should also change your node_id
     * (swapping all private and public key material for new ones) at that time.
     *
     * Default value: false.
     */
    set_accept_forwards_to_priv_channels(val: boolean): void;
    /**
     * If this is set to false, we do not accept inbound requests to open a new channel.
     * Default value: true.
     */
    get_accept_inbound_channels(): boolean;
    /**
     * If this is set to false, we do not accept inbound requests to open a new channel.
     * Default value: true.
     */
    set_accept_inbound_channels(val: boolean): void;
    /**
     * If this is set to true, the user needs to manually accept inbound requests to open a new
     * channel.
     *
     * When set to true, [`Event::OpenChannelRequest`] will be triggered once a request to open a
     * new inbound channel is received through a [`msgs::OpenChannel`] message. In that case, a
     * [`msgs::AcceptChannel`] message will not be sent back to the counterparty node unless the
     * user explicitly chooses to accept the request.
     *
     * Default value: false.
     *
     * [`Event::OpenChannelRequest`]: crate::util::events::Event::OpenChannelRequest
     * [`msgs::OpenChannel`]: crate::ln::msgs::OpenChannel
     * [`msgs::AcceptChannel`]: crate::ln::msgs::AcceptChannel
     */
    get_manually_accept_inbound_channels(): boolean;
    /**
     * If this is set to true, the user needs to manually accept inbound requests to open a new
     * channel.
     *
     * When set to true, [`Event::OpenChannelRequest`] will be triggered once a request to open a
     * new inbound channel is received through a [`msgs::OpenChannel`] message. In that case, a
     * [`msgs::AcceptChannel`] message will not be sent back to the counterparty node unless the
     * user explicitly chooses to accept the request.
     *
     * Default value: false.
     *
     * [`Event::OpenChannelRequest`]: crate::util::events::Event::OpenChannelRequest
     * [`msgs::OpenChannel`]: crate::ln::msgs::OpenChannel
     * [`msgs::AcceptChannel`]: crate::ln::msgs::AcceptChannel
     */
    set_manually_accept_inbound_channels(val: boolean): void;
    /**
     * Constructs a new UserConfig given each field
     */
    static constructor_new(channel_handshake_config_arg: ChannelHandshakeConfig, channel_handshake_limits_arg: ChannelHandshakeLimits, channel_config_arg: ChannelConfig, accept_forwards_to_priv_channels_arg: boolean, accept_inbound_channels_arg: boolean, manually_accept_inbound_channels_arg: boolean): UserConfig;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the UserConfig
     */
    clone(): UserConfig;
    /**
     * Creates a "default" UserConfig. See struct and individual field documentaiton for details on which values are used.
     */
    static constructor_default(): UserConfig;
}
