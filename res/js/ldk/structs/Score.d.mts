import { RouteHop } from '../structs/RouteHop.mjs';
import { NodeId } from '../structs/NodeId.mjs';
import { ChannelUsage } from '../structs/ChannelUsage.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of Score */
export interface ScoreInterface {
    /**Returns the fee in msats willing to be paid to avoid routing `send_amt_msat` through the
     * given channel in the direction from `source` to `target`.
     *
     * The channel's capacity (less any other MPP parts that are also being considered for use in
     * the same payment) is given by `capacity_msat`. It may be determined from various sources
     * such as a chain data, network gossip, or invoice hints. For invoice hints, a capacity near
     * [`u64::max_value`] is given to indicate sufficient capacity for the invoice's full amount.
     * Thus, implementations should be overflow-safe.
     */
    channel_penalty_msat(short_channel_id: bigint, source: NodeId, target: NodeId, usage: ChannelUsage): bigint;
    /**Handles updating channel penalties after failing to route through a channel.
     */
    payment_path_failed(path: RouteHop[], short_channel_id: bigint): void;
    /**Handles updating channel penalties after successfully routing along a path.
     */
    payment_path_successful(path: RouteHop[]): void;
    /**Handles updating channel penalties after a probe over the given path failed.
     */
    probe_failed(path: RouteHop[], short_channel_id: bigint): void;
    /**Handles updating channel penalties after a probe over the given path succeeded.
     */
    probe_successful(path: RouteHop[]): void;
    /**Serialize the object into a byte array
     */
    write(): Uint8Array;
}
/**
 * An interface used to score payment channels for path finding.
 *
 * \tScoring is in terms of fees willing to be paid in order to avoid routing through a channel.
 */
export declare class Score extends CommonBase {
    /** Creates a new instance of Score from a given implementation */
    static new_impl(arg: ScoreInterface): Score;
    /**
     * Returns the fee in msats willing to be paid to avoid routing `send_amt_msat` through the
     * given channel in the direction from `source` to `target`.
     *
     * The channel's capacity (less any other MPP parts that are also being considered for use in
     * the same payment) is given by `capacity_msat`. It may be determined from various sources
     * such as a chain data, network gossip, or invoice hints. For invoice hints, a capacity near
     * [`u64::max_value`] is given to indicate sufficient capacity for the invoice's full amount.
     * Thus, implementations should be overflow-safe.
     */
    channel_penalty_msat(short_channel_id: bigint, source: NodeId, target: NodeId, usage: ChannelUsage): bigint;
    /**
     * Handles updating channel penalties after failing to route through a channel.
     */
    payment_path_failed(path: RouteHop[], short_channel_id: bigint): void;
    /**
     * Handles updating channel penalties after successfully routing along a path.
     */
    payment_path_successful(path: RouteHop[]): void;
    /**
     * Handles updating channel penalties after a probe over the given path failed.
     */
    probe_failed(path: RouteHop[], short_channel_id: bigint): void;
    /**
     * Handles updating channel penalties after a probe over the given path succeeded.
     */
    probe_successful(path: RouteHop[]): void;
    /**
     * Serialize the object into a byte array
     */
    write(): Uint8Array;
}
