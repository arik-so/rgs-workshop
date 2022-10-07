import { Secp256k1Error } from '../enums/Secp256k1Error.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_SecretKeyErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_SecretKeyErrorZ in the success state.
     */
    static constructor_ok(o: Uint8Array): Result_SecretKeyErrorZ;
    /**
     * Creates a new CResult_SecretKeyErrorZ in the error state.
     */
    static constructor_err(e: Secp256k1Error): Result_SecretKeyErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_SecretKeyErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_SecretKeyErrorZ;
}
export declare class Result_SecretKeyErrorZ_OK extends Result_SecretKeyErrorZ {
    res: Uint8Array;
}
export declare class Result_SecretKeyErrorZ_Err extends Result_SecretKeyErrorZ {
    err: Secp256k1Error;
}
