import { OutPoint } from '../structs/OutPoint.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
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
export class WatchedOutput extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.WatchedOutput_free);
    }
    /**
     * First block where the transaction output may have been spent.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_block_hash() {
        const ret = bindings.WatchedOutput_get_block_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * First block where the transaction output may have been spent.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_block_hash(val) {
        bindings.WatchedOutput_set_block_hash(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * Outpoint identifying the transaction output.
     */
    get_outpoint() {
        const ret = bindings.WatchedOutput_get_outpoint(this.ptr);
        const ret_hu_conv = new OutPoint(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Outpoint identifying the transaction output.
     */
    set_outpoint(val) {
        bindings.WatchedOutput_set_outpoint(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Spending condition of the transaction output.
     */
    get_script_pubkey() {
        const ret = bindings.WatchedOutput_get_script_pubkey(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Spending condition of the transaction output.
     */
    set_script_pubkey(val) {
        bindings.WatchedOutput_set_script_pubkey(this.ptr, bindings.encodeUint8Array(val));
    }
    /**
     * Constructs a new WatchedOutput given each field
     */
    static constructor_new(block_hash_arg, outpoint_arg, script_pubkey_arg) {
        const ret = bindings.WatchedOutput_new(bindings.encodeUint8Array(bindings.check_arr_len(block_hash_arg, 32)), outpoint_arg == null ? 0n : CommonBase.get_ptr_of(outpoint_arg), bindings.encodeUint8Array(script_pubkey_arg));
        const ret_hu_conv = new WatchedOutput(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, outpoint_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.WatchedOutput_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the WatchedOutput
     */
    clone() {
        const ret = bindings.WatchedOutput_clone(this.ptr);
        const ret_hu_conv = new WatchedOutput(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two WatchedOutputs contain equal inner contents.
     */
    hash() {
        const ret = bindings.WatchedOutput_hash(this.ptr);
        return ret;
    }
}
//# sourceMappingURL=WatchedOutput.mjs.map