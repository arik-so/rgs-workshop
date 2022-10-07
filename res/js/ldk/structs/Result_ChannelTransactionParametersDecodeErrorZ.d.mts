import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelTransactionParameters } from '../structs/ChannelTransactionParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ChannelTransactionParametersDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ChannelTransactionParametersDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ChannelTransactionParameters): Result_ChannelTransactionParametersDecodeErrorZ;
    /**
     * Creates a new CResult_ChannelTransactionParametersDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ChannelTransactionParametersDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ChannelTransactionParametersDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ChannelTransactionParametersDecodeErrorZ;
}
export declare class Result_ChannelTransactionParametersDecodeErrorZ_OK extends Result_ChannelTransactionParametersDecodeErrorZ {
    res: ChannelTransactionParameters;
}
export declare class Result_ChannelTransactionParametersDecodeErrorZ_Err extends Result_ChannelTransactionParametersDecodeErrorZ {
    err: DecodeError;
}