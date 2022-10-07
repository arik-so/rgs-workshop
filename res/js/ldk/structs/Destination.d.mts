import { BlindedRoute } from '../structs/BlindedRoute.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * The destination of an onion message.
 */
export declare class Destination extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Utility method to constructs a new Node-variant Destination
     */
    static constructor_node(a: Uint8Array): Destination;
    /**
     * Utility method to constructs a new BlindedRoute-variant Destination
     */
    static constructor_blinded_route(a: BlindedRoute): Destination;
}
/** A Destination of type Node */
export declare class Destination_Node extends Destination {
    node: Uint8Array;
}
/** A Destination of type BlindedRoute */
export declare class Destination_BlindedRoute extends Destination {
    blinded_route: BlindedRoute;
}
