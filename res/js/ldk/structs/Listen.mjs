import { TwoTuple_usizeTransactionZ } from '../structs/TwoTuple_usizeTransactionZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKListenHolder {
}
/**
 * The `Listen` trait is used to notify when blocks have been connected or disconnected from the
 * chain.
 *
 * Useful when needing to replay chain data upon startup or as new chain events occur. Clients
 * sourcing chain data using a block-oriented API should prefer this interface over [`Confirm`].
 * Such clients fetch the entire header chain whereas clients using [`Confirm`] only fetch headers
 * when needed.
 *
 * By using [`Listen::filtered_block_connected`] this interface supports clients fetching the
 * entire header chain and only blocks with matching transaction data using BIP 157 filters or
 * other similar filtering.
 */
export class Listen extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Listen_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of Listen from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKListenHolder();
        let structImplementation = {
            filtered_block_connected(header, txdata, height) {
                const header_conv = bindings.decodeUint8Array(header);
                const txdata_conv_28_len = bindings.getArrayLength(txdata);
                const txdata_conv_28_arr = new Array(txdata_conv_28_len).fill(null);
                for (var c = 0; c < txdata_conv_28_len; c++) {
                    const txdata_conv_28 = bindings.getU64ArrayElem(txdata, c);
                    const txdata_conv_28_hu_conv = new TwoTuple_usizeTransactionZ(null, txdata_conv_28);
                    CommonBase.add_ref_from(txdata_conv_28_hu_conv, this);
                    txdata_conv_28_arr[c] = txdata_conv_28_hu_conv;
                }
                bindings.freeWasmMemory(txdata);
                arg.filtered_block_connected(header_conv, txdata_conv_28_arr, height);
            },
            block_connected(block, height) {
                const block_conv = bindings.decodeUint8Array(block);
                arg.block_connected(block_conv, height);
            },
            block_disconnected(header, height) {
                const header_conv = bindings.decodeUint8Array(header);
                arg.block_disconnected(header_conv, height);
            },
        };
        const ptr_idx = bindings.LDKListen_new(structImplementation);
        impl_holder.held = new Listen(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Notifies the listener that a block was added at the given height, with the transaction data
     * possibly filtered.
     */
    filtered_block_connected(header, txdata, height) {
        bindings.Listen_filtered_block_connected(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(header, 80)), bindings.encodeUint64Array(txdata != null ? txdata.map(txdata_conv_28 => txdata_conv_28 != null ? CommonBase.get_ptr_of(txdata_conv_28) : 0n) : null), height);
    }
    /**
     * Notifies the listener that a block was added at the given height.
     */
    block_connected(block, height) {
        bindings.Listen_block_connected(this.ptr, bindings.encodeUint8Array(block), height);
    }
    /**
     * Notifies the listener that a block was removed at the given height.
     */
    block_disconnected(header, height) {
        bindings.Listen_block_disconnected(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(header, 80)), height);
    }
}
//# sourceMappingURL=Listen.mjs.map