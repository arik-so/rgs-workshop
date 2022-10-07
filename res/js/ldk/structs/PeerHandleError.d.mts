import { CommonBase } from './CommonBase.mjs';
/**
 * Error for PeerManager errors. If you get one of these, you must disconnect the socket and
 * generate no further read_event/write_buffer_space_avail/socket_disconnected calls for the
 * descriptor.
 */
export declare class PeerHandleError extends CommonBase {
    /**
     * Used to indicate that we probably can't make any future connections to this peer (e.g.
     * because we required features that our peer was missing, or vice versa).
     *
     * While LDK's [`ChannelManager`] will not do it automatically, you likely wish to force-close
     * any channels with this peer or check for new versions of LDK.
     *
     * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
     */
    get_no_connection_possible(): boolean;
    /**
     * Used to indicate that we probably can't make any future connections to this peer (e.g.
     * because we required features that our peer was missing, or vice versa).
     *
     * While LDK's [`ChannelManager`] will not do it automatically, you likely wish to force-close
     * any channels with this peer or check for new versions of LDK.
     *
     * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
     */
    set_no_connection_possible(val: boolean): void;
    /**
     * Constructs a new PeerHandleError given each field
     */
    static constructor_new(no_connection_possible_arg: boolean): PeerHandleError;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the PeerHandleError
     */
    clone(): PeerHandleError;
}
