import { PositiveTimestamp } from '../structs/PositiveTimestamp.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Data of the `RawInvoice` that is encoded in the data part
 */
export declare class RawDataPart extends CommonBase {
    /**
     * generation time of the invoice
     */
    get_timestamp(): PositiveTimestamp;
    /**
     * generation time of the invoice
     */
    set_timestamp(val: PositiveTimestamp): void;
    /**
     * Checks if two RawDataParts contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b: RawDataPart): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the RawDataPart
     */
    clone(): RawDataPart;
    /**
     * Checks if two RawDataParts contain equal inner contents.
     */
    hash(): bigint;
}