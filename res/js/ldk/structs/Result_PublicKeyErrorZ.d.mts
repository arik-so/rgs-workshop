import { Secp256k1Error } from '../enums/Secp256k1Error.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_PublicKeyErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_PublicKeyErrorZ in the success state.
     */
    static constructor_ok(o: Uint8Array): Result_PublicKeyErrorZ;
    /**
     * Creates a new CResult_PublicKeyErrorZ in the error state.
     */
    static constructor_err(e: Secp256k1Error): Result_PublicKeyErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_PublicKeyErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_PublicKeyErrorZ;
}
export declare class Result_PublicKeyErrorZ_OK extends Result_PublicKeyErrorZ {
    res: Uint8Array;
}
export declare class Result_PublicKeyErrorZ_Err extends Result_PublicKeyErrorZ {
    err: Secp256k1Error;
}
