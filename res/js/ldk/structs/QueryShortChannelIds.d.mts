import { Result_QueryShortChannelIdsDecodeErrorZ } from '../structs/Result_QueryShortChannelIdsDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A query_short_channel_ids message is used to query a peer for
 * routing gossip messages related to one or more short_channel_ids.
 * The query recipient will reply with the latest, if available,
 * channel_announcement, channel_update and node_announcement messages
 * it maintains for the requested short_channel_ids followed by a
 * reply_short_channel_ids_end message. The short_channel_ids sent in
 * this query are encoded. We only support encoding_type=0 uncompressed
 * serialization and do not support encoding_type=1 zlib serialization.
 */
export declare class QueryShortChannelIds extends CommonBase {
    /**
     * The genesis hash of the blockchain being queried
     */
    get_chain_hash(): Uint8Array;
    /**
     * The genesis hash of the blockchain being queried
     */
    set_chain_hash(val: Uint8Array): void;
    /**
     * The short_channel_ids that are being queried
     *
     * Returns a copy of the field.
     */
    get_short_channel_ids(): bigint[];
    /**
     * The short_channel_ids that are being queried
     */
    set_short_channel_ids(val: bigint[]): void;
    /**
     * Constructs a new QueryShortChannelIds given each field
     */
    static constructor_new(chain_hash_arg: Uint8Array, short_channel_ids_arg: bigint[]): QueryShortChannelIds;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the QueryShortChannelIds
     */
    clone(): QueryShortChannelIds;
    /**
     * Read a QueryShortChannelIds from a byte array, created by QueryShortChannelIds_write
     */
    static constructor_read(ser: Uint8Array): Result_QueryShortChannelIdsDecodeErrorZ;
    /**
     * Serialize the QueryShortChannelIds object into a byte array which can be read by QueryShortChannelIds_read
     */
    write(): Uint8Array;
}
