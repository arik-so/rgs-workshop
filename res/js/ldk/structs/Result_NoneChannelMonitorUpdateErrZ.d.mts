import { ChannelMonitorUpdateErr } from '../enums/ChannelMonitorUpdateErr.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NoneChannelMonitorUpdateErrZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NoneChannelMonitorUpdateErrZ in the success state.
     */
    static constructor_ok(): Result_NoneChannelMonitorUpdateErrZ;
    /**
     * Creates a new CResult_NoneChannelMonitorUpdateErrZ in the error state.
     */
    static constructor_err(e: ChannelMonitorUpdateErr): Result_NoneChannelMonitorUpdateErrZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NoneChannelMonitorUpdateErrZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NoneChannelMonitorUpdateErrZ;
}
export declare class Result_NoneChannelMonitorUpdateErrZ_OK extends Result_NoneChannelMonitorUpdateErrZ {
}
export declare class Result_NoneChannelMonitorUpdateErrZ_Err extends Result_NoneChannelMonitorUpdateErrZ {
    err: ChannelMonitorUpdateErr;
}
