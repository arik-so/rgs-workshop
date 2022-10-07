import { Result_ReplyShortChannelIdsEndDecodeErrorZ } from '../structs/Result_ReplyShortChannelIdsEndDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A reply_short_channel_ids_end message is sent as a reply to a
 * query_short_channel_ids message. The query recipient makes a best
 * effort to respond based on their local network view which may not be
 * a perfect view of the network.
 */
export declare class ReplyShortChannelIdsEnd extends CommonBase {
    /**
     * The genesis hash of the blockchain that was queried
     */
    get_chain_hash(): Uint8Array;
    /**
     * The genesis hash of the blockchain that was queried
     */
    set_chain_hash(val: Uint8Array): void;
    /**
     * Indicates if the query recipient maintains up-to-date channel
     * information for the chain_hash
     */
    get_full_information(): boolean;
    /**
     * Indicates if the query recipient maintains up-to-date channel
     * information for the chain_hash
     */
    set_full_information(val: boolean): void;
    /**
     * Constructs a new ReplyShortChannelIdsEnd given each field
     */
    static constructor_new(chain_hash_arg: Uint8Array, full_information_arg: boolean): ReplyShortChannelIdsEnd;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ReplyShortChannelIdsEnd
     */
    clone(): ReplyShortChannelIdsEnd;
    /**
     * Serialize the ReplyShortChannelIdsEnd object into a byte array which can be read by ReplyShortChannelIdsEnd_read
     */
    write(): Uint8Array;
    /**
     * Read a ReplyShortChannelIdsEnd from a byte array, created by ReplyShortChannelIdsEnd_write
     */
    static constructor_read(ser: Uint8Array): Result_ReplyShortChannelIdsEndDecodeErrorZ;
}