import { ParseError } from '../structs/ParseError.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Indicates that something went wrong while parsing or validating the invoice. Parsing errors
 * should be mostly seen as opaque and are only there for debugging reasons. Semantic errors
 * like wrong signatures, missing fields etc. could mean that someone tampered with the invoice.
 */
export class ParseOrSemanticError extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.ParseOrSemanticError_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKParseOrSemanticError_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new ParseOrSemanticError_ParseError(ptr);
            case 1: return new ParseOrSemanticError_SemanticError(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.ParseOrSemanticError_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ParseOrSemanticError
     */
    clone() {
        const ret = bindings.ParseOrSemanticError_clone(this.ptr);
        const ret_hu_conv = ParseOrSemanticError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ParseError-variant ParseOrSemanticError
     */
    static constructor_parse_error(a) {
        const ret = bindings.ParseOrSemanticError_parse_error(CommonBase.get_ptr_of(a));
        const ret_hu_conv = ParseOrSemanticError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new SemanticError-variant ParseOrSemanticError
     */
    static constructor_semantic_error(a) {
        const ret = bindings.ParseOrSemanticError_semantic_error(a);
        const ret_hu_conv = ParseOrSemanticError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Get the string representation of a ParseOrSemanticError object
     */
    to_str() {
        const ret = bindings.ParseOrSemanticError_to_str(this.ptr);
        const ret_conv = bindings.decodeString(ret);
        return ret_conv;
    }
}
/** A ParseOrSemanticError of type ParseError */
export class ParseOrSemanticError_ParseError extends ParseOrSemanticError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const parse_error = bindings.LDKParseOrSemanticError_ParseError_get_parse_error(ptr);
        const parse_error_hu_conv = ParseError.constr_from_ptr(parse_error);
        CommonBase.add_ref_from(parse_error_hu_conv, this);
        this.parse_error = parse_error_hu_conv;
    }
}
/** A ParseOrSemanticError of type SemanticError */
export class ParseOrSemanticError_SemanticError extends ParseOrSemanticError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.semantic_error = bindings.LDKParseOrSemanticError_SemanticError_get_semantic_error(ptr);
    }
}
//# sourceMappingURL=ParseOrSemanticError.mjs.map