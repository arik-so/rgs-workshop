import { OutPoint } from '../structs/OutPoint.mjs';
import { MonitorEvent } from '../structs/MonitorEvent.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A Tuple
 */
export declare class ThreeTuple_OutPointCVec_MonitorEventZPublicKeyZ extends CommonBase {
    /**
     *
     */
    get_a(): OutPoint;
    /**
     *
     */
    get_b(): MonitorEvent[];
    /**
     *
     */
    get_c(): Uint8Array;
    clone_ptr(): bigint;
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): ThreeTuple_OutPointCVec_MonitorEventZPublicKeyZ;
    /**
     * Creates a new C3Tuple_OutPointCVec_MonitorEventZPublicKeyZ from the contained elements.
     */
    static constructor_new(a: OutPoint, b: MonitorEvent[], c: Uint8Array): ThreeTuple_OutPointCVec_MonitorEventZPublicKeyZ;
}
