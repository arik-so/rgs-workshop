import { CommonBase } from './CommonBase.mjs';
/**
 * Represents a hostname for serialization purposes.
 * Only the character set and length will be validated.
 * The character set consists of ASCII alphanumeric characters, hyphens, and periods.
 * Its length is guaranteed to be representable by a single byte.
 * This serialization is used by BOLT 7 hostnames.
 */
export declare class Hostname extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the Hostname
     */
    clone(): Hostname;
    /**
     * Returns the length of the hostname.
     */
    len(): number;
}
