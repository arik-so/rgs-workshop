import { DecodeError } from '../structs/DecodeError.mjs';
import { NodeAlias } from '../structs/NodeAlias.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NodeAliasDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NodeAliasDecodeErrorZ in the success state.
     */
    static constructor_ok(o: NodeAlias): Result_NodeAliasDecodeErrorZ;
    /**
     * Creates a new CResult_NodeAliasDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_NodeAliasDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NodeAliasDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NodeAliasDecodeErrorZ;
}
export declare class Result_NodeAliasDecodeErrorZ_OK extends Result_NodeAliasDecodeErrorZ {
    res: NodeAlias;
}
export declare class Result_NodeAliasDecodeErrorZ_Err extends Result_NodeAliasDecodeErrorZ {
    err: DecodeError;
}