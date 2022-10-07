import { Result_BuiltCommitmentTransactionDecodeErrorZ } from '../structs/Result_BuiltCommitmentTransactionDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A pre-built Bitcoin commitment transaction and its txid.
 */
export declare class BuiltCommitmentTransaction extends CommonBase {
    /**
     * The commitment transaction
     */
    get_transaction(): Uint8Array;
    /**
     * The commitment transaction
     */
    set_transaction(val: Uint8Array): void;
    /**
     * The txid for the commitment transaction.
     *
     * This is provided as a performance optimization, instead of calling transaction.txid()
     * multiple times.
     */
    get_txid(): Uint8Array;
    /**
     * The txid for the commitment transaction.
     *
     * This is provided as a performance optimization, instead of calling transaction.txid()
     * multiple times.
     */
    set_txid(val: Uint8Array): void;
    /**
     * Constructs a new BuiltCommitmentTransaction given each field
     */
    static constructor_new(transaction_arg: Uint8Array, txid_arg: Uint8Array): BuiltCommitmentTransaction;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the BuiltCommitmentTransaction
     */
    clone(): BuiltCommitmentTransaction;
    /**
     * Serialize the BuiltCommitmentTransaction object into a byte array which can be read by BuiltCommitmentTransaction_read
     */
    write(): Uint8Array;
    /**
     * Read a BuiltCommitmentTransaction from a byte array, created by BuiltCommitmentTransaction_write
     */
    static constructor_read(ser: Uint8Array): Result_BuiltCommitmentTransactionDecodeErrorZ;
    /**
     * Get the SIGHASH_ALL sighash value of the transaction.
     *
     * This can be used to verify a signature.
     */
    get_sighash_all(funding_redeemscript: Uint8Array, channel_value_satoshis: bigint): Uint8Array;
    /**
     * Sign a transaction, either because we are counter-signing the counterparty's transaction or
     * because we are about to broadcast a holder transaction.
     */
    sign(funding_key: Uint8Array, funding_redeemscript: Uint8Array, channel_value_satoshis: bigint): Uint8Array;
}
