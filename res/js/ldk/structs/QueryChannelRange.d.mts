import { Result_QueryChannelRangeDecodeErrorZ } from '../structs/Result_QueryChannelRangeDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A query_channel_range message is used to query a peer for channel
 * UTXOs in a range of blocks. The recipient of a query makes a best
 * effort to reply to the query using one or more reply_channel_range
 * messages.
 */
export declare class QueryChannelRange extends CommonBase {
    /**
     * The genesis hash of the blockchain being queried
     */
    get_chain_hash(): Uint8Array;
    /**
     * The genesis hash of the blockchain being queried
     */
    set_chain_hash(val: Uint8Array): void;
    /**
     * The height of the first block for the channel UTXOs being queried
     */
    get_first_blocknum(): number;
    /**
     * The height of the first block for the channel UTXOs being queried
     */
    set_first_blocknum(val: number): void;
    /**
     * The number of blocks to include in the query results
     */
    get_number_of_blocks(): number;
    /**
     * The number of blocks to include in the query results
     */
    set_number_of_blocks(val: number): void;
    /**
     * Constructs a new QueryChannelRange given each field
     */
    static constructor_new(chain_hash_arg: Uint8Array, first_blocknum_arg: number, number_of_blocks_arg: number): QueryChannelRange;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the QueryChannelRange
     */
    clone(): QueryChannelRange;
    /**
     * \n\t * Calculates the overflow safe ending block height for the query.\n\t * Overflow returns `0xffffffff`, otherwise returns `first_blocknum + number_of_blocks`\n\t
     */
    end_blocknum(): number;
    /**
     * Serialize the QueryChannelRange object into a byte array which can be read by QueryChannelRange_read
     */
    write(): Uint8Array;
    /**
     * Read a QueryChannelRange from a byte array, created by QueryChannelRange_write
     */
    static constructor_read(ser: Uint8Array): Result_QueryChannelRangeDecodeErrorZ;
}