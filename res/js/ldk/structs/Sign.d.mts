import { ChannelPublicKeys } from '../structs/ChannelPublicKeys.mjs';
import { BaseSignInterface } from '../structs/BaseSign.mjs';
import { CommonBase } from './CommonBase.mjs';
/** An implementation of Sign */
export interface SignInterface {
    /**Serialize the object into a byte array
     */
    write(): Uint8Array;
}
/**
 * A cloneable signer.
 *
 * Although we require signers to be cloneable, it may be useful for developers to be able to use
 * signers in an un-sized way, for example as `dyn BaseSign`. Therefore we separate the Clone trait,
 * which implies Sized, into this derived trait.
 */
export declare class Sign extends CommonBase {
    /** Creates a new instance of Sign from a given implementation */
    static new_impl(arg: SignInterface, baseSign_impl: BaseSignInterface, pubkeys: ChannelPublicKeys): Sign;
    /**
     * Serialize the object into a byte array
     */
    write(): Uint8Array;
    clone_ptr(): bigint;
    /**
     * Creates a copy of a Sign
     */
    clone(): Sign;
}
