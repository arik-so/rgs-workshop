import { ChannelFeatures } from '../structs/ChannelFeatures.mjs';
import { Result_UnsignedChannelAnnouncementDecodeErrorZ } from '../structs/Result_UnsignedChannelAnnouncementDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * The unsigned part of a channel_announcement
 */
export class UnsignedChannelAnnouncement extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.UnsignedChannelAnnouncement_free);
    }
    /**
     * The advertised channel features
     */
    get_features() {
        const ret = bindings.UnsignedChannelAnnouncement_get_features(this.ptr);
        const ret_hu_conv = new ChannelFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The advertised channel features
     */
    set_features(val) {
        bindings.UnsignedChannelAnnouncement_set_features(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * The genesis hash of the blockchain where the channel is to be opened
     */
    get_chain_hash() {
        const ret = bindings.UnsignedChannelAnnouncement_get_chain_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The genesis hash of the blockchain where the channel is to be opened
     */
    set_chain_hash(val) {
        bindings.UnsignedChannelAnnouncement_set_chain_hash(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The short channel ID
     */
    get_short_channel_id() {
        const ret = bindings.UnsignedChannelAnnouncement_get_short_channel_id(this.ptr);
        return ret;
    }
    /**
     * The short channel ID
     */
    set_short_channel_id(val) {
        bindings.UnsignedChannelAnnouncement_set_short_channel_id(this.ptr, val);
    }
    /**
     * One of the two node_ids which are endpoints of this channel
     */
    get_node_id_1() {
        const ret = bindings.UnsignedChannelAnnouncement_get_node_id_1(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * One of the two node_ids which are endpoints of this channel
     */
    set_node_id_1(val) {
        bindings.UnsignedChannelAnnouncement_set_node_id_1(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The other of the two node_ids which are endpoints of this channel
     */
    get_node_id_2() {
        const ret = bindings.UnsignedChannelAnnouncement_get_node_id_2(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The other of the two node_ids which are endpoints of this channel
     */
    set_node_id_2(val) {
        bindings.UnsignedChannelAnnouncement_set_node_id_2(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The funding key for the first node
     */
    get_bitcoin_key_1() {
        const ret = bindings.UnsignedChannelAnnouncement_get_bitcoin_key_1(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The funding key for the first node
     */
    set_bitcoin_key_1(val) {
        bindings.UnsignedChannelAnnouncement_set_bitcoin_key_1(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The funding key for the second node
     */
    get_bitcoin_key_2() {
        const ret = bindings.UnsignedChannelAnnouncement_get_bitcoin_key_2(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The funding key for the second node
     */
    set_bitcoin_key_2(val) {
        bindings.UnsignedChannelAnnouncement_set_bitcoin_key_2(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    clone_ptr() {
        const ret = bindings.UnsignedChannelAnnouncement_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the UnsignedChannelAnnouncement
     */
    clone() {
        const ret = bindings.UnsignedChannelAnnouncement_clone(this.ptr);
        const ret_hu_conv = new UnsignedChannelAnnouncement(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the UnsignedChannelAnnouncement object into a byte array which can be read by UnsignedChannelAnnouncement_read
     */
    write() {
        const ret = bindings.UnsignedChannelAnnouncement_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a UnsignedChannelAnnouncement from a byte array, created by UnsignedChannelAnnouncement_write
     */
    static constructor_read(ser) {
        const ret = bindings.UnsignedChannelAnnouncement_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_UnsignedChannelAnnouncementDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=UnsignedChannelAnnouncement.mjs.map