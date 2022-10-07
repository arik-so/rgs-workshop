import { InitFeatures } from '../structs/InitFeatures.mjs';
import { NodeFeatures } from '../structs/NodeFeatures.mjs';
import { Init } from '../structs/Init.mjs';
import { OnionMessage } from '../structs/OnionMessage.mjs';
import { OnionMessageProvider } from '../structs/OnionMessageProvider.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKOnionMessageHandlerHolder {
}
/**
 * A trait to describe an object that can receive onion messages.
 */
export class OnionMessageHandler extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.OnionMessageHandler_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of OnionMessageHandler from a given implementation */
    static new_impl(arg, onionMessageProvider_impl) {
        const impl_holder = new LDKOnionMessageHandlerHolder();
        let structImplementation = {
            handle_onion_message(peer_node_id, msg) {
                const peer_node_id_conv = bindings.decodeUint8Array(peer_node_id);
                const msg_hu_conv = new OnionMessage(null, msg);
                arg.handle_onion_message(peer_node_id_conv, msg_hu_conv);
            },
            peer_connected(their_node_id, init) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                const init_hu_conv = new Init(null, init);
                arg.peer_connected(their_node_id_conv, init_hu_conv);
            },
            peer_disconnected(their_node_id, no_connection_possible) {
                const their_node_id_conv = bindings.decodeUint8Array(their_node_id);
                arg.peer_disconnected(their_node_id_conv, no_connection_possible);
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
        const onionMessageProvider = OnionMessageProvider.new_impl(onionMessageProvider_impl);
        const ptr_idx = bindings.LDKOnionMessageHandler_new(structImplementation, onionMessageProvider.instance_idx);
        impl_holder.held = new OnionMessageHandler(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        impl_holder.held.ptrs_to.push(onionMessageProvider);
        return impl_holder.held;
    }
    /**
     * Handle an incoming onion_message message from the given peer.
     */
    handle_onion_message(peer_node_id, msg) {
        bindings.OnionMessageHandler_handle_onion_message(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(peer_node_id, 33)), msg == null ? 0n : CommonBase.get_ptr_of(msg));
        CommonBase.add_ref_from(this, msg);
    }
    /**
     * Called when a connection is established with a peer. Can be used to track which peers
     * advertise onion message support and are online.
     */
    peer_connected(their_node_id, init) {
        bindings.OnionMessageHandler_peer_connected(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), init == null ? 0n : CommonBase.get_ptr_of(init));
        CommonBase.add_ref_from(this, init);
    }
    /**
     * Indicates a connection to the peer failed/an existing connection was lost. Allows handlers to
     * drop and refuse to forward onion messages to this peer.
     */
    peer_disconnected(their_node_id, no_connection_possible) {
        bindings.OnionMessageHandler_peer_disconnected(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)), no_connection_possible);
    }
    /**
     * Gets the node feature flags which this handler itself supports. All available handlers are
     * queried similarly and their feature flags are OR'd together to form the [`NodeFeatures`]
     * which are broadcasted in our [`NodeAnnouncement`] message.
     */
    provided_node_features() {
        const ret = bindings.OnionMessageHandler_provided_node_features(this.ptr);
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
        const ret = bindings.OnionMessageHandler_provided_init_features(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(their_node_id, 33)));
        const ret_hu_conv = new InitFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=OnionMessageHandler.mjs.map