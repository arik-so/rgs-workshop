import { CommonBase } from './CommonBase.mjs';
/**
 * An error in decoding a message or struct.
 */
export declare class DecodeError extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the DecodeError
     */
    clone(): DecodeError;
}
