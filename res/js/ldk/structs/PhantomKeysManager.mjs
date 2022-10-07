import { InMemorySigner } from '../structs/InMemorySigner.mjs';
import { Result_TransactionNoneZ } from '../structs/Result_TransactionNoneZ.mjs';
import { KeysInterface } from '../structs/KeysInterface.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
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
export class PhantomKeysManager extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.PhantomKeysManager_free);
    }
    /**
     * Constructs a new KeysInterface which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned KeysInterface must be freed before this_arg is
     */
    as_KeysInterface() {
        const ret = bindings.PhantomKeysManager_as_KeysInterface(this.ptr);
        const ret_hu_conv = new KeysInterface(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
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
    static constructor_new(seed, starting_time_secs, starting_time_nanos, cross_node_seed) {
        const ret = bindings.PhantomKeysManager_new(bindings.encodeUint8Array(bindings.check_arr_len(seed, 32)), starting_time_secs, starting_time_nanos, bindings.encodeUint8Array(bindings.check_arr_len(cross_node_seed, 32)));
        const ret_hu_conv = new PhantomKeysManager(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * See [`KeysManager::spend_spendable_outputs`] for documentation on this method.
     */
    spend_spendable_outputs(descriptors, outputs, change_destination_script, feerate_sat_per_1000_weight) {
        const ret = bindings.PhantomKeysManager_spend_spendable_outputs(this.ptr, bindings.encodeUint64Array(descriptors != null ? descriptors.map(descriptors_conv_27 => CommonBase.get_ptr_of(descriptors_conv_27)) : null), bindings.encodeUint64Array(outputs != null ? outputs.map(outputs_conv_7 => CommonBase.get_ptr_of(outputs_conv_7)) : null), bindings.encodeUint8Array(change_destination_script), feerate_sat_per_1000_weight);
        const ret_hu_conv = Result_TransactionNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * See [`KeysManager::derive_channel_keys`] for documentation on this method.
     */
    derive_channel_keys(channel_value_satoshis, params) {
        const ret = bindings.PhantomKeysManager_derive_channel_keys(this.ptr, channel_value_satoshis, bindings.encodeUint8Array(bindings.check_arr_len(params, 32)));
        const ret_hu_conv = new InMemorySigner(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=PhantomKeysManager.mjs.map