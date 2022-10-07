import { DecodeError } from '../structs/DecodeError.mjs';
import { TwoTuple_BlockHashChannelMonitorZ } from '../structs/TwoTuple_BlockHashChannelMonitorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_C2Tuple_BlockHashChannelMonitorZDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_C2Tuple_BlockHashChannelMonitorZDecodeErrorZ in the success state.
     */
    static constructor_ok(o: TwoTuple_BlockHashChannelMonitorZ): Result_C2Tuple_BlockHashChannelMonitorZDecodeErrorZ;
    /**
     * Creates a new CResult_C2Tuple_BlockHashChannelMonitorZDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_C2Tuple_BlockHashChannelMonitorZDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_C2Tuple_BlockHashChannelMonitorZDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_C2Tuple_BlockHashChannelMonitorZDecodeErrorZ;
}
export declare class Result_C2Tuple_BlockHashChannelMonitorZDecodeErrorZ_OK extends Result_C2Tuple_BlockHashChannelMonitorZDecodeErrorZ {
    res: TwoTuple_BlockHashChannelMonitorZ;
}
export declare class Result_C2Tuple_BlockHashChannelMonitorZDecodeErrorZ_Err extends Result_C2Tuple_BlockHashChannelMonitorZDecodeErrorZ {
    err: DecodeError;
}
