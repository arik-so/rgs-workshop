import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelMonitorUpdate } from '../structs/ChannelMonitorUpdate.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ChannelMonitorUpdateDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ChannelMonitorUpdateDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ChannelMonitorUpdate): Result_ChannelMonitorUpdateDecodeErrorZ;
    /**
     * Creates a new CResult_ChannelMonitorUpdateDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ChannelMonitorUpdateDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ChannelMonitorUpdateDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ChannelMonitorUpdateDecodeErrorZ;
}
export declare class Result_ChannelMonitorUpdateDecodeErrorZ_OK extends Result_ChannelMonitorUpdateDecodeErrorZ {
    res: ChannelMonitorUpdate;
}
export declare class Result_ChannelMonitorUpdateDecodeErrorZ_Err extends Result_ChannelMonitorUpdateDecodeErrorZ {
    err: DecodeError;
}