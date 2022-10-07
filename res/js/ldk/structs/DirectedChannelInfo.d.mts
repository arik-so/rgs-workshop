import { ChannelUpdateInfo } from '../structs/ChannelUpdateInfo.mjs';
import { ChannelInfo } from '../structs/ChannelInfo.mjs';
import { EffectiveCapacity } from '../structs/EffectiveCapacity.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A wrapper around [`ChannelInfo`] representing information about the channel as directed from a
 * source node to a target node.
 */
export declare class DirectedChannelInfo extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the DirectedChannelInfo
     */
    clone(): DirectedChannelInfo;
    /**
     * Returns information for the channel.
     */
    channel(): ChannelInfo;
    /**
     * Returns information for the direction.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    direction(): ChannelUpdateInfo;
    /**
     * Returns the maximum HTLC amount allowed over the channel in the direction.
     */
    htlc_maximum_msat(): bigint;
    /**
     * Returns the [`EffectiveCapacity`] of the channel in the direction.
     *
     * This is either the total capacity from the funding transaction, if known, or the
     * `htlc_maximum_msat` for the direction as advertised by the gossip network, if known,
     * otherwise.
     */
    effective_capacity(): EffectiveCapacity;
}
