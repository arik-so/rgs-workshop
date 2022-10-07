import { Secp256k1Error } from '../enums/Secp256k1Error.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_StringErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_StringErrorZ in the success state.
     */
    static constructor_ok(o: string): Result_StringErrorZ;
    /**
     * Creates a new CResult_StringErrorZ in the error state.
     */
    static constructor_err(e: Secp256k1Error): Result_StringErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_StringErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_StringErrorZ;
}
export declare class Result_StringErrorZ_OK extends Result_StringErrorZ {
    res: string;
}
export declare class Result_StringErrorZ_Err extends Result_StringErrorZ {
    err: Secp256k1Error;
}
