import { DecodeError } from '../structs/DecodeError.mjs';
import { HTLCUpdate } from '../structs/HTLCUpdate.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_HTLCUpdateDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_HTLCUpdateDecodeErrorZ in the success state.
     */
    static constructor_ok(o: HTLCUpdate): Result_HTLCUpdateDecodeErrorZ;
    /**
     * Creates a new CResult_HTLCUpdateDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_HTLCUpdateDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_HTLCUpdateDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_HTLCUpdateDecodeErrorZ;
}
export declare class Result_HTLCUpdateDecodeErrorZ_OK extends Result_HTLCUpdateDecodeErrorZ {
    res: HTLCUpdate;
}
export declare class Result_HTLCUpdateDecodeErrorZ_Err extends Result_HTLCUpdateDecodeErrorZ {
    err: DecodeError;
}