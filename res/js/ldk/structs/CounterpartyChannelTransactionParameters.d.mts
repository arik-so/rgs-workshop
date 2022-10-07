import { ChannelPublicKeys } from '../structs/ChannelPublicKeys.mjs';
import { Result_CounterpartyChannelTransactionParametersDecodeErrorZ } from '../structs/Result_CounterpartyChannelTransactionParametersDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Late-bound per-channel counterparty data used to build transactions.
 */
export declare class CounterpartyChannelTransactionParameters extends CommonBase {
    /**
     * Counter-party public keys
     */
    get_pubkeys(): ChannelPublicKeys;
    /**
     * Counter-party public keys
     */
    set_pubkeys(val: ChannelPublicKeys): void;
    /**
     * The contest delay selected by the counterparty, which applies to holder-broadcast transactions
     */
    get_selected_contest_delay(): number;
    /**
     * The contest delay selected by the counterparty, which applies to holder-broadcast transactions
     */
    set_selected_contest_delay(val: number): void;
    /**
     * Constructs a new CounterpartyChannelTransactionParameters given each field
     */
    static constructor_new(pubkeys_arg: ChannelPublicKeys, selected_contest_delay_arg: number): CounterpartyChannelTransactionParameters;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the CounterpartyChannelTransactionParameters
     */
    clone(): CounterpartyChannelTransactionParameters;
    /**
     * Serialize the CounterpartyChannelTransactionParameters object into a byte array which can be read by CounterpartyChannelTransactionParameters_read
     */
    write(): Uint8Array;
    /**
     * Read a CounterpartyChannelTransactionParameters from a byte array, created by CounterpartyChannelTransactionParameters_write
     */
    static constructor_read(ser: Uint8Array): Result_CounterpartyChannelTransactionParametersDecodeErrorZ;
}