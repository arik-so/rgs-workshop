import { Option_u32Z } from '../structs/Option_u32Z.mjs';
import { Result_HTLCOutputInCommitmentDecodeErrorZ } from '../structs/Result_HTLCOutputInCommitmentDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Information about an HTLC as it appears in a commitment transaction
 */
export class HTLCOutputInCommitment extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.HTLCOutputInCommitment_free);
    }
    /**
     * Whether the HTLC was \"offered\" (ie outbound in relation to this commitment transaction).
     * Note that this is not the same as whether it is ountbound *from us*. To determine that you
     * need to compare this value to whether the commitment transaction in question is that of
     * the counterparty or our own.
     */
    get_offered() {
        const ret = bindings.HTLCOutputInCommitment_get_offered(this.ptr);
        return ret;
    }
    /**
     * Whether the HTLC was \"offered\" (ie outbound in relation to this commitment transaction).
     * Note that this is not the same as whether it is ountbound *from us*. To determine that you
     * need to compare this value to whether the commitment transaction in question is that of
     * the counterparty or our own.
     */
    set_offered(val) {
        bindings.HTLCOutputInCommitment_set_offered(this.ptr, val);
    }
    /**
     * The value, in msat, of the HTLC. The value as it appears in the commitment transaction is
     * this divided by 1000.
     */
    get_amount_msat() {
        const ret = bindings.HTLCOutputInCommitment_get_amount_msat(this.ptr);
        return ret;
    }
    /**
     * The value, in msat, of the HTLC. The value as it appears in the commitment transaction is
     * this divided by 1000.
     */
    set_amount_msat(val) {
        bindings.HTLCOutputInCommitment_set_amount_msat(this.ptr, val);
    }
    /**
     * The CLTV lock-time at which this HTLC expires.
     */
    get_cltv_expiry() {
        const ret = bindings.HTLCOutputInCommitment_get_cltv_expiry(this.ptr);
        return ret;
    }
    /**
     * The CLTV lock-time at which this HTLC expires.
     */
    set_cltv_expiry(val) {
        bindings.HTLCOutputInCommitment_set_cltv_expiry(this.ptr, val);
    }
    /**
     * The hash of the preimage which unlocks this HTLC.
     */
    get_payment_hash() {
        const ret = bindings.HTLCOutputInCommitment_get_payment_hash(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The hash of the preimage which unlocks this HTLC.
     */
    set_payment_hash(val) {
        bindings.HTLCOutputInCommitment_set_payment_hash(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The position within the commitment transactions' outputs. This may be None if the value is
     * below the dust limit (in which case no output appears in the commitment transaction and the
     * value is spent to additional transaction fees).
     */
    get_transaction_output_index() {
        const ret = bindings.HTLCOutputInCommitment_get_transaction_output_index(this.ptr);
        const ret_hu_conv = Option_u32Z.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The position within the commitment transactions' outputs. This may be None if the value is
     * below the dust limit (in which case no output appears in the commitment transaction and the
     * value is spent to additional transaction fees).
     */
    set_transaction_output_index(val) {
        bindings.HTLCOutputInCommitment_set_transaction_output_index(this.ptr, CommonBase.get_ptr_of(val));
    }
    /**
     * Constructs a new HTLCOutputInCommitment given each field
     */
    static constructor_new(offered_arg, amount_msat_arg, cltv_expiry_arg, payment_hash_arg, transaction_output_index_arg) {
        const ret = bindings.HTLCOutputInCommitment_new(offered_arg, amount_msat_arg, cltv_expiry_arg, bindings.encodeUint8Array(bindings.check_arr_len(payment_hash_arg, 32)), CommonBase.get_ptr_of(transaction_output_index_arg));
        const ret_hu_conv = new HTLCOutputInCommitment(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.HTLCOutputInCommitment_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the HTLCOutputInCommitment
     */
    clone() {
        const ret = bindings.HTLCOutputInCommitment_clone(this.ptr);
        const ret_hu_conv = new HTLCOutputInCommitment(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the HTLCOutputInCommitment object into a byte array which can be read by HTLCOutputInCommitment_read
     */
    write() {
        const ret = bindings.HTLCOutputInCommitment_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a HTLCOutputInCommitment from a byte array, created by HTLCOutputInCommitment_write
     */
    static constructor_read(ser) {
        const ret = bindings.HTLCOutputInCommitment_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_HTLCOutputInCommitmentDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=HTLCOutputInCommitment.mjs.map