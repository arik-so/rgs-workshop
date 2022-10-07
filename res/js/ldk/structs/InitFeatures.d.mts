import { Result_InitFeaturesDecodeErrorZ } from '../structs/Result_InitFeaturesDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Features used within an `init` message.
 */
export declare class InitFeatures extends CommonBase {
    /**
     * Checks if two InitFeaturess contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: InitFeatures): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the InitFeatures
     */
    clone(): InitFeatures;
    /**
     * Returns the set of known init features that are related to channels. At least some of
     * these features are likely required for peers to talk to us.
     */
    static constructor_known_channel_features(): InitFeatures;
    /**
     * Create a blank Features with no features set
     */
    static constructor_empty(): InitFeatures;
    /**
     * Creates a Features with the bits set which are known by the implementation
     */
    static constructor_known(): InitFeatures;
    /**
     * Returns true if this `Features` object contains unknown feature flags which are set as
     * \"required\".
     */
    requires_unknown_bits(): boolean;
    /**
     * Serialize the InitFeatures object into a byte array which can be read by InitFeatures_read
     */
    write(): Uint8Array;
    /**
     * Read a InitFeatures from a byte array, created by InitFeatures_write
     */
    static constructor_read(ser: Uint8Array): Result_InitFeaturesDecodeErrorZ;
    /**
     * Set this feature as optional.
     */
    set_data_loss_protect_optional(): void;
    /**
     * Set this feature as required.
     */
    set_data_loss_protect_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_data_loss_protect(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_data_loss_protect(): boolean;
    /**
     * Set this feature as optional.
     */
    set_initial_routing_sync_optional(): void;
    /**
     * Set this feature as required.
     */
    set_initial_routing_sync_required(): void;
    /**
     * Checks if this feature is supported.
     */
    initial_routing_sync(): boolean;
    /**
     * Set this feature as optional.
     */
    set_upfront_shutdown_script_optional(): void;
    /**
     * Set this feature as required.
     */
    set_upfront_shutdown_script_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_upfront_shutdown_script(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_upfront_shutdown_script(): boolean;
    /**
     * Set this feature as optional.
     */
    set_gossip_queries_optional(): void;
    /**
     * Set this feature as required.
     */
    set_gossip_queries_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_gossip_queries(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_gossip_queries(): boolean;
    /**
     * Set this feature as optional.
     */
    set_variable_length_onion_optional(): void;
    /**
     * Set this feature as required.
     */
    set_variable_length_onion_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_variable_length_onion(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_variable_length_onion(): boolean;
    /**
     * Set this feature as optional.
     */
    set_static_remote_key_optional(): void;
    /**
     * Set this feature as required.
     */
    set_static_remote_key_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_static_remote_key(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_static_remote_key(): boolean;
    /**
     * Set this feature as optional.
     */
    set_payment_secret_optional(): void;
    /**
     * Set this feature as required.
     */
    set_payment_secret_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_payment_secret(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_payment_secret(): boolean;
    /**
     * Set this feature as optional.
     */
    set_basic_mpp_optional(): void;
    /**
     * Set this feature as required.
     */
    set_basic_mpp_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_basic_mpp(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_basic_mpp(): boolean;
    /**
     * Set this feature as optional.
     */
    set_wumbo_optional(): void;
    /**
     * Set this feature as required.
     */
    set_wumbo_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_wumbo(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_wumbo(): boolean;
    /**
     * Set this feature as optional.
     */
    set_shutdown_any_segwit_optional(): void;
    /**
     * Set this feature as required.
     */
    set_shutdown_any_segwit_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_shutdown_anysegwit(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_shutdown_anysegwit(): boolean;
    /**
     * Set this feature as optional.
     */
    set_onion_messages_optional(): void;
    /**
     * Set this feature as required.
     */
    set_onion_messages_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_onion_messages(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_onion_messages(): boolean;
    /**
     * Set this feature as optional.
     */
    set_channel_type_optional(): void;
    /**
     * Set this feature as required.
     */
    set_channel_type_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_channel_type(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_channel_type(): boolean;
    /**
     * Set this feature as optional.
     */
    set_scid_privacy_optional(): void;
    /**
     * Set this feature as required.
     */
    set_scid_privacy_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_scid_privacy(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_scid_privacy(): boolean;
    /**
     * Set this feature as optional.
     */
    set_zero_conf_optional(): void;
    /**
     * Set this feature as required.
     */
    set_zero_conf_required(): void;
    /**
     * Checks if this feature is supported.
     */
    supports_zero_conf(): boolean;
    /**
     * Checks if this feature is required.
     */
    requires_zero_conf(): boolean;
}
