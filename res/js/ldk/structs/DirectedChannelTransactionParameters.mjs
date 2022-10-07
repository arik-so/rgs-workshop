import { ChannelPublicKeys } from '../structs/ChannelPublicKeys.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Static channel fields used to build transactions given per-commitment fields, organized by
 * broadcaster/countersignatory.
 *
 * This is derived from the holder/counterparty-organized ChannelTransactionParameters via the
 * as_holder_broadcastable and as_counterparty_broadcastable functions.
 */
export class DirectedChannelTransactionParameters extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.DirectedChannelTransactionParameters_free);
    }
    /**
     * Get the channel pubkeys for the broadcaster
     */
    broadcaster_pubkeys() {
        const ret = bindings.DirectedChannelTransactionParameters_broadcaster_pubkeys(this.ptr);
        const ret_hu_conv = new ChannelPublicKeys(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Get the channel pubkeys for the countersignatory
     */
    countersignatory_pubkeys() {
        const ret = bindings.DirectedChannelTransactionParameters_countersignatory_pubkeys(this.ptr);
        const ret_hu_conv = new ChannelPublicKeys(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Get the contest delay applicable to the transactions.
     * Note that the contest delay was selected by the countersignatory.
     */
    contest_delay() {
        const ret = bindings.DirectedChannelTransactionParameters_contest_delay(this.ptr);
        return ret;
    }
    /**
     * Whether the channel is outbound from the broadcaster.
     *
     * The boolean representing the side that initiated the channel is
     * an input to the commitment number obscure factor computation.
     */
    is_outbound() {
        const ret = bindings.DirectedChannelTransactionParameters_is_outbound(this.ptr);
        return ret;
    }
    /**
     * The funding outpoint
     */
    funding_outpoint() {
        const ret = bindings.DirectedChannelTransactionParameters_funding_outpoint(this.ptr);
        const ret_hu_conv = new OutPoint(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Whether to use anchors for this channel
     */
    opt_anchors() {
        const ret = bindings.DirectedChannelTransactionParameters_opt_anchors(this.ptr);
        return ret;
    }
}
//# sourceMappingURL=DirectedChannelTransactionParameters.mjs.map