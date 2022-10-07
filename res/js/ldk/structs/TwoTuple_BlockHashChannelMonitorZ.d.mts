import { ChannelMonitor } from '../structs/ChannelMonitor.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A Tuple
 */
export declare class TwoTuple_BlockHashChannelMonitorZ extends CommonBase {
    /**
     *
     */
    get_a(): Uint8Array;
    /**
     *
     */
    get_b(): ChannelMonitor;
    clone_ptr(): bigint;
    /**
     * Creates a new tuple which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): TwoTuple_BlockHashChannelMonitorZ;
    /**
     * Creates a new C2Tuple_BlockHashChannelMonitorZ from the contained elements.
     */
    static constructor_new(a: Uint8Array, b: ChannelMonitor): TwoTuple_BlockHashChannelMonitorZ;
}
