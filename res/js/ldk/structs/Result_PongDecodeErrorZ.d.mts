import { DecodeError } from '../structs/DecodeError.mjs';
import { Pong } from '../structs/Pong.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_PongDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_PongDecodeErrorZ in the success state.
     */
    static constructor_ok(o: Pong): Result_PongDecodeErrorZ;
    /**
     * Creates a new CResult_PongDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_PongDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_PongDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_PongDecodeErrorZ;
}
export declare class Result_PongDecodeErrorZ_OK extends Result_PongDecodeErrorZ {
    res: Pong;
}
export declare class Result_PongDecodeErrorZ_Err extends Result_PongDecodeErrorZ {
    err: DecodeError;
}
