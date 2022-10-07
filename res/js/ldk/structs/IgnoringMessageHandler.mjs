import { MessageSendEventsProvider } from '../structs/MessageSendEventsProvider.mjs';
import { OnionMessageProvider } from '../structs/OnionMessageProvider.mjs';
import { RoutingMessageHandler } from '../structs/RoutingMessageHandler.mjs';
import { OnionMessageHandler } from '../structs/OnionMessageHandler.mjs';
import { CustomMessageReader } from '../structs/CustomMessageReader.mjs';
import { CustomMessageHandler } from '../structs/CustomMessageHandler.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A dummy struct which implements `RoutingMessageHandler` without storing any routing information
 * or doing any processing. You can provide one of these as the route_handler in a MessageHandler.
 */
export class IgnoringMessageHandler extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.IgnoringMessageHandler_free);
    }
    /**
     * Constructs a new IgnoringMessageHandler given each field
     */
    static constructor_new() {
        const ret = bindings.IgnoringMessageHandler_new();
        const ret_hu_conv = new IgnoringMessageHandler(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Constructs a new MessageSendEventsProvider which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned MessageSendEventsProvider must be freed before this_arg is
     */
    as_MessageSendEventsProvider() {
        const ret = bindings.IgnoringMessageHandler_as_MessageSendEventsProvider(this.ptr);
        const ret_hu_conv = new MessageSendEventsProvider(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new RoutingMessageHandler which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned RoutingMessageHandler must be freed before this_arg is
     */
    as_RoutingMessageHandler() {
        const ret = bindings.IgnoringMessageHandler_as_RoutingMessageHandler(this.ptr);
        const ret_hu_conv = new RoutingMessageHandler(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new OnionMessageProvider which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned OnionMessageProvider must be freed before this_arg is
     */
    as_OnionMessageProvider() {
        const ret = bindings.IgnoringMessageHandler_as_OnionMessageProvider(this.ptr);
        const ret_hu_conv = new OnionMessageProvider(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new OnionMessageHandler which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned OnionMessageHandler must be freed before this_arg is
     */
    as_OnionMessageHandler() {
        const ret = bindings.IgnoringMessageHandler_as_OnionMessageHandler(this.ptr);
        const ret_hu_conv = new OnionMessageHandler(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new CustomMessageReader which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned CustomMessageReader must be freed before this_arg is
     */
    as_CustomMessageReader() {
        const ret = bindings.IgnoringMessageHandler_as_CustomMessageReader(this.ptr);
        const ret_hu_conv = new CustomMessageReader(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a new CustomMessageHandler which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned CustomMessageHandler must be freed before this_arg is
     */
    as_CustomMessageHandler() {
        const ret = bindings.IgnoringMessageHandler_as_CustomMessageHandler(this.ptr);
        const ret_hu_conv = new CustomMessageHandler(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=IgnoringMessageHandler.mjs.map