import { DecodeError } from '../structs/DecodeError.mjs';
import { RevokeAndACK } from '../structs/RevokeAndACK.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_RevokeAndACKDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_RevokeAndACKDecodeErrorZ in the success state.
     */
    static constructor_ok(o: RevokeAndACK): Result_RevokeAndACKDecodeErrorZ;
    /**
     * Creates a new CResult_RevokeAndACKDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_RevokeAndACKDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_RevokeAndACKDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_RevokeAndACKDecodeErrorZ;
}
export declare class Result_RevokeAndACKDecodeErrorZ_OK extends Result_RevokeAndACKDecodeErrorZ {
    res: RevokeAndACK;
}
export declare class Result_RevokeAndACKDecodeErrorZ_Err extends Result_RevokeAndACKDecodeErrorZ {
    err: DecodeError;
}
