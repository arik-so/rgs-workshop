import { Result_ReplyChannelRangeDecodeErrorZ } from '../structs/Result_ReplyChannelRangeDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A reply_channel_range message is a reply to a query_channel_range
 * message. Multiple reply_channel_range messages can be sent in reply
 * to a single query_channel_range message. The query recipient makes a
 * best effort to respond based on their local network view which may
 * not be a perfect view of the network. The short_channel_ids in the
 * reply are encoded. We only support encoding_type=0 uncompressed
 * serialization and do not support encoding_type=1 zlib serialization.
 */
export declare class ReplyChannelRange extends CommonBase {
    /**
     * The genesis hash of the blockchain being queried
     */
    get_chain_hash(): Uint8Array;
    /**
     * The genesis hash of the blockchain being queried
     */
    set_chain_hash(val: Uint8Array): void;
    /**
     * The height of the first block in the range of the reply
     */
    get_first_blocknum(): number;
    /**
     * The height of the first block in the range of the reply
     */
    set_first_blocknum(val: number): void;
    /**
     * The number of blocks included in the range of the reply
     */
    get_number_of_blocks(): number;
    /**
     * The number of blocks included in the range of the reply
     */
    set_number_of_blocks(val: number): void;
    /**
     * True when this is the final reply for a query
     */
    get_sync_complete(): boolean;
    /**
     * True when this is the final reply for a query
     */
    set_sync_complete(val: boolean): void;
    /**
     * The short_channel_ids in the channel range
     *
     * Returns a copy of the field.
     */
    get_short_channel_ids(): bigint[];
    /**
     * The short_channel_ids in the channel range
     */
    set_short_channel_ids(val: bigint[]): void;
    /**
     * Constructs a new ReplyChannelRange given each field
     */
    static constructor_new(chain_hash_arg: Uint8Array, first_blocknum_arg: number, number_of_blocks_arg: number, sync_complete_arg: boolean, short_channel_ids_arg: bigint[]): ReplyChannelRange;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ReplyChannelRange
     */
    clone(): ReplyChannelRange;
    /**
     * Read a ReplyChannelRange from a byte array, created by ReplyChannelRange_write
     */
    static constructor_read(ser: Uint8Array): Result_ReplyChannelRangeDecodeErrorZ;
    /**
     * Serialize the ReplyChannelRange object into a byte array which can be read by ReplyChannelRange_read
     */
    write(): Uint8Array;
}