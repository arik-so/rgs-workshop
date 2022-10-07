import { Bech32Error } from '../structs/Bech32Error.mjs';
import { CommonBase, UnqualifiedError } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Errors that indicate what is wrong with the invoice. They have some granularity for debug
 * reasons, but should generally result in an \"invalid BOLT11 invoice\" message for the user.
 */
export class ParseError extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.ParseError_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKParseError_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new ParseError_Bech32Error(ptr);
            case 1: return new ParseError_ParseAmountError(ptr);
            case 2: return new ParseError_MalformedSignature(ptr);
            case 3: return new ParseError_BadPrefix(ptr);
            case 4: return new ParseError_UnknownCurrency(ptr);
            case 5: return new ParseError_UnknownSiPrefix(ptr);
            case 6: return new ParseError_MalformedHRP(ptr);
            case 7: return new ParseError_TooShortDataPart(ptr);
            case 8: return new ParseError_UnexpectedEndOfTaggedFields(ptr);
            case 9: return new ParseError_DescriptionDecodeError(ptr);
            case 10: return new ParseError_PaddingError(ptr);
            case 11: return new ParseError_IntegerOverflowError(ptr);
            case 12: return new ParseError_InvalidSegWitProgramLength(ptr);
            case 13: return new ParseError_InvalidPubKeyHashLength(ptr);
            case 14: return new ParseError_InvalidScriptHashLength(ptr);
            case 15: return new ParseError_InvalidRecoveryId(ptr);
            case 16: return new ParseError_InvalidSliceLength(ptr);
            case 17: return new ParseError_Skip(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.ParseError_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ParseError
     */
    clone() {
        const ret = bindings.ParseError_clone(this.ptr);
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new Bech32Error-variant ParseError
     */
    static constructor_bech32_error(a) {
        const ret = bindings.ParseError_bech32_error(CommonBase.get_ptr_of(a));
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ParseAmountError-variant ParseError
     */
    static constructor_parse_amount_error(a) {
        const ret = bindings.ParseError_parse_amount_error(0);
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new MalformedSignature-variant ParseError
     */
    static constructor_malformed_signature(a) {
        const ret = bindings.ParseError_malformed_signature(a);
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new BadPrefix-variant ParseError
     */
    static constructor_bad_prefix() {
        const ret = bindings.ParseError_bad_prefix();
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new UnknownCurrency-variant ParseError
     */
    static constructor_unknown_currency() {
        const ret = bindings.ParseError_unknown_currency();
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new UnknownSiPrefix-variant ParseError
     */
    static constructor_unknown_si_prefix() {
        const ret = bindings.ParseError_unknown_si_prefix();
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new MalformedHRP-variant ParseError
     */
    static constructor_malformed_hrp() {
        const ret = bindings.ParseError_malformed_hrp();
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new TooShortDataPart-variant ParseError
     */
    static constructor_too_short_data_part() {
        const ret = bindings.ParseError_too_short_data_part();
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new UnexpectedEndOfTaggedFields-variant ParseError
     */
    static constructor_unexpected_end_of_tagged_fields() {
        const ret = bindings.ParseError_unexpected_end_of_tagged_fields();
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new DescriptionDecodeError-variant ParseError
     */
    static constructor_description_decode_error(a) {
        const ret = bindings.ParseError_description_decode_error(0);
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new PaddingError-variant ParseError
     */
    static constructor_padding_error() {
        const ret = bindings.ParseError_padding_error();
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new IntegerOverflowError-variant ParseError
     */
    static constructor_integer_overflow_error() {
        const ret = bindings.ParseError_integer_overflow_error();
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new InvalidSegWitProgramLength-variant ParseError
     */
    static constructor_invalid_seg_wit_program_length() {
        const ret = bindings.ParseError_invalid_seg_wit_program_length();
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new InvalidPubKeyHashLength-variant ParseError
     */
    static constructor_invalid_pub_key_hash_length() {
        const ret = bindings.ParseError_invalid_pub_key_hash_length();
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new InvalidScriptHashLength-variant ParseError
     */
    static constructor_invalid_script_hash_length() {
        const ret = bindings.ParseError_invalid_script_hash_length();
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new InvalidRecoveryId-variant ParseError
     */
    static constructor_invalid_recovery_id() {
        const ret = bindings.ParseError_invalid_recovery_id();
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new InvalidSliceLength-variant ParseError
     */
    static constructor_invalid_slice_length(a) {
        const ret = bindings.ParseError_invalid_slice_length(bindings.encodeString(a));
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new Skip-variant ParseError
     */
    static constructor_skip() {
        const ret = bindings.ParseError_skip();
        const ret_hu_conv = ParseError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Get the string representation of a ParseError object
     */
    to_str() {
        const ret = bindings.ParseError_to_str(this.ptr);
        const ret_conv = bindings.decodeString(ret);
        return ret_conv;
    }
}
/** A ParseError of type Bech32Error */
export class ParseError_Bech32Error extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const bech32_error = bindings.LDKParseError_Bech32Error_get_bech32_error(ptr);
        const bech32_error_hu_conv = Bech32Error.constr_from_ptr(bech32_error);
        CommonBase.add_ref_from(bech32_error_hu_conv, this);
        this.bech32_error = bech32_error_hu_conv;
    }
}
/** A ParseError of type ParseAmountError */
export class ParseError_ParseAmountError extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const parse_amount_error = bindings.LDKParseError_ParseAmountError_get_parse_amount_error(ptr);
        const parse_amount_error_conv = new UnqualifiedError(parse_amount_error);
        this.parse_amount_error = parse_amount_error_conv;
    }
}
/** A ParseError of type MalformedSignature */
export class ParseError_MalformedSignature extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.malformed_signature = bindings.LDKParseError_MalformedSignature_get_malformed_signature(ptr);
    }
}
/** A ParseError of type BadPrefix */
export class ParseError_BadPrefix extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ParseError of type UnknownCurrency */
export class ParseError_UnknownCurrency extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ParseError of type UnknownSiPrefix */
export class ParseError_UnknownSiPrefix extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ParseError of type MalformedHRP */
export class ParseError_MalformedHRP extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ParseError of type TooShortDataPart */
export class ParseError_TooShortDataPart extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ParseError of type UnexpectedEndOfTaggedFields */
export class ParseError_UnexpectedEndOfTaggedFields extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ParseError of type DescriptionDecodeError */
export class ParseError_DescriptionDecodeError extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const description_decode_error = bindings.LDKParseError_DescriptionDecodeError_get_description_decode_error(ptr);
        const description_decode_error_conv = new UnqualifiedError(description_decode_error);
        this.description_decode_error = description_decode_error_conv;
    }
}
/** A ParseError of type PaddingError */
export class ParseError_PaddingError extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ParseError of type IntegerOverflowError */
export class ParseError_IntegerOverflowError extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ParseError of type InvalidSegWitProgramLength */
export class ParseError_InvalidSegWitProgramLength extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ParseError of type InvalidPubKeyHashLength */
export class ParseError_InvalidPubKeyHashLength extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ParseError of type InvalidScriptHashLength */
export class ParseError_InvalidScriptHashLength extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ParseError of type InvalidRecoveryId */
export class ParseError_InvalidRecoveryId extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A ParseError of type InvalidSliceLength */
export class ParseError_InvalidSliceLength extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const invalid_slice_length = bindings.LDKParseError_InvalidSliceLength_get_invalid_slice_length(ptr);
        const invalid_slice_length_conv = bindings.decodeString(invalid_slice_length);
        this.invalid_slice_length = invalid_slice_length_conv;
    }
}
/** A ParseError of type Skip */
export class ParseError_Skip extends ParseError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
//# sourceMappingURL=ParseError.mjs.map