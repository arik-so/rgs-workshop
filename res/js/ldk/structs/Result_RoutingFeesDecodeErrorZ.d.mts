import { DecodeError } from '../structs/DecodeError.mjs';
import { RoutingFees } from '../structs/RoutingFees.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_RoutingFeesDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_RoutingFeesDecodeErrorZ in the success state.
     */
    static constructor_ok(o: RoutingFees): Result_RoutingFeesDecodeErrorZ;
    /**
     * Creates a new CResult_RoutingFeesDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_RoutingFeesDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_RoutingFeesDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_RoutingFeesDecodeErrorZ;
}
export declare class Result_RoutingFeesDecodeErrorZ_OK extends Result_RoutingFeesDecodeErrorZ {
    res: RoutingFees;
}
export declare class Result_RoutingFeesDecodeErrorZ_Err extends Result_RoutingFeesDecodeErrorZ {
    err: DecodeError;
}
