import { CommonBase } from './CommonBase.mjs';
/**
 * A Tuple
 */
export declare class TwoTuple_SignatureCVec_SignatureZZ extends CommonBase {
    /**
     *
     */
    get_a(): Uint8Array;
    /**
     *
     */
    get_b(): Uint8Array[];
    clone_ptr(): bigint;
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): TwoTuple_SignatureCVec_SignatureZZ;
    /**
     * Creates a new C2Tuple_SignatureCVec_SignatureZZ from the contained elements.
     */
    static constructor_new(a: Uint8Array, b: Uint8Array[]): TwoTuple_SignatureCVec_SignatureZZ;
}
