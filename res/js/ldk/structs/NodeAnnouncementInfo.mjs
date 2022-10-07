import { NodeFeatures } from '../structs/NodeFeatures.mjs';
import { NetAddress } from '../structs/NetAddress.mjs';
import { Result_NodeAnnouncementInfoDecodeErrorZ } from '../structs/Result_NodeAnnouncementInfoDecodeErrorZ.mjs';
import { NodeAlias } from '../structs/NodeAlias.mjs';
import { NodeAnnouncement } from '../structs/NodeAnnouncement.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Information received in the latest node_announcement from this node.
 */
export class NodeAnnouncementInfo extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.NodeAnnouncementInfo_free);
    }
    /**
     * Protocol features the node announced support for
     */
    get_features() {
        const ret = bindings.NodeAnnouncementInfo_get_features(this.ptr);
        const ret_hu_conv = new NodeFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Protocol features the node announced support for
     */
    set_features(val) {
        bindings.NodeAnnouncementInfo_set_features(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * When the last known update to the node state was issued.
     * Value is opaque, as set in the announcement.
     */
    get_last_update() {
        const ret = bindings.NodeAnnouncementInfo_get_last_update(this.ptr);
        return ret;
    }
    /**
     * When the last known update to the node state was issued.
     * Value is opaque, as set in the announcement.
     */
    set_last_update(val) {
        bindings.NodeAnnouncementInfo_set_last_update(this.ptr, val);
    }
    /**
     * Color assigned to the node
     */
    get_rgb() {
        const ret = bindings.NodeAnnouncementInfo_get_rgb(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Color assigned to the node
     */
    set_rgb(val) {
        bindings.NodeAnnouncementInfo_set_rgb(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 3)));
    }
    /**
     * Moniker assigned to the node.
     * May be invalid or malicious (eg control chars),
     * should not be exposed to the user.
     */
    get_alias() {
        const ret = bindings.NodeAnnouncementInfo_get_alias(this.ptr);
        const ret_hu_conv = new NodeAlias(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Moniker assigned to the node.
     * May be invalid or malicious (eg control chars),
     * should not be exposed to the user.
     */
    set_alias(val) {
        bindings.NodeAnnouncementInfo_set_alias(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Internet-level addresses via which one can connect to the node
     *
     * Returns a copy of the field.
     */
    get_addresses() {
        const ret = bindings.NodeAnnouncementInfo_get_addresses(this.ptr);
        const ret_conv_12_len = bindings.getArrayLength(ret);
        const ret_conv_12_arr = new Array(ret_conv_12_len).fill(null);
        for (var m = 0; m < ret_conv_12_len; m++) {
            const ret_conv_12 = bindings.getU64ArrayElem(ret, m);
            const ret_conv_12_hu_conv = NetAddress.constr_from_ptr(ret_conv_12);
            CommonBase.add_ref_from(ret_conv_12_hu_conv, this);
            ret_conv_12_arr[m] = ret_conv_12_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_12_arr;
    }
    /**
     * Internet-level addresses via which one can connect to the node
     */
    set_addresses(val) {
        bindings.NodeAnnouncementInfo_set_addresses(this.ptr, bindings.encodeUint64Array(val != null ? val.map(val_conv_12 => CommonBase.get_ptr_of(val_conv_12)) : null));
    }
    /**
     * An initial announcement of the node
     * Mostly redundant with the data we store in fields explicitly.
     * Everything else is useful only for sending out for initial routing sync.
     * Not stored if contains excess data to prevent DoS.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_announcement_message() {
        const ret = bindings.NodeAnnouncementInfo_get_announcement_message(this.ptr);
        const ret_hu_conv = new NodeAnnouncement(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * An initial announcement of the node
     * Mostly redundant with the data we store in fields explicitly.
     * Everything else is useful only for sending out for initial routing sync.
     * Not stored if contains excess data to prevent DoS.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_announcement_message(val) {
        bindings.NodeAnnouncementInfo_set_announcement_message(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Constructs a new NodeAnnouncementInfo given each field
     */
    static constructor_new(features_arg, last_update_arg, rgb_arg, alias_arg, addresses_arg, announcement_message_arg) {
        const ret = bindings.NodeAnnouncementInfo_new(features_arg == null ? 0n : CommonBase.get_ptr_of(features_arg), last_update_arg, bindings.encodeUint8Array(bindings.check_arr_len(rgb_arg, 3)), alias_arg == null ? 0n : CommonBase.get_ptr_of(alias_arg), bindings.encodeUint64Array(addresses_arg != null ? addresses_arg.map(addresses_arg_conv_12 => CommonBase.get_ptr_of(addresses_arg_conv_12)) : null), announcement_message_arg == null ? 0n : CommonBase.get_ptr_of(announcement_message_arg));
        const ret_hu_conv = new NodeAnnouncementInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, features_arg);
        CommonBase.add_ref_from(ret_hu_conv, alias_arg);
        CommonBase.add_ref_from(ret_hu_conv, announcement_message_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.NodeAnnouncementInfo_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the NodeAnnouncementInfo
     */
    clone() {
        const ret = bindings.NodeAnnouncementInfo_clone(this.ptr);
        const ret_hu_conv = new NodeAnnouncementInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the NodeAnnouncementInfo object into a byte array which can be read by NodeAnnouncementInfo_read
     */
    write() {
        const ret = bindings.NodeAnnouncementInfo_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a NodeAnnouncementInfo from a byte array, created by NodeAnnouncementInfo_write
     */
    static constructor_read(ser) {
        const ret = bindings.NodeAnnouncementInfo_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_NodeAnnouncementInfoDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=NodeAnnouncementInfo.mjs.map