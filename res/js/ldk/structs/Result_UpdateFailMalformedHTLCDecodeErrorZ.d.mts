import { DecodeError } from '../structs/DecodeError.mjs';
import { UpdateFailMalformedHTLC } from '../structs/UpdateFailMalformedHTLC.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_UpdateFailMalformedHTLCDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_UpdateFailMalformedHTLCDecodeErrorZ in the success state.
     */
    static constructor_ok(o: UpdateFailMalformedHTLC): Result_UpdateFailMalformedHTLCDecodeErrorZ;
    /**
     * Creates a new CResult_UpdateFailMalformedHTLCDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_UpdateFailMalformedHTLCDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_UpdateFailMalformedHTLCDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_UpdateFailMalformedHTLCDecodeErrorZ;
}
export declare class Result_UpdateFailMalformedHTLCDecodeErrorZ_OK extends Result_UpdateFailMalformedHTLCDecodeErrorZ {
    res: UpdateFailMalformedHTLC;
}
export declare class Result_UpdateFailMalformedHTLCDecodeErrorZ_Err extends Result_UpdateFailMalformedHTLCDecodeErrorZ {
    err: DecodeError;
}
