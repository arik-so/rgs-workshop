import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * When signing using a fallible method either an user-supplied `SignError` or a `CreationError`
 * may occur.
 */
export class SignOrCreationError extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.SignOrCreationError_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKSignOrCreationError_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new SignOrCreationError_SignError(ptr);
            case 1: return new SignOrCreationError_CreationError(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.SignOrCreationError_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the SignOrCreationError
     */
    clone() {
        const ret = bindings.SignOrCreationError_clone(this.ptr);
        const ret_hu_conv = SignOrCreationError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new SignError-variant SignOrCreationError
     */
    static constructor_sign_error() {
        const ret = bindings.SignOrCreationError_sign_error();
        const ret_hu_conv = SignOrCreationError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new CreationError-variant SignOrCreationError
     */
    static constructor_creation_error(a) {
        const ret = bindings.SignOrCreationError_creation_error(a);
        const ret_hu_conv = SignOrCreationError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Checks if two SignOrCreationErrors contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     */
    eq(b) {
        const ret = bindings.SignOrCreationError_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        return ret;
    }
    /**
     * Get the string representation of a SignOrCreationError object
     */
    to_str() {
        const ret = bindings.SignOrCreationError_to_str(this.ptr);
        const ret_conv = bindings.decodeString(ret);
        return ret_conv;
    }
}
/** A SignOrCreationError of type SignError */
export class SignOrCreationError_SignError extends SignOrCreationError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A SignOrCreationError of type CreationError */
export class SignOrCreationError_CreationError extends SignOrCreationError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.creation_error = bindings.LDKSignOrCreationError_CreationError_get_creation_error(ptr);
    }
}
//# sourceMappingURL=SignOrCreationError.mjs.map