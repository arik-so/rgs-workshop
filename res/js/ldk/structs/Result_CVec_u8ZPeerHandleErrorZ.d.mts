import { PeerHandleError } from '../structs/PeerHandleError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_CVec_u8ZPeerHandleErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_CVec_u8ZPeerHandleErrorZ in the success state.
     */
    static constructor_ok(o: Uint8Array): Result_CVec_u8ZPeerHandleErrorZ;
    /**
     * Creates a new CResult_CVec_u8ZPeerHandleErrorZ in the error state.
     */
    static constructor_err(e: PeerHandleError): Result_CVec_u8ZPeerHandleErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_CVec_u8ZPeerHandleErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_CVec_u8ZPeerHandleErrorZ;
}
export declare class Result_CVec_u8ZPeerHandleErrorZ_OK extends Result_CVec_u8ZPeerHandleErrorZ {
    res: Uint8Array;
}
export declare class Result_CVec_u8ZPeerHandleErrorZ_Err extends Result_CVec_u8ZPeerHandleErrorZ {
    err: PeerHandleError;
}