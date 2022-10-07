import { TxOut } from '../structs/TxOut.mjs';
import { SpendableOutputDescriptor } from '../structs/SpendableOutputDescriptor.mjs';
import { InMemorySigner } from '../structs/InMemorySigner.mjs';
import { Result_TransactionNoneZ } from '../structs/Result_TransactionNoneZ.mjs';
import { KeysInterface } from '../structs/KeysInterface.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Similar to [`KeysManager`], but allows the node using this struct to receive phantom node
 * payments.
 *
 * A phantom node payment is a payment made to a phantom invoice, which is an invoice that can be
 * paid to one of multiple nodes. This works because we encode the invoice route hints such that
 * LDK will recognize an incoming payment as destined for a phantom node, and collect the payment
 * itself without ever needing to forward to this fake node.
 *
 * Phantom node payments are useful for load balancing between multiple LDK nodes. They also
 * provide some fault tolerance, because payers will automatically retry paying other provided
 * nodes in the case that one node goes down.
 *
 * Note that multi-path payments are not supported in phantom invoices for security reasons.
 * Switching between this struct and [`KeysManager`] will invalidate any previously issued
 * invoices and attempts to pay previous invoices will fail.
 */
export declare class PhantomKeysManager extends CommonBase {
    /**
     * Constructs a new KeysInterface which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned KeysInterface must be freed before this_arg is
     */
    as_KeysInterface(): KeysInterface;
    /**
     * Constructs a `PhantomKeysManager` given a 32-byte seed and an additional `cross_node_seed`
     * that is shared across all nodes that intend to participate in [phantom node payments] together.
     *
     * See [`KeysManager::new`] for more information on `seed`, `starting_time_secs`, and
     * `starting_time_nanos`.
     *
     * `cross_node_seed` must be the same across all phantom payment-receiving nodes and also the
     * same across restarts, or else inbound payments may fail.
     *
     * [phantom node payments]: PhantomKeysManager
     */
    static constructor_new(seed: Uint8Array, starting_time_secs: bigint, starting_time_nanos: number, cross_node_seed: Uint8Array): PhantomKeysManager;
    /**
     * See [`KeysManager::spend_spendable_outputs`] for documentation on this method.
     */
    spend_spendable_outputs(descriptors: SpendableOutputDescriptor[], outputs: TxOut[], change_destination_script: Uint8Array, feerate_sat_per_1000_weight: number): Result_TransactionNoneZ;
    /**
     * See [`KeysManager::derive_channel_keys`] for documentation on this method.
     */
    derive_channel_keys(channel_value_satoshis: bigint, params: Uint8Array): InMemorySigner;
}
