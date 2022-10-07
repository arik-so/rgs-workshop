import { Result_OutPointDecodeErrorZ } from '../structs/Result_OutPointDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * A reference to a transaction output.
 *
 * Differs from bitcoin::blockdata::transaction::OutPoint as the index is a u16 instead of u32
 * due to LN's restrictions on index values. Should reduce (possibly) unsafe conversions this way.
 */
export declare class OutPoint extends CommonBase {
    /**
     * The referenced transaction's txid.
     */
    get_txid(): Uint8Array;
    /**
     * The referenced transaction's txid.
     */
    set_txid(val: Uint8Array): void;
    /**
     * The index of the referenced output in its transaction's vout.
     */
    get_index(): number;
    /**
     * The index of the referenced output in its transaction's vout.
     */
    set_index(val: number): void;
    /**
     * Constructs a new OutPoint given each field
     */
    static constructor_new(txid_arg: Uint8Array, index_arg: number): OutPoint;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the OutPoint
     */
    clone(): OutPoint;
    /**
     * Checks if two OutPoints contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: OutPoint): boolean;
    /**
     * Checks if two OutPoints contain equal inner contents.
     */
    hash(): bigint;
    /**
     * Convert an `OutPoint` to a lightning channel id.
     */
    to_channel_id(): Uint8Array;
    /**
     * Serialize the OutPoint object into a byte array which can be read by OutPoint_read
     */
    write(): Uint8Array;
    /**
     * Read a OutPoint from a byte array, created by OutPoint_write
     */
    static constructor_read(ser: Uint8Array): Result_OutPointDecodeErrorZ;
}
