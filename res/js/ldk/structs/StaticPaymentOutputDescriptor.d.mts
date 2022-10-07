import { TxOut } from '../structs/TxOut.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { Result_StaticPaymentOutputDescriptorDecodeErrorZ } from '../structs/Result_StaticPaymentOutputDescriptorDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Information about a spendable output to our \"payment key\". See
 * SpendableOutputDescriptor::StaticPaymentOutput for more details on how to spend this.
 */
export declare class StaticPaymentOutputDescriptor extends CommonBase {
    /**
     * The outpoint which is spendable
     */
    get_outpoint(): OutPoint;
    /**
     * The outpoint which is spendable
     */
    set_outpoint(val: OutPoint): void;
    /**
     * The output which is referenced by the given outpoint
     *
     * Returns a copy of the field.
     */
    get_output(): TxOut;
    /**
     * The output which is referenced by the given outpoint
     */
    set_output(val: TxOut): void;
    /**
     * Arbitrary identification information returned by a call to
     * `Sign::channel_keys_id()`. This may be useful in re-deriving keys used in
     * the channel to spend the output.
     */
    get_channel_keys_id(): Uint8Array;
    /**
     * Arbitrary identification information returned by a call to
     * `Sign::channel_keys_id()`. This may be useful in re-deriving keys used in
     * the channel to spend the output.
     */
    set_channel_keys_id(val: Uint8Array): void;
    /**
     * The value of the channel which this transactions spends.
     */
    get_channel_value_satoshis(): bigint;
    /**
     * The value of the channel which this transactions spends.
     */
    set_channel_value_satoshis(val: bigint): void;
    /**
     * Constructs a new StaticPaymentOutputDescriptor given each field
     */
    static constructor_new(outpoint_arg: OutPoint, output_arg: TxOut, channel_keys_id_arg: Uint8Array, channel_value_satoshis_arg: bigint): StaticPaymentOutputDescriptor;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the StaticPaymentOutputDescriptor
     */
    clone(): StaticPaymentOutputDescriptor;
    /**
     * Serialize the StaticPaymentOutputDescriptor object into a byte array which can be read by StaticPaymentOutputDescriptor_read
     */
    write(): Uint8Array;
    /**
     * Read a StaticPaymentOutputDescriptor from a byte array, created by StaticPaymentOutputDescriptor_write
     */
    static constructor_read(ser: Uint8Array): Result_StaticPaymentOutputDescriptorDecodeErrorZ;
}
