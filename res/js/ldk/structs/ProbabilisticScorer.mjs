import { Option_C2Tuple_u64u64ZZ } from '../structs/Option_C2Tuple_u64u64ZZ.mjs';
import { Result_ProbabilisticScorerDecodeErrorZ } from '../structs/Result_ProbabilisticScorerDecodeErrorZ.mjs';
import { Score } from '../structs/Score.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * [`Score`] implementation using channel success probability distributions.
 *
 * Based on *Optimally Reliable & Cheap Payment Flows on the Lightning Network* by Rene Pickhardt
 * and Stefan Richter [[1]]. Given the uncertainty of channel liquidity balances, probability
 * distributions are defined based on knowledge learned from successful and unsuccessful attempts.
 * Then the negative `log10` of the success probability is used to determine the cost of routing a
 * specific HTLC amount through a channel.
 *
 * Knowledge about channel liquidity balances takes the form of upper and lower bounds on the
 * possible liquidity. Certainty of the bounds is decreased over time using a decay function. See
 * [`ProbabilisticScoringParameters`] for details.
 *
 * Since the scorer aims to learn the current channel liquidity balances, it works best for nodes
 * with high payment volume or that actively probe the [`NetworkGraph`]. Nodes with low payment
 * volume are more likely to experience failed payment paths, which would need to be retried.
 *
 * # Note
 *
 * Mixing the `no-std` feature between serialization and deserialization results in undefined
 * behavior.
 *
 * [1]: https://arxiv.org/abs/2107.05322
 */
export class ProbabilisticScorer extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ProbabilisticScorer_free);
    }
    /**
     * Creates a new scorer using the given scoring parameters for sending payments from a node
     * through a network graph.
     */
    static constructor_new(params, network_graph, logger) {
        const ret = bindings.ProbabilisticScorer_new(params == null ? 0n : CommonBase.get_ptr_of(params), network_graph == null ? 0n : CommonBase.get_ptr_of(network_graph), logger == null ? 0n : CommonBase.get_ptr_of(logger));
        const ret_hu_conv = new ProbabilisticScorer(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, params);
        CommonBase.add_ref_from(ret_hu_conv, network_graph);
        CommonBase.add_ref_from(ret_hu_conv, logger);
        return ret_hu_conv;
    }
    /**
     * Dump the contents of this scorer into the configured logger.
     *
     * Note that this writes roughly one line per channel for which we have a liquidity estimate,
     * which may be a substantial amount of log output.
     */
    debug_log_liquidity_stats() {
        bindings.ProbabilisticScorer_debug_log_liquidity_stats(this.ptr);
    }
    /**
     * Query the estimated minimum and maximum liquidity available for sending a payment over the
     * channel with `scid` towards the given `target` node.
     */
    estimated_channel_liquidity_range(scid, target) {
        const ret = bindings.ProbabilisticScorer_estimated_channel_liquidity_range(this.ptr, scid, target == null ? 0n : CommonBase.get_ptr_of(target));
        const ret_hu_conv = Option_C2Tuple_u64u64ZZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        CommonBase.add_ref_from(this, target);
        return ret_hu_conv;
    }
    /**
     * Marks the node with the given `node_id` as banned, i.e.,
     * it will be avoided during path finding.
     */
    add_banned(node_id) {
        bindings.ProbabilisticScorer_add_banned(this.ptr, node_id == null ? 0n : CommonBase.get_ptr_of(node_id));
        CommonBase.add_ref_from(this, node_id);
    }
    /**
     * Removes the node with the given `node_id` from the list of nodes to avoid.
     */
    remove_banned(node_id) {
        bindings.ProbabilisticScorer_remove_banned(this.ptr, node_id == null ? 0n : CommonBase.get_ptr_of(node_id));
        CommonBase.add_ref_from(this, node_id);
    }
    /**
     * Sets a manual penalty for the given node.
     */
    set_manual_penalty(node_id, penalty) {
        bindings.ProbabilisticScorer_set_manual_penalty(this.ptr, node_id == null ? 0n : CommonBase.get_ptr_of(node_id), penalty);
        CommonBase.add_ref_from(this, node_id);
    }
    /**
     * Removes the node with the given `node_id` from the list of manual penalties.
     */
    remove_manual_penalty(node_id) {
        bindings.ProbabilisticScorer_remove_manual_penalty(this.ptr, node_id == null ? 0n : CommonBase.get_ptr_of(node_id));
        CommonBase.add_ref_from(this, node_id);
    }
    /**
     * Clears the list of manual penalties that are applied during path finding.
     */
    clear_manual_penalties() {
        bindings.ProbabilisticScorer_clear_manual_penalties(this.ptr);
    }
    /**
     * Constructs a new Score which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Score must be freed before this_arg is
     */
    as_Score() {
        const ret = bindings.ProbabilisticScorer_as_Score(this.ptr);
        const ret_hu_conv = new Score(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ProbabilisticScorer object into a byte array which can be read by ProbabilisticScorer_read
     */
    write() {
        const ret = bindings.ProbabilisticScorer_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ProbabilisticScorer from a byte array, created by ProbabilisticScorer_write
     */
    static constructor_read(ser, arg_a, arg_b, arg_c) {
        const ret = bindings.ProbabilisticScorer_read(bindings.encodeUint8Array(ser), arg_a == null ? 0n : CommonBase.get_ptr_of(arg_a), arg_b == null ? 0n : CommonBase.get_ptr_of(arg_b), arg_c == null ? 0n : CommonBase.get_ptr_of(arg_c));
        const ret_hu_conv = Result_ProbabilisticScorerDecodeErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, arg_a);
        CommonBase.add_ref_from(ret_hu_conv, arg_b);
        CommonBase.add_ref_from(ret_hu_conv, arg_c);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ProbabilisticScorer.mjs.map