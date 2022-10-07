import { DecodeError } from '../structs/DecodeError.mjs';
import { CounterpartyChannelTransactionParameters } from '../structs/CounterpartyChannelTransactionParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_CounterpartyChannelTransactionParametersDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_CounterpartyChannelTransactionParametersDecodeErrorZ in the success state.
     */
    static constructor_ok(o: CounterpartyChannelTransactionParameters): Result_CounterpartyChannelTransactionParametersDecodeErrorZ;
    /**
     * Creates a new CResult_CounterpartyChannelTransactionParametersDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_CounterpartyChannelTransactionParametersDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_CounterpartyChannelTransactionParametersDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_CounterpartyChannelTransactionParametersDecodeErrorZ;
}
export declare class Result_CounterpartyChannelTransactionParametersDecodeErrorZ_OK extends Result_CounterpartyChannelTransactionParametersDecodeErrorZ {
    res: CounterpartyChannelTransactionParameters;
}
export declare class Result_CounterpartyChannelTransactionParametersDecodeErrorZ_Err extends Result_CounterpartyChannelTransactionParametersDecodeErrorZ {
    err: DecodeError;
}