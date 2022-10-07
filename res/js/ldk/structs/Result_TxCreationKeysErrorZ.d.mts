import { Secp256k1Error } from '../enums/Secp256k1Error.mjs';
import { TxCreationKeys } from '../structs/TxCreationKeys.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_TxCreationKeysErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_TxCreationKeysErrorZ in the success state.
     */
    static constructor_ok(o: TxCreationKeys): Result_TxCreationKeysErrorZ;
    /**
     * Creates a new CResult_TxCreationKeysErrorZ in the error state.
     */
    static constructor_err(e: Secp256k1Error): Result_TxCreationKeysErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_TxCreationKeysErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_TxCreationKeysErrorZ;
}
export declare class Result_TxCreationKeysErrorZ_OK extends Result_TxCreationKeysErrorZ {
    res: TxCreationKeys;
}
export declare class Result_TxCreationKeysErrorZ_Err extends Result_TxCreationKeysErrorZ {
    err: Secp256k1Error;
}
