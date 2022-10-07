import { TxOut } from '../structs/TxOut.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { DelayedPaymentOutputDescriptor } from '../structs/DelayedPaymentOutputDescriptor.mjs';
import { StaticPaymentOutputDescriptor } from '../structs/StaticPaymentOutputDescriptor.mjs';
import { Result_SpendableOutputDescriptorDecodeErrorZ } from '../structs/Result_SpendableOutputDescriptorDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * When on-chain outputs are created by rust-lightning (which our counterparty is not able to
 * claim at any point in the future) an event is generated which you must track and be able to
 * spend on-chain. The information needed to do this is provided in this enum, including the
 * outpoint describing which txid and output index is available, the full output which exists at
 * that txid/index, and any keys or other information required to sign.
 */
export class SpendableOutputDescriptor extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.SpendableOutputDescriptor_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKSpendableOutputDescriptor_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new SpendableOutputDescriptor_StaticOutput(ptr);
            case 1: return new SpendableOutputDescriptor_DelayedPaymentOutput(ptr);
            case 2: return new SpendableOutputDescriptor_StaticPaymentOutput(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.SpendableOutputDescriptor_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the SpendableOutputDescriptor
     */
    clone() {
        const ret = bindings.SpendableOutputDescriptor_clone(this.ptr);
        const ret_hu_conv = SpendableOutputDescriptor.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new StaticOutput-variant SpendableOutputDescriptor
     */
    static constructor_static_output(outpoint, output) {
        const ret = bindings.SpendableOutputDescriptor_static_output(outpoint == null ? 0n : CommonBase.get_ptr_of(outpoint), CommonBase.get_ptr_of(output));
        const ret_hu_conv = SpendableOutputDescriptor.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, outpoint);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new DelayedPaymentOutput-variant SpendableOutputDescriptor
     */
    static constructor_delayed_payment_output(a) {
        const ret = bindings.SpendableOutputDescriptor_delayed_payment_output(a == null ? 0n : CommonBase.get_ptr_of(a));
        const ret_hu_conv = SpendableOutputDescriptor.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, a);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new StaticPaymentOutput-variant SpendableOutputDescriptor
     */
    static constructor_static_payment_output(a) {
        const ret = bindings.SpendableOutputDescriptor_static_payment_output(a == null ? 0n : CommonBase.get_ptr_of(a));
        const ret_hu_conv = SpendableOutputDescriptor.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, a);
        return ret_hu_conv;
    }
    /**
     * Serialize the SpendableOutputDescriptor object into a byte array which can be read by SpendableOutputDescriptor_read
     */
    write() {
        const ret = bindings.SpendableOutputDescriptor_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a SpendableOutputDescriptor from a byte array, created by SpendableOutputDescriptor_write
     */
    static constructor_read(ser) {
        const ret = bindings.SpendableOutputDescriptor_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_SpendableOutputDescriptorDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
/** A SpendableOutputDescriptor of type StaticOutput */
export class SpendableOutputDescriptor_StaticOutput extends SpendableOutputDescriptor {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const outpoint = bindings.LDKSpendableOutputDescriptor_StaticOutput_get_outpoint(ptr);
        const outpoint_hu_conv = new OutPoint(null, outpoint);
        CommonBase.add_ref_from(outpoint_hu_conv, this);
        this.outpoint = outpoint_hu_conv;
        const output = bindings.LDKSpendableOutputDescriptor_StaticOutput_get_output(ptr);
        const output_conv = new TxOut(null, output);
        this.output = output_conv;
    }
}
/** A SpendableOutputDescriptor of type DelayedPaymentOutput */
export class SpendableOutputDescriptor_DelayedPaymentOutput extends SpendableOutputDescriptor {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const delayed_payment_output = bindings.LDKSpendableOutputDescriptor_DelayedPaymentOutput_get_delayed_payment_output(ptr);
        const delayed_payment_output_hu_conv = new DelayedPaymentOutputDescriptor(null, delayed_payment_output);
        CommonBase.add_ref_from(delayed_payment_output_hu_conv, this);
        this.delayed_payment_output = delayed_payment_output_hu_conv;
    }
}
/** A SpendableOutputDescriptor of type StaticPaymentOutput */
export class SpendableOutputDescriptor_StaticPaymentOutput extends SpendableOutputDescriptor {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const static_payment_output = bindings.LDKSpendableOutputDescriptor_StaticPaymentOutput_get_static_payment_output(ptr);
        const static_payment_output_hu_conv = new StaticPaymentOutputDescriptor(null, static_payment_output);
        CommonBase.add_ref_from(static_payment_output_hu_conv, this);
        this.static_payment_output = static_payment_output_hu_conv;
    }
}
//# sourceMappingURL=SpendableOutputDescriptor.mjs.map