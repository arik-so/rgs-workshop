import { Secp256k1Error } from '../enums/Secp256k1Error.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Errors that may occur when [sending an onion message].
 *
 * [sending an onion message]: OnionMessenger::send_onion_message
 */
export declare class SendError extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the SendError
     */
    clone(): SendError;
    /**
     * Utility method to constructs a new Secp256k1-variant SendError
     */
    static constructor_secp256k1(a: Secp256k1Error): SendError;
    /**
     * Utility method to constructs a new TooBigPacket-variant SendError
     */
    static constructor_too_big_packet(): SendError;
    /**
     * Utility method to constructs a new TooFewBlindedHops-variant SendError
     */
    static constructor_too_few_blinded_hops(): SendError;
    /**
     * Utility method to constructs a new InvalidFirstHop-variant SendError
     */
    static constructor_invalid_first_hop(): SendError;
    /**
     * Utility method to constructs a new BufferFull-variant SendError
     */
    static constructor_buffer_full(): SendError;
}
/** A SendError of type Secp256k1 */
export declare class SendError_Secp256k1 extends SendError {
    secp256k1: Secp256k1Error;
}
/** A SendError of type TooBigPacket */
export declare class SendError_TooBigPacket extends SendError {
}
/** A SendError of type TooFewBlindedHops */
export declare class SendError_TooFewBlindedHops extends SendError {
}
/** A SendError of type InvalidFirstHop */
export declare class SendError_InvalidFirstHop extends SendError {
}
/** A SendError of type BufferFull */
export declare class SendError_BufferFull extends SendError {
}
