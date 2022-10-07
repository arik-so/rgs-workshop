import { DecodeError } from '../structs/DecodeError.mjs';
import { NodeInfo } from '../structs/NodeInfo.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NodeInfoDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NodeInfoDecodeErrorZ in the success state.
     */
    static constructor_ok(o: NodeInfo): Result_NodeInfoDecodeErrorZ;
    /**
     * Creates a new CResult_NodeInfoDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_NodeInfoDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NodeInfoDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NodeInfoDecodeErrorZ;
}
export declare class Result_NodeInfoDecodeErrorZ_OK extends Result_NodeInfoDecodeErrorZ {
    res: NodeInfo;
}
export declare class Result_NodeInfoDecodeErrorZ_Err extends Result_NodeInfoDecodeErrorZ {
    err: DecodeError;
}
