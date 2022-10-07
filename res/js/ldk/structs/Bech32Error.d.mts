import { CommonBase } from './CommonBase.mjs';
/**
 * Represents an error returned from the bech32 library during validation of some bech32 data
 */
export declare class Bech32Error extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a new Bech32Error which has the same data as `orig`
     */
    clone(): Bech32Error;
}
/** A Bech32Error of type MissingSeparator */
export declare class Bech32Error_MissingSeparator extends Bech32Error {
}
/** A Bech32Error of type InvalidChecksum */
export declare class Bech32Error_InvalidChecksum extends Bech32Error {
}
/** A Bech32Error of type InvalidLength */
export declare class Bech32Error_InvalidLength extends Bech32Error {
}
/** A Bech32Error of type InvalidChar */
export declare class Bech32Error_InvalidChar extends Bech32Error {
    invalid_char: number;
}
/** A Bech32Error of type InvalidData */
export declare class Bech32Error_InvalidData extends Bech32Error {
    invalid_data: number;
}
/** A Bech32Error of type InvalidPadding */
export declare class Bech32Error_InvalidPadding extends Bech32Error {
}
/** A Bech32Error of type MixedCase */
export declare class Bech32Error_MixedCase extends Bech32Error {
}
