import { Result_BlindedRouteNoneZ } from '../structs/Result_BlindedRouteNoneZ.mjs';
import { Result_BlindedRouteDecodeErrorZ } from '../structs/Result_BlindedRouteDecodeErrorZ.mjs';
import { KeysInterface } from '../structs/KeysInterface.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Onion messages can be sent and received to blinded routes, which serve to hide the identity of
 * the recipient.
 */
export declare class BlindedRoute extends CommonBase {
    /**
     * Create a blinded route to be forwarded along `node_pks`. The last node pubkey in `node_pks`
     * will be the destination node.
     *
     * Errors if less than two hops are provided or if `node_pk`(s) are invalid.
     */
    static constructor_new(node_pks: Uint8Array[], keys_manager: KeysInterface): Result_BlindedRouteNoneZ;
    /**
     * Serialize the BlindedRoute object into a byte array which can be read by BlindedRoute_read
     */
    write(): Uint8Array;
    /**
     * Read a BlindedRoute from a byte array, created by BlindedRoute_write
     */
    static constructor_read(ser: Uint8Array): Result_BlindedRouteDecodeErrorZ;
}
