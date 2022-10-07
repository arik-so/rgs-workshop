import { CommonBase } from './CommonBase.mjs';
/**
 * Payee public key
 */
export declare class PayeePubKey extends CommonBase {
    get_a(): Uint8Array;
    set_a(val: Uint8Array): void;
    /**
     * Constructs a new PayeePubKey given each field
     */
    static constructor_new(a_arg: Uint8Array): PayeePubKey;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the PayeePubKey
     */
    clone(): PayeePubKey;
    /**
     * Checks if two PayeePubKeys contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Checks if two PayeePubKeys contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: PayeePubKey): boolean;
}
