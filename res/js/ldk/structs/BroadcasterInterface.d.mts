import { CommonBase } from './CommonBase.mjs';
/** An implementation of BroadcasterInterface */
export interface BroadcasterInterfaceInterface {
    /**Sends a transaction out to (hopefully) be mined.
     */
    broadcast_transaction(tx: Uint8Array): void;
}
/**
 * An interface to send a transaction to the Bitcoin network.
 */
export declare class BroadcasterInterface extends CommonBase {
    /** Creates a new instance of BroadcasterInterface from a given implementation */
    static new_impl(arg: BroadcasterInterfaceInterface): BroadcasterInterface;
    /**
     * Sends a transaction out to (hopefully) be mined.
     */
    broadcast_transaction(tx: Uint8Array): void;
}
