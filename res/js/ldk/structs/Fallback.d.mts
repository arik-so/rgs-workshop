import { CommonBase, UInt5 } from './CommonBase.mjs';
/**
 * Fallback address in case no LN payment is possible
 */
export declare class Fallback extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the Fallback
     */
    clone(): Fallback;
    /**
     * Utility method to constructs a new SegWitProgram-variant Fallback
     */
    static constructor_seg_wit_program(version: UInt5, program: Uint8Array): Fallback;
    /**
     * Utility method to constructs a new PubKeyHash-variant Fallback
     */
    static constructor_pub_key_hash(a: Uint8Array): Fallback;
    /**
     * Utility method to constructs a new ScriptHash-variant Fallback
     */
    static constructor_script_hash(a: Uint8Array): Fallback;
    /**
     * Checks if two Fallbacks contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Checks if two Fallbacks contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     */
    eq(b: Fallback): boolean;
}
/** A Fallback of type SegWitProgram */
export declare class Fallback_SegWitProgram extends Fallback {
    version: UInt5;
    program: Uint8Array;
}
/** A Fallback of type PubKeyHash */
export declare class Fallback_PubKeyHash extends Fallback {
    pub_key_hash: Uint8Array;
}
/** A Fallback of type ScriptHash */
export declare class Fallback_ScriptHash extends Fallback {
    script_hash: Uint8Array;
}
