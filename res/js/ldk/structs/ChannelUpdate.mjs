import { UnsignedChannelUpdate } from '../structs/UnsignedChannelUpdate.mjs';
import { Result_ChannelUpdateDecodeErrorZ } from '../structs/Result_ChannelUpdateDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A channel_update message to be sent or received from a peer
 */
export class ChannelUpdate extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelUpdate_free);
    }
    /**
     * A signature of the channel update
     */
    get_signature() {
        const ret = bindings.ChannelUpdate_get_signature(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * A signature of the channel update
     */
    set_signature(val) {
        bindings.ChannelUpdate_set_signature(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 64)));
    }
    /**
     * The actual channel update
     */
    get_contents() {
        const ret = bindings.ChannelUpdate_get_contents(this.ptr);
        const ret_hu_conv = new UnsignedChannelUpdate(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The actual channel update
     */
    set_contents(val) {
        bindings.ChannelUpdate_set_contents(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Constructs a new ChannelUpdate given each field
     */
    static constructor_new(signature_arg, contents_arg) {
        const ret = bindings.ChannelUpdate_new(bindings.encodeUint8Array(bindings.check_arr_len(signature_arg, 64)), contents_arg == null ? 0n : CommonBase.get_ptr_of(contents_arg));
        const ret_hu_conv = new ChannelUpdate(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, contents_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ChannelUpdate_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChannelUpdate
     */
    clone() {
        const ret = bindings.ChannelUpdate_clone(this.ptr);
        const ret_hu_conv = new ChannelUpdate(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ChannelUpdate object into a byte array which can be read by ChannelUpdate_read
     */
    write() {
        const ret = bindings.ChannelUpdate_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ChannelUpdate from a byte array, created by ChannelUpdate_write
     */
    static constructor_read(ser) {
        const ret = bindings.ChannelUpdate_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ChannelUpdateDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChannelUpdate.mjs.map