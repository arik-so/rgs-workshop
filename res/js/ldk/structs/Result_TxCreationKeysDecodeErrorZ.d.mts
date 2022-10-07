import { DecodeError } from '../structs/DecodeError.mjs';
import { TxCreationKeys } from '../structs/TxCreationKeys.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_TxCreationKeysDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_TxCreationKeysDecodeErrorZ in the success state.
     */
    static constructor_ok(o: TxCreationKeys): Result_TxCreationKeysDecodeErrorZ;
    /**
     * Creates a new CResult_TxCreationKeysDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_TxCreationKeysDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_TxCreationKeysDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_TxCreationKeysDecodeErrorZ;
}
export declare class Result_TxCreationKeysDecodeErrorZ_OK extends Result_TxCreationKeysDecodeErrorZ {
    res: TxCreationKeys;
}
export declare class Result_TxCreationKeysDecodeErrorZ_Err extends Result_TxCreationKeysDecodeErrorZ {
    err: DecodeError;
}