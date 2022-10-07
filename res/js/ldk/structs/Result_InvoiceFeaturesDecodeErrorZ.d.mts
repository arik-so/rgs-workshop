import { DecodeError } from '../structs/DecodeError.mjs';
import { InvoiceFeatures } from '../structs/InvoiceFeatures.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_InvoiceFeaturesDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_InvoiceFeaturesDecodeErrorZ in the success state.
     */
    static constructor_ok(o: InvoiceFeatures): Result_InvoiceFeaturesDecodeErrorZ;
    /**
     * Creates a new CResult_InvoiceFeaturesDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_InvoiceFeaturesDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_InvoiceFeaturesDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_InvoiceFeaturesDecodeErrorZ;
}
export declare class Result_InvoiceFeaturesDecodeErrorZ_OK extends Result_InvoiceFeaturesDecodeErrorZ {
    res: InvoiceFeatures;
}
export declare class Result_InvoiceFeaturesDecodeErrorZ_Err extends Result_InvoiceFeaturesDecodeErrorZ {
    err: DecodeError;
}
