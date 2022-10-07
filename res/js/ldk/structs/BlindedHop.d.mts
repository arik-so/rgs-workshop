import { Result_BlindedHopDecodeErrorZ } from '../structs/Result_BlindedHopDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Used to construct the blinded hops portion of a blinded route. These hops cannot be identified
 * by outside observers and thus can be used to hide the identity of the recipient.
 */
export declare class BlindedHop extends CommonBase {
    /**
     * Serialize the BlindedHop object into a byte array which can be read by BlindedHop_read
     */
    write(): Uint8Array;
    /**
     * Read a BlindedHop from a byte array, created by BlindedHop_write
     */
    static constructor_read(ser: Uint8Array): Result_BlindedHopDecodeErrorZ;
}
