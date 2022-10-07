import { ChannelUpdate } from '../structs/ChannelUpdate.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Update to the [`NetworkGraph`] based on payment failure information conveyed via the Onion
 * return packet by a node along the route. See [BOLT #4] for details.
 *
 * [BOLT #4]: https://github.com/lightning/bolts/blob/master/04-onion-routing.md
 */
export class NetworkUpdate extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.NetworkUpdate_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKNetworkUpdate_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new NetworkUpdate_ChannelUpdateMessage(ptr);
            case 1: return new NetworkUpdate_ChannelFailure(ptr);
            case 2: return new NetworkUpdate_NodeFailure(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.NetworkUpdate_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the NetworkUpdate
     */
    clone() {
        const ret = bindings.NetworkUpdate_clone(this.ptr);
        const ret_hu_conv = NetworkUpdate.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ChannelUpdateMessage-variant NetworkUpdate
     */
    static constructor_channel_update_message(msg) {
        const ret = bindings.NetworkUpdate_channel_update_message(msg == null ? 0n : CommonBase.get_ptr_of(msg));
        const ret_hu_conv = NetworkUpdate.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, msg);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ChannelFailure-variant NetworkUpdate
     */
    static constructor_channel_failure(short_channel_id, is_permanent) {
        const ret = bindings.NetworkUpdate_channel_failure(short_channel_id, is_permanent);
        const ret_hu_conv = NetworkUpdate.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new NodeFailure-variant NetworkUpdate
     */
    static constructor_node_failure(node_id, is_permanent) {
        const ret = bindings.NetworkUpdate_node_failure(bindings.encodeUint8Array(bindings.check_arr_len(node_id, 33)), is_permanent);
        const ret_hu_conv = NetworkUpdate.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Serialize the NetworkUpdate object into a byte array which can be read by NetworkUpdate_read
     */
    write() {
        const ret = bindings.NetworkUpdate_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
}
/** A NetworkUpdate of type ChannelUpdateMessage */
export class NetworkUpdate_ChannelUpdateMessage extends NetworkUpdate {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const msg = bindings.LDKNetworkUpdate_ChannelUpdateMessage_get_msg(ptr);
        const msg_hu_conv = new ChannelUpdate(null, msg);
        CommonBase.add_ref_from(msg_hu_conv, this);
        this.msg = msg_hu_conv;
    }
}
/** A NetworkUpdate of type ChannelFailure */
export class NetworkUpdate_ChannelFailure extends NetworkUpdate {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.short_channel_id = bindings.LDKNetworkUpdate_ChannelFailure_get_short_channel_id(ptr);
        this.is_permanent = bindings.LDKNetworkUpdate_ChannelFailure_get_is_permanent(ptr);
    }
}
/** A NetworkUpdate of type NodeFailure */
export class NetworkUpdate_NodeFailure extends NetworkUpdate {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const node_id = bindings.LDKNetworkUpdate_NodeFailure_get_node_id(ptr);
        const node_id_conv = bindings.decodeUint8Array(node_id);
        this.node_id = node_id_conv;
        this.is_permanent = bindings.LDKNetworkUpdate_NodeFailure_get_is_permanent(ptr);
    }
}
//# sourceMappingURL=NetworkUpdate.mjs.map