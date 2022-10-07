import { WatchedOutput } from '../structs/WatchedOutput.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of Filter */
export interface FilterInterface {
    /**Registers interest in a transaction with `txid` and having an output with `script_pubkey` as
     * a spending condition.
     */
    register_tx(txid: Uint8Array, script_pubkey: Uint8Array): void;
    /**Registers interest in spends of a transaction output.
     *
     * Note that this method might be called during processing of a new block. You therefore need
     * to ensure that also dependent output spents within an already connected block are correctly
     * handled, e.g., by re-scanning the block in question whenever new outputs have been
     * registered mid-processing.
     */
    register_output(output: WatchedOutput): void;
}
/**
 * The `Filter` trait defines behavior for indicating chain activity of interest pertaining to
 * channels.
 *
 * This is useful in order to have a [`Watch`] implementation convey to a chain source which
 * transactions to be notified of. Notification may take the form of pre-filtering blocks or, in
 * the case of [BIP 157]/[BIP 158], only fetching a block if the compact filter matches. If
 * receiving full blocks from a chain source, any further filtering is unnecessary.
 *
 * After an output has been registered, subsequent block retrievals from the chain source must not
 * exclude any transactions matching the new criteria nor any in-block descendants of such
 * transactions.
 *
 * Note that use as part of a [`Watch`] implementation involves reentrancy. Therefore, the `Filter`
 * should not block on I/O. Implementations should instead queue the newly monitored data to be
 * processed later. Then, in order to block until the data has been processed, any [`Watch`]
 * invocation that has called the `Filter` must return [`TemporaryFailure`].
 *
 * [`TemporaryFailure`]: ChannelMonitorUpdateErr::TemporaryFailure
 * [BIP 157]: https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki
 * [BIP 158]: https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki
 */
export declare class Filter extends CommonBase {
    /** Creates a new instance of Filter from a given implementation */
    static new_impl(arg: FilterInterface): Filter;
    /**
     * Registers interest in a transaction with `txid` and having an output with `script_pubkey` as
     * a spending condition.
     */
    register_tx(txid: Uint8Array, script_pubkey: Uint8Array): void;
    /**
     * Registers interest in spends of a transaction output.
     *
     * Note that this method might be called during processing of a new block. You therefore need
     * to ensure that also dependent output spents within an already connected block are correctly
     * handled, e.g., by re-scanning the block in question whenever new outputs have been
     * registered mid-processing.
     */
    register_output(output: WatchedOutput): void;
}
