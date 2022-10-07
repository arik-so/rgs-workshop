import { DecodeError } from '../structs/DecodeError.mjs';
import { TwoTuple_BlockHashChannelManagerZ } from '../structs/TwoTuple_BlockHashChannelManagerZ.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_C2Tuple_BlockHashChannelManagerZDecodeErrorZ in the success state.
     */
    static constructor_ok(o: TwoTuple_BlockHashChannelManagerZ): Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ;
    /**
     * Creates a new CResult_C2Tuple_BlockHashChannelManagerZDecodeErrorZ in the error state.
     */
    static constructor_err(e: DecodeError): Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
}
export declare class Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ_OK extends Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ {
    res: TwoTuple_BlockHashChannelManagerZ;
}
export declare class Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ_Err extends Result_C2Tuple_BlockHashChannelManagerZDecodeErrorZ {
    err: DecodeError;
}
