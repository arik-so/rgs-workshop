import { DecodeError } from '../structs/DecodeError.mjs';
import { NetAddress } from '../structs/NetAddress.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_NetAddressDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_NetAddressDecodeErrorZ in the success state.
     */
    static constructor_ok(o: NetAddress): Result_NetAddressDecodeErrorZ;
    /**
     * Creates a new CResult_NetAddressDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_NetAddressDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_NetAddressDecodeErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_NetAddressDecodeErrorZ;
}
export declare class Result_NetAddressDecodeErrorZ_OK extends Result_NetAddressDecodeErrorZ {
    res: NetAddress;
}
export declare class Result_NetAddressDecodeErrorZ_Err extends Result_NetAddressDecodeErrorZ {
    err: DecodeError;
}
