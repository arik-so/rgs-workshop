import { OutPoint } from '../structs/OutPoint.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A Tuple
 */
export declare class TwoTuple_OutPointScriptZ extends CommonBase {
    /**
     *
     */
    get_a(): OutPoint;
    /**
     *
     */
    get_b(): Uint8Array;
    clone_ptr(): bigint;
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): TwoTuple_OutPointScriptZ;
    /**
     * Creates a new C2Tuple_OutPointScriptZ from the contained elements.
     */
    static constructor_new(a: OutPoint, b: Uint8Array): TwoTuple_OutPointScriptZ;
}
