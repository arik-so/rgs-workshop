import { DecodeError } from '../structs/DecodeError.mjs';
import { PaymentPurpose } from '../structs/PaymentPurpose.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_PaymentPurposeDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_PaymentPurposeDecodeErrorZ in the success state.
     */
    static constructor_ok(o: PaymentPurpose): Result_PaymentPurposeDecodeErrorZ;
    /**
     * Creates a new CResult_PaymentPurposeDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_PaymentPurposeDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_PaymentPurposeDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_PaymentPurposeDecodeErrorZ;
}
export declare class Result_PaymentPurposeDecodeErrorZ_OK extends Result_PaymentPurposeDecodeErrorZ {
    res: PaymentPurpose;
}
export declare class Result_PaymentPurposeDecodeErrorZ_Err extends Result_PaymentPurposeDecodeErrorZ {
    err: DecodeError;
}
