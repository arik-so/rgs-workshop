import { EffectiveCapacity } from '../structs/EffectiveCapacity.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Proposed use of a channel passed as a parameter to [`Score::channel_penalty_msat`].
 */
export declare class ChannelUsage extends CommonBase {
    /**
     * The amount to send through the channel, denominated in millisatoshis.
     */
    get_amount_msat(): bigint;
    /**
     * The amount to send through the channel, denominated in millisatoshis.
     */
    set_amount_msat(val: bigint): void;
    /**
     * Total amount, denominated in millisatoshis, already allocated to send through the channel
     * as part of a multi-path payment.
     */
    get_inflight_htlc_msat(): bigint;
    /**
     * Total amount, denominated in millisatoshis, already allocated to send through the channel
     * as part of a multi-path payment.
     */
    set_inflight_htlc_msat(val: bigint): void;
    /**
     * The effective capacity of the channel.
     */
    get_effective_capacity(): EffectiveCapacity;
    /**
     * The effective capacity of the channel.
     */
    set_effective_capacity(val: EffectiveCapacity): void;
    /**
     * Constructs a new ChannelUsage given each field
     */
    static constructor_new(amount_msat_arg: bigint, inflight_htlc_msat_arg: bigint, effective_capacity_arg: EffectiveCapacity): ChannelUsage;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ChannelUsage
     */
    clone(): ChannelUsage;
}
