import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { NodeId } from '../structs/NodeId.mjs';
import { Result_InFlightHtlcsDecodeErrorZ } from '../structs/Result_InFlightHtlcsDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A map with liquidity value (in msat) keyed by a short channel id and the direction the HTLC
 * is traveling in. The direction boolean is determined by checking if the HTLC source's public
 * key is less than its destination. See [`InFlightHtlcs::used_liquidity_msat`] for more
 * details.
 */
export declare class InFlightHtlcs extends CommonBase {
    /**
     * Returns liquidity in msat given the public key of the HTLC source, target, and short channel
     * id.
     */
    used_liquidity_msat(source: NodeId, target: NodeId, channel_scid: bigint): Option_u64Z;
    /**
     * Serialize the InFlightHtlcs object into a byte array which can be read by InFlightHtlcs_read
     */
    write(): Uint8Array;
    /**
     * Read a InFlightHtlcs from a byte array, created by InFlightHtlcs_write
     */
    static constructor_read(ser: Uint8Array): Result_InFlightHtlcsDecodeErrorZ;
}
