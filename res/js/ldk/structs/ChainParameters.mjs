import { BestBlock } from '../structs/BestBlock.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Chain-related parameters used to construct a new `ChannelManager`.
 *
 * Typically, the block-specific parameters are derived from the best block hash for the network,
 * as a newly constructed `ChannelManager` will not have created any channels yet. These parameters
 * are not needed when deserializing a previously constructed `ChannelManager`.
 */
export class ChainParameters extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChainParameters_free);
    }
    /**
     * The network for determining the `chain_hash` in Lightning messages.
     */
    get_network() {
        const ret = bindings.ChainParameters_get_network(this.ptr);
        return ret;
    }
    /**
     * The network for determining the `chain_hash` in Lightning messages.
     */
    set_network(val) {
        bindings.ChainParameters_set_network(this.ptr, val);
    }
    /**
     * The hash and height of the latest block successfully connected.
     *
     * Used to track on-chain channel funding outputs and send payments with reliable timelocks.
     */
    get_best_block() {
        const ret = bindings.ChainParameters_get_best_block(this.ptr);
        const ret_hu_conv = new BestBlock(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The hash and height of the latest block successfully connected.
     *
     * Used to track on-chain channel funding outputs and send payments with reliable timelocks.
     */
    set_best_block(val) {
        bindings.ChainParameters_set_best_block(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Constructs a new ChainParameters given each field
     */
    static constructor_new(network_arg, best_block_arg) {
        const ret = bindings.ChainParameters_new(network_arg, best_block_arg == null ? 0n : CommonBase.get_ptr_of(best_block_arg));
        const ret_hu_conv = new ChainParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, best_block_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ChainParameters_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChainParameters
     */
    clone() {
        const ret = bindings.ChainParameters_clone(this.ptr);
        const ret_hu_conv = new ChainParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChainParameters.mjs.map