import { DecodeError } from '../structs/DecodeError.mjs';
import { StaticPaymentOutputDescriptor } from '../structs/StaticPaymentOutputDescriptor.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_StaticPaymentOutputDescriptorDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_StaticPaymentOutputDescriptorDecodeErrorZ in the success state.
     */
    static constructor_ok(o: StaticPaymentOutputDescriptor): Result_StaticPaymentOutputDescriptorDecodeErrorZ;
    /**
     * Creates a new CResult_StaticPaymentOutputDescriptorDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_StaticPaymentOutputDescriptorDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_StaticPaymentOutputDescriptorDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_StaticPaymentOutputDescriptorDecodeErrorZ;
}
export declare class Result_StaticPaymentOutputDescriptorDecodeErrorZ_OK extends Result_StaticPaymentOutputDescriptorDecodeErrorZ {
    res: StaticPaymentOutputDescriptor;
}
export declare class Result_StaticPaymentOutputDescriptorDecodeErrorZ_Err extends Result_StaticPaymentOutputDescriptorDecodeErrorZ {
    err: DecodeError;
}
