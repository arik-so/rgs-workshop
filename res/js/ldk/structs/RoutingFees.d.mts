import { Result_RoutingFeesDecodeErrorZ } from '../structs/Result_RoutingFeesDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Fees for routing via a given channel or a node
 */
export declare class RoutingFees extends CommonBase {
    /**
     * Flat routing fee in satoshis
     */
    get_base_msat(): number;
    /**
     * Flat routing fee in satoshis
     */
    set_base_msat(val: number): void;
    /**
     * Liquidity-based routing fee in millionths of a routed amount.
     * In other words, 10000 is 1%.
     */
    get_proportional_millionths(): number;
    /**
     * Liquidity-based routing fee in millionths of a routed amount.
     * In other words, 10000 is 1%.
     */
    set_proportional_millionths(val: number): void;
    /**
     * Constructs a new RoutingFees given each field
     */
    static constructor_new(base_msat_arg: number, proportional_millionths_arg: number): RoutingFees;
    /**
     * Checks if two RoutingFeess contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: RoutingFees): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the RoutingFees
     */
    clone(): RoutingFees;
    /**
     * Checks if two RoutingFeess contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Serialize the RoutingFees object into a byte array which can be read by RoutingFees_read
     */
    write(): Uint8Array;
    /**
     * Read a RoutingFees from a byte array, created by RoutingFees_write
     */
    static constructor_read(ser: Uint8Array): Result_RoutingFeesDecodeErrorZ;
}
