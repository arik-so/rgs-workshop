import { UnsignedChannelUpdate } from '../structs/UnsignedChannelUpdate.mjs';
import { Result_ChannelUpdateDecodeErrorZ } from '../structs/Result_ChannelUpdateDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A channel_update message to be sent or received from a peer
 */
export declare class ChannelUpdate extends CommonBase {
    /**
     * A signature of the channel update
     */
    get_signature(): Uint8Array;
    /**
     * A signature of the channel update
     */
    set_signature(val: Uint8Array): void;
    /**
     * The actual channel update
     */
    get_contents(): UnsignedChannelUpdate;
    /**
     * The actual channel update
     */
    set_contents(val: UnsignedChannelUpdate): void;
    /**
     * Constructs a new ChannelUpdate given each field
     */
    static constructor_new(signature_arg: Uint8Array, contents_arg: UnsignedChannelUpdate): ChannelUpdate;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ChannelUpdate
     */
    clone(): ChannelUpdate;
    /**
     * Serialize the ChannelUpdate object into a byte array which can be read by ChannelUpdate_read
     */
    write(): Uint8Array;
    /**
     * Read a ChannelUpdate from a byte array, created by ChannelUpdate_write
     */
    static constructor_read(ser: Uint8Array): Result_ChannelUpdateDecodeErrorZ;
}
