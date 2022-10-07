import { Result_ChannelTypeFeaturesDecodeErrorZ } from '../structs/Result_ChannelTypeFeaturesDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
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
export declare class ChannelTypeFeatures extends CommonBase {
    /**
     * Checks if two ChannelTypeFeaturess contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: ChannelTypeFeatures): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ChannelTypeFeatures
     */
    clone(): ChannelTypeFeatures;
    /**
     * Create a blank Features with no features set
     */
    static constructor_empty(): ChannelTypeFeatures;
    /**
     * Creates a Features with the bits set which are known by the implementation
     */
    static constructor_known(): ChannelTypeFeatures;
    /**
     * Returns true if this `Features` object contains unknown feature flags which are set as
     * \"required\".
     */
    requires_unknown_bits(): boolean;
    /**
     * Serialize the ChannelTypeFeatures object into a byte array which can be read by ChannelTypeFeatures_read
     */
    write(): Uint8Array;
    /**
     * Read a ChannelTypeFeatures from a byte array, created by ChannelTypeFeatures_write
     */
    static constructor_read(ser: Uint8Array): Result_ChannelTypeFeaturesDecodeErrorZ;
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
