import { CommonBase } from './CommonBase.mjs';
/**
 * A Tuple
 */
export declare class TwoTuple_SignatureSignatureZ extends CommonBase {
    /**
     *
     */
    get_a(): Uint8Array;
    /**
     *
     */
    get_b(): Uint8Array;
    clone_ptr(): bigint;
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): TwoTuple_SignatureSignatureZ;
    /**
     * Creates a new C2Tuple_SignatureSignatureZ from the contained elements.
     */
    static constructor_new(a: Uint8Array, b: Uint8Array): TwoTuple_SignatureSignatureZ;
}