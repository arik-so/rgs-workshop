import { RoutingFees } from '../structs/RoutingFees.mjs';
import { NodeAnnouncementInfo } from '../structs/NodeAnnouncementInfo.mjs';
import { Result_NodeInfoDecodeErrorZ } from '../structs/Result_NodeInfoDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Details about a node in the network, known from the network announcement.
 */
export class NodeInfo extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.NodeInfo_free);
    }
    /**
     * All valid channels a node has announced
     *
     * Returns a copy of the field.
     */
    get_channels() {
        const ret = bindings.NodeInfo_get_channels(this.ptr);
        const ret_conv = bindings.decodeUint64Array(ret);
        return ret_conv;
    }
    /**
     * All valid channels a node has announced
     */
    set_channels(val) {
        bindings.NodeInfo_set_channels(this.ptr, bindings.encodeUint64Array(val));
    }
    /**
     * Lowest fees enabling routing via any of the enabled, known channels to a node.
     * The two fields (flat and proportional fee) are independent,
     * meaning they don't have to refer to the same channel.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_lowest_inbound_channel_fees() {
        const ret = bindings.NodeInfo_get_lowest_inbound_channel_fees(this.ptr);
        const ret_hu_conv = new RoutingFees(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Lowest fees enabling routing via any of the enabled, known channels to a node.
     * The two fields (flat and proportional fee) are independent,
     * meaning they don't have to refer to the same channel.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_lowest_inbound_channel_fees(val) {
        bindings.NodeInfo_set_lowest_inbound_channel_fees(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * More information about a node from node_announcement.
     * Optional because we store a Node entry after learning about it from
     * a channel announcement, but before receiving a node announcement.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_announcement_info() {
        const ret = bindings.NodeInfo_get_announcement_info(this.ptr);
        const ret_hu_conv = new NodeAnnouncementInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * More information about a node from node_announcement.
     * Optional because we store a Node entry after learning about it from
     * a channel announcement, but before receiving a node announcement.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_announcement_info(val) {
        bindings.NodeInfo_set_announcement_info(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Constructs a new NodeInfo given each field
     */
    static constructor_new(channels_arg, lowest_inbound_channel_fees_arg, announcement_info_arg) {
        const ret = bindings.NodeInfo_new(bindings.encodeUint64Array(channels_arg), lowest_inbound_channel_fees_arg == null ? 0n : CommonBase.get_ptr_of(lowest_inbound_channel_fees_arg), announcement_info_arg == null ? 0n : CommonBase.get_ptr_of(announcement_info_arg));
        const ret_hu_conv = new NodeInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, lowest_inbound_channel_fees_arg);
        CommonBase.add_ref_from(ret_hu_conv, announcement_info_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.NodeInfo_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the NodeInfo
     */
    clone() {
        const ret = bindings.NodeInfo_clone(this.ptr);
        const ret_hu_conv = new NodeInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the NodeInfo object into a byte array which can be read by NodeInfo_read
     */
    write() {
        const ret = bindings.NodeInfo_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a NodeInfo from a byte array, created by NodeInfo_write
     */
    static constructor_read(ser) {
        const ret = bindings.NodeInfo_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_NodeInfoDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=NodeInfo.mjs.map