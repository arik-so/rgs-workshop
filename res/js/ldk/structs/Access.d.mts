import { Result_TxOutAccessErrorZ } from '../structs/Result_TxOutAccessErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of Access */
export interface AccessInterface {
    /**Returns the transaction output of a funding transaction encoded by [`short_channel_id`].
     * Returns an error if `genesis_hash` is for a different chain or if such a transaction output
     * is unknown.
     *
     * [`short_channel_id`]: https://github.com/lightning/bolts/blob/master/07-routing-gossip.md#definition-of-short_channel_id
     */
    get_utxo(genesis_hash: Uint8Array, short_channel_id: bigint): Result_TxOutAccessErrorZ;
}
/**
 * The `Access` trait defines behavior for accessing chain data and state, such as blocks and
 * UTXOs.
 */
export declare class Access extends CommonBase {
    /** Creates a new instance of Access from a given implementation */
    static new_impl(arg: AccessInterface): Access;
    /**
     * Returns the transaction output of a funding transaction encoded by [`short_channel_id`].
     * Returns an error if `genesis_hash` is for a different chain or if such a transaction output
     * is unknown.
     *
     * [`short_channel_id`]: https://github.com/lightning/bolts/blob/master/07-routing-gossip.md#definition-of-short_channel_id
     */
    get_utxo(genesis_hash: Uint8Array, short_channel_id: bigint): Result_TxOutAccessErrorZ;
}
