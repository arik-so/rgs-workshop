import { TwoTuple_u32TxOutZ } from '../structs/TwoTuple_u32TxOutZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A Tuple
 */
export declare class TwoTuple_TxidCVec_C2Tuple_u32TxOutZZZ extends CommonBase {
    /**
     *
     */
    get_a(): Uint8Array;
    /**
     *
     */
    get_b(): TwoTuple_u32TxOutZ[];
    clone_ptr(): bigint;
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): TwoTuple_TxidCVec_C2Tuple_u32TxOutZZZ;
    /**
     * Creates a new C2Tuple_TxidCVec_C2Tuple_u32TxOutZZZ from the contained elements.
     */
    static constructor_new(a: Uint8Array, b: TwoTuple_u32TxOutZ[]): TwoTuple_TxidCVec_C2Tuple_u32TxOutZZZ;
}
