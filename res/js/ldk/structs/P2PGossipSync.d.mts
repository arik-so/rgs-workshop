import { Logger } from '../structs/Logger.mjs';
import { NetworkGraph } from '../structs/NetworkGraph.mjs';
import { Option_AccessZ } from '../structs/Option_AccessZ.mjs';
import { MessageSendEventsProvider } from '../structs/MessageSendEventsProvider.mjs';
import { RoutingMessageHandler } from '../structs/RoutingMessageHandler.mjs';
import { CommonBase } from './CommonBase.mjs';
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
export declare class P2PGossipSync extends CommonBase {
    /**
     * Creates a new tracker of the actual state of the network of channels and nodes,
     * assuming an existing Network Graph.
     * Chain monitor is used to make sure announced channels exist on-chain,
     * channel data is correct, and that the announcement is signed with
     * channel owners' keys.
     */
    static constructor_new(network_graph: NetworkGraph, chain_access: Option_AccessZ, logger: Logger): P2PGossipSync;
    /**
     * Adds a provider used to check new announcements. Does not affect
     * existing announcements unless they are updated.
     * Add, update or remove the provider would replace the current one.
     */
    add_chain_access(chain_access: Option_AccessZ): void;
    /**
     * Constructs a new RoutingMessageHandler which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned RoutingMessageHandler must be freed before this_arg is
     */
    as_RoutingMessageHandler(): RoutingMessageHandler;
    /**
     * Constructs a new MessageSendEventsProvider which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned MessageSendEventsProvider must be freed before this_arg is
     */
    as_MessageSendEventsProvider(): MessageSendEventsProvider;
}
