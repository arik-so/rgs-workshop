import { DecodeError } from '../structs/DecodeError.mjs';
import { CounterpartyForwardingInfo } from '../structs/CounterpartyForwardingInfo.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_CounterpartyForwardingInfoDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_CounterpartyForwardingInfoDecodeErrorZ in the success state.
     */
    static constructor_ok(o: CounterpartyForwardingInfo): Result_CounterpartyForwardingInfoDecodeErrorZ;
    /**
     * Creates a new CResult_CounterpartyForwardingInfoDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_CounterpartyForwardingInfoDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_CounterpartyForwardingInfoDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_CounterpartyForwardingInfoDecodeErrorZ;
}
export declare class Result_CounterpartyForwardingInfoDecodeErrorZ_OK extends Result_CounterpartyForwardingInfoDecodeErrorZ {
    res: CounterpartyForwardingInfo;
}
export declare class Result_CounterpartyForwardingInfoDecodeErrorZ_Err extends Result_CounterpartyForwardingInfoDecodeErrorZ {
    err: DecodeError;
}