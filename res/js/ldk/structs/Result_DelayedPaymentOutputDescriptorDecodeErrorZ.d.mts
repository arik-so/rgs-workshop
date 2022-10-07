import { DecodeError } from '../structs/DecodeError.mjs';
import { DelayedPaymentOutputDescriptor } from '../structs/DelayedPaymentOutputDescriptor.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_DelayedPaymentOutputDescriptorDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_DelayedPaymentOutputDescriptorDecodeErrorZ in the success state.
     */
    static constructor_ok(o: DelayedPaymentOutputDescriptor): Result_DelayedPaymentOutputDescriptorDecodeErrorZ;
    /**
     * Creates a new CResult_DelayedPaymentOutputDescriptorDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_DelayedPaymentOutputDescriptorDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_DelayedPaymentOutputDescriptorDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_DelayedPaymentOutputDescriptorDecodeErrorZ;
}
export declare class Result_DelayedPaymentOutputDescriptorDecodeErrorZ_OK extends Result_DelayedPaymentOutputDescriptorDecodeErrorZ {
    res: DelayedPaymentOutputDescriptor;
}
export declare class Result_DelayedPaymentOutputDescriptorDecodeErrorZ_Err extends Result_DelayedPaymentOutputDescriptorDecodeErrorZ {
    err: DecodeError;
}