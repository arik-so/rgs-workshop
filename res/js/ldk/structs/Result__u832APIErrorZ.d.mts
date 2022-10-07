import { APIError } from '../structs/APIError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result__u832APIErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult__u832APIErrorZ in the success state.
     */
    static constructor_ok(o: Uint8Array): Result__u832APIErrorZ;
    /**
     * Creates a new CResult__u832APIErrorZ in the error state.
     */
    static constructor_err(e: APIError): Result__u832APIErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult__u832APIErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result__u832APIErrorZ;
}
export declare class Result__u832APIErrorZ_OK extends Result__u832APIErrorZ {
    res: Uint8Array;
}
export declare class Result__u832APIErrorZ_Err extends Result__u832APIErrorZ {
    err: APIError;
}
