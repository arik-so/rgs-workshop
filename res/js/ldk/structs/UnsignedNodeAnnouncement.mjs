import { NodeFeatures } from '../structs/NodeFeatures.mjs';
import { NetAddress } from '../structs/NetAddress.mjs';
import { Result_UnsignedNodeAnnouncementDecodeErrorZ } from '../structs/Result_UnsignedNodeAnnouncementDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * The unsigned part of a node_announcement
 */
export class UnsignedNodeAnnouncement extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.UnsignedNodeAnnouncement_free);
    }
    /**
     * The advertised features
     */
    get_features() {
        const ret = bindings.UnsignedNodeAnnouncement_get_features(this.ptr);
        const ret_hu_conv = new NodeFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The advertised features
     */
    set_features(val) {
        bindings.UnsignedNodeAnnouncement_set_features(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * A strictly monotonic announcement counter, with gaps allowed
     */
    get_timestamp() {
        const ret = bindings.UnsignedNodeAnnouncement_get_timestamp(this.ptr);
        return ret;
    }
    /**
     * A strictly monotonic announcement counter, with gaps allowed
     */
    set_timestamp(val) {
        bindings.UnsignedNodeAnnouncement_set_timestamp(this.ptr, val);
    }
    /**
     * The node_id this announcement originated from (don't rebroadcast the node_announcement back
     * to this node).
     */
    get_node_id() {
        const ret = bindings.UnsignedNodeAnnouncement_get_node_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The node_id this announcement originated from (don't rebroadcast the node_announcement back
     * to this node).
     */
    set_node_id(val) {
        bindings.UnsignedNodeAnnouncement_set_node_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * An RGB color for UI purposes
     */
    get_rgb() {
        const ret = bindings.UnsignedNodeAnnouncement_get_rgb(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * An RGB color for UI purposes
     */
    set_rgb(val) {
        bindings.UnsignedNodeAnnouncement_set_rgb(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 3)));
    }
    /**
     * An alias, for UI purposes.  This should be sanitized before use.  There is no guarantee
     * of uniqueness.
     */
    get_alias() {
        const ret = bindings.UnsignedNodeAnnouncement_get_alias(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * An alias, for UI purposes.  This should be sanitized before use.  There is no guarantee
     * of uniqueness.
     */
    set_alias(val) {
        bindings.UnsignedNodeAnnouncement_set_alias(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * List of addresses on which this node is reachable
     *
     * Returns a copy of the field.
     */
    get_addresses() {
        const ret = bindings.UnsignedNodeAnnouncement_get_addresses(this.ptr);
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
     * List of addresses on which this node is reachable
     */
    set_addresses(val) {
        bindings.UnsignedNodeAnnouncement_set_addresses(this.ptr, bindings.encodeUint64Array(val != null ? val.map(val_conv_12 => CommonBase.get_ptr_of(val_conv_12)) : null));
    }
    clone_ptr() {
        const ret = bindings.UnsignedNodeAnnouncement_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the UnsignedNodeAnnouncement
     */
    clone() {
        const ret = bindings.UnsignedNodeAnnouncement_clone(this.ptr);
        const ret_hu_conv = new UnsignedNodeAnnouncement(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the UnsignedNodeAnnouncement object into a byte array which can be read by UnsignedNodeAnnouncement_read
     */
    write() {
        const ret = bindings.UnsignedNodeAnnouncement_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a UnsignedNodeAnnouncement from a byte array, created by UnsignedNodeAnnouncement_write
     */
    static constructor_read(ser) {
        const ret = bindings.UnsignedNodeAnnouncement_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_UnsignedNodeAnnouncementDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=UnsignedNodeAnnouncement.mjs.map