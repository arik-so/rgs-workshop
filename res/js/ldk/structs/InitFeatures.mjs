import { Result_InitFeaturesDecodeErrorZ } from '../structs/Result_InitFeaturesDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Features used within an `init` message.
 */
export class InitFeatures extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.InitFeatures_free);
    }
    /**
     * Checks if two InitFeaturess contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.InitFeatures_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.InitFeatures_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the InitFeatures
     */
    clone() {
        const ret = bindings.InitFeatures_clone(this.ptr);
        const ret_hu_conv = new InitFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Returns the set of known init features that are related to channels. At least some of
     * these features are likely required for peers to talk to us.
     */
    static constructor_known_channel_features() {
        const ret = bindings.InitFeatures_known_channel_features();
        const ret_hu_conv = new InitFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Create a blank Features with no features set
     */
    static constructor_empty() {
        const ret = bindings.InitFeatures_empty();
        const ret_hu_conv = new InitFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Creates a Features with the bits set which are known by the implementation
     */
    static constructor_known() {
        const ret = bindings.InitFeatures_known();
        const ret_hu_conv = new InitFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Returns true if this `Features` object contains unknown feature flags which are set as
     * \"required\".
     */
    requires_unknown_bits() {
        const ret = bindings.InitFeatures_requires_unknown_bits(this.ptr);
        return ret;
    }
    /**
     * Serialize the InitFeatures object into a byte array which can be read by InitFeatures_read
     */
    write() {
        const ret = bindings.InitFeatures_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a InitFeatures from a byte array, created by InitFeatures_write
     */
    static constructor_read(ser) {
        const ret = bindings.InitFeatures_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_InitFeaturesDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Set this feature as optional.
     */
    set_data_loss_protect_optional() {
        bindings.InitFeatures_set_data_loss_protect_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_data_loss_protect_required() {
        bindings.InitFeatures_set_data_loss_protect_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_data_loss_protect() {
        const ret = bindings.InitFeatures_supports_data_loss_protect(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_data_loss_protect() {
        const ret = bindings.InitFeatures_requires_data_loss_protect(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_initial_routing_sync_optional() {
        bindings.InitFeatures_set_initial_routing_sync_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_initial_routing_sync_required() {
        bindings.InitFeatures_set_initial_routing_sync_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    initial_routing_sync() {
        const ret = bindings.InitFeatures_initial_routing_sync(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_upfront_shutdown_script_optional() {
        bindings.InitFeatures_set_upfront_shutdown_script_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_upfront_shutdown_script_required() {
        bindings.InitFeatures_set_upfront_shutdown_script_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_upfront_shutdown_script() {
        const ret = bindings.InitFeatures_supports_upfront_shutdown_script(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_upfront_shutdown_script() {
        const ret = bindings.InitFeatures_requires_upfront_shutdown_script(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_gossip_queries_optional() {
        bindings.InitFeatures_set_gossip_queries_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_gossip_queries_required() {
        bindings.InitFeatures_set_gossip_queries_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_gossip_queries() {
        const ret = bindings.InitFeatures_supports_gossip_queries(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_gossip_queries() {
        const ret = bindings.InitFeatures_requires_gossip_queries(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_variable_length_onion_optional() {
        bindings.InitFeatures_set_variable_length_onion_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_variable_length_onion_required() {
        bindings.InitFeatures_set_variable_length_onion_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_variable_length_onion() {
        const ret = bindings.InitFeatures_supports_variable_length_onion(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_variable_length_onion() {
        const ret = bindings.InitFeatures_requires_variable_length_onion(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_static_remote_key_optional() {
        bindings.InitFeatures_set_static_remote_key_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_static_remote_key_required() {
        bindings.InitFeatures_set_static_remote_key_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_static_remote_key() {
        const ret = bindings.InitFeatures_supports_static_remote_key(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_static_remote_key() {
        const ret = bindings.InitFeatures_requires_static_remote_key(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_payment_secret_optional() {
        bindings.InitFeatures_set_payment_secret_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_payment_secret_required() {
        bindings.InitFeatures_set_payment_secret_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_payment_secret() {
        const ret = bindings.InitFeatures_supports_payment_secret(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_payment_secret() {
        const ret = bindings.InitFeatures_requires_payment_secret(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_basic_mpp_optional() {
        bindings.InitFeatures_set_basic_mpp_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_basic_mpp_required() {
        bindings.InitFeatures_set_basic_mpp_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_basic_mpp() {
        const ret = bindings.InitFeatures_supports_basic_mpp(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_basic_mpp() {
        const ret = bindings.InitFeatures_requires_basic_mpp(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_wumbo_optional() {
        bindings.InitFeatures_set_wumbo_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_wumbo_required() {
        bindings.InitFeatures_set_wumbo_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_wumbo() {
        const ret = bindings.InitFeatures_supports_wumbo(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_wumbo() {
        const ret = bindings.InitFeatures_requires_wumbo(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_shutdown_any_segwit_optional() {
        bindings.InitFeatures_set_shutdown_any_segwit_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_shutdown_any_segwit_required() {
        bindings.InitFeatures_set_shutdown_any_segwit_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_shutdown_anysegwit() {
        const ret = bindings.InitFeatures_supports_shutdown_anysegwit(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_shutdown_anysegwit() {
        const ret = bindings.InitFeatures_requires_shutdown_anysegwit(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_onion_messages_optional() {
        bindings.InitFeatures_set_onion_messages_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_onion_messages_required() {
        bindings.InitFeatures_set_onion_messages_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_onion_messages() {
        const ret = bindings.InitFeatures_supports_onion_messages(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_onion_messages() {
        const ret = bindings.InitFeatures_requires_onion_messages(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_channel_type_optional() {
        bindings.InitFeatures_set_channel_type_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_channel_type_required() {
        bindings.InitFeatures_set_channel_type_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_channel_type() {
        const ret = bindings.InitFeatures_supports_channel_type(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_channel_type() {
        const ret = bindings.InitFeatures_requires_channel_type(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_scid_privacy_optional() {
        bindings.InitFeatures_set_scid_privacy_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_scid_privacy_required() {
        bindings.InitFeatures_set_scid_privacy_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_scid_privacy() {
        const ret = bindings.InitFeatures_supports_scid_privacy(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_scid_privacy() {
        const ret = bindings.InitFeatures_requires_scid_privacy(this.ptr);
        return ret;
    }
    /**
     * Set this feature as optional.
     */
    set_zero_conf_optional() {
        bindings.InitFeatures_set_zero_conf_optional(this.ptr);
    }
    /**
     * Set this feature as required.
     */
    set_zero_conf_required() {
        bindings.InitFeatures_set_zero_conf_required(this.ptr);
    }
    /**
     * Checks if this feature is supported.
     */
    supports_zero_conf() {
        const ret = bindings.InitFeatures_supports_zero_conf(this.ptr);
        return ret;
    }
    /**
     * Checks if this feature is required.
     */
    requires_zero_conf() {
        const ret = bindings.InitFeatures_requires_zero_conf(this.ptr);
        return ret;
    }
}
//# sourceMappingURL=InitFeatures.mjs.map