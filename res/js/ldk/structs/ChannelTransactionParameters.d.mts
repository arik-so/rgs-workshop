import { COption_NoneZ } from '../enums/COption_NoneZ.mjs';
import { ChannelPublicKeys } from '../structs/ChannelPublicKeys.mjs';
import { CounterpartyChannelTransactionParameters } from '../structs/CounterpartyChannelTransactionParameters.mjs';
import { Result_ChannelTransactionParametersDecodeErrorZ } from '../structs/Result_ChannelTransactionParametersDecodeErrorZ.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { DirectedChannelTransactionParameters } from '../structs/DirectedChannelTransactionParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Per-channel data used to build transactions in conjunction with the per-commitment data (CommitmentTransaction).
 * The fields are organized by holder/counterparty.
 *
 * Normally, this is converted to the broadcaster/countersignatory-organized DirectedChannelTransactionParameters
 * before use, via the as_holder_broadcastable and as_counterparty_broadcastable functions.
 */
export declare class ChannelTransactionParameters extends CommonBase {
    /**
     * Holder public keys
     */
    get_holder_pubkeys(): ChannelPublicKeys;
    /**
     * Holder public keys
     */
    set_holder_pubkeys(val: ChannelPublicKeys): void;
    /**
     * The contest delay selected by the holder, which applies to counterparty-broadcast transactions
     */
    get_holder_selected_contest_delay(): number;
    /**
     * The contest delay selected by the holder, which applies to counterparty-broadcast transactions
     */
    set_holder_selected_contest_delay(val: number): void;
    /**
     * Whether the holder is the initiator of this channel.
     * This is an input to the commitment number obscure factor computation.
     */
    get_is_outbound_from_holder(): boolean;
    /**
     * Whether the holder is the initiator of this channel.
     * This is an input to the commitment number obscure factor computation.
     */
    set_is_outbound_from_holder(val: boolean): void;
    /**
     * The late-bound counterparty channel transaction parameters.
     * These parameters are populated at the point in the protocol where the counterparty provides them.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_counterparty_parameters(): CounterpartyChannelTransactionParameters;
    /**
     * The late-bound counterparty channel transaction parameters.
     * These parameters are populated at the point in the protocol where the counterparty provides them.
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_counterparty_parameters(val: CounterpartyChannelTransactionParameters): void;
    /**
     * The late-bound funding outpoint
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    get_funding_outpoint(): OutPoint;
    /**
     * The late-bound funding outpoint
     *
     * Note that val (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    set_funding_outpoint(val: OutPoint): void;
    /**
     * Are anchors used for this channel.  Boolean is serialization backwards-compatible
     */
    get_opt_anchors(): COption_NoneZ;
    /**
     * Are anchors used for this channel.  Boolean is serialization backwards-compatible
     */
    set_opt_anchors(val: COption_NoneZ): void;
    /**
     * Constructs a new ChannelTransactionParameters given each field
     */
    static constructor_new(holder_pubkeys_arg: ChannelPublicKeys, holder_selected_contest_delay_arg: number, is_outbound_from_holder_arg: boolean, counterparty_parameters_arg: CounterpartyChannelTransactionParameters, funding_outpoint_arg: OutPoint, opt_anchors_arg: COption_NoneZ): ChannelTransactionParameters;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ChannelTransactionParameters
     */
    clone(): ChannelTransactionParameters;
    /**
     * Whether the late bound parameters are populated.
     */
    is_populated(): boolean;
    /**
     * Convert the holder/counterparty parameters to broadcaster/countersignatory-organized parameters,
     * given that the holder is the broadcaster.
     *
     * self.is_populated() must be true before calling this function.
     */
    as_holder_broadcastable(): DirectedChannelTransactionParameters;
    /**
     * Convert the holder/counterparty parameters to broadcaster/countersignatory-organized parameters,
     * given that the counterparty is the broadcaster.
     *
     * self.is_populated() must be true before calling this function.
     */
    as_counterparty_broadcastable(): DirectedChannelTransactionParameters;
    /**
     * Serialize the ChannelTransactionParameters object into a byte array which can be read by ChannelTransactionParameters_read
     */
    write(): Uint8Array;
    /**
     * Read a ChannelTransactionParameters from a byte array, created by ChannelTransactionParameters_write
     */
    static constructor_read(ser: Uint8Array): Result_ChannelTransactionParametersDecodeErrorZ;
}
