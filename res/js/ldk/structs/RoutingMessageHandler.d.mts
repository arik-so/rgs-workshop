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
import { MessageSendEventsProviderInterface } from '../structs/MessageSendEventsProvider.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of RoutingMessageHandler */
export interface RoutingMessageHandlerInterface {
    /**Handle an incoming node_announcement message, returning true if it should be forwarded on,
     * false or returning an Err otherwise.
     */
    handle_node_announcement(msg: NodeAnnouncement): Result_boolLightningErrorZ;
    /**Handle a channel_announcement message, returning true if it should be forwarded on, false
     * or returning an Err otherwise.
     */
    handle_channel_announcement(msg: ChannelAnnouncement): Result_boolLightningErrorZ;
    /**Handle an incoming channel_update message, returning true if it should be forwarded on,
     * false or returning an Err otherwise.
     */
    handle_channel_update(msg: ChannelUpdate): Result_boolLightningErrorZ;
    /**Gets channel announcements and updates required to dump our routing table to a remote node,
     * starting at the short_channel_id indicated by starting_point and including announcements
     * for a single channel.
     */
    get_next_channel_announcement(starting_point: bigint): Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ;
    /**Gets a node announcement required to dump our routing table to a remote node, starting at
     * the node *after* the provided pubkey and including up to one announcement immediately
     * higher (as defined by <PublicKey as Ord>::cmp) than starting_point.
     * If None is provided for starting_point, we start at the first node.
     *
     * Note that starting_point (or a relevant inner pointer) may be NULL or all-0s to represent None
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_next_node_announcement(starting_point: Uint8Array): NodeAnnouncement;
    /**Called when a connection is established with a peer. This can be used to
     * perform routing table synchronization using a strategy defined by the
     * implementor.
     */
    peer_connected(their_node_id: Uint8Array, init: Init): void;
    /**Handles the reply of a query we initiated to learn about channels
     * for a given range of blocks. We can expect to receive one or more
     * replies to a single query.
     */
    handle_reply_channel_range(their_node_id: Uint8Array, msg: ReplyChannelRange): Result_NoneLightningErrorZ;
    /**Handles the reply of a query we initiated asking for routing gossip
     * messages for a list of channels. We should receive this message when
     * a node has completed its best effort to send us the pertaining routing
     * gossip messages.
     */
    handle_reply_short_channel_ids_end(their_node_id: Uint8Array, msg: ReplyShortChannelIdsEnd): Result_NoneLightningErrorZ;
    /**Handles when a peer asks us to send a list of short_channel_ids
     * for the requested range of blocks.
     */
    handle_query_channel_range(their_node_id: Uint8Array, msg: QueryChannelRange): Result_NoneLightningErrorZ;
    /**Handles when a peer asks us to send routing gossip messages for a
     * list of short_channel_ids.
     */
    handle_query_short_channel_ids(their_node_id: Uint8Array, msg: QueryShortChannelIds): Result_NoneLightningErrorZ;
    /**Gets the node feature flags which this handler itself supports. All available handlers are
     * queried similarly and their feature flags are OR'd together to form the [`NodeFeatures`]
     * which are broadcasted in our [`NodeAnnouncement`] message.
     */
    provided_node_features(): NodeFeatures;
    /**Gets the init feature flags which should be sent to the given peer. All available handlers
     * are queried similarly and their feature flags are OR'd together to form the [`InitFeatures`]
     * which are sent in our [`Init`] message.
     *
     * Note that this method is called before [`Self::peer_connected`].
     */
    provided_init_features(their_node_id: Uint8Array): InitFeatures;
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
export declare class RoutingMessageHandler extends CommonBase {
    /** Creates a new instance of RoutingMessageHandler from a given implementation */
    static new_impl(arg: RoutingMessageHandlerInterface, messageSendEventsProvider_impl: MessageSendEventsProviderInterface): RoutingMessageHandler;
    /**
     * Handle an incoming node_announcement message, returning true if it should be forwarded on,
     * false or returning an Err otherwise.
     */
    handle_node_announcement(msg: NodeAnnouncement): Result_boolLightningErrorZ;
    /**
     * Handle a channel_announcement message, returning true if it should be forwarded on, false
     * or returning an Err otherwise.
     */
    handle_channel_announcement(msg: ChannelAnnouncement): Result_boolLightningErrorZ;
    /**
     * Handle an incoming channel_update message, returning true if it should be forwarded on,
     * false or returning an Err otherwise.
     */
    handle_channel_update(msg: ChannelUpdate): Result_boolLightningErrorZ;
    /**
     * Gets channel announcements and updates required to dump our routing table to a remote node,
     * starting at the short_channel_id indicated by starting_point and including announcements
     * for a single channel.
     */
    get_next_channel_announcement(starting_point: bigint): Option_C3Tuple_ChannelAnnouncementChannelUpdateChannelUpdateZZ;
    /**
     * Gets a node announcement required to dump our routing table to a remote node, starting at
     * the node *after* the provided pubkey and including up to one announcement immediately
     * higher (as defined by <PublicKey as Ord>::cmp) than starting_point.
     * If None is provided for starting_point, we start at the first node.
     *
     * Note that starting_point (or a relevant inner pointer) may be NULL or all-0s to represent None
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_next_node_announcement(starting_point: Uint8Array): NodeAnnouncement;
    /**
     * Called when a connection is established with a peer. This can be used to
     * perform routing table synchronization using a strategy defined by the
     * implementor.
     */
    peer_connected(their_node_id: Uint8Array, init: Init): void;
    /**
     * Handles the reply of a query we initiated to learn about channels
     * for a given range of blocks. We can expect to receive one or more
     * replies to a single query.
     */
    handle_reply_channel_range(their_node_id: Uint8Array, msg: ReplyChannelRange): Result_NoneLightningErrorZ;
    /**
     * Handles the reply of a query we initiated asking for routing gossip
     * messages for a list of channels. We should receive this message when
     * a node has completed its best effort to send us the pertaining routing
     * gossip messages.
     */
    handle_reply_short_channel_ids_end(their_node_id: Uint8Array, msg: ReplyShortChannelIdsEnd): Result_NoneLightningErrorZ;
    /**
     * Handles when a peer asks us to send a list of short_channel_ids
     * for the requested range of blocks.
     */
    handle_query_channel_range(their_node_id: Uint8Array, msg: QueryChannelRange): Result_NoneLightningErrorZ;
    /**
     * Handles when a peer asks us to send routing gossip messages for a
     * list of short_channel_ids.
     */
    handle_query_short_channel_ids(their_node_id: Uint8Array, msg: QueryShortChannelIds): Result_NoneLightningErrorZ;
    /**
     * Gets the node feature flags which this handler itself supports. All available handlers are
     * queried similarly and their feature flags are OR'd together to form the [`NodeFeatures`]
     * which are broadcasted in our [`NodeAnnouncement`] message.
     */
    provided_node_features(): NodeFeatures;
    /**
     * Gets the init feature flags which should be sent to the given peer. All available handlers
     * are queried similarly and their feature flags are OR'd together to form the [`InitFeatures`]
     * which are sent in our [`Init`] message.
     *
     * Note that this method is called before [`Self::peer_connected`].
     */
    provided_init_features(their_node_id: Uint8Array): InitFeatures;
}
