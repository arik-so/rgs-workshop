import { Option_C2Tuple_u64u64ZZ } from '../structs/Option_C2Tuple_u64u64ZZ.mjs';
import { NodeId } from '../structs/NodeId.mjs';
import { Logger } from '../structs/Logger.mjs';
import { NetworkGraph } from '../structs/NetworkGraph.mjs';
import { Result_ProbabilisticScorerDecodeErrorZ } from '../structs/Result_ProbabilisticScorerDecodeErrorZ.mjs';
import { Score } from '../structs/Score.mjs';
import { ProbabilisticScoringParameters } from '../structs/ProbabilisticScoringParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
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
export declare class ProbabilisticScorer extends CommonBase {
    /**
     * Creates a new scorer using the given scoring parameters for sending payments from a node
     * through a network graph.
     */
    static constructor_new(params: ProbabilisticScoringParameters, network_graph: NetworkGraph, logger: Logger): ProbabilisticScorer;
    /**
     * Dump the contents of this scorer into the configured logger.
     *
     * Note that this writes roughly one line per channel for which we have a liquidity estimate,
     * which may be a substantial amount of log output.
     */
    debug_log_liquidity_stats(): void;
    /**
     * Query the estimated minimum and maximum liquidity available for sending a payment over the
     * channel with `scid` towards the given `target` node.
     */
    estimated_channel_liquidity_range(scid: bigint, target: NodeId): Option_C2Tuple_u64u64ZZ;
    /**
     * Marks the node with the given `node_id` as banned, i.e.,
     * it will be avoided during path finding.
     */
    add_banned(node_id: NodeId): void;
    /**
     * Removes the node with the given `node_id` from the list of nodes to avoid.
     */
    remove_banned(node_id: NodeId): void;
    /**
     * Sets a manual penalty for the given node.
     */
    set_manual_penalty(node_id: NodeId, penalty: bigint): void;
    /**
     * Removes the node with the given `node_id` from the list of manual penalties.
     */
    remove_manual_penalty(node_id: NodeId): void;
    /**
     * Clears the list of manual penalties that are applied during path finding.
     */
    clear_manual_penalties(): void;
    /**
     * Constructs a new Score which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned Score must be freed before this_arg is
     */
    as_Score(): Score;
    /**
     * Serialize the ProbabilisticScorer object into a byte array which can be read by ProbabilisticScorer_read
     */
    write(): Uint8Array;
    /**
     * Read a ProbabilisticScorer from a byte array, created by ProbabilisticScorer_write
     */
    static constructor_read(ser: Uint8Array, arg_a: ProbabilisticScoringParameters, arg_b: NetworkGraph, arg_c: Logger): Result_ProbabilisticScorerDecodeErrorZ;
}
