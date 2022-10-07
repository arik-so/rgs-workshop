import { CommonBase } from './CommonBase.mjs';
/**
 * A Tuple
 */
export declare class TwoTuple_u32ScriptZ extends CommonBase {
    /**
     *
     */
    get_a(): number;
    /**
     *
     */
    get_b(): Uint8Array;
    clone_ptr(): bigint;
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): TwoTuple_u32ScriptZ;
    /**
     * Creates a new C2Tuple_u32ScriptZ from the contained elements.
     */
    static constructor_new(a: number, b: Uint8Array): TwoTuple_u32ScriptZ;
}
