import { DecodeError } from '../structs/DecodeError.mjs';
import { Sign } from '../structs/Sign.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_SignDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_SignDecodeErrorZ in the success state.
     */
    static constructor_ok(o: Sign): Result_SignDecodeErrorZ;
    /**
     * Creates a new CResult_SignDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_SignDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_SignDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_SignDecodeErrorZ;
}
export declare class Result_SignDecodeErrorZ_OK extends Result_SignDecodeErrorZ {
    res: Sign;
}
export declare class Result_SignDecodeErrorZ_Err extends Result_SignDecodeErrorZ {
    err: DecodeError;
}
