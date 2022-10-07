import { Result_ChannelReestablishDecodeErrorZ } from '../structs/Result_ChannelReestablishDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A channel_reestablish message to be sent or received from a peer
 */
export declare class ChannelReestablish extends CommonBase {
    /**
     * The channel ID
     */
    get_channel_id(): Uint8Array;
    /**
     * The channel ID
     */
    set_channel_id(val: Uint8Array): void;
    /**
     * The next commitment number for the sender
     */
    get_next_local_commitment_number(): bigint;
    /**
     * The next commitment number for the sender
     */
    set_next_local_commitment_number(val: bigint): void;
    /**
     * The next commitment number for the recipient
     */
    get_next_remote_commitment_number(): bigint;
    /**
     * The next commitment number for the recipient
     */
    set_next_remote_commitment_number(val: bigint): void;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ChannelReestablish
     */
    clone(): ChannelReestablish;
    /**
     * Serialize the ChannelReestablish object into a byte array which can be read by ChannelReestablish_read
     */
    write(): Uint8Array;
    /**
     * Read a ChannelReestablish from a byte array, created by ChannelReestablish_write
     */
    static constructor_read(ser: Uint8Array): Result_ChannelReestablishDecodeErrorZ;
}
