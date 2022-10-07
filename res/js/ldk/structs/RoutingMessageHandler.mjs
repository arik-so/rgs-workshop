import { ChannelUpdate } from '../structs/ChannelUpdate.mjs';
import { ChannelAnnouncement } from '../structs/ChannelAnnouncement.mjs';
import { QueryChannelRange } from '../structs/QueryChannelRange.mjs';
import { QueryShortChannelIds } from '../structs/QueryShortChannelIds.mjs';
import { ReplyChannelRange } from '../structs/ReplyChannelRange.mjs';
import { InitFeatures } from '../structs/InitFeatures.mjs';
import { NodeFeatures } from '../structs/NodeFeatures.mjs';
import { Result_boolLightningErrorZ } from '../structs/Result_boolLightningErrorZ.mjs';
import { Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ } from '../structs/Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ.mjs';
import { Result_NoneLightningErrorZ } from '../structs/Result_NoneLightningErrorZ.mjs';
import { Init } from '../structs/Init.mjs';
import { NodeAnnouncement } from '../structs/NodeAnnouncement.mjs';
import { ReplyShortChannelIdsEnd } from '../structs/ReplyShortChannelIdsEnd.mjs';
import { MessageSendEventsProvider } from '../structs/MessageSendEventsProvider.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKRoutingMessageHandlerHolder {
}
/**
 * A trait to describe an object which can receive routing messages.
 *
 * # Implementor DoS Warnings
 *
 * For `gossip_queries` messages there are potential DoS vectors when handling
 * inbound queries. Implementors using an on-disk network graph should be aware of
 * repeated disk I/O for queries accessing different parts of the network graph.
 */
