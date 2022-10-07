import { TxOut } from '../structs/TxOut.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { Result_DelayedPaymentOutputDescriptorDecodeErrorZ } from '../structs/Result_DelayedPaymentOutputDescriptorDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Information about a spendable output to a P2WSH script. See
 * SpendableOutputDescriptor::DelayedPaymentOutput for more details on how to spend this.
 */
export class DelayedPaymentOutputDescriptor extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.DelayedPaymentOutputDescriptor_free);
    }
    /**
     * The outpoint which is spendable
     */
    get_outpoint() {
        const ret = bindings.DelayedPaymentOutputDescriptor_get_outpoint(this.ptr);
        const ret_hu_conv = new OutPoint(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The outpoint which is spendable
     */
    set_outpoint(val) {
        bindings.DelayedPaymentOutputDescriptor_set_outpoint(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * Per commitment point to derive delayed_payment_key by key holder
     */
    get_per_commitment_point() {
        const ret = bindings.DelayedPaymentOutputDescriptor_get_per_commitment_point(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Per commitment point to derive delayed_payment_key by key holder
     */
    set_per_commitment_point(val) {
        bindings.DelayedPaymentOutputDescriptor_set_per_commitment_point(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The nSequence value which must be set in the spending input to satisfy the OP_CSV in
     * the witness_script.
     */
    get_to_self_delay() {
        const ret = bindings.DelayedPaymentOutputDescriptor_get_to_self_delay(this.ptr);
        return ret;
    }
    /**
     * The nSequence value which must be set in the spending input to satisfy the OP_CSV in
     * the witness_script.
     */
    set_to_self_delay(val) {
        bindings.DelayedPaymentOutputDescriptor_set_to_self_delay(this.ptr, val);
    }
    /**
     * The output which is referenced by the given outpoint
     *
     * Returns a copy of the field.
     */
    get_output() {
        const ret = bindings.DelayedPaymentOutputDescriptor_get_output(this.ptr);
        const ret_conv = new TxOut(null, ret);
        return ret_conv;
    }
    /**
     * The output which is referenced by the given outpoint
     */
    set_output(val) {
        bindings.DelayedPaymentOutputDescriptor_set_output(this.ptr, CommonBase.get_ptr_of(val));
    }
    /**
     * The revocation point specific to the commitment transaction which was broadcast. Used to
     * derive the witnessScript for this output.
     */
    get_revocation_pubkey() {
        const ret = bindings.DelayedPaymentOutputDescriptor_get_revocation_pubkey(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The revocation point specific to the commitment transaction which was broadcast. Used to
     * derive the witnessScript for this output.
     */
    set_revocation_pubkey(val) {
        bindings.DelayedPaymentOutputDescriptor_set_revocation_pubkey(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Arbitrary identification information returned by a call to
     * `Sign::channel_keys_id()`. This may be useful in re-deriving keys used in
     * the channel to spend the output.
     */
    get_channel_keys_id() {
        const ret = bindings.DelayedPaymentOutputDescriptor_get_channel_keys_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Arbitrary identification information returned by a call to
     * `Sign::channel_keys_id()`. This may be useful in re-deriving keys used in
     * the channel to spend the output.
     */
    set_channel_keys_id(val) {
        bindings.DelayedPaymentOutputDescriptor_set_channel_keys_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The value of the channel which this output originated from, possibly indirectly.
     */
    get_channel_value_satoshis() {
        const ret = bindings.DelayedPaymentOutputDescriptor_get_channel_value_satoshis(this.ptr);
        return ret;
    }
    /**
     * The value of the channel which this output originated from, possibly indirectly.
     */
    set_channel_value_satoshis(val) {
        bindings.DelayedPaymentOutputDescriptor_set_channel_value_satoshis(this.ptr, val);
    }
    /**
     * Constructs a new DelayedPaymentOutputDescriptor given each field
     */
    static constructor_new(outpoint_arg, per_commitment_point_arg, to_self_delay_arg, output_arg, revocation_pubkey_arg, channel_keys_id_arg, channel_value_satoshis_arg) {
        const ret = bindings.DelayedPaymentOutputDescriptor_new(outpoint_arg == null ? 0n : CommonBase.get_ptr_of(outpoint_arg), bindings.encodeUint8Array(bindings.check_arr_len(per_commitment_point_arg, 33)), to_self_delay_arg, CommonBase.get_ptr_of(output_arg), bindings.encodeUint8Array(bindings.check_arr_len(revocation_pubkey_arg, 33)), bindings.encodeUint8Array(bindings.check_arr_len(channel_keys_id_arg, 32)), channel_value_satoshis_arg);
        const ret_hu_conv = new DelayedPaymentOutputDescriptor(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, outpoint_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.DelayedPaymentOutputDescriptor_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the DelayedPaymentOutputDescriptor
     */
    clone() {
        const ret = bindings.DelayedPaymentOutputDescriptor_clone(this.ptr);
        const ret_hu_conv = new DelayedPaymentOutputDescriptor(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the DelayedPaymentOutputDescriptor object into a byte array which can be read by DelayedPaymentOutputDescriptor_read
     */
    write() {
        const ret = bindings.DelayedPaymentOutputDescriptor_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a DelayedPaymentOutputDescriptor from a byte array, created by DelayedPaymentOutputDescriptor_write
     */
    static constructor_read(ser) {
        const ret = bindings.DelayedPaymentOutputDescriptor_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_DelayedPaymentOutputDescriptorDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=DelayedPaymentOutputDescriptor.mjs.map