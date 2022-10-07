import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * The effective capacity of a channel for routing purposes.
 *
 * While this may be smaller than the actual channel capacity, amounts greater than
 * [`Self::as_msat`] should not be routed through the channel.
 */
export declare class EffectiveCapacity extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the EffectiveCapacity
     */
    clone(): EffectiveCapacity;
    /**
     * Utility method to constructs a new ExactLiquidity-variant EffectiveCapacity
     */
    static constructor_exact_liquidity(liquidity_msat: bigint): EffectiveCapacity;
    /**
     * Utility method to constructs a new MaximumHTLC-variant EffectiveCapacity
     */
    static constructor_maximum_htlc(amount_msat: bigint): EffectiveCapacity;
    /**
     * Utility method to constructs a new Total-variant EffectiveCapacity
     */
    static constructor_total(capacity_msat: bigint, htlc_maximum_msat: Option_u64Z): EffectiveCapacity;
    /**
     * Utility method to constructs a new Infinite-variant EffectiveCapacity
     */
    static constructor_infinite(): EffectiveCapacity;
    /**
     * Utility method to constructs a new Unknown-variant EffectiveCapacity
     */
    static constructor_unknown(): EffectiveCapacity;
    /**
     * Returns the effective capacity denominated in millisatoshi.
     */
    as_msat(): bigint;
}
/** A EffectiveCapacity of type ExactLiquidity */
export declare class EffectiveCapacity_ExactLiquidity extends EffectiveCapacity {
    /**
     * Either the inbound or outbound liquidity depending on the direction, denominated in
     * millisatoshi.
     */
    liquidity_msat: bigint;
}
/** A EffectiveCapacity of type MaximumHTLC */
export declare class EffectiveCapacity_MaximumHTLC extends EffectiveCapacity {
    /**
     * The maximum HTLC amount denominated in millisatoshi.
     */
    amount_msat: bigint;
}
/** A EffectiveCapacity of type Total */
export declare class EffectiveCapacity_Total extends EffectiveCapacity {
    /**
     * The funding amount denominated in millisatoshi.
     */
    capacity_msat: bigint;
    /**
     * The maximum HTLC amount denominated in millisatoshi.
     */
    htlc_maximum_msat: Option_u64Z;
}
/** A EffectiveCapacity of type Infinite */
export declare class EffectiveCapacity_Infinite extends EffectiveCapacity {
}
/** A EffectiveCapacity of type Unknown */
export declare class EffectiveCapacity_Unknown extends EffectiveCapacity {
}
