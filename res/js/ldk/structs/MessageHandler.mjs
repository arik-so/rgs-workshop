import { ChannelMessageHandler } from '../structs/ChannelMessageHandler.mjs';
import { RoutingMessageHandler } from '../structs/RoutingMessageHandler.mjs';
import { OnionMessageHandler } from '../structs/OnionMessageHandler.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Provides references to trait impls which handle different types of messages.
 */
export class MessageHandler extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.MessageHandler_free);
    }
    /**
     * A message handler which handles messages specific to channels. Usually this is just a
     * [`ChannelManager`] object or an [`ErroringMessageHandler`].
     *
     * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
     */
    get_chan_handler() {
        const ret = bindings.MessageHandler_get_chan_handler(this.ptr);
        const ret_hu_conv = new ChannelMessageHandler(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * A message handler which handles messages specific to channels. Usually this is just a
     * [`ChannelManager`] object or an [`ErroringMessageHandler`].
     *
     * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
     */
    set_chan_handler(val) {
        bindings.MessageHandler_set_chan_handler(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * A message handler which handles messages updating our knowledge of the network channel
     * graph. Usually this is just a [`P2PGossipSync`] object or an [`IgnoringMessageHandler`].
     *
     * [`P2PGossipSync`]: crate::routing::gossip::P2PGossipSync
     */
    get_route_handler() {
        const ret = bindings.MessageHandler_get_route_handler(this.ptr);
        const ret_hu_conv = new RoutingMessageHandler(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * A message handler which handles messages updating our knowledge of the network channel
     * graph. Usually this is just a [`P2PGossipSync`] object or an [`IgnoringMessageHandler`].
     *
     * [`P2PGossipSync`]: crate::routing::gossip::P2PGossipSync
     */
    set_route_handler(val) {
        bindings.MessageHandler_set_route_handler(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * A message handler which handles onion messages. For now, this can only be an
     * [`IgnoringMessageHandler`].
     */
    get_onion_message_handler() {
        const ret = bindings.MessageHandler_get_onion_message_handler(this.ptr);
        const ret_hu_conv = new OnionMessageHandler(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * A message handler which handles onion messages. For now, this can only be an
     * [`IgnoringMessageHandler`].
     */
    set_onion_message_handler(val) {
        bindings.MessageHandler_set_onion_message_handler(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Constructs a new MessageHandler given each field
     */
    static constructor_new(chan_handler_arg, route_handler_arg, onion_message_handler_arg) {
        const ret = bindings.MessageHandler_new(chan_handler_arg == null ? 0n : CommonBase.get_ptr_of(chan_handler_arg), route_handler_arg == null ? 0n : CommonBase.get_ptr_of(route_handler_arg), onion_message_handler_arg == null ? 0n : CommonBase.get_ptr_of(onion_message_handler_arg));
        const ret_hu_conv = new MessageHandler(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, chan_handler_arg);
        CommonBase.add_ref_from(ret_hu_conv, route_handler_arg);
        CommonBase.add_ref_from(ret_hu_conv, onion_message_handler_arg);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=MessageHandler.mjs.map