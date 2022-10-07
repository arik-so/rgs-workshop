import { Result_ChannelReestablishDecodeErrorZ } from '../structs/Result_ChannelReestablishDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A channel_reestablish message to be sent or received from a peer
 */
export class ChannelReestablish extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelReestablish_free);
    }
    /**
     * The channel ID
     */
    get_channel_id() {
        const ret = bindings.ChannelReestablish_get_channel_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The channel ID
     */
    set_channel_id(val) {
        bindings.ChannelReestablish_set_channel_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The next commitment number for the sender
     */
    get_next_local_commitment_number() {
        const ret = bindings.ChannelReestablish_get_next_local_commitment_number(this.ptr);
        return ret;
    }
    /**
     * The next commitment number for the sender
     */
    set_next_local_commitment_number(val) {
        bindings.ChannelReestablish_set_next_local_commitment_number(this.ptr, val);
    }
    /**
     * The next commitment number for the recipient
     */
    get_next_remote_commitment_number() {
        const ret = bindings.ChannelReestablish_get_next_remote_commitment_number(this.ptr);
        return ret;
    }
    /**
     * The next commitment number for the recipient
     */
    set_next_remote_commitment_number(val) {
        bindings.ChannelReestablish_set_next_remote_commitment_number(this.ptr, val);
    }
    clone_ptr() {
        const ret = bindings.ChannelReestablish_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChannelReestablish
     */
    clone() {
        const ret = bindings.ChannelReestablish_clone(this.ptr);
        const ret_hu_conv = new ChannelReestablish(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ChannelReestablish object into a byte array which can be read by ChannelReestablish_read
     */
    write() {
        const ret = bindings.ChannelReestablish_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ChannelReestablish from a byte array, created by ChannelReestablish_write
     */
    static constructor_read(ser) {
        const ret = bindings.ChannelReestablish_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ChannelReestablishDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChannelReestablish.mjs.map