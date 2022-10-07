import { DecodeError } from '../structs/DecodeError.mjs';
import { Logger } from '../structs/Logger.mjs';
import { NetworkGraph } from '../structs/NetworkGraph.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NetworkGraphDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NetworkGraphDecodeErrorZ in the success state.
     */
    static constructor_ok(o_genesis_hash: Uint8Array, o_logger: Logger): Result_NetworkGraphDecodeErrorZ;
    /**
     * Creates a new CResult_NetworkGraphDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_NetworkGraphDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
}
export declare class Result_NetworkGraphDecodeErrorZ_OK extends Result_NetworkGraphDecodeErrorZ {
    res: NetworkGraph;
}
export declare class Result_NetworkGraphDecodeErrorZ_Err extends Result_NetworkGraphDecodeErrorZ {
    err: DecodeError;
}