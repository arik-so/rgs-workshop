import { SemanticError } from '../enums/SemanticError.mjs';
import { Invoice } from '../structs/Invoice.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_InvoiceSemanticErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_InvoiceSemanticErrorZ in the success state.
     */
    static constructor_ok(o: Invoice): Result_InvoiceSemanticErrorZ;
    /**
     * Creates a new CResult_InvoiceSemanticErrorZ in the error state.
     */
    static constructor_err(e: SemanticError): Result_InvoiceSemanticErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_InvoiceSemanticErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_InvoiceSemanticErrorZ;
}
export declare class Result_InvoiceSemanticErrorZ_OK extends Result_InvoiceSemanticErrorZ {
    res: Invoice;
}
export declare class Result_InvoiceSemanticErrorZ_Err extends Result_InvoiceSemanticErrorZ {
    err: SemanticError;
}
