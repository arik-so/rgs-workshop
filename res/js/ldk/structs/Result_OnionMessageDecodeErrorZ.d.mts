import { DecodeError } from '../structs/DecodeError.mjs';
import { OnionMessage } from '../structs/OnionMessage.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_OnionMessageDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_OnionMessageDecodeErrorZ in the success state.
     */
    static constructor_ok(o: OnionMessage): Result_OnionMessageDecodeErrorZ;
    /**
     * Creates a new CResult_OnionMessageDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_OnionMessageDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_OnionMessageDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_OnionMessageDecodeErrorZ;
}
export declare class Result_OnionMessageDecodeErrorZ_OK extends Result_OnionMessageDecodeErrorZ {
    res: OnionMessage;
}
export declare class Result_OnionMessageDecodeErrorZ_Err extends Result_OnionMessageDecodeErrorZ {
    err: DecodeError;
}
