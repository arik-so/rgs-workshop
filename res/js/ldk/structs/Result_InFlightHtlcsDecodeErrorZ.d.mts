import { DecodeError } from '../structs/DecodeError.mjs';
import { InFlightHtlcs } from '../structs/InFlightHtlcs.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_InFlightHtlcsDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_InFlightHtlcsDecodeErrorZ in the success state.
     */
    static constructor_ok(o: InFlightHtlcs): Result_InFlightHtlcsDecodeErrorZ;
    /**
     * Creates a new CResult_InFlightHtlcsDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_InFlightHtlcsDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
}
export declare class Result_InFlightHtlcsDecodeErrorZ_OK extends Result_InFlightHtlcsDecodeErrorZ {
    res: InFlightHtlcs;
}
export declare class Result_InFlightHtlcsDecodeErrorZ_Err extends Result_InFlightHtlcsDecodeErrorZ {
    err: DecodeError;
}
