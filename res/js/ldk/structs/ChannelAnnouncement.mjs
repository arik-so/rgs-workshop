import { UnsignedChannelAnnouncement } from '../structs/UnsignedChannelAnnouncement.mjs';
import { Result_ChannelAnnouncementDecodeErrorZ } from '../structs/Result_ChannelAnnouncementDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A channel_announcement message to be sent or received from a peer
 */
export class ChannelAnnouncement extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelAnnouncement_free);
    }
    /**
     * Authentication of the announcement by the first public node
     */
    get_node_signature_1() {
        const ret = bindings.ChannelAnnouncement_get_node_signature_1(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Authentication of the announcement by the first public node
     */
    set_node_signature_1(val) {
        bindings.ChannelAnnouncement_set_node_signature_1(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 64)));
    }
    /**
     * Authentication of the announcement by the second public node
     */
    get_node_signature_2() {
        const ret = bindings.ChannelAnnouncement_get_node_signature_2(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Authentication of the announcement by the second public node
     */
    set_node_signature_2(val) {
        bindings.ChannelAnnouncement_set_node_signature_2(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 64)));
    }
    /**
     * Proof of funding UTXO ownership by the first public node
     */
    get_bitcoin_signature_1() {
        const ret = bindings.ChannelAnnouncement_get_bitcoin_signature_1(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Proof of funding UTXO ownership by the first public node
     */
    set_bitcoin_signature_1(val) {
        bindings.ChannelAnnouncement_set_bitcoin_signature_1(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 64)));
    }
    /**
     * Proof of funding UTXO ownership by the second public node
     */
    get_bitcoin_signature_2() {
        const ret = bindings.ChannelAnnouncement_get_bitcoin_signature_2(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Proof of funding UTXO ownership by the second public node
     */
    set_bitcoin_signature_2(val) {
        bindings.ChannelAnnouncement_set_bitcoin_signature_2(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 64)));
    }
    /**
     * The actual announcement
     */
    get_contents() {
        const ret = bindings.ChannelAnnouncement_get_contents(this.ptr);
        const ret_hu_conv = new UnsignedChannelAnnouncement(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The actual announcement
     */
    set_contents(val) {
        bindings.ChannelAnnouncement_set_contents(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Constructs a new ChannelAnnouncement given each field
     */
    static constructor_new(node_signature_1_arg, node_signature_2_arg, bitcoin_signature_1_arg, bitcoin_signature_2_arg, contents_arg) {
        const ret = bindings.ChannelAnnouncement_new(bindings.encodeUint8Array(bindings.check_arr_len(node_signature_1_arg, 64)), bindings.encodeUint8Array(bindings.check_arr_len(node_signature_2_arg, 64)), bindings.encodeUint8Array(bindings.check_arr_len(bitcoin_signature_1_arg, 64)), bindings.encodeUint8Array(bindings.check_arr_len(bitcoin_signature_2_arg, 64)), contents_arg == null ? 0n : CommonBase.get_ptr_of(contents_arg));
        const ret_hu_conv = new ChannelAnnouncement(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, contents_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ChannelAnnouncement_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChannelAnnouncement
     */
    clone() {
        const ret = bindings.ChannelAnnouncement_clone(this.ptr);
        const ret_hu_conv = new ChannelAnnouncement(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ChannelAnnouncement object into a byte array which can be read by ChannelAnnouncement_read
     */
    write() {
        const ret = bindings.ChannelAnnouncement_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ChannelAnnouncement from a byte array, created by ChannelAnnouncement_write
     */
    static constructor_read(ser) {
        const ret = bindings.ChannelAnnouncement_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ChannelAnnouncementDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChannelAnnouncement.mjs.map