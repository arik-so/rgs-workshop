import { DecodeError } from '../structs/DecodeError.mjs';
import { NodeId } from '../structs/NodeId.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NodeIdDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NodeIdDecodeErrorZ in the success state.
     */
    static constructor_ok(o: NodeId): Result_NodeIdDecodeErrorZ;
    /**
     * Creates a new CResult_NodeIdDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_NodeIdDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NodeIdDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NodeIdDecodeErrorZ;
}
export declare class Result_NodeIdDecodeErrorZ_OK extends Result_NodeIdDecodeErrorZ {
    res: NodeId;
}
export declare class Result_NodeIdDecodeErrorZ_Err extends Result_NodeIdDecodeErrorZ {
    err: DecodeError;
}
