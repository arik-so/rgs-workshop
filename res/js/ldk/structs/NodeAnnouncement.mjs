import { UnsignedNodeAnnouncement } from '../structs/UnsignedNodeAnnouncement.mjs';
import { Result_NodeAnnouncementDecodeErrorZ } from '../structs/Result_NodeAnnouncementDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A node_announcement message to be sent or received from a peer
 */
export class NodeAnnouncement extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.NodeAnnouncement_free);
    }
    /**
     * The signature by the node key
     */
    get_signature() {
        const ret = bindings.NodeAnnouncement_get_signature(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The signature by the node key
     */
    set_signature(val) {
        bindings.NodeAnnouncement_set_signature(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 64)));
    }
    /**
     * The actual content of the announcement
     */
    get_contents() {
        const ret = bindings.NodeAnnouncement_get_contents(this.ptr);
        const ret_hu_conv = new UnsignedNodeAnnouncement(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The actual content of the announcement
     */
    set_contents(val) {
        bindings.NodeAnnouncement_set_contents(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Constructs a new NodeAnnouncement given each field
     */
    static constructor_new(signature_arg, contents_arg) {
        const ret = bindings.NodeAnnouncement_new(bindings.encodeUint8Array(bindings.check_arr_len(signature_arg, 64)), contents_arg == null ? 0n : CommonBase.get_ptr_of(contents_arg));
        const ret_hu_conv = new NodeAnnouncement(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, contents_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.NodeAnnouncement_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the NodeAnnouncement
     */
    clone() {
        const ret = bindings.NodeAnnouncement_clone(this.ptr);
        const ret_hu_conv = new NodeAnnouncement(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the NodeAnnouncement object into a byte array which can be read by NodeAnnouncement_read
     */
    write() {
        const ret = bindings.NodeAnnouncement_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a NodeAnnouncement from a byte array, created by NodeAnnouncement_write
     */
    static constructor_read(ser) {
        const ret = bindings.NodeAnnouncement_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_NodeAnnouncementDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=NodeAnnouncement.mjs.map