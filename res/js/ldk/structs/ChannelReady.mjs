import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { Result_ChannelReadyDecodeErrorZ } from '../structs/Result_ChannelReadyDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A channel_ready message to be sent or received from a peer
 */
export class ChannelReady extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelReady_free);
    }
    /**
     * The channel ID
     */
    get_channel_id() {
        const ret = bindings.ChannelReady_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID
     */
    set_channel_id(val) {
        bindings.ChannelReady_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The per-commitment point of the second commitment transaction
     */
    get_next_per_commitment_point() {
        const ret = bindings.ChannelReady_get_next_per_commitment_point(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The per-commitment point of the second commitment transaction
     */
    set_next_per_commitment_point(val) {
        bindings.ChannelReady_set_next_per_commitment_point(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * If set, provides a short_channel_id alias for this channel. The sender will accept payments
     * to be forwarded over this SCID and forward them to this messages' recipient.
     */
    get_short_channel_id_alias() {
        const ret = bindings.ChannelReady_get_short_channel_id_alias(this.ptr);
        const ret_hu_conv = Option_u64Z.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * If set, provides a short_channel_id alias for this channel. The sender will accept payments
     * to be forwarded over this SCID and forward them to this messages' recipient.
     */
    set_short_channel_id_alias(val) {
        bindings.ChannelReady_set_short_channel_id_alias(this.ptr, CommonBase.get_ptr_of(val));
    }
    /**
     * Constructs a new ChannelReady given each field
     */
    static constructor_new(channel_id_arg, next_per_commitment_point_arg, short_channel_id_alias_arg) {
        const ret = bindings.ChannelReady_new(bindings.encodeUint8Array(bindings.check_arr_len(channel_id_arg, 32)), bindings.encodeUint8Array(bindings.check_arr_len(next_per_commitment_point_arg, 33)), CommonBase.get_ptr_of(short_channel_id_alias_arg));
        const ret_hu_conv = new ChannelReady(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ChannelReady_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChannelReady
     */
    clone() {
        const ret = bindings.ChannelReady_clone(this.ptr);
        const ret_hu_conv = new ChannelReady(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ChannelReady object into a byte array which can be read by ChannelReady_read
     */
    write() {
        const ret = bindings.ChannelReady_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ChannelReady from a byte array, created by ChannelReady_write
     */
    static constructor_read(ser) {
        const ret = bindings.ChannelReady_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ChannelReadyDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChannelReady.mjs.map