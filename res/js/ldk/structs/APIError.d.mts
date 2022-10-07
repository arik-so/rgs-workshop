import { ShutdownScript } from '../structs/ShutdownScript.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Indicates an error on the client's part (usually some variant of attempting to use too-low or
 * too-high values)
 */
export declare class APIError extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the APIError
     */
    clone(): APIError;
    /**
     * Utility method to constructs a new APIMisuseError-variant APIError
     */
    static constructor_apimisuse_error(err: string): APIError;
    /**
     * Utility method to constructs a new FeeRateTooHigh-variant APIError
     */
    static constructor_fee_rate_too_high(err: string, feerate: number): APIError;
    /**
     * Utility method to constructs a new RouteError-variant APIError
     */
    static constructor_route_error(err: string): APIError;
    /**
     * Utility method to constructs a new ChannelUnavailable-variant APIError
     */
    static constructor_channel_unavailable(err: string): APIError;
    /**
     * Utility method to constructs a new MonitorUpdateFailed-variant APIError
     */
    static constructor_monitor_update_failed(): APIError;
    /**
     * Utility method to constructs a new IncompatibleShutdownScript-variant APIError
     */
    static constructor_incompatible_shutdown_script(script: ShutdownScript): APIError;
}
/** A APIError of type APIMisuseError */
export declare class APIError_APIMisuseError extends APIError {
    /**
     * A human-readable error message
     */
    err: string;
}
/** A APIError of type FeeRateTooHigh */
export declare class APIError_FeeRateTooHigh extends APIError {
    /**
     * A human-readable error message
     */
    err: string;
    /**
     * The feerate which was too high.
     */
    feerate: number;
}
/** A APIError of type RouteError */
export declare class APIError_RouteError extends APIError {
    /**
     * A human-readable error message
     */
    err: string;
}
/** A APIError of type ChannelUnavailable */
export declare class APIError_ChannelUnavailable extends APIError {
    /**
     * A human-readable error message
     */
    err: string;
}
/** A APIError of type MonitorUpdateFailed */
export declare class APIError_MonitorUpdateFailed extends APIError {
}
/** A APIError of type IncompatibleShutdownScript */
export declare class APIError_IncompatibleShutdownScript extends APIError {
    /**
     * The incompatible shutdown script.
     */
    script: ShutdownScript;
}
