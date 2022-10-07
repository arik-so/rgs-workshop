import { UpdateAddHTLC } from '../structs/UpdateAddHTLC.mjs';
import { UpdateFulfillHTLC } from '../structs/UpdateFulfillHTLC.mjs';
import { UpdateFailHTLC } from '../structs/UpdateFailHTLC.mjs';
import { UpdateFailMalformedHTLC } from '../structs/UpdateFailMalformedHTLC.mjs';
import { CommitmentSigned } from '../structs/CommitmentSigned.mjs';
import { UpdateFee } from '../structs/UpdateFee.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Struct used to return values from revoke_and_ack messages, containing a bunch of commitment
 * transaction updates if they were pending.
 */
export class CommitmentUpdate extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.CommitmentUpdate_free);
    }
    /**
     * update_add_htlc messages which should be sent
     */
    get_update_add_htlcs() {
        const ret = bindings.CommitmentUpdate_get_update_add_htlcs(this.ptr);
        const ret_conv_15_len = bindings.getArrayLength(ret);
        const ret_conv_15_arr = new Array(ret_conv_15_len).fill(null);
        for (var p = 0; p < ret_conv_15_len; p++) {
            const ret_conv_15 = bindings.getU64ArrayElem(ret, p);
            const ret_conv_15_hu_conv = new UpdateAddHTLC(null, ret_conv_15);
            CommonBase.add_ref_from(ret_conv_15_hu_conv, this);
            ret_conv_15_arr[p] = ret_conv_15_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_15_arr;
    }
    /**
     * update_add_htlc messages which should be sent
     */
    set_update_add_htlcs(val) {
        bindings.CommitmentUpdate_set_update_add_htlcs(this.ptr, bindings.encodeUint64Array(val != null ? val.map(val_conv_15 => val_conv_15 == null ? 0n : CommonBase.get_ptr_of(val_conv_15)) : null));
        val.forEach((val_conv_15) => { CommonBase.add_ref_from(this, val_conv_15); });
    }
    /**
     * update_fulfill_htlc messages which should be sent
     */
    get_update_fulfill_htlcs() {
        const ret = bindings.CommitmentUpdate_get_update_fulfill_htlcs(this.ptr);
        const ret_conv_19_len = bindings.getArrayLength(ret);
        const ret_conv_19_arr = new Array(ret_conv_19_len).fill(null);
        for (var t = 0; t < ret_conv_19_len; t++) {
            const ret_conv_19 = bindings.getU64ArrayElem(ret, t);
            const ret_conv_19_hu_conv = new UpdateFulfillHTLC(null, ret_conv_19);
            CommonBase.add_ref_from(ret_conv_19_hu_conv, this);
            ret_conv_19_arr[t] = ret_conv_19_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_19_arr;
    }
    /**
     * update_fulfill_htlc messages which should be sent
     */
    set_update_fulfill_htlcs(val) {
        bindings.CommitmentUpdate_set_update_fulfill_htlcs(this.ptr, bindings.encodeUint64Array(val != null ? val.map(val_conv_19 => val_conv_19 == null ? 0n : CommonBase.get_ptr_of(val_conv_19)) : null));
        val.forEach((val_conv_19) => { CommonBase.add_ref_from(this, val_conv_19); });
    }
    /**
     * update_fail_htlc messages which should be sent
     */
    get_update_fail_htlcs() {
        const ret = bindings.CommitmentUpdate_get_update_fail_htlcs(this.ptr);
        const ret_conv_16_len = bindings.getArrayLength(ret);
        const ret_conv_16_arr = new Array(ret_conv_16_len).fill(null);
        for (var q = 0; q < ret_conv_16_len; q++) {
            const ret_conv_16 = bindings.getU64ArrayElem(ret, q);
            const ret_conv_16_hu_conv = new UpdateFailHTLC(null, ret_conv_16);
            CommonBase.add_ref_from(ret_conv_16_hu_conv, this);
            ret_conv_16_arr[q] = ret_conv_16_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_16_arr;
    }
    /**
     * update_fail_htlc messages which should be sent
     */
    set_update_fail_htlcs(val) {
        bindings.CommitmentUpdate_set_update_fail_htlcs(this.ptr, bindings.encodeUint64Array(val != null ? val.map(val_conv_16 => val_conv_16 == null ? 0n : CommonBase.get_ptr_of(val_conv_16)) : null));
        val.forEach((val_conv_16) => { CommonBase.add_ref_from(this, val_conv_16); });
    }
    /**
     * update_fail_malformed_htlc messages which should be sent
     */
    get_update_fail_malformed_htlcs() {
        const ret = bindings.CommitmentUpdate_get_update_fail_malformed_htlcs(this.ptr);
        const ret_conv_25_len = bindings.getArrayLength(ret);
        const ret_conv_25_arr = new Array(ret_conv_25_len).fill(null);
        for (var z = 0; z < ret_conv_25_len; z++) {
            const ret_conv_25 = bindings.getU64ArrayElem(ret, z);
            const ret_conv_25_hu_conv = new UpdateFailMalformedHTLC(null, ret_conv_25);
            CommonBase.add_ref_from(ret_conv_25_hu_conv, this);
            ret_conv_25_arr[z] = ret_conv_25_hu_conv;
        }
        bindings.freeWasmMemory(ret);
        return ret_conv_25_arr;
    }
    /**
     * update_fail_malformed_htlc messages which should be sent
     */
    set_update_fail_malformed_htlcs(val) {
        bindings.CommitmentUpdate_set_update_fail_malformed_htlcs(this.ptr, bindings.encodeUint64Array(val != null ? val.map(val_conv_25 => val_conv_25 == null ? 0n : CommonBase.get_ptr_of(val_conv_25)) : null));
        val.forEach((val_conv_25) => { CommonBase.add_ref_from(this, val_conv_25); });
    }
    /**
     * An update_fee message which should be sent
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_update_fee() {
        const ret = bindings.CommitmentUpdate_get_update_fee(this.ptr);
        const ret_hu_conv = new UpdateFee(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * An update_fee message which should be sent
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_update_fee(val) {
        bindings.CommitmentUpdate_set_update_fee(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Finally, the commitment_signed message which should be sent
     */
    get_commitment_signed() {
        const ret = bindings.CommitmentUpdate_get_commitment_signed(this.ptr);
        const ret_hu_conv = new CommitmentSigned(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Finally, the commitment_signed message which should be sent
     */
    set_commitment_signed(val) {
        bindings.CommitmentUpdate_set_commitment_signed(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Constructs a new CommitmentUpdate given each field
     */
    static constructor_new(update_add_htlcs_arg, update_fulfill_htlcs_arg, update_fail_htlcs_arg, update_fail_malformed_htlcs_arg, update_fee_arg, commitment_signed_arg) {
        const ret = bindings.CommitmentUpdate_new(bindings.encodeUint64Array(update_add_htlcs_arg != null ? update_add_htlcs_arg.map(update_add_htlcs_arg_conv_15 => update_add_htlcs_arg_conv_15 == null ? 0n : CommonBase.get_ptr_of(update_add_htlcs_arg_conv_15)) : null), bindings.encodeUint64Array(update_fulfill_htlcs_arg != null ? update_fulfill_htlcs_arg.map(update_fulfill_htlcs_arg_conv_19 => update_fulfill_htlcs_arg_conv_19 == null ? 0n : CommonBase.get_ptr_of(update_fulfill_htlcs_arg_conv_19)) : null), bindings.encodeUint64Array(update_fail_htlcs_arg != null ? update_fail_htlcs_arg.map(update_fail_htlcs_arg_conv_16 => update_fail_htlcs_arg_conv_16 == null ? 0n : CommonBase.get_ptr_of(update_fail_htlcs_arg_conv_16)) : null), bindings.encodeUint64Array(update_fail_malformed_htlcs_arg != null ? update_fail_malformed_htlcs_arg.map(update_fail_malformed_htlcs_arg_conv_25 => update_fail_malformed_htlcs_arg_conv_25 == null ? 0n : CommonBase.get_ptr_of(update_fail_malformed_htlcs_arg_conv_25)) : null), update_fee_arg == null ? 0n : CommonBase.get_ptr_of(update_fee_arg), commitment_signed_arg == null ? 0n : CommonBase.get_ptr_of(commitment_signed_arg));
        const ret_hu_conv = new CommitmentUpdate(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        update_add_htlcs_arg.forEach((update_add_htlcs_arg_conv_15) => { CommonBase.add_ref_from(ret_hu_conv, update_add_htlcs_arg_conv_15); });
        update_fulfill_htlcs_arg.forEach((update_fulfill_htlcs_arg_conv_19) => { CommonBase.add_ref_from(ret_hu_conv, update_fulfill_htlcs_arg_conv_19); });
        update_fail_htlcs_arg.forEach((update_fail_htlcs_arg_conv_16) => { CommonBase.add_ref_from(ret_hu_conv, update_fail_htlcs_arg_conv_16); });
        update_fail_malformed_htlcs_arg.forEach((update_fail_malformed_htlcs_arg_conv_25) => { CommonBase.add_ref_from(ret_hu_conv, update_fail_malformed_htlcs_arg_conv_25); });
        CommonBase.add_ref_from(ret_hu_conv, update_fee_arg);
        CommonBase.add_ref_from(ret_hu_conv, commitment_signed_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.CommitmentUpdate_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the CommitmentUpdate
     */
    clone() {
        const ret = bindings.CommitmentUpdate_clone(this.ptr);
        const ret_hu_conv = new CommitmentUpdate(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=CommitmentUpdate.mjs.map