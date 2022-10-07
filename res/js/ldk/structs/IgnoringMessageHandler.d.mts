import { MessageSendEventsProvider } from '../structs/MessageSendEventsProvider.mjs';
import { OnionMessageProvider } from '../structs/OnionMessageProvider.mjs';
import { RoutingMessageHandler } from '../structs/RoutingMessageHandler.mjs';
import { OnionMessageHandler } from '../structs/OnionMessageHandler.mjs';
import { CustomMessageReader } from '../structs/CustomMessageReader.mjs';
import { CustomMessageHandler } from '../structs/CustomMessageHandler.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A dummy struct which implements `RoutingMessageHandler` without storing any routing information
 * or doing any processing. You can provide one of these as the route_handler in a MessageHandler.
 */
export declare class IgnoringMessageHandler extends CommonBase {
    /**
     * Constructs a new IgnoringMessageHandler given each field
     */
    static constructor_new(): IgnoringMessageHandler;
    /**
     * Constructs a new MessageSendEventsProvider which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned MessageSendEventsProvider must be freed before this_arg is
     */
    as_MessageSendEventsProvider(): MessageSendEventsProvider;
    /**
     * Constructs a new RoutingMessageHandler which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned RoutingMessageHandler must be freed before this_arg is
     */
    as_RoutingMessageHandler(): RoutingMessageHandler;
    /**
     * Constructs a new OnionMessageProvider which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned OnionMessageProvider must be freed before this_arg is
     */
    as_OnionMessageProvider(): OnionMessageProvider;
    /**
     * Constructs a new OnionMessageHandler which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned OnionMessageHandler must be freed before this_arg is
     */
    as_OnionMessageHandler(): OnionMessageHandler;
    /**
     * Constructs a new CustomMessageReader which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned CustomMessageReader must be freed before this_arg is
     */
    as_CustomMessageReader(): CustomMessageReader;
    /**
     * Constructs a new CustomMessageHandler which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned CustomMessageHandler must be freed before this_arg is
     */
    as_CustomMessageHandler(): CustomMessageHandler;
}
