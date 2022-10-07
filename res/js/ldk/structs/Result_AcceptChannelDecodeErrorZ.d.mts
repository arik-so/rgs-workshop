import { DecodeError } from '../structs/DecodeError.mjs';
import { AcceptChannel } from '../structs/AcceptChannel.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_AcceptChannelDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_AcceptChannelDecodeErrorZ in the success state.
     */
    static constructor_ok(o: AcceptChannel): Result_AcceptChannelDecodeErrorZ;
    /**
     * Creates a new CResult_AcceptChannelDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_AcceptChannelDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_AcceptChannelDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_AcceptChannelDecodeErrorZ;
}
export declare class Result_AcceptChannelDecodeErrorZ_OK extends Result_AcceptChannelDecodeErrorZ {
    res: AcceptChannel;
}
export declare class Result_AcceptChannelDecodeErrorZ_Err extends Result_AcceptChannelDecodeErrorZ {
    err: DecodeError;
}