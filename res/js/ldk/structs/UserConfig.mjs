import { ChannelConfig } from '../structs/ChannelConfig.mjs';
import { ChannelHandshakeConfig } from '../structs/ChannelHandshakeConfig.mjs';
import { ChannelHandshakeLimits } from '../structs/ChannelHandshakeLimits.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Top-level config which holds ChannelHandshakeLimits and ChannelConfig.
 *
 * Default::default() provides sane defaults for most configurations
 * (but currently with 0 relay fees!)
 */
export class UserConfig extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.UserConfig_free);
    }
    /**
     * Channel handshake config that we propose to our counterparty.
     */
    get_channel_handshake_config() {
        const ret = bindings.UserConfig_get_channel_handshake_config(this.ptr);
        const ret_hu_conv = new ChannelHandshakeConfig(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Channel handshake config that we propose to our counterparty.
     */
    set_channel_handshake_config(val) {
        bindings.UserConfig_set_channel_handshake_config(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Limits applied to our counterparty's proposed channel handshake config settings.
     */
    get_channel_handshake_limits() {
        const ret = bindings.UserConfig_get_channel_handshake_limits(this.ptr);
        const ret_hu_conv = new ChannelHandshakeLimits(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Limits applied to our counterparty's proposed channel handshake config settings.
     */
    set_channel_handshake_limits(val) {
        bindings.UserConfig_set_channel_handshake_limits(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Channel config which affects behavior during channel lifetime.
     */
    get_channel_config() {
        const ret = bindings.UserConfig_get_channel_config(this.ptr);
        const ret_hu_conv = new ChannelConfig(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Channel config which affects behavior during channel lifetime.
     */
    set_channel_config(val) {
        bindings.UserConfig_set_channel_config(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
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
    get_accept_forwards_to_priv_channels() {
        const ret = bindings.UserConfig_get_accept_forwards_to_priv_channels(this.ptr);
        return ret;
    }
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
    set_accept_forwards_to_priv_channels(val) {
        bindings.UserConfig_set_accept_forwards_to_priv_channels(this.ptr, val);
    }
    /**
     * If this is set to false, we do not accept inbound requests to open a new channel.
     * Default value: true.
     */
    get_accept_inbound_channels() {
        const ret = bindings.UserConfig_get_accept_inbound_channels(this.ptr);
        return ret;
    }
    /**
     * If this is set to false, we do not accept inbound requests to open a new channel.
     * Default value: true.
     */
    set_accept_inbound_channels(val) {
        bindings.UserConfig_set_accept_inbound_channels(this.ptr, val);
    }
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
    get_manually_accept_inbound_channels() {
        const ret = bindings.UserConfig_get_manually_accept_inbound_channels(this.ptr);
        return ret;
    }
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
    set_manually_accept_inbound_channels(val) {
        bindings.UserConfig_set_manually_accept_inbound_channels(this.ptr, val);
    }
    /**
     * Constructs a new UserConfig given each field
     */
    static constructor_new(channel_handshake_config_arg, channel_handshake_limits_arg, channel_config_arg, accept_forwards_to_priv_channels_arg, accept_inbound_channels_arg, manually_accept_inbound_channels_arg) {
        const ret = bindings.UserConfig_new(channel_handshake_config_arg == null ? 0n : CommonBase.get_ptr_of(channel_handshake_config_arg), channel_handshake_limits_arg == null ? 0n : CommonBase.get_ptr_of(channel_handshake_limits_arg), channel_config_arg == null ? 0n : CommonBase.get_ptr_of(channel_config_arg), accept_forwards_to_priv_channels_arg, accept_inbound_channels_arg, manually_accept_inbound_channels_arg);
        const ret_hu_conv = new UserConfig(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, channel_handshake_config_arg);
        CommonBase.add_ref_from(ret_hu_conv, channel_handshake_limits_arg);
        CommonBase.add_ref_from(ret_hu_conv, channel_config_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.UserConfig_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the UserConfig
     */
    clone() {
        const ret = bindings.UserConfig_clone(this.ptr);
        const ret_hu_conv = new UserConfig(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Creates a "default" UserConfig. See struct and individual field documentaiton for details on which values are used.
     */
    static constructor_default() {
        const ret = bindings.UserConfig_default();
        const ret_hu_conv = new UserConfig(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=UserConfig.mjs.map