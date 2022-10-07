import { Logger } from '../structs/Logger.mjs';
import { NetAddress } from '../structs/NetAddress.mjs';
import { Option_NetAddressZ } from '../structs/Option_NetAddressZ.mjs';
import { Result_CVec_u8ZPeerHandleErrorZ } from '../structs/Result_CVec_u8ZPeerHandleErrorZ.mjs';
import { Result_NonePeerHandleErrorZ } from '../structs/Result_NonePeerHandleErrorZ.mjs';
import { Result_boolPeerHandleErrorZ } from '../structs/Result_boolPeerHandleErrorZ.mjs';
import { ChannelMessageHandler } from '../structs/ChannelMessageHandler.mjs';
import { RoutingMessageHandler } from '../structs/RoutingMessageHandler.mjs';
import { OnionMessageHandler } from '../structs/OnionMessageHandler.mjs';
import { CustomMessageHandler } from '../structs/CustomMessageHandler.mjs';
import { SocketDescriptor } from '../structs/SocketDescriptor.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A PeerManager manages a set of peers, described by their [`SocketDescriptor`] and marshalls
 * socket events into messages which it passes on to its [`MessageHandler`].
 *
 * Locks are taken internally, so you must never assume that reentrancy from a
 * [`SocketDescriptor`] call back into [`PeerManager`] methods will not deadlock.
 *
 * Calls to [`read_event`] will decode relevant messages and pass them to the
 * [`ChannelMessageHandler`], likely doing message processing in-line. Thus, the primary form of
 * parallelism in Rust-Lightning is in calls to [`read_event`]. Note, however, that calls to any
 * [`PeerManager`] functions related to the same connection must occur only in serial, making new
 * calls only after previous ones have returned.
 *
 * Rather than using a plain PeerManager, it is preferable to use either a SimpleArcPeerManager
 * a SimpleRefPeerManager, for conciseness. See their documentation for more details, but
 * essentially you should default to using a SimpleRefPeerManager, and use a
 * SimpleArcPeerManager when you require a PeerManager with a static lifetime, such as when
 * you're using lightning-net-tokio.
 *
 * [`read_event`]: PeerManager::read_event
 */
