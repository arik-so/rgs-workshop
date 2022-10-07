import { DecodeError } from '../structs/DecodeError.mjs';
import { BlindedHop } from '../structs/BlindedHop.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_BlindedHopDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_BlindedHopDecodeErrorZ in the success state.
     */
    static constructor_ok(o: BlindedHop): Result_BlindedHopDecodeErrorZ;
    /**
     * Creates a new CResult_BlindedHopDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_BlindedHopDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
}
export declare class Result_BlindedHopDecodeErrorZ_OK extends Result_BlindedHopDecodeErrorZ {
    res: BlindedHop;
}
export declare class Result_BlindedHopDecodeErrorZ_Err extends Result_BlindedHopDecodeErrorZ {
    err: DecodeError;
}
