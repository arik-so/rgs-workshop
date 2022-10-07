import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelConfig } from '../structs/ChannelConfig.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ChannelConfigDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ChannelConfigDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ChannelConfig): Result_ChannelConfigDecodeErrorZ;
    /**
     * Creates a new CResult_ChannelConfigDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ChannelConfigDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ChannelConfigDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ChannelConfigDecodeErrorZ;
}
export declare class Result_ChannelConfigDecodeErrorZ_OK extends Result_ChannelConfigDecodeErrorZ {
    res: ChannelConfig;
}
export declare class Result_ChannelConfigDecodeErrorZ_Err extends Result_ChannelConfigDecodeErrorZ {
    err: DecodeError;
}
