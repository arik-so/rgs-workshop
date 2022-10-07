import { ChannelUpdateInfo } from '../structs/ChannelUpdateInfo.mjs';
import { ChannelInfo } from '../structs/ChannelInfo.mjs';
import { EffectiveCapacity } from '../structs/EffectiveCapacity.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A wrapper around [`ChannelInfo`] representing information about the channel as directed from a
 * source node to a target node.
 */
export class DirectedChannelInfo extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.DirectedChannelInfo_free);
    }
    clone_ptr() {
        const ret = bindings.DirectedChannelInfo_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the DirectedChannelInfo
     */
    clone() {
        const ret = bindings.DirectedChannelInfo_clone(this.ptr);
        const ret_hu_conv = new DirectedChannelInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Returns information for the channel.
     */
    channel() {
        const ret = bindings.DirectedChannelInfo_channel(this.ptr);
        const ret_hu_conv = new ChannelInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Returns information for the direction.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    direction() {
        const ret = bindings.DirectedChannelInfo_direction(this.ptr);
        const ret_hu_conv = new ChannelUpdateInfo(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Returns the maximum HTLC amount allowed over the channel in the direction.
     */
    htlc_maximum_msat() {
        const ret = bindings.DirectedChannelInfo_htlc_maximum_msat(this.ptr);
        return ret;
    }
    /**
     * Returns the [`EffectiveCapacity`] of the channel in the direction.
     *
     * This is either the total capacity from the funding transaction, if known, or the
     * `htlc_maximum_msat` for the direction as advertised by the gossip network, if known,
     * otherwise.
     */
    effective_capacity() {
        const ret = bindings.DirectedChannelInfo_effective_capacity(this.ptr);
        const ret_hu_conv = EffectiveCapacity.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=DirectedChannelInfo.mjs.map