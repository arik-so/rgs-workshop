import { Result_AnnouncementSignaturesDecodeErrorZ } from '../structs/Result_AnnouncementSignaturesDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An announcement_signatures message to be sent or received from a peer
 */
export class AnnouncementSignatures extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.AnnouncementSignatures_free);
    }
    /**
     * The channel ID
     */
    get_channel_id() {
        const ret = bindings.AnnouncementSignatures_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID
     */
    set_channel_id(val) {
        bindings.AnnouncementSignatures_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The short channel ID
     */
    get_short_channel_id() {
        const ret = bindings.AnnouncementSignatures_get_short_channel_id(this.ptr);
        return ret;
    }
    /**
     * The short channel ID
     */
    set_short_channel_id(val) {
        bindings.AnnouncementSignatures_set_short_channel_id(this.ptr, val);
    }
    /**
     * A signature by the node key
     */
    get_node_signature() {
        const ret = bindings.AnnouncementSignatures_get_node_signature(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * A signature by the node key
     */
    set_node_signature(val) {
        bindings.AnnouncementSignatures_set_node_signature(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 64)));
    }
    /**
     * A signature by the funding key
     */
    get_bitcoin_signature() {
        const ret = bindings.AnnouncementSignatures_get_bitcoin_signature(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * A signature by the funding key
     */
    set_bitcoin_signature(val) {
        bindings.AnnouncementSignatures_set_bitcoin_signature(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 64)));
    }
    /**
     * Constructs a new AnnouncementSignatures given each field
     */
    static constructor_new(channel_id_arg, short_channel_id_arg, node_signature_arg, bitcoin_signature_arg) {
        const ret = bindings.AnnouncementSignatures_new(bindings.encodeUint8Array(bindings.check_arr_len(channel_id_arg, 32)), short_channel_id_arg, bindings.encodeUint8Array(bindings.check_arr_len(node_signature_arg, 64)), bindings.encodeUint8Array(bindings.check_arr_len(bitcoin_signature_arg, 64)));
        const ret_hu_conv = new AnnouncementSignatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.AnnouncementSignatures_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the AnnouncementSignatures
     */
    clone() {
        const ret = bindings.AnnouncementSignatures_clone(this.ptr);
        const ret_hu_conv = new AnnouncementSignatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the AnnouncementSignatures object into a byte array which can be read by AnnouncementSignatures_read
     */
    write() {
        const ret = bindings.AnnouncementSignatures_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a AnnouncementSignatures from a byte array, created by AnnouncementSignatures_write
     */
    static constructor_read(ser) {
        const ret = bindings.AnnouncementSignatures_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_AnnouncementSignaturesDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=AnnouncementSignatures.mjs.map