export declare class PeerManager extends CommonBase {
    /**
     * Constructs a new PeerManager with the given message handlers and node_id secret key
     * ephemeral_random_data is used to derive per-connection ephemeral keys and must be
     * cryptographically secure random bytes.
     *
     * `current_time` is used as an always-increasing counter that survives across restarts and is
     * incremented irregularly internally. In general it is best to simply use the current UNIX
     * timestamp, however if it is not available a persistent counter that increases once per
     * minute should suffice.
     */
    static constructor_new(message_handler_chan_handler_arg: ChannelMessageHandler, message_handler_route_handler_arg: RoutingMessageHandler, message_handler_onion_message_handler_arg: OnionMessageHandler, our_node_secret: Uint8Array, current_time: bigint, ephemeral_random_data: Uint8Array, logger: Logger, custom_message_handler: CustomMessageHandler): PeerManager;
    /**
     * Get the list of node ids for peers which have completed the initial handshake.
     *
     * For outbound connections, this will be the same as the their_node_id parameter passed in to
     * new_outbound_connection, however entries will only appear once the initial handshake has
     * completed and we are sure the remote peer has the private key for the given node_id.
     */
    get_peer_node_ids(): Uint8Array[];
    /**
     * Indicates a new outbound connection has been established to a node with the given node_id
     * and an optional remote network address.
     *
     * The remote network address adds the option to report a remote IP address back to a connecting
     * peer using the init message.
     * The user should pass the remote network address of the host they are connected to.
     *
     * If an `Err` is returned here you must disconnect the connection immediately.
     *
     * Returns a small number of bytes to send to the remote node (currently always 50).
     *
     * Panics if descriptor is duplicative with some other descriptor which has not yet been
     * [`socket_disconnected()`].
     *
     * [`socket_disconnected()`]: PeerManager::socket_disconnected
     */
    new_outbound_connection(their_node_id: Uint8Array, descriptor: SocketDescriptor, remote_network_address: Option_NetAddressZ): Result_CVec_u8ZPeerHandleErrorZ;
    /**
     * Indicates a new inbound connection has been established to a node with an optional remote
     * network address.
     *
     * The remote network address adds the option to report a remote IP address back to a connecting
     * peer using the init message.
     * The user should pass the remote network address of the host they are connected to.
     *
     * May refuse the connection by returning an Err, but will never write bytes to the remote end
     * (outbound connector always speaks first). If an `Err` is returned here you must disconnect
     * the connection immediately.
     *
     * Panics if descriptor is duplicative with some other descriptor which has not yet been
     * [`socket_disconnected()`].
     *
     * [`socket_disconnected()`]: PeerManager::socket_disconnected
     */
    new_inbound_connection(descriptor: SocketDescriptor, remote_network_address: Option_NetAddressZ): Result_NonePeerHandleErrorZ;
    /**
     * Indicates that there is room to write data to the given socket descriptor.
     *
     * May return an Err to indicate that the connection should be closed.
     *
     * May call [`send_data`] on the descriptor passed in (or an equal descriptor) before
     * returning. Thus, be very careful with reentrancy issues! The invariants around calling
     * [`write_buffer_space_avail`] in case a write did not fully complete must still hold - be
     * ready to call `[write_buffer_space_avail`] again if a write call generated here isn't
     * sufficient!
     *
     * [`send_data`]: SocketDescriptor::send_data
     * [`write_buffer_space_avail`]: PeerManager::write_buffer_space_avail
     */
    write_buffer_space_avail(descriptor: SocketDescriptor): Result_NonePeerHandleErrorZ;
    /**
     * Indicates that data was read from the given socket descriptor.
     *
     * May return an Err to indicate that the connection should be closed.
     *
     * Will *not* call back into [`send_data`] on any descriptors to avoid reentrancy complexity.
     * Thus, however, you should call [`process_events`] after any `read_event` to generate
     * [`send_data`] calls to handle responses.
     *
     * If `Ok(true)` is returned, further read_events should not be triggered until a
     * [`send_data`] call on this descriptor has `resume_read` set (preventing DoS issues in the
     * send buffer).
     *
     * [`send_data`]: SocketDescriptor::send_data
     * [`process_events`]: PeerManager::process_events
     */
    read_event(peer_descriptor: SocketDescriptor, data: Uint8Array): Result_boolPeerHandleErrorZ;
    /**
     * Checks for any events generated by our handlers and processes them. Includes sending most
     * response messages as well as messages generated by calls to handler functions directly (eg
     * functions like [`ChannelManager::process_pending_htlc_forwards`] or [`send_payment`]).
     *
     * May call [`send_data`] on [`SocketDescriptor`]s. Thus, be very careful with reentrancy
     * issues!
     *
     * You don't have to call this function explicitly if you are using [`lightning-net-tokio`]
     * or one of the other clients provided in our language bindings.
     *
     * Note that if there are any other calls to this function waiting on lock(s) this may return
     * without doing any work. All available events that need handling will be handled before the
     * other calls return.
     *
     * [`send_payment`]: crate::ln::channelmanager::ChannelManager::send_payment
     * [`ChannelManager::process_pending_htlc_forwards`]: crate::ln::channelmanager::ChannelManager::process_pending_htlc_forwards
     * [`send_data`]: SocketDescriptor::send_data
     */
    process_events(): void;
    /**
     * Indicates that the given socket descriptor's connection is now closed.
     */
    socket_disconnected(descriptor: SocketDescriptor): void;
    /**
     * Disconnect a peer given its node id.
     *
     * Set `no_connection_possible` to true to prevent any further connection with this peer,
     * force-closing any channels we have with it.
     *
     * If a peer is connected, this will call [`disconnect_socket`] on the descriptor for the
     * peer. Thus, be very careful about reentrancy issues.
     *
     * [`disconnect_socket`]: SocketDescriptor::disconnect_socket
     */
    disconnect_by_node_id(node_id: Uint8Array, no_connection_possible: boolean): void;
    /**
     * Disconnects all currently-connected peers. This is useful on platforms where there may be
     * an indication that TCP sockets have stalled even if we weren't around to time them out
     * using regular ping/pongs.
     */
    disconnect_all_peers(): void;
    /**
     * Send pings to each peer and disconnect those which did not respond to the last round of
     * pings.
     *
     * This may be called on any timescale you want, however, roughly once every ten seconds is
     * preferred. The call rate determines both how often we send a ping to our peers and how much
     * time they have to respond before we disconnect them.
     *
     * May call [`send_data`] on all [`SocketDescriptor`]s. Thus, be very careful with reentrancy
     * issues!
     *
     * [`send_data`]: SocketDescriptor::send_data
     */
    timer_tick_occurred(): void;
    /**
     * Generates a signed node_announcement from the given arguments, sending it to all connected
     * peers. Note that peers will likely ignore this message unless we have at least one public
     * channel which has at least six confirmations on-chain.
     *
     * `rgb` is a node \"color\" and `alias` is a printable human-readable string to describe this
     * node to humans. They carry no in-protocol meaning.
     *
     * `addresses` represent the set (possibly empty) of socket addresses on which this node
     * accepts incoming connections. These will be included in the node_announcement, publicly
     * tying these addresses together and to this node. If you wish to preserve user privacy,
     * addresses should likely contain only Tor Onion addresses.
     *
     * Panics if `addresses` is absurdly large (more than 100).
     *
     * [`get_and_clear_pending_msg_events`]: MessageSendEventsProvider::get_and_clear_pending_msg_events
     */
    broadcast_node_announcement(rgb: Uint8Array, alias: Uint8Array, addresses: NetAddress[]): void;
}
