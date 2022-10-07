import { ChannelDetails } from '../structs/ChannelDetails.mjs';
import { Result_PhantomRouteHintsDecodeErrorZ } from '../structs/Result_PhantomRouteHintsDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Route hints used in constructing invoices for [phantom node payents].
 *
 * [phantom node payments]: crate::chain::keysinterface::PhantomKeysManager
 */
export declare class PhantomRouteHints extends CommonBase {
    /**
     * The list of channels to be included in the invoice route hints.
     */
    get_channels(): ChannelDetails[];
    /**
     * The list of channels to be included in the invoice route hints.
     */
    set_channels(val: ChannelDetails[]): void;
    /**
     * A fake scid used for representing the phantom node's fake channel in generating the invoice
     * route hints.
     */
    get_phantom_scid(): bigint;
    /**
     * A fake scid used for representing the phantom node's fake channel in generating the invoice
     * route hints.
     */
    set_phantom_scid(val: bigint): void;
    /**
     * The pubkey of the real backing node that would ultimately receive the payment.
     */
    get_real_node_pubkey(): Uint8Array;
    /**
     * The pubkey of the real backing node that would ultimately receive the payment.
     */
    set_real_node_pubkey(val: Uint8Array): void;
    /**
     * Constructs a new PhantomRouteHints given each field
     */
    static constructor_new(channels_arg: ChannelDetails[], phantom_scid_arg: bigint, real_node_pubkey_arg: Uint8Array): PhantomRouteHints;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the PhantomRouteHints
     */
    clone(): PhantomRouteHints;
    /**
     * Serialize the PhantomRouteHints object into a byte array which can be read by PhantomRouteHints_read
     */
    write(): Uint8Array;
    /**
     * Read a PhantomRouteHints from a byte array, created by PhantomRouteHints_write
     */
    static constructor_read(ser: Uint8Array): Result_PhantomRouteHintsDecodeErrorZ;
}
