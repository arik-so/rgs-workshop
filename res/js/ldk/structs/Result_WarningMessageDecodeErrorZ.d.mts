import { DecodeError } from '../structs/DecodeError.mjs';
import { WarningMessage } from '../structs/WarningMessage.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_WarningMessageDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_WarningMessageDecodeErrorZ in the success state.
     */
    static constructor_ok(o: WarningMessage): Result_WarningMessageDecodeErrorZ;
    /**
     * Creates a new CResult_WarningMessageDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_WarningMessageDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_WarningMessageDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_WarningMessageDecodeErrorZ;
}
export declare class Result_WarningMessageDecodeErrorZ_OK extends Result_WarningMessageDecodeErrorZ {
    res: WarningMessage;
}
export declare class Result_WarningMessageDecodeErrorZ_Err extends Result_WarningMessageDecodeErrorZ {
    err: DecodeError;
}
