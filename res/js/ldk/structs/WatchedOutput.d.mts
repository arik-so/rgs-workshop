import { OutPoint } from '../structs/OutPoint.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A transaction output watched by a [`ChannelMonitor`] for spends on-chain.
 *
 * Used to convey to a [`Filter`] such an output with a given spending condition. Any transaction
 * spending the output must be given to [`ChannelMonitor::block_connected`] either directly or via
 * [`Confirm::transactions_confirmed`].
 *
 * If `block_hash` is `Some`, this indicates the output was created in the corresponding block and
 * may have been spent there. See [`Filter::register_output`] for details.
 *
 * [`ChannelMonitor`]: channelmonitor::ChannelMonitor
 * [`ChannelMonitor::block_connected`]: channelmonitor::ChannelMonitor::block_connected
 */
export declare class WatchedOutput extends CommonBase {
    /**
     * First block where the transaction output may have been spent.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_block_hash(): Uint8Array;
    /**
     * First block where the transaction output may have been spent.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_block_hash(val: Uint8Array): void;
    /**
     * Outpoint identifying the transaction output.
     */
    get_outpoint(): OutPoint;
    /**
     * Outpoint identifying the transaction output.
     */
    set_outpoint(val: OutPoint): void;
    /**
     * Spending condition of the transaction output.
     */
    get_script_pubkey(): Uint8Array;
    /**
     * Spending condition of the transaction output.
     */
    set_script_pubkey(val: Uint8Array): void;
    /**
     * Constructs a new WatchedOutput given each field
     */
    static constructor_new(block_hash_arg: Uint8Array, outpoint_arg: OutPoint, script_pubkey_arg: Uint8Array): WatchedOutput;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the WatchedOutput
     */
    clone(): WatchedOutput;
    /**
     * Checks if two WatchedOutputs contain equal inner contents.
     */
    hash(): bigint;
}
