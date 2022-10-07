import { PeerHandleError } from '../structs/PeerHandleError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_boolPeerHandleErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_boolPeerHandleErrorZ in the success state.
     */
    static constructor_ok(o: boolean): Result_boolPeerHandleErrorZ;
    /**
     * Creates a new CResult_boolPeerHandleErrorZ in the error state.
     */
    static constructor_err(e: PeerHandleError): Result_boolPeerHandleErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_boolPeerHandleErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_boolPeerHandleErrorZ;
}
export declare class Result_boolPeerHandleErrorZ_OK extends Result_boolPeerHandleErrorZ {
    res: boolean;
}
export declare class Result_boolPeerHandleErrorZ_Err extends Result_boolPeerHandleErrorZ {
    err: PeerHandleError;
}
