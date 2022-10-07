import { CreationError } from '../enums/CreationError.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * When signing using a fallible method either an user-supplied `SignError` or a `CreationError`
 * may occur.
 */
export declare class SignOrCreationError extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the SignOrCreationError
     */
    clone(): SignOrCreationError;
    /**
     * Utility method to constructs a new SignError-variant SignOrCreationError
     */
    static constructor_sign_error(): SignOrCreationError;
    /**
     * Utility method to constructs a new CreationError-variant SignOrCreationError
     */
    static constructor_creation_error(a: CreationError): SignOrCreationError;
    /**
     * Checks if two SignOrCreationErrors contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     */
    eq(b: SignOrCreationError): boolean;
    /**
     * Get the string representation of a SignOrCreationError object
     */
    to_str(): string;
}
/** A SignOrCreationError of type SignError */
export declare class SignOrCreationError_SignError extends SignOrCreationError {
}
/** A SignOrCreationError of type CreationError */
export declare class SignOrCreationError_CreationError extends SignOrCreationError {
    creation_error: CreationError;
}
