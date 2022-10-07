import { Result_NodeAliasDecodeErrorZ } from '../structs/Result_NodeAliasDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A user-defined name for a node, which may be used when displaying the node in a graph.
 *
 * Since node aliases are provided by third parties, they are a potential avenue for injection
 * attacks. Care must be taken when processing.
 */
export declare class NodeAlias extends CommonBase {
    get_a(): Uint8Array;
    set_a(val: Uint8Array): void;
    /**
     * Constructs a new NodeAlias given each field
     */
    static constructor_new(a_arg: Uint8Array): NodeAlias;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the NodeAlias
     */
    clone(): NodeAlias;
    /**
     * Serialize the NodeAlias object into a byte array which can be read by NodeAlias_read
     */
    write(): Uint8Array;
    /**
     * Read a NodeAlias from a byte array, created by NodeAlias_write
     */
    static constructor_read(ser: Uint8Array): Result_NodeAliasDecodeErrorZ;
}
