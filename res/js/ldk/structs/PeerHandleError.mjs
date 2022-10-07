import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Error for PeerManager errors. If you get one of these, you must disconnect the socket and
 * generate no further read_event/write_buffer_space_avail/socket_disconnected calls for the
 * descriptor.
 */
export class PeerHandleError extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.PeerHandleError_free);
    }
    /**
     * Used to indicate that we probably can't make any future connections to this peer (e.g.
     * because we required features that our peer was missing, or vice versa).
     *
     * While LDK's [`ChannelManager`] will not do it automatically, you likely wish to force-close
     * any channels with this peer or check for new versions of LDK.
     *
     * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
     */
    get_no_connection_possible() {
        const ret = bindings.PeerHandleError_get_no_connection_possible(this.ptr);
        return ret;
    }
    /**
     * Used to indicate that we probably can't make any future connections to this peer (e.g.
     * because we required features that our peer was missing, or vice versa).
     *
     * While LDK's [`ChannelManager`] will not do it automatically, you likely wish to force-close
     * any channels with this peer or check for new versions of LDK.
     *
     * [`ChannelManager`]: crate::ln::channelmanager::ChannelManager
     */
    set_no_connection_possible(val) {
        bindings.PeerHandleError_set_no_connection_possible(this.ptr, val);
    }
    /**
     * Constructs a new PeerHandleError given each field
     */
    static constructor_new(no_connection_possible_arg) {
        const ret = bindings.PeerHandleError_new(no_connection_possible_arg);
        const ret_hu_conv = new PeerHandleError(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.PeerHandleError_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the PeerHandleError
     */
    clone() {
        const ret = bindings.PeerHandleError_clone(this.ptr);
        const ret_hu_conv = new PeerHandleError(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=PeerHandleError.mjs.map