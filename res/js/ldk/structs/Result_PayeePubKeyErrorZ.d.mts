import { Secp256k1Error } from '../enums/Secp256k1Error.mjs';
import { PayeePubKey } from '../structs/PayeePubKey.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_PayeePubKeyErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_PayeePubKeyErrorZ in the success state.
     */
    static constructor_ok(o: PayeePubKey): Result_PayeePubKeyErrorZ;
    /**
     * Creates a new CResult_PayeePubKeyErrorZ in the error state.
     */
    static constructor_err(e: Secp256k1Error): Result_PayeePubKeyErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_PayeePubKeyErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_PayeePubKeyErrorZ;
}
export declare class Result_PayeePubKeyErrorZ_OK extends Result_PayeePubKeyErrorZ {
    res: PayeePubKey;
}
export declare class Result_PayeePubKeyErrorZ_Err extends Result_PayeePubKeyErrorZ {
    err: Secp256k1Error;
}
