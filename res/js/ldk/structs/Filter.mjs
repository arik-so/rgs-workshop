import { WatchedOutput } from '../structs/WatchedOutput.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKFilterHolder {
}
/**
 * The `Filter` trait defines behavior for indicating chain activity of interest pertaining to
 * channels.
 *
 * This is useful in order to have a [`Watch`] implementation convey to a chain source which
 * transactions to be notified of. Notification may take the form of pre-filtering blocks or, in
 * the case of [BIP 157]/[BIP 158], only fetching a block if the compact filter matches. If
 * receiving full blocks from a chain source, any further filtering is unnecessary.
 *
 * After an output has been registered, subsequent block retrievals from the chain source must not
 * exclude any transactions matching the new criteria nor any in-block descendants of such
 * transactions.
 *
 * Note that use as part of a [`Watch`] implementation involves reentrancy. Therefore, the `Filter`
 * should not block on I/O. Implementations should instead queue the newly monitored data to be
 * processed later. Then, in order to block until the data has been processed, any [`Watch`]
 * invocation that has called the `Filter` must return [`TemporaryFailure`].
 *
 * [`TemporaryFailure`]: ChannelMonitorUpdateErr::TemporaryFailure
 * [BIP 157]: https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki
 * [BIP 158]: https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki
 */
export class Filter extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Filter_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of Filter from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKFilterHolder();
        let structImplementation = {
            register_tx(txid, script_pubkey) {
                const txid_conv = bindings.decodeUint8Array(txid);
                const script_pubkey_conv = bindings.decodeUint8Array(script_pubkey);
                arg.register_tx(txid_conv, script_pubkey_conv);
            },
            register_output(output) {
                const output_hu_conv = new WatchedOutput(null, output);
                CommonBase.add_ref_from(output_hu_conv, this);
                arg.register_output(output_hu_conv);
            },
        };
        const ptr_idx = bindings.LDKFilter_new(structImplementation);
        impl_holder.held = new Filter(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Registers interest in a transaction with `txid` and having an output with `script_pubkey` as
     * a spending condition.
     */
    register_tx(txid, script_pubkey) {
        bindings.Filter_register_tx(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(txid, 32)), bindings.encodeUint8Array(script_pubkey));
    }
    /**
     * Registers interest in spends of a transaction output.
     *
     * Note that this method might be called during processing of a new block. You therefore need
     * to ensure that also dependent output spents within an already connected block are correctly
     * handled, e.g., by re-scanning the block in question whenever new outputs have been
     * registered mid-processing.
     */
    register_output(output) {
        bindings.Filter_register_output(this.ptr, output == null ? 0n : CommonBase.get_ptr_of(output));
        CommonBase.add_ref_from(this, output);
    }
}
//# sourceMappingURL=Filter.mjs.map