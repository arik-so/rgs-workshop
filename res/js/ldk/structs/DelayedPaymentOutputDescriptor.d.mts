import { TxOut } from '../structs/TxOut.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { Result_DelayedPaymentOutputDescriptorDecodeErrorZ } from '../structs/Result_DelayedPaymentOutputDescriptorDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Information about a spendable output to a P2WSH script. See
 * SpendableOutputDescriptor::DelayedPaymentOutput for more details on how to spend this.
 */
export declare class DelayedPaymentOutputDescriptor extends CommonBase {
    /**
     * The outpoint which is spendable
     */
    get_outpoint(): OutPoint;
    /**
     * The outpoint which is spendable
     */
    set_outpoint(val: OutPoint): void;
    /**
     * Per commitment point to derive delayed_payment_key by key holder
     */
    get_per_commitment_point(): Uint8Array;
    /**
     * Per commitment point to derive delayed_payment_key by key holder
     */
    set_per_commitment_point(val: Uint8Array): void;
    /**
     * The nSequence value which must be set in the spending input to satisfy the OP_CSV in
     * the witness_script.
     */
    get_to_self_delay(): number;
    /**
     * The nSequence value which must be set in the spending input to satisfy the OP_CSV in
     * the witness_script.
     */
    set_to_self_delay(val: number): void;
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
     * The revocation point specific to the commitment transaction which was broadcast. Used to
     * derive the witnessScript for this output.
     */
    get_revocation_pubkey(): Uint8Array;
    /**
     * The revocation point specific to the commitment transaction which was broadcast. Used to
     * derive the witnessScript for this output.
     */
    set_revocation_pubkey(val: Uint8Array): void;
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
     * The value of the channel which this output originated from, possibly indirectly.
     */
    get_channel_value_satoshis(): bigint;
    /**
     * The value of the channel which this output originated from, possibly indirectly.
     */
    set_channel_value_satoshis(val: bigint): void;
    /**
     * Constructs a new DelayedPaymentOutputDescriptor given each field
     */
    static constructor_new(outpoint_arg: OutPoint, per_commitment_point_arg: Uint8Array, to_self_delay_arg: number, output_arg: TxOut, revocation_pubkey_arg: Uint8Array, channel_keys_id_arg: Uint8Array, channel_value_satoshis_arg: bigint): DelayedPaymentOutputDescriptor;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the DelayedPaymentOutputDescriptor
     */
    clone(): DelayedPaymentOutputDescriptor;
    /**
     * Serialize the DelayedPaymentOutputDescriptor object into a byte array which can be read by DelayedPaymentOutputDescriptor_read
     */
    write(): Uint8Array;
    /**
     * Read a DelayedPaymentOutputDescriptor from a byte array, created by DelayedPaymentOutputDescriptor_write
     */
    static constructor_read(ser: Uint8Array): Result_DelayedPaymentOutputDescriptorDecodeErrorZ;
}
