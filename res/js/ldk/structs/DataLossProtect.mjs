import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Proof that the sender knows the per-commitment secret of the previous commitment transaction.
 * This is used to convince the recipient that the channel is at a certain commitment
 * number even if they lost that data due to a local failure.  Of course, the peer may lie
 * and even later commitments may have been revoked.
 */
export class DataLossProtect extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.DataLossProtect_free);
    }
    /**
     * Proof that the sender knows the per-commitment secret of a specific commitment transaction
     * belonging to the recipient
     */
    get_your_last_per_commitment_secret() {
        const ret = bindings.DataLossProtect_get_your_last_per_commitment_secret(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Proof that the sender knows the per-commitment secret of a specific commitment transaction
     * belonging to the recipient
     */
    set_your_last_per_commitment_secret(val) {
        bindings.DataLossProtect_set_your_last_per_commitment_secret(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The sender's per-commitment point for their current commitment transaction
     */
    get_my_current_per_commitment_point() {
        const ret = bindings.DataLossProtect_get_my_current_per_commitment_point(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The sender's per-commitment point for their current commitment transaction
     */
    set_my_current_per_commitment_point(val) {
        bindings.DataLossProtect_set_my_current_per_commitment_point(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Constructs a new DataLossProtect given each field
     */
    static constructor_new(your_last_per_commitment_secret_arg, my_current_per_commitment_point_arg) {
        const ret = bindings.DataLossProtect_new(bindings.encodeUint8Array(bindings.check_arr_len(your_last_per_commitment_secret_arg, 32)), bindings.encodeUint8Array(bindings.check_arr_len(my_current_per_commitment_point_arg, 33)));
        const ret_hu_conv = new DataLossProtect(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.DataLossProtect_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the DataLossProtect
     */
    clone() {
        const ret = bindings.DataLossProtect_clone(this.ptr);
        const ret_hu_conv = new DataLossProtect(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=DataLossProtect.mjs.map