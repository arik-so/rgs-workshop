import { Result_ChannelTypeFeaturesDecodeErrorZ } from '../structs/Result_ChannelTypeFeaturesDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Features used within the channel_type field in an OpenChannel message.
 *
 * A channel is always of some known \"type\", describing the transaction formats used and the exact
 * semantics of our interaction with our peer.
 *
 * Note that because a channel is a specific type which is proposed by the opener and accepted by
 * the counterparty, only required features are allowed here.
 *
 * This is serialized differently from other feature types - it is not prefixed by a length, and
 * thus must only appear inside a TLV where its length is known in advance.
 */
export class ChannelTypeFeatures extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelTypeFeatures_free);
    }
    /**
     * Checks if two ChannelTypeFeaturess contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.ChannelTypeFeatures_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.ChannelTypeFeatures_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChannelTypeFeatures
     */
    clone() {
        const ret = bindings.ChannelTypeFeatures_clone(this.ptr);
        const ret_hu_conv = new ChannelTypeFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Create a blank Features with no features set
     */
    static constructor_empty() {
        const ret = bindings.ChannelTypeFeatures_empty();
        const ret_hu_conv = new ChannelTypeFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Creates a Features with the bits set which are known by the implementation
     */
    static constructor_known() {
        const ret = bindings.ChannelTypeFeatures_known();
        const ret_hu_conv = new ChannelTypeFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Returns true if this `Features` object contains unknown feature flags which are set as
     * \"required\".
     */
    requires_unknown_bits() {
        const ret = bindings.ChannelTypeFeatures_requires_unknown_bits(this.ptr);
        return ret;
    }
    /**
     * Serialize the ChannelTypeFeatures object into a byte array which can be read by ChannelTypeFeatures_read
     */
    write() {
        const ret = bindings.ChannelTypeFeatures_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ChannelTypeFeatures from a byte array, created by ChannelTypeFeatures_write
     */
    static constructor_read(ser) {
        const ret = bindings.ChannelTypeFeatures_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ChannelTypeFeaturesDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Set this feature as optional.
     */
    set_static_remote_key_optional() {
        bindings.ChannelTypeFeatures_set_static_remote_key_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_static_remote_key_required() {
        bindings.ChannelTypeFeatures_set_static_remote_key_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_static_remote_key() {
        const ret = bindings.ChannelTypeFeatures_supports_static_remote_key(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_static_remote_key() {
        const ret = bindings.ChannelTypeFeatures_requires_static_remote_key(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_scid_privacy_optional() {
        bindings.ChannelTypeFeatures_set_scid_privacy_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_scid_privacy_required() {
        bindings.ChannelTypeFeatures_set_scid_privacy_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_scid_privacy() {
        const ret = bindings.ChannelTypeFeatures_supports_scid_privacy(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_scid_privacy() {
        const ret = bindings.ChannelTypeFeatures_requires_scid_privacy(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_zero_conf_optional() {
        bindings.ChannelTypeFeatures_set_zero_conf_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_zero_conf_required() {
        bindings.ChannelTypeFeatures_set_zero_conf_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_zero_conf() {
        const ret = bindings.ChannelTypeFeatures_supports_zero_conf(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_zero_conf() {
        const ret = bindings.ChannelTypeFeatures_requires_zero_conf(this.ptr);
        return ret;
    }
}
//# sourceMappingURL=ChannelTypeFeatures.mjs.map