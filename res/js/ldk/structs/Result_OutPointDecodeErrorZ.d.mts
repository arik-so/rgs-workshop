import { DecodeError } from '../structs/DecodeError.mjs';
import { OutPoint } from '../structs/OutPoint.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_OutPointDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_OutPointDecodeErrorZ in the success state.
     */
    static constructor_ok(o: OutPoint): Result_OutPointDecodeErrorZ;
    /**
     * Creates a new CResult_OutPointDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_OutPointDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_OutPointDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_OutPointDecodeErrorZ;
}
export declare class Result_OutPointDecodeErrorZ_OK extends Result_OutPointDecodeErrorZ {
    res: OutPoint;
}
export declare class Result_OutPointDecodeErrorZ_Err extends Result_OutPointDecodeErrorZ {
    err: DecodeError;
}