export class RoutingMessageHandler extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.RoutingMessageHandler_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of RoutingMessageHandler from a given implementation */
    static new_impl(arg, messageSendEventsProvider_impl) {
        const impl_holder = new LDKRoutingMessageHandlerHolder();
        let structImplementation = {
            handle_node_announcement(msg) {
                const msg_hu_conv = new NodeAnnouncement(null, msg);
                const ret = arg.handle_node_announcement(msg_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            handle_channel_announcement(msg) {
                const msg_hu_conv = new ChannelAnnouncement(null, msg);
                const ret = arg.handle_channel_announcement(msg_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            handle_channel_update(msg) {
                const msg_hu_conv = new ChannelUpdate(null, msg);
                const ret = arg.handle_channel_update(msg_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            get_next_channel_announcement(starting_point) {
                const ret = arg.get_next_channel_announcement(starting_point);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            get_next_node_announcement(starting_point) {
                const starting_point_conv = bindings.decodeUint8Array(starting_point);
                const ret = arg.get_next_node_announcement(starting_point_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            peer_connected(their_node_id, init) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const init_hu_conv = new Init(null, init);
                arg.peer_connected(their_node_id_conv, init_hu_conv);
            },
            handle_reply_channel_range(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new ReplyChannelRange(null, msg);
                CommonBase.add_ref_from(msg_hu_conv, this);
                const ret = arg.handle_reply_channel_range(their_node_id_conv, msg_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            handle_reply_short_channel_ids_end(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new ReplyShortChannelIdsEnd(null, msg);
                CommonBase.add_ref_from(msg_hu_conv, this);
                const ret = arg.handle_reply_short_channel_ids_end(their_node_id_conv, msg_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            handle_query_channel_range(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new QueryChannelRange(null, msg);
                CommonBase.add_ref_from(msg_hu_conv, this);
                const ret = arg.handle_query_channel_range(their_node_id_conv, msg_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            handle_query_short_channel_ids(their_node_id, msg) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const msg_hu_conv = new QueryShortChannelIds(null, msg);
                CommonBase.add_ref_from(msg_hu_conv, this);
                const ret = arg.handle_query_short_channel_ids(their_node_id_conv, msg_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            provided_node_features() {
                const ret = arg.provided_node_features();
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            provided_init_features(their_node_id) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const ret = arg.provided_init_features(their_node_id_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
        };
        const messageSendEventsProvider = MessageSendEventsProvider.new_impl(messageSendEventsProvider_impl);
        const ptr_idx = bindings.LDKRoutingMessageHandler_new(structImplementation, messageSendEventsProvider.instance_idx);
        impl_holder.held = new RoutingMessageHandler(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        impl_holder.held.ptrs_to.push(messageSendEventsProvider);
        return impl_holder.held;
    }
    /**
     * Handle an incoming node_announcement message, returning true if it should be forwarded on,
     * false or returning an Err otherwise.
     */
    handle_node_announcement(msg) {
        const ret = bindings.RoutingMessageHandler_handle_node_announcement(this.ptr, msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = Result_boolLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, msg);
        return ret_hu_conv;
    }
    /**
     * Handle a channel_announcement message, returning true if it should be forwarded on, false
     * or returning an Err otherwise.
     */
    handle_channel_announcement(msg) {
        const ret = bindings.RoutingMessageHandler_handle_channel_announcement(this.ptr, msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = Result_boolLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, msg);
        return ret_hu_conv;
    }
    /**
     * Handle an incoming channel_update message, returning true if it should be forwarded on,
     * false or returning an Err otherwise.
     */
    handle_channel_update(msg) {
        const ret = bindings.RoutingMessageHandler_handle_channel_update(this.ptr, msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = Result_boolLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, msg);
        return ret_hu_conv;
    }
    /**
     * Gets channel announcements and updates required to dump our routing table to a remote node,
     * starting at the short_channel_id indicated by starting_point and including announcements
     * for a single channel.
     */
    get_next_channel_announcement(starting_point) {
        const ret = bindings.RoutingMessageHandler_get_next_channel_announcement(this.ptr, starting_point);
        const ret_hu_conv = Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Gets a node announcement required to dump our routing table to a remote node, starting at
     * the node *after* the provided pubkey and including up to one announcement immediately
     * higher (as defined by <PublicKey as Ord>::cmp) than starting_point.
     * If None is provided for starting_point, we start at the first node.
     *
     * Note that starting_point (or a relevant inner pointer) may be NULL or all-0s to represent None
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_next_node_announcement(starting_point) {
        const ret = bindings.RoutingMessageHandler_get_next_node_announcement(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(starting_point, 33)));
        const ret_hu_conv = new NodeAnnouncement(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Called when a connection is established with a peer. This can be used to
     * perform routing table synchronization using a strategy defined by the
     * implementor.
     */
    peer_connected(their_node_id, init) {
        bindings.RoutingMessageHandler_peer_connected(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), init == null ? 0n : CommonBase.get_ptr_of(init));
        CommonBase.add_ref_from(this, init);
    }
    /**
     * Handles the reply of a query we initiated to learn about channels
     * for a given range of blocks. We can expect to receive one or more
     * replies to a single query.
     */
    handle_reply_channel_range(their_node_id, msg) {
        const ret = bindings.RoutingMessageHandler_handle_reply_channel_range(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = Result_NoneLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, msg);
        return ret_hu_conv;
    }
    /**
     * Handles the reply of a query we initiated asking for routing gossip
     * messages for a list of channels. We should receive this message when
     * a node has completed its best effort to send us the pertaining routing
     * gossip messages.
     */
    handle_reply_short_channel_ids_end(their_node_id, msg) {
        const ret = bindings.RoutingMessageHandler_handle_reply_short_channel_ids_end(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = Result_NoneLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, msg);
        return ret_hu_conv;
    }
    /**
     * Handles when a peer asks us to send a list of short_channel_ids
     * for the requested range of blocks.
     */
    handle_query_channel_range(their_node_id, msg) {
        const ret = bindings.RoutingMessageHandler_handle_query_channel_range(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = Result_NoneLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, msg);
        return ret_hu_conv;
    }
    /**
     * Handles when a peer asks us to send routing gossip messages for a
     * list of short_channel_ids.
     */
    handle_query_short_channel_ids(their_node_id, msg) {
        const ret = bindings.RoutingMessageHandler_handle_query_short_channel_ids(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = Result_NoneLightningErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(this, msg);
        return ret_hu_conv;
    }
    /**
     * Gets the node feature flags which this handler itself supports. All available handlers are
     * queried similarly and their feature flags are OR'd together to form the [`NodeFeatures`]
     * which are broadcasted in our [`NodeAnnouncement`] message.
     */
    provided_node_features() {
        const ret = bindings.RoutingMessageHandler_provided_node_features(this.ptr);
        const ret_hu_conv = new NodeFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Gets the init feature flags which should be sent to the given peer. All available handlers
     * are queried similarly and their feature flags are OR'd together to form the [`InitFeatures`]
     * which are sent in our [`Init`] message.
     *
     * Note that this method is called before [`Self::peer_connected`].
     */
    provided_init_features(their_node_id) {
        const ret = bindings.RoutingMessageHandler_provided_init_features(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)));
        const ret_hu_conv = new InitFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=RoutingMessageHandler.mjs.map