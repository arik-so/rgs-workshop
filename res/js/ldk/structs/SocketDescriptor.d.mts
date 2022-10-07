import { CommonBase } from './CommonBase.mjs';
/** An implementation of SocketDescriptor */
export interface SocketDescriptorInterface {
    /**Attempts to send some data from the given slice to the peer.
     *
     * Returns the amount of data which was sent, possibly 0 if the socket has since disconnected.
     * Note that in the disconnected case, [`PeerManager::socket_disconnected`] must still be
     * called and further write attempts may occur until that time.
     *
     * If the returned size is smaller than `data.len()`, a
     * [`PeerManager::write_buffer_space_avail`] call must be made the next time more data can be
     * written. Additionally, until a `send_data` event completes fully, no further
     * [`PeerManager::read_event`] calls should be made for the same peer! Because this is to
     * prevent denial-of-service issues, you should not read or buffer any data from the socket
     * until then.
     *
     * If a [`PeerManager::read_event`] call on this descriptor had previously returned true
     * (indicating that read events should be paused to prevent DoS in the send buffer),
     * `resume_read` may be set indicating that read events on this descriptor should resume. A
     * `resume_read` of false carries no meaning, and should not cause any action.
     */
    send_data(data: Uint8Array, resume_read: boolean): number;
    /**Disconnect the socket pointed to by this SocketDescriptor.
     *
     * You do *not* need to call [`PeerManager::socket_disconnected`] with this socket after this
     * call (doing so is a noop).
     */
    disconnect_socket(): void;
    /**Checks if two objects are equal given this object's this_arg pointer and another object.
     */
    eq(other_arg: SocketDescriptor): boolean;
    /**Calculate a succinct non-cryptographic hash for an object given its this_arg pointer.
     * This is used, for example, for inclusion of this object in a hash map.
     */
    hash(): bigint;
}
/**
 * Provides an object which can be used to send data to and which uniquely identifies a connection
 * to a remote host. You will need to be able to generate multiple of these which meet Eq and
 * implement Hash to meet the PeerManager API.
 *
 * For efficiency, Clone should be relatively cheap for this type.
 *
 * Two descriptors may compare equal (by [`cmp::Eq`] and [`hash::Hash`]) as long as the original
 * has been disconnected, the [`PeerManager`] has been informed of the disconnection (either by it
 * having triggered the disconnection or a call to [`PeerManager::socket_disconnected`]), and no
 * further calls to the [`PeerManager`] related to the original socket occur. This allows you to
 * use a file descriptor for your SocketDescriptor directly, however for simplicity you may wish
 * to simply use another value which is guaranteed to be globally unique instead.
 */
export declare class SocketDescriptor extends CommonBase {
    /** Creates a new instance of SocketDescriptor from a given implementation */
    static new_impl(arg: SocketDescriptorInterface): SocketDescriptor;
    /**
     * Attempts to send some data from the given slice to the peer.
     *
     * Returns the amount of data which was sent, possibly 0 if the socket has since disconnected.
     * Note that in the disconnected case, [`PeerManager::socket_disconnected`] must still be
     * called and further write attempts may occur until that time.
     *
     * If the returned size is smaller than `data.len()`, a
     * [`PeerManager::write_buffer_space_avail`] call must be made the next time more data can be
     * written. Additionally, until a `send_data` event completes fully, no further
     * [`PeerManager::read_event`] calls should be made for the same peer! Because this is to
     * prevent denial-of-service issues, you should not read or buffer any data from the socket
     * until then.
     *
     * If a [`PeerManager::read_event`] call on this descriptor had previously returned true
     * (indicating that read events should be paused to prevent DoS in the send buffer),
     * `resume_read` may be set indicating that read events on this descriptor should resume. A
     * `resume_read` of false carries no meaning, and should not cause any action.
     */
    send_data(data: Uint8Array, resume_read: boolean): number;
    /**
     * Disconnect the socket pointed to by this SocketDescriptor.
     *
     * You do *not* need to call [`PeerManager::socket_disconnected`] with this socket after this
     * call (doing so is a noop).
     */
    disconnect_socket(): void;
    /**
     * Calculate a succinct non-cryptographic hash for an object given its this_arg pointer.
     * This is used, for example, for inclusion of this object in a hash map.
     */
    hash(): bigint;
    clone_ptr(): bigint;
    /**
     * Creates a copy of a SocketDescriptor
     */
    clone(): SocketDescriptor;
}