import { TwoTuple_u32ScriptZ } from '../structs/TwoTuple_u32ScriptZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A Tuple
 */
export declare class TwoTuple_TxidCVec_C2Tuple_u32ScriptZZZ extends CommonBase {
    /**
     *
     */
    get_a(): Uint8Array;
    /**
     *
     */
    get_b(): TwoTuple_u32ScriptZ[];
    clone_ptr(): bigint;
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): TwoTuple_TxidCVec_C2Tuple_u32ScriptZZZ;
    /**
     * Creates a new C2Tuple_TxidCVec_C2Tuple_u32ScriptZZZ from the contained elements.
     */
    static constructor_new(a: Uint8Array, b: TwoTuple_u32ScriptZ[]): TwoTuple_TxidCVec_C2Tuple_u32ScriptZZZ;
}
