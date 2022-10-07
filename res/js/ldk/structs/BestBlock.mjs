import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * The best known block as identified by its hash and height.
 */
export class BestBlock extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.BestBlock_free);
    }
    clone_ptr() {
        const ret = bindings.BestBlock_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the BestBlock
     */
    clone() {
        const ret = bindings.BestBlock_clone(this.ptr);
        const ret_hu_conv = new BestBlock(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Constructs a `BestBlock` that represents the genesis block at height 0 of the given
     * network.
     */
    static constructor_from_genesis(network) {
        const ret = bindings.BestBlock_from_genesis(network);
        const ret_hu_conv = new BestBlock(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Returns a `BestBlock` as identified by the given block hash and height.
     */
    static constructor_new(block_hash, height) {
        const ret = bindings.BestBlock_new(bindings.encodeUint8Array(bindings.check_arr_len(block_hash, 32)), height);
        const ret_hu_conv = new BestBlock(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Returns the best block hash.
     */
    block_hash() {
        const ret = bindings.BestBlock_block_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Returns the best block height.
     */
    height() {
        const ret = bindings.BestBlock_height(this.ptr);
        return ret;
    }
}
//# sourceMappingURL=BestBlock.mjs.map