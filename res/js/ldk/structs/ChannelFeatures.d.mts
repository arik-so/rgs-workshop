import { Result_ChannelFeaturesDecodeErrorZ } from '../structs/Result_ChannelFeaturesDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Features used within a `channel_announcement` message.
 */
export declare class ChannelFeatures extends CommonBase {
    /**
     * Checks if two ChannelFeaturess contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: ChannelFeatures): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ChannelFeatures
     */
    clone(): ChannelFeatures;
    /**
     * Create a blank Features with no features set
     */
    static constructor_empty(): ChannelFeatures;
    /**
     * Creates a Features with the bits set which are known by the implementation
     */
    static constructor_known(): ChannelFeatures;
    /**
     * Returns true if this `Features` object contains unknown feature flags which are set as
     * \"required\".
     */
    requires_unknown_bits(): boolean;
    /**
     * Serialize the ChannelFeatures object into a byte array which can be read by ChannelFeatures_read
     */
    write(): Uint8Array;
    /**
     * Read a ChannelFeatures from a byte array, created by ChannelFeatures_write
     */
    static constructor_read(ser: Uint8Array): Result_ChannelFeaturesDecodeErrorZ;
}
