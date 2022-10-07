import { ChannelPublicKeys } from '../structs/ChannelPublicKeys.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Static channel fields used to build transactions given per-commitment fields, organized by
 * broadcaster/countersignatory.
 *
 * This is derived from the holder/counterparty-organized ChannelTransactionParameters via the
 * as_holder_broadcastable and as_counterparty_broadcastable functions.
 */
export declare class DirectedChannelTransactionParameters extends CommonBase {
    /**
     * Get the channel pubkeys for the broadcaster
     */
    broadcaster_pubkeys(): ChannelPublicKeys;
    /**
     * Get the channel pubkeys for the countersignatory
     */
    countersignatory_pubkeys(): ChannelPublicKeys;
    /**
     * Get the contest delay applicable to the transactions.
     * Note that the contest delay was selected by the countersignatory.
     */
    contest_delay(): number;
    /**
     * Whether the channel is outbound from the broadcaster.
     *
     * The boolean representing the side that initiated the channel is
     * an input to the commitment number obscure factor computation.
     */
    is_outbound(): boolean;
    /**
     * The funding outpoint
     */
    funding_outpoint(): OutPoint;
    /**
     * Whether to use anchors for this channel
     */
    opt_anchors(): boolean;
}