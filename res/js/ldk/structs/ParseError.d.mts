import { Secp256k1Error } from '../enums/Secp256k1Error.mjs';
import { Bech32Error } from '../structs/Bech32Error.mjs';
import { CommonBase, UnqualifiedError } from './CommonBase.mjs';
/**
 * Errors that indicate what is wrong with the invoice. They have some granularity for debug
 * reasons, but should generally result in an \"invalid BOLT11 invoice\" message for the user.
 */
export declare class ParseError extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ParseError
     */
    clone(): ParseError;
    /**
     * Utility method to constructs a new Bech32Error-variant ParseError
     */
    static constructor_bech32_error(a: Bech32Error): ParseError;
    /**
     * Utility method to constructs a new ParseAmountError-variant ParseError
     */
    static constructor_parse_amount_error(a: UnqualifiedError): ParseError;
    /**
     * Utility method to constructs a new MalformedSignature-variant ParseError
     */
    static constructor_malformed_signature(a: Secp256k1Error): ParseError;
    /**
     * Utility method to constructs a new BadPrefix-variant ParseError
     */
    static constructor_bad_prefix(): ParseError;
    /**
     * Utility method to constructs a new UnknownCurrency-variant ParseError
     */
    static constructor_unknown_currency(): ParseError;
    /**
     * Utility method to constructs a new UnknownSiPrefix-variant ParseError
     */
    static constructor_unknown_si_prefix(): ParseError;
    /**
     * Utility method to constructs a new MalformedHRP-variant ParseError
     */
    static constructor_malformed_hrp(): ParseError;
    /**
     * Utility method to constructs a new TooShortDataPart-variant ParseError
     */
    static constructor_too_short_data_part(): ParseError;
    /**
     * Utility method to constructs a new UnexpectedEndOfTaggedFields-variant ParseError
     */
    static constructor_unexpected_end_of_tagged_fields(): ParseError;
    /**
     * Utility method to constructs a new DescriptionDecodeError-variant ParseError
     */
    static constructor_description_decode_error(a: UnqualifiedError): ParseError;
    /**
     * Utility method to constructs a new PaddingError-variant ParseError
     */
    static constructor_padding_error(): ParseError;
    /**
     * Utility method to constructs a new IntegerOverflowError-variant ParseError
     */
    static constructor_integer_overflow_error(): ParseError;
    /**
     * Utility method to constructs a new InvalidSegWitProgramLength-variant ParseError
     */
    static constructor_invalid_seg_wit_program_length(): ParseError;
    /**
     * Utility method to constructs a new InvalidPubKeyHashLength-variant ParseError
     */
    static constructor_invalid_pub_key_hash_length(): ParseError;
    /**
     * Utility method to constructs a new InvalidScriptHashLength-variant ParseError
     */
    static constructor_invalid_script_hash_length(): ParseError;
    /**
     * Utility method to constructs a new InvalidRecoveryId-variant ParseError
     */
    static constructor_invalid_recovery_id(): ParseError;
    /**
     * Utility method to constructs a new InvalidSliceLength-variant ParseError
     */
    static constructor_invalid_slice_length(a: string): ParseError;
    /**
     * Utility method to constructs a new Skip-variant ParseError
     */
    static constructor_skip(): ParseError;
    /**
     * Get the string representation of a ParseError object
     */
    to_str(): string;
}
/** A ParseError of type Bech32Error */
export declare class ParseError_Bech32Error extends ParseError {
    bech32_error: Bech32Error;
}
/** A ParseError of type ParseAmountError */
export declare class ParseError_ParseAmountError extends ParseError {
    parse_amount_error: UnqualifiedError;
}
/** A ParseError of type MalformedSignature */
export declare class ParseError_MalformedSignature extends ParseError {
    malformed_signature: Secp256k1Error;
}
/** A ParseError of type BadPrefix */
export declare class ParseError_BadPrefix extends ParseError {
}
/** A ParseError of type UnknownCurrency */
export declare class ParseError_UnknownCurrency extends ParseError {
}
/** A ParseError of type UnknownSiPrefix */
export declare class ParseError_UnknownSiPrefix extends ParseError {
}
/** A ParseError of type MalformedHRP */
export declare class ParseError_MalformedHRP extends ParseError {
}
/** A ParseError of type TooShortDataPart */
export declare class ParseError_TooShortDataPart extends ParseError {
}
/** A ParseError of type UnexpectedEndOfTaggedFields */
export declare class ParseError_UnexpectedEndOfTaggedFields extends ParseError {
}
/** A ParseError of type DescriptionDecodeError */
export declare class ParseError_DescriptionDecodeError extends ParseError {
    description_decode_error: UnqualifiedError;
}
/** A ParseError of type PaddingError */
export declare class ParseError_PaddingError extends ParseError {
}
/** A ParseError of type IntegerOverflowError */
export declare class ParseError_IntegerOverflowError extends ParseError {
}
/** A ParseError of type InvalidSegWitProgramLength */
export declare class ParseError_InvalidSegWitProgramLength extends ParseError {
}
/** A ParseError of type InvalidPubKeyHashLength */
export declare class ParseError_InvalidPubKeyHashLength extends ParseError {
}
/** A ParseError of type InvalidScriptHashLength */
export declare class ParseError_InvalidScriptHashLength extends ParseError {
}
/** A ParseError of type InvalidRecoveryId */
export declare class ParseError_InvalidRecoveryId extends ParseError {
}
/** A ParseError of type InvalidSliceLength */
export declare class ParseError_InvalidSliceLength extends ParseError {
    invalid_slice_length: string;
}
/** A ParseError of type Skip */
export declare class ParseError_Skip extends ParseError {
}
