import { MessageSendEventsProvider } from '../structs/MessageSendEventsProvider.mjs';
import { RoutingMessageHandler } from '../structs/RoutingMessageHandler.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Receives and validates network updates from peers,
 * stores authentic and relevant data as a network graph.
 * This network graph is then used for routing payments.
 * Provides interface to help with initial routing sync by
 * serving historical announcements.
 *
 * Serves as an [`EventHandler`] for applying updates from [`Event::PaymentPathFailed`] to the
 * [`NetworkGraph`].
 */
export class P2PGossipSync extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.P2PGossipSync_free);
    }
    /**
     * Creates a new tracker of the actual state of the network of channels and nodes,
     * assuming an existing Network Graph.
     * Chain monitor is used to make sure announced channels exist on-chain,
     * channel data is correct, and that the announcement is signed with
     * channel owners' keys.
     */
    static constructor_new(network_graph, chain_access, logger) {
        const ret = bindings.P2PGossipSync_new(network_graph == null ? 0n : CommonBase.get_ptr_of(network_graph), CommonBase.get_ptr_of(chain_access), logger == null ? 0n : CommonBase.get_ptr_of(logger));
        const ret_hu_conv = new P2PGossipSync(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, network_graph);
        CommonBase.add_ref_from(ret_hu_conv, chain_access);
        CommonBase.add_ref_from(ret_hu_conv, logger);
        return ret_hu_conv;
    }
    /**
     * Adds a provider used to check new announcements. Does not affect
     * existing announcements unless they are updated.
     * Add, update or remove the provider would replace the current one.
     */
    add_chain_access(chain_access) {
        bindings.P2PGossipSync_add_chain_access(this.ptr, CommonBase.get_ptr_of(chain_access));
        CommonBase.add_ref_from(this, chain_access);
    }
    /**
     * Constructs a new RoutingMessageHandler which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned RoutingMessageHandler must be freed before this_arg is
     */
    as_RoutingMessageHandler() {
        const ret = bindings.P2PGossipSync_as_RoutingMessageHandler(this.ptr);
        const ret_hu_conv = new RoutingMessageHandler(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new MessageSendEventsProvider which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned MessageSendEventsProvider must be freed before this_arg is
     */
    as_MessageSendEventsProvider() {
        const ret = bindings.P2PGossipSync_as_MessageSendEventsProvider(this.ptr);
        const ret_hu_conv = new MessageSendEventsProvider(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=P2PGossipSync.mjs.map