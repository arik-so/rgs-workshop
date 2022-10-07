import { ChannelManager } from '../structs/ChannelManager.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A Tuple
 */
export class TwoTuple_BlockHashChannelManagerZ extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.C2Tuple_BlockHashChannelManagerZ_free);
    }
    /**
     *
     */
    get_a() {
        const ret = bindings.C2Tuple_BlockHashChannelManagerZ_get_a(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     *
     */
    get_b() {
        const ret = bindings.C2Tuple_BlockHashChannelManagerZ_get_b(this.ptr);
        const ret_hu_conv = new ChannelManager(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Creates a new C2Tuple_BlockHashChannelManagerZ from the contained elements.
     */
    static constructor_new(a, b_fee_est, b_chain_monitor, b_tx_broadcaster, b_logger, b_keys_manager, b_config, b_params) {
        const ret = bindings.C2Tuple_BlockHashChannelManagerZ_new(bindings.encodeUint8Array(bindings.check_arr_len(a, 32)), bindings.ChannelManager_new(b_fee_est == null ? 0n : CommonBase.get_ptr_of(b_fee_est), b_chain_monitor == null ? 0n : CommonBase.get_ptr_of(b_chain_monitor), b_tx_broadcaster == null ? 0n : CommonBase.get_ptr_of(b_tx_broadcaster), b_logger == null ? 0n : CommonBase.get_ptr_of(b_logger), b_keys_manager == null ? 0n : CommonBase.get_ptr_of(b_keys_manager), b_config == null ? 0n : CommonBase.get_ptr_of(b_config), b_params == null ? 0n : CommonBase.get_ptr_of(b_params)));
        const ret_hu_conv = new TwoTuple_BlockHashChannelManagerZ(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, b_fee_est);
        CommonBase.add_ref_from(ret_hu_conv, b_chain_monitor);
        CommonBase.add_ref_from(ret_hu_conv, b_tx_broadcaster);
        CommonBase.add_ref_from(ret_hu_conv, b_logger);
        CommonBase.add_ref_from(ret_hu_conv, b_keys_manager);
        CommonBase.add_ref_from(ret_hu_conv, b_config);
        CommonBase.add_ref_from(ret_hu_conv, b_params);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=TwoTuple_BlockHashChannelManagerZ.mjs.map