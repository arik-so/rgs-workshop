import { DecodeError } from '../structs/DecodeError.mjs';
import { RouteParameters } from '../structs/RouteParameters.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_RouteParametersDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_RouteParametersDecodeErrorZ in the success state.
     */
    static constructor_ok(o: RouteParameters): Result_RouteParametersDecodeErrorZ;
    /**
     * Creates a new CResult_RouteParametersDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_RouteParametersDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_RouteParametersDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_RouteParametersDecodeErrorZ;
}
export declare class Result_RouteParametersDecodeErrorZ_OK extends Result_RouteParametersDecodeErrorZ {
    res: RouteParameters;
}
export declare class Result_RouteParametersDecodeErrorZ_Err extends Result_RouteParametersDecodeErrorZ {
    err: DecodeError;
}
