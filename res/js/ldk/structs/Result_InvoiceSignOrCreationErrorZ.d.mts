import { Invoice } from '../structs/Invoice.mjs';
import { SignOrCreationError } from '../structs/SignOrCreationError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_InvoiceSignOrCreationErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_InvoiceSignOrCreationErrorZ in the success state.
     */
    static constructor_ok(o: Invoice): Result_InvoiceSignOrCreationErrorZ;
    /**
     * Creates a new CResult_InvoiceSignOrCreationErrorZ in the error state.
     */
    static constructor_err(e: SignOrCreationError): Result_InvoiceSignOrCreationErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_InvoiceSignOrCreationErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_InvoiceSignOrCreationErrorZ;
}
export declare class Result_InvoiceSignOrCreationErrorZ_OK extends Result_InvoiceSignOrCreationErrorZ {
    res: Invoice;
}
export declare class Result_InvoiceSignOrCreationErrorZ_Err extends Result_InvoiceSignOrCreationErrorZ {
    err: SignOrCreationError;
}
