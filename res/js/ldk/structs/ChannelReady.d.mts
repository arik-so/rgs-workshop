import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { Result_ChannelReadyDecodeErrorZ } from '../structs/Result_ChannelReadyDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A channel_ready message to be sent or received from a peer
 */
export declare class ChannelReady extends CommonBase {
    /**
     * The channel ID
     */
    get_channel_id(): Uint8Array;
    /**
     * The channel ID
     */
    set_channel_id(val: Uint8Array): void;
    /**
     * The per-commitment point of the second commitment transaction
     */
    get_next_per_commitment_point(): Uint8Array;
    /**
     * The per-commitment point of the second commitment transaction
     */
    set_next_per_commitment_point(val: Uint8Array): void;
    /**
     * If set, provides a short_channel_id alias for this channel. The sender will accept payments
     * to be forwarded over this SCID and forward them to this messages' recipient.
     */
    get_short_channel_id_alias(): Option_u64Z;
    /**
     * If set, provides a short_channel_id alias for this channel. The sender will accept payments
     * to be forwarded over this SCID and forward them to this messages' recipient.
     */
    set_short_channel_id_alias(val: Option_u64Z): void;
    /**
     * Constructs a new ChannelReady given each field
     */
    static constructor_new(channel_id_arg: Uint8Array, next_per_commitment_point_arg: Uint8Array, short_channel_id_alias_arg: Option_u64Z): ChannelReady;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ChannelReady
     */
    clone(): ChannelReady;
    /**
     * Serialize the ChannelReady object into a byte array which can be read by ChannelReady_read
     */
    write(): Uint8Array;
    /**
     * Read a ChannelReady from a byte array, created by ChannelReady_write
     */
    static constructor_read(ser: Uint8Array): Result_ChannelReadyDecodeErrorZ;
}
