import { TwoTuple_usizeTransactionZ } from '../structs/TwoTuple_usizeTransactionZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of Confirm */
export interface ConfirmInterface {
    /**Processes transactions confirmed in a block with a given header and height.
     *
     * Should be called for any transactions registered by [`Filter::register_tx`] or any
     * transactions spending an output registered by [`Filter::register_output`]. Such transactions
     * appearing in the same block do not need to be included in the same call; instead, multiple
     * calls with additional transactions may be made so long as they are made in [chain order].
     *
     * May be called before or after [`best_block_updated`] for the corresponding block. However,
     * in the event of a chain reorganization, it must not be called with a `header` that is no
     * longer in the chain as of the last call to [`best_block_updated`].
     *
     * [chain order]: Confirm#order
     * [`best_block_updated`]: Self::best_block_updated
     */
    transactions_confirmed(header: Uint8Array, txdata: TwoTuple_usizeTransactionZ[], height: number): void;
    /**Processes a transaction that is no longer confirmed as result of a chain reorganization.
     *
     * Should be called for any transaction returned by [`get_relevant_txids`] if it has been
     * reorganized out of the best chain. Once called, the given transaction will not be returned
     * by [`get_relevant_txids`], unless it has been reconfirmed via [`transactions_confirmed`].
     *
     * [`get_relevant_txids`]: Self::get_relevant_txids
     * [`transactions_confirmed`]: Self::transactions_confirmed
     */
    transaction_unconfirmed(txid: Uint8Array): void;
    /**Processes an update to the best header connected at the given height.
     *
     * Should be called when a new header is available but may be skipped for intermediary blocks
     * if they become available at the same time.
     */
    best_block_updated(header: Uint8Array, height: number): void;
    /**Returns transactions that should be monitored for reorganization out of the chain.
     *
     * Will include any transactions passed to [`transactions_confirmed`] that have insufficient
     * confirmations to be safe from a chain reorganization. Will not include any transactions
     * passed to [`transaction_unconfirmed`], unless later reconfirmed.
     *
     * May be called to determine the subset of transactions that must still be monitored for
     * reorganization. Will be idempotent between calls but may change as a result of calls to the
     * other interface methods. Thus, this is useful to determine which transactions may need to be
     * given to [`transaction_unconfirmed`].
     *
     * [`transactions_confirmed`]: Self::transactions_confirmed
     * [`transaction_unconfirmed`]: Self::transaction_unconfirmed
     */
    get_relevant_txids(): Uint8Array[];
}
/**
 * The `Confirm` trait is used to notify when transactions have been confirmed on chain or
 * unconfirmed during a chain reorganization.
 *
 * Clients sourcing chain data using a transaction-oriented API should prefer this interface over
 * [`Listen`]. For instance, an Electrum client may implement [`Filter`] by subscribing to activity
 * related to registered transactions and outputs. Upon notification, it would pass along the
 * matching transactions using this interface.
 *
 * # Use
 *
 * The intended use is as follows:
 * - Call [`transactions_confirmed`] to process any on-chain activity of interest.
 * - Call [`transaction_unconfirmed`] to process any transaction returned by [`get_relevant_txids`]
 * that has been reorganized out of the chain.
 * - Call [`best_block_updated`] whenever a new chain tip becomes available.
 *
 * # Order
 *
 * Clients must call these methods in chain order. Specifically:
 * - Transactions confirmed in a block must be given before transactions confirmed in a later
 * block.
 * - Dependent transactions within the same block must be given in topological order, possibly in
 * separate calls.
 * - Unconfirmed transactions must be given after the original confirmations and before any
 * reconfirmation.
 *
 * See individual method documentation for further details.
 *
 * [`transactions_confirmed`]: Self::transactions_confirmed
 * [`transaction_unconfirmed`]: Self::transaction_unconfirmed
 * [`best_block_updated`]: Self::best_block_updated
 * [`get_relevant_txids`]: Self::get_relevant_txids
 */
export declare class Confirm extends CommonBase {
    /** Creates a new instance of Confirm from a given implementation */
    static new_impl(arg: ConfirmInterface): Confirm;
    /**
     * Processes transactions confirmed in a block with a given header and height.
     *
     * Should be called for any transactions registered by [`Filter::register_tx`] or any
     * transactions spending an output registered by [`Filter::register_output`]. Such transactions
     * appearing in the same block do not need to be included in the same call; instead, multiple
     * calls with additional transactions may be made so long as they are made in [chain order].
     *
     * May be called before or after [`best_block_updated`] for the corresponding block. However,
     * in the event of a chain reorganization, it must not be called with a `header` that is no
     * longer in the chain as of the last call to [`best_block_updated`].
     *
     * [chain order]: Confirm#order
     * [`best_block_updated`]: Self::best_block_updated
     */
    transactions_confirmed(header: Uint8Array, txdata: TwoTuple_usizeTransactionZ[], height: number): void;
    /**
     * Processes a transaction that is no longer confirmed as result of a chain reorganization.
     *
     * Should be called for any transaction returned by [`get_relevant_txids`] if it has been
     * reorganized out of the best chain. Once called, the given transaction will not be returned
     * by [`get_relevant_txids`], unless it has been reconfirmed via [`transactions_confirmed`].
     *
     * [`get_relevant_txids`]: Self::get_relevant_txids
     * [`transactions_confirmed`]: Self::transactions_confirmed
     */
    transaction_unconfirmed(txid: Uint8Array): void;
    /**
     * Processes an update to the best header connected at the given height.
     *
     * Should be called when a new header is available but may be skipped for intermediary blocks
     * if they become available at the same time.
     */
    best_block_updated(header: Uint8Array, height: number): void;
    /**
     * Returns transactions that should be monitored for reorganization out of the chain.
     *
     * Will include any transactions passed to [`transactions_confirmed`] that have insufficient
     * confirmations to be safe from a chain reorganization. Will not include any transactions
     * passed to [`transaction_unconfirmed`], unless later reconfirmed.
     *
     * May be called to determine the subset of transactions that must still be monitored for
     * reorganization. Will be idempotent between calls but may change as a result of calls to the
     * other interface methods. Thus, this is useful to determine which transactions may need to be
     * given to [`transaction_unconfirmed`].
     *
     * [`transactions_confirmed`]: Self::transactions_confirmed
     * [`transaction_unconfirmed`]: Self::transaction_unconfirmed
     */
    get_relevant_txids(): Uint8Array[];
}
