import { TxOut } from '../structs/TxOut.mjs';
import { AccessError } from '../enums/AccessError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_TxOutAccessErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_TxOutAccessErrorZ in the success state.
     */
    static constructor_ok(o: TxOut): Result_TxOutAccessErrorZ;
    /**
     * Creates a new CResult_TxOutAccessErrorZ in the error state.
     */
    static constructor_err(e: AccessError): Result_TxOutAccessErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_TxOutAccessErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_TxOutAccessErrorZ;
}
export declare class Result_TxOutAccessErrorZ_OK extends Result_TxOutAccessErrorZ {
    res: TxOut;
}
export declare class Result_TxOutAccessErrorZ_Err extends Result_TxOutAccessErrorZ {
    err: AccessError;
}
