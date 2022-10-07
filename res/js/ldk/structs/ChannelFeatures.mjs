import { Result_ChannelFeaturesDecodeErrorZ } from '../structs/Result_ChannelFeaturesDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Features used within a `channel_announcement` message.
 */
export class ChannelFeatures extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelFeatures_free);
    }
    /**
     * Checks if two ChannelFeaturess contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.ChannelFeatures_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.ChannelFeatures_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChannelFeatures
     */
    clone() {
        const ret = bindings.ChannelFeatures_clone(this.ptr);
        const ret_hu_conv = new ChannelFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Create a blank Features with no features set
     */
    static constructor_empty() {
        const ret = bindings.ChannelFeatures_empty();
        const ret_hu_conv = new ChannelFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Creates a Features with the bits set which are known by the implementation
     */
    static constructor_known() {
        const ret = bindings.ChannelFeatures_known();
        const ret_hu_conv = new ChannelFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Returns true if this `Features` object contains unknown feature flags which are set as
     * \"required\".
     */
    requires_unknown_bits() {
        const ret = bindings.ChannelFeatures_requires_unknown_bits(this.ptr);
        return ret;
    }
    /**
     * Serialize the ChannelFeatures object into a byte array which can be read by ChannelFeatures_read
     */
    write() {
        const ret = bindings.ChannelFeatures_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ChannelFeatures from a byte array, created by ChannelFeatures_write
     */
    static constructor_read(ser) {
        const ret = bindings.ChannelFeatures_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ChannelFeaturesDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChannelFeatures.mjs.map