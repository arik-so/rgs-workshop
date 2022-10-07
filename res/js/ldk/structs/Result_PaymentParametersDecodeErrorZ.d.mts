import { DecodeError } from '../structs/DecodeError.mjs';
import { PaymentParameters } from '../structs/PaymentParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_PaymentParametersDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_PaymentParametersDecodeErrorZ in the success state.
     */
    static constructor_ok(o: PaymentParameters): Result_PaymentParametersDecodeErrorZ;
    /**
     * Creates a new CResult_PaymentParametersDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_PaymentParametersDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_PaymentParametersDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_PaymentParametersDecodeErrorZ;
}
export declare class Result_PaymentParametersDecodeErrorZ_OK extends Result_PaymentParametersDecodeErrorZ {
    res: PaymentParameters;
}
export declare class Result_PaymentParametersDecodeErrorZ_Err extends Result_PaymentParametersDecodeErrorZ {
    err: DecodeError;
}