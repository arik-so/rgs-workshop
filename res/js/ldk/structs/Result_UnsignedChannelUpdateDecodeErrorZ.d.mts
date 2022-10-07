import { DecodeError } from '../structs/DecodeError.mjs';
import { UnsignedChannelUpdate } from '../structs/UnsignedChannelUpdate.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_UnsignedChannelUpdateDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_UnsignedChannelUpdateDecodeErrorZ in the success state.
     */
    static constructor_ok(o: UnsignedChannelUpdate): Result_UnsignedChannelUpdateDecodeErrorZ;
    /**
     * Creates a new CResult_UnsignedChannelUpdateDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_UnsignedChannelUpdateDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_UnsignedChannelUpdateDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_UnsignedChannelUpdateDecodeErrorZ;
}
export declare class Result_UnsignedChannelUpdateDecodeErrorZ_OK extends Result_UnsignedChannelUpdateDecodeErrorZ {
    res: UnsignedChannelUpdate;
}
export declare class Result_UnsignedChannelUpdateDecodeErrorZ_Err extends Result_UnsignedChannelUpdateDecodeErrorZ {
    err: DecodeError;
}
