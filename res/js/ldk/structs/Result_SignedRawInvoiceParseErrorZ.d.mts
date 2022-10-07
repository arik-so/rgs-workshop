import { ParseError } from '../structs/ParseError.mjs';
import { SignedRawInvoice } from '../structs/SignedRawInvoice.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_SignedRawInvoiceParseErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_SignedRawInvoiceParseErrorZ in the success state.
     */
    static constructor_ok(o: SignedRawInvoice): Result_SignedRawInvoiceParseErrorZ;
    /**
     * Creates a new CResult_SignedRawInvoiceParseErrorZ in the error state.
     */
    static constructor_err(e: ParseError): Result_SignedRawInvoiceParseErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_SignedRawInvoiceParseErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_SignedRawInvoiceParseErrorZ;
}
export declare class Result_SignedRawInvoiceParseErrorZ_OK extends Result_SignedRawInvoiceParseErrorZ {
    res: SignedRawInvoice;
}
export declare class Result_SignedRawInvoiceParseErrorZ_Err extends Result_SignedRawInvoiceParseErrorZ {
    err: ParseError;
}
