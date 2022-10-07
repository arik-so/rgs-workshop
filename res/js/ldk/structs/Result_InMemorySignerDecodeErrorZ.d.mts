import { DecodeError } from '../structs/DecodeError.mjs';
import { InMemorySigner } from '../structs/InMemorySigner.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_InMemorySignerDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_InMemorySignerDecodeErrorZ in the success state.
     */
    static constructor_ok(o: InMemorySigner): Result_InMemorySignerDecodeErrorZ;
    /**
     * Creates a new CResult_InMemorySignerDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_InMemorySignerDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_InMemorySignerDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_InMemorySignerDecodeErrorZ;
}
export declare class Result_InMemorySignerDecodeErrorZ_OK extends Result_InMemorySignerDecodeErrorZ {
    res: InMemorySigner;
}
export declare class Result_InMemorySignerDecodeErrorZ_Err extends Result_InMemorySignerDecodeErrorZ {
    err: DecodeError;
}
