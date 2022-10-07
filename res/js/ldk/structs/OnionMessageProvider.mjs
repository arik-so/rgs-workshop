import { OnionMessage } from '../structs/OnionMessage.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKOnionMessageProviderHolder {
}
/**
 * A trait indicating an object may generate onion messages to send
 */
export class OnionMessageProvider extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.OnionMessageProvider_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of OnionMessageProvider from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKOnionMessageProviderHolder();
        let structImplementation = {
            next_onion_message_for_peer(peer_node_id) {
                const peer_node_id_conv = bindings.decodeUint8Array(peer_node_id);
                const ret = arg.next_onion_message_for_peer(peer_node_id_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
        };
        const ptr_idx = bindings.LDKOnionMessageProvider_new(structImplementation);
        impl_holder.held = new OnionMessageProvider(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Gets the next pending onion message for the peer with the given node id.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    next_onion_message_for_peer(peer_node_id) {
        const ret = bindings.OnionMessageProvider_next_onion_message_for_peer(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(peer_node_id, 33)));
        const ret_hu_conv = new OnionMessage(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=OnionMessageProvider.mjs.map