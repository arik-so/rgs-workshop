import { PeerHandleError } from '../structs/PeerHandleError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NonePeerHandleErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NonePeerHandleErrorZ in the success state.
     */
    static constructor_ok(): Result_NonePeerHandleErrorZ;
    /**
     * Creates a new CResult_NonePeerHandleErrorZ in the error state.
     */
    static constructor_err(e: PeerHandleError): Result_NonePeerHandleErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NonePeerHandleErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NonePeerHandleErrorZ;
}
export declare class Result_NonePeerHandleErrorZ_OK extends Result_NonePeerHandleErrorZ {
}
export declare class Result_NonePeerHandleErrorZ_Err extends Result_NonePeerHandleErrorZ {
    err: PeerHandleError;
}
