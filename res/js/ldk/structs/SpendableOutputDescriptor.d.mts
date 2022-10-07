import { TxOut } from '../structs/TxOut.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { DelayedPaymentOutputDescriptor } from '../structs/DelayedPaymentOutputDescriptor.mjs';
import { StaticPaymentOutputDescriptor } from '../structs/StaticPaymentOutputDescriptor.mjs';
import { Result_SpendableOutputDescriptorDecodeErrorZ } from '../structs/Result_SpendableOutputDescriptorDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * When on-chain outputs are created by rust-lightning (which our counterparty is not able to
 * claim at any point in the future) an event is generated which you must track and be able to
 * spend on-chain. The information needed to do this is provided in this enum, including the
 * outpoint describing which txid and output index is available, the full output which exists at
 * that txid/index, and any keys or other information required to sign.
 */
export declare class SpendableOutputDescriptor extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the SpendableOutputDescriptor
     */
    clone(): SpendableOutputDescriptor;
    /**
     * Utility method to constructs a new StaticOutput-variant SpendableOutputDescriptor
     */
    static constructor_static_output(outpoint: OutPoint, output: TxOut): SpendableOutputDescriptor;
    /**
     * Utility method to constructs a new DelayedPaymentOutput-variant SpendableOutputDescriptor
     */
    static constructor_delayed_payment_output(a: DelayedPaymentOutputDescriptor): SpendableOutputDescriptor;
    /**
     * Utility method to constructs a new StaticPaymentOutput-variant SpendableOutputDescriptor
     */
    static constructor_static_payment_output(a: StaticPaymentOutputDescriptor): SpendableOutputDescriptor;
    /**
     * Serialize the SpendableOutputDescriptor object into a byte array which can be read by SpendableOutputDescriptor_read
     */
    write(): Uint8Array;
    /**
     * Read a SpendableOutputDescriptor from a byte array, created by SpendableOutputDescriptor_write
     */
    static constructor_read(ser: Uint8Array): Result_SpendableOutputDescriptorDecodeErrorZ;
}
/** A SpendableOutputDescriptor of type StaticOutput */
export declare class SpendableOutputDescriptor_StaticOutput extends SpendableOutputDescriptor {
    /**
     * The outpoint which is spendable
     */
    outpoint: OutPoint;
    /**
     * The output which is referenced by the given outpoint.
     */
    output: TxOut;
}
/** A SpendableOutputDescriptor of type DelayedPaymentOutput */
export declare class SpendableOutputDescriptor_DelayedPaymentOutput extends SpendableOutputDescriptor {
    delayed_payment_output: DelayedPaymentOutputDescriptor;
}
/** A SpendableOutputDescriptor of type StaticPaymentOutput */
export declare class SpendableOutputDescriptor_StaticPaymentOutput extends SpendableOutputDescriptor {
    static_payment_output: StaticPaymentOutputDescriptor;
}
