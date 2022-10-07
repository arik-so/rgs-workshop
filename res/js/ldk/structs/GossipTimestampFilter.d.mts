import { Result_GossipTimestampFilterDecodeErrorZ } from '../structs/Result_GossipTimestampFilterDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A gossip_timestamp_filter message is used by a node to request
 * gossip relay for messages in the requested time range when the
 * gossip_queries feature has been negotiated.
 */
export declare class GossipTimestampFilter extends CommonBase {
    /**
     * The genesis hash of the blockchain for channel and node information
     */
    get_chain_hash(): Uint8Array;
    /**
     * The genesis hash of the blockchain for channel and node information
     */
    set_chain_hash(val: Uint8Array): void;
    /**
     * The starting unix timestamp
     */
    get_first_timestamp(): number;
    /**
     * The starting unix timestamp
     */
    set_first_timestamp(val: number): void;
    /**
     * The range of information in seconds
     */
    get_timestamp_range(): number;
    /**
     * The range of information in seconds
     */
    set_timestamp_range(val: number): void;
    /**
     * Constructs a new GossipTimestampFilter given each field
     */
    static constructor_new(chain_hash_arg: Uint8Array, first_timestamp_arg: number, timestamp_range_arg: number): GossipTimestampFilter;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the GossipTimestampFilter
     */
    clone(): GossipTimestampFilter;
    /**
     * Serialize the GossipTimestampFilter object into a byte array which can be read by GossipTimestampFilter_read
     */
    write(): Uint8Array;
    /**
     * Read a GossipTimestampFilter from a byte array, created by GossipTimestampFilter_write
     */
    static constructor_read(ser: Uint8Array): Result_GossipTimestampFilterDecodeErrorZ;
}
