import { Result_TxOutAccessErrorZ } from '../structs/Result_TxOutAccessErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKAccessHolder {
}
/**
 * The `Access` trait defines behavior for accessing chain data and state, such as blocks and
 * UTXOs.
 */
export class Access extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Access_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of Access from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKAccessHolder();
        let structImplementation = {
            get_utxo(genesis_hash, short_channel_id) {
                const genesis_hash_conv = bindings.decodeUint8Array(genesis_hash);
                const ret = arg.get_utxo(genesis_hash_conv, short_channel_id);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
        };
        const ptr_idx = bindings.LDKAccess_new(structImplementation);
        impl_holder.held = new Access(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Returns the transaction output of a funding transaction encoded by [`short_channel_id`].
     * Returns an error if `genesis_hash` is for a different chain or if such a transaction output
     * is unknown.
     *
     * [`short_channel_id`]: https://github.com/lightning/bolts/blob/master/07-routing-gossip.md#definition-of-short_channel_id
     */
    get_utxo(genesis_hash, short_channel_id) {
        const ret = bindings.Access_get_utxo(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(genesis_hash, 32)), short_channel_id);
        const ret_hu_conv = Result_TxOutAccessErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=Access.mjs.map