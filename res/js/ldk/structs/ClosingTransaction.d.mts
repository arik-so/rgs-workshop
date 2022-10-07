import { TrustedClosingTransaction } from '../structs/TrustedClosingTransaction.mjs';
import { Result_TrustedClosingTransactionNoneZ } from '../structs/Result_TrustedClosingTransactionNoneZ.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * This class tracks the per-transaction information needed to build a closing transaction and will
 * actually build it and sign.
 *
 * This class can be used inside a signer implementation to generate a signature given the relevant
 * secret key.
 */
export declare class ClosingTransaction extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ClosingTransaction
     */
    clone(): ClosingTransaction;
    /**
     * Checks if two ClosingTransactions contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Construct an object of the class
     */
    static constructor_new(to_holder_value_sat: bigint, to_counterparty_value_sat: bigint, to_holder_script: Uint8Array, to_counterparty_script: Uint8Array, funding_outpoint: OutPoint): ClosingTransaction;
    /**
     * Trust our pre-built transaction.
     *
     * Applies a wrapper which allows access to the transaction.
     *
     * This should only be used if you fully trust the builder of this object. It should not
     * be used by an external signer - instead use the verify function.
     */
    trust(): TrustedClosingTransaction;
    /**
     * Verify our pre-built transaction.
     *
     * Applies a wrapper which allows access to the transaction.
     *
     * An external validating signer must call this method before signing
     * or using the built transaction.
     */
    verify(funding_outpoint: OutPoint): Result_TrustedClosingTransactionNoneZ;
    /**
     * The value to be sent to the holder, or zero if the output will be omitted
     */
    to_holder_value_sat(): bigint;
    /**
     * The value to be sent to the counterparty, or zero if the output will be omitted
     */
    to_counterparty_value_sat(): bigint;
    /**
     * The destination of the holder's output
     */
    to_holder_script(): Uint8Array;
    /**
     * The destination of the counterparty's output
     */
    to_counterparty_script(): Uint8Array;
}