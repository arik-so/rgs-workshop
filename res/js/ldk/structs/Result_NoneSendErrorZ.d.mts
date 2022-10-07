import { SendError } from '../structs/SendError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NoneSendErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NoneSendErrorZ in the success state.
     */
    static constructor_ok(): Result_NoneSendErrorZ;
    /**
     * Creates a new CResult_NoneSendErrorZ in the error state.
     */
    static constructor_err(e: SendError): Result_NoneSendErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
}
export declare class Result_NoneSendErrorZ_OK extends Result_NoneSendErrorZ {
}
export declare class Result_NoneSendErrorZ_Err extends Result_NoneSendErrorZ {
    err: SendError;
}
