import { DecodeError } from '../structs/DecodeError.mjs';
import { SpendableOutputDescriptor } from '../structs/SpendableOutputDescriptor.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_SpendableOutputDescriptorDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_SpendableOutputDescriptorDecodeErrorZ in the success state.
     */
    static constructor_ok(o: SpendableOutputDescriptor): Result_SpendableOutputDescriptorDecodeErrorZ;
    /**
     * Creates a new CResult_SpendableOutputDescriptorDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_SpendableOutputDescriptorDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_SpendableOutputDescriptorDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_SpendableOutputDescriptorDecodeErrorZ;
}
export declare class Result_SpendableOutputDescriptorDecodeErrorZ_OK extends Result_SpendableOutputDescriptorDecodeErrorZ {
    res: SpendableOutputDescriptor;
}
export declare class Result_SpendableOutputDescriptorDecodeErrorZ_Err extends Result_SpendableOutputDescriptorDecodeErrorZ {
    err: DecodeError;
}