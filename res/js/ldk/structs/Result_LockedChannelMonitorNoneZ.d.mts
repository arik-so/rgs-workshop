import { LockedChannelMonitor } from '../structs/LockedChannelMonitor.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_LockedChannelMonitorNoneZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_LockedChannelMonitorNoneZ in the success state.
     */
    static constructor_ok(o: LockedChannelMonitor): Result_LockedChannelMonitorNoneZ;
    /**
     * Creates a new CResult_LockedChannelMonitorNoneZ in the error state.
     */
    static constructor_err(): Result_LockedChannelMonitorNoneZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
}
export declare class Result_LockedChannelMonitorNoneZ_OK extends Result_LockedChannelMonitorNoneZ {
    res: LockedChannelMonitor;
}
export declare class Result_LockedChannelMonitorNoneZ_Err extends Result_LockedChannelMonitorNoneZ {
}
