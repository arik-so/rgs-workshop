import { Invoice } from '../structs/Invoice.mjs';
import { ParseOrSemanticError } from '../structs/ParseOrSemanticError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_InvoiceParseOrSemanticErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_InvoiceParseOrSemanticErrorZ in the success state.
     */
    static constructor_ok(o: Invoice): Result_InvoiceParseOrSemanticErrorZ;
    /**
     * Creates a new CResult_InvoiceParseOrSemanticErrorZ in the error state.
     */
    static constructor_err(e: ParseOrSemanticError): Result_InvoiceParseOrSemanticErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_InvoiceParseOrSemanticErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_InvoiceParseOrSemanticErrorZ;
}
export declare class Result_InvoiceParseOrSemanticErrorZ_OK extends Result_InvoiceParseOrSemanticErrorZ {
    res: Invoice;
}
export declare class Result_InvoiceParseOrSemanticErrorZ_Err extends Result_InvoiceParseOrSemanticErrorZ {
    err: ParseOrSemanticError;
}
