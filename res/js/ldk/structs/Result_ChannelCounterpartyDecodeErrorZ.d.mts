import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelCounterparty } from '../structs/ChannelCounterparty.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ChannelCounterpartyDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ChannelCounterpartyDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ChannelCounterparty): Result_ChannelCounterpartyDecodeErrorZ;
    /**
     * Creates a new CResult_ChannelCounterpartyDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ChannelCounterpartyDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ChannelCounterpartyDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ChannelCounterpartyDecodeErrorZ;
}
export declare class Result_ChannelCounterpartyDecodeErrorZ_OK extends Result_ChannelCounterpartyDecodeErrorZ {
    res: ChannelCounterparty;
}
export declare class Result_ChannelCounterpartyDecodeErrorZ_Err extends Result_ChannelCounterpartyDecodeErrorZ {
    err: DecodeError;
}
