import { SemanticError } from '../enums/SemanticError.mjs';
import { ParseError } from '../structs/ParseError.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Indicates that something went wrong while parsing or validating the invoice. Parsing errors
 * should be mostly seen as opaque and are only there for debugging reasons. Semantic errors
 * like wrong signatures, missing fields etc. could mean that someone tampered with the invoice.
 */
export declare class ParseOrSemanticError extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ParseOrSemanticError
     */
    clone(): ParseOrSemanticError;
    /**
     * Utility method to constructs a new ParseError-variant ParseOrSemanticError
     */
    static constructor_parse_error(a: ParseError): ParseOrSemanticError;
    /**
     * Utility method to constructs a new SemanticError-variant ParseOrSemanticError
     */
    static constructor_semantic_error(a: SemanticError): ParseOrSemanticError;
    /**
     * Get the string representation of a ParseOrSemanticError object
     */
    to_str(): string;
}
/** A ParseOrSemanticError of type ParseError */
export declare class ParseOrSemanticError_ParseError extends ParseOrSemanticError {
    parse_error: ParseError;
}
/** A ParseOrSemanticError of type SemanticError */
export declare class ParseOrSemanticError_SemanticError extends ParseOrSemanticError {
    semantic_error: SemanticError;
}
