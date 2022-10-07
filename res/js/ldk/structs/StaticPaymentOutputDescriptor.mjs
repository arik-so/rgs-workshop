import { TxOut } from '../structs/TxOut.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { Result_StaticPaymentOutputDescriptorDecodeErrorZ } from '../structs/Result_StaticPaymentOutputDescriptorDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Information about a spendable output to our \"payment key\". See
 * SpendableOutputDescriptor::StaticPaymentOutput for more details on how to spend this.
 */
export class StaticPaymentOutputDescriptor extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.StaticPaymentOutputDescriptor_free);
    }
    /**
     * The outpoint which is spendable
     */
    get_outpoint() {
        const ret = bindings.StaticPaymentOutputDescriptor_get_outpoint(this.ptr);
        const ret_hu_conv = new OutPoint(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The outpoint which is spendable
     */
    set_outpoint(val) {
        bindings.StaticPaymentOutputDescriptor_set_outpoint(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * The output which is referenced by the given outpoint
     *
     * Returns a copy of the field.
     */
    get_output() {
        const ret = bindings.StaticPaymentOutputDescriptor_get_output(this.ptr);
        const ret_conv = new TxOut(null, ret);
        return ret_conv;
    }
    /**
     * The output which is referenced by the given outpoint
     */
    set_output(val) {
        bindings.StaticPaymentOutputDescriptor_set_output(this.ptr, CommonBase.get_ptr_of(val));
    }
    /**
     * Arbitrary identification information returned by a call to
     * `Sign::channel_keys_id()`. This may be useful in re-deriving keys used in
     * the channel to spend the output.
     */
    get_channel_keys_id() {
        const ret = bindings.StaticPaymentOutputDescriptor_get_channel_keys_id(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Arbitrary identification information returned by a call to
     * `Sign::channel_keys_id()`. This may be useful in re-deriving keys used in
     * the channel to spend the output.
     */
    set_channel_keys_id(val) {
        bindings.StaticPaymentOutputDescriptor_set_channel_keys_id(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * The value of the channel which this transactions spends.
     */
    get_channel_value_satoshis() {
        const ret = bindings.StaticPaymentOutputDescriptor_get_channel_value_satoshis(this.ptr);
        return ret;
    }
    /**
     * The value of the channel which this transactions spends.
     */
    set_channel_value_satoshis(val) {
        bindings.StaticPaymentOutputDescriptor_set_channel_value_satoshis(this.ptr, val);
    }
    /**
     * Constructs a new StaticPaymentOutputDescriptor given each field
     */
    static constructor_new(outpoint_arg, output_arg, channel_keys_id_arg, channel_value_satoshis_arg) {
        const ret = bindings.StaticPaymentOutputDescriptor_new(outpoint_arg == null ? 0n : CommonBase.get_ptr_of(outpoint_arg), CommonBase.get_ptr_of(output_arg), bindings.encodeUint8Array(bindings.check_arr_len(channel_keys_id_arg, 32)), channel_value_satoshis_arg);
        const ret_hu_conv = new StaticPaymentOutputDescriptor(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, outpoint_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.StaticPaymentOutputDescriptor_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the StaticPaymentOutputDescriptor
     */
    clone() {
        const ret = bindings.StaticPaymentOutputDescriptor_clone(this.ptr);
        const ret_hu_conv = new StaticPaymentOutputDescriptor(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the StaticPaymentOutputDescriptor object into a byte array which can be read by StaticPaymentOutputDescriptor_read
     */
    write() {
        const ret = bindings.StaticPaymentOutputDescriptor_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a StaticPaymentOutputDescriptor from a byte array, created by StaticPaymentOutputDescriptor_write
     */
    static constructor_read(ser) {
        const ret = bindings.StaticPaymentOutputDescriptor_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_StaticPaymentOutputDescriptorDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=StaticPaymentOutputDescriptor.mjs.map