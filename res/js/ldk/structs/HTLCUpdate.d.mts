import { Result_HTLCUpdateDecodeErrorZ } from '../structs/Result_HTLCUpdateDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Simple structure sent back by `chain::Watch` when an HTLC from a forward channel is detected on
 * chain. Used to update the corresponding HTLC in the backward channel. Failing to pass the
 * preimage claim backward will lead to loss of funds.
 */
export declare class HTLCUpdate extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the HTLCUpdate
     */
    clone(): HTLCUpdate;
    /**
     * Serialize the HTLCUpdate object into a byte array which can be read by HTLCUpdate_read
     */
    write(): Uint8Array;
    /**
     * Read a HTLCUpdate from a byte array, created by HTLCUpdate_write
     */
    static constructor_read(ser: Uint8Array): Result_HTLCUpdateDecodeErrorZ;
}
