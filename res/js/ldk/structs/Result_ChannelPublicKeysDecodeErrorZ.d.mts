import { DecodeError } from '../structs/DecodeError.mjs';
import { ChannelPublicKeys } from '../structs/ChannelPublicKeys.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_ChannelPublicKeysDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_ChannelPublicKeysDecodeErrorZ in the success state.
     */
    static constructor_ok(o: ChannelPublicKeys): Result_ChannelPublicKeysDecodeErrorZ;
    /**
     * Creates a new CResult_ChannelPublicKeysDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_ChannelPublicKeysDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_ChannelPublicKeysDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_ChannelPublicKeysDecodeErrorZ;
}
export declare class Result_ChannelPublicKeysDecodeErrorZ_OK extends Result_ChannelPublicKeysDecodeErrorZ {
    res: ChannelPublicKeys;
}
export declare class Result_ChannelPublicKeysDecodeErrorZ_Err extends Result_ChannelPublicKeysDecodeErrorZ {
    err: DecodeError;
}