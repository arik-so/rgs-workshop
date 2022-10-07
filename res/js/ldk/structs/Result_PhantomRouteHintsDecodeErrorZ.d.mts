import { DecodeError } from '../structs/DecodeError.mjs';
import { PhantomRouteHints } from '../structs/PhantomRouteHints.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_PhantomRouteHintsDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_PhantomRouteHintsDecodeErrorZ in the success state.
     */
    static constructor_ok(o: PhantomRouteHints): Result_PhantomRouteHintsDecodeErrorZ;
    /**
     * Creates a new CResult_PhantomRouteHintsDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_PhantomRouteHintsDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_PhantomRouteHintsDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_PhantomRouteHintsDecodeErrorZ;
}
export declare class Result_PhantomRouteHintsDecodeErrorZ_OK extends Result_PhantomRouteHintsDecodeErrorZ {
    res: PhantomRouteHints;
}
export declare class Result_PhantomRouteHintsDecodeErrorZ_Err extends Result_PhantomRouteHintsDecodeErrorZ {
    err: DecodeError;
}
