import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { ChannelAnnouncement } from '../structs/ChannelAnnouncement.mjs';
import { NodeId } from '../structs/NodeId.mjs';
import { ChannelFeatures } from '../structs/ChannelFeatures.mjs';
import { ChannelUpdateInfo } from '../structs/ChannelUpdateInfo.mjs';
import { Result_ChannelInfoDecodeErrorZ } from '../structs/Result_ChannelInfoDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Details about a channel (both directions).
 * Received within a channel announcement.
 */
export class ChannelInfo extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelInfo_free);
    }
    /**
     * Protocol features of a channel communicated during its announcement
     */
    get_features() {
        const ret = bindings.ChannelInfo_get_features(this.ptr);
        const ret_hu_conv = new ChannelFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Protocol features of a channel communicated during its announcement
     */
    set_features(val) {
        bindings.ChannelInfo_set_features(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Source node of the first direction of a channel
     */
    get_node_one() {
        const ret = bindings.ChannelInfo_get_node_one(this.ptr);
        const ret_hu_conv = new NodeId(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Source node of the first direction of a channel
     */
    set_node_one(val) {
        bindings.ChannelInfo_set_node_one(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Details about the first direction of a channel
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_one_to_two() {
        const ret = bindings.ChannelInfo_get_one_to_two(this.ptr);
        const ret_hu_conv = new ChannelUpdateInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Details about the first direction of a channel
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_one_to_two(val) {
        bindings.ChannelInfo_set_one_to_two(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Source node of the second direction of a channel
     */
    get_node_two() {
        const ret = bindings.ChannelInfo_get_node_two(this.ptr);
        const ret_hu_conv = new NodeId(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Source node of the second direction of a channel
     */
    set_node_two(val) {
        bindings.ChannelInfo_set_node_two(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Details about the second direction of a channel
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_two_to_one() {
        const ret = bindings.ChannelInfo_get_two_to_one(this.ptr);
        const ret_hu_conv = new ChannelUpdateInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Details about the second direction of a channel
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_two_to_one(val) {
        bindings.ChannelInfo_set_two_to_one(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * The channel capacity as seen on-chain, if chain lookup is available.
     */
    get_capacity_sats() {
        const ret = bindings.ChannelInfo_get_capacity_sats(this.ptr);
        const ret_hu_conv = Option_u64Z.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The channel capacity as seen on-chain, if chain lookup is available.
     */
    set_capacity_sats(val) {
        bindings.ChannelInfo_set_capacity_sats(this.ptr, CommonBase.get_ptr_of(val));
    }
    /**
     * An initial announcement of the channel
     * Mostly redundant with the data we store in fields explicitly.
     * Everything else is useful only for sending out for initial routing sync.
     * Not stored if contains excess data to prevent DoS.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_announcement_message() {
        const ret = bindings.ChannelInfo_get_announcement_message(this.ptr);
        const ret_hu_conv = new ChannelAnnouncement(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * An initial announcement of the channel
     * Mostly redundant with the data we store in fields explicitly.
     * Everything else is useful only for sending out for initial routing sync.
     * Not stored if contains excess data to prevent DoS.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_announcement_message(val) {
        bindings.ChannelInfo_set_announcement_message(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    clone_ptr() {
        const ret = bindings.ChannelInfo_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChannelInfo
     */
    clone() {
        const ret = bindings.ChannelInfo_clone(this.ptr);
        const ret_hu_conv = new ChannelInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Returns a [`ChannelUpdateInfo`] based on the direction implied by the channel_flag.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_directional_info(channel_flags) {
        const ret = bindings.ChannelInfo_get_directional_info(this.ptr, channel_flags);
        const ret_hu_conv = new ChannelUpdateInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ChannelInfo object into a byte array which can be read by ChannelInfo_read
     */
    write() {
        const ret = bindings.ChannelInfo_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ChannelInfo from a byte array, created by ChannelInfo_write
     */
    static constructor_read(ser) {
        const ret = bindings.ChannelInfo_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ChannelInfoDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChannelInfo.mjs.map