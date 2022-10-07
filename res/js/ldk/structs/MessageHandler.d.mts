import { ChannelMessageHandler } from '../structs/ChannelMessageHandler.mjs';
import { RoutingMessageHandler } from '../structs/RoutingMessageHandler.mjs';
import { OnionMessageHandler } from '../structs/OnionMessageHandler.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Provides references to trait impls which handle different types of messages.
 */
export declare class MessageHandler extends CommonBase {
    /**
     * A message handler which handles messages specific to channels. Usually this is just a
     * [`ChannelManager`] object or an [`ErroringMessageHandler`].
     *
     * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
     */
    get_chan_handler(): ChannelMessageHandler;
    /**
     * A message handler which handles messages specific to channels. Usually this is just a
     * [`ChannelManager`] object or an [`ErroringMessageHandler`].
     *
     * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
     */
    set_chan_handler(val: ChannelMessageHandler): void;
    /**
     * A message handler which handles messages updating our knowledge of the network channel
     * graph. Usually this is just a [`P2PGossipSync`] object or an [`IgnoringMessageHandler`].
     *
     * [`P2PGossipSync`]: crate::routing::gossip::P2PGossipSync
     */
    get_route_handler(): RoutingMessageHandler;
    /**
     * A message handler which handles messages updating our knowledge of the network channel
     * graph. Usually this is just a [`P2PGossipSync`] object or an [`IgnoringMessageHandler`].
     *
     * [`P2PGossipSync`]: crate::routing::gossip::P2PGossipSync
     */
    set_route_handler(val: RoutingMessageHandler): void;
    /**
     * A message handler which handles onion messages. For now, this can only be an
     * [`IgnoringMessageHandler`].
     */
    get_onion_message_handler(): OnionMessageHandler;
    /**
     * A message handler which handles onion messages. For now, this can only be an
     * [`IgnoringMessageHandler`].
     */
    set_onion_message_handler(val: OnionMessageHandler): void;
    /**
     * Constructs a new MessageHandler given each field
     */
    static constructor_new(chan_handler_arg: ChannelMessageHandler, route_handler_arg: RoutingMessageHandler, onion_message_handler_arg: OnionMessageHandler): MessageHandler;
}
