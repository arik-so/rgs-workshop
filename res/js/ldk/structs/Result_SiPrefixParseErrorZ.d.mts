import { SiPrefix } from '../enums/SiPrefix.mjs';
import { ParseError } from '../structs/ParseError.mjs';
import { CommonBase } from './CommonBase.mjs';
export declare class Result_SiPrefixParseErrorZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Creates a new CResult_SiPrefixParseErrorZ in the success state.
     */
    static constructor_ok(o: SiPrefix): Result_SiPrefixParseErrorZ;
    /**
     * Creates a new CResult_SiPrefixParseErrorZ in the error state.
     */
    static constructor_err(e: ParseError): Result_SiPrefixParseErrorZ;
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok(): boolean;
    clone_ptr(): bigint;
    /**
     * Creates a new CResult_SiPrefixParseErrorZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Result_SiPrefixParseErrorZ;
}
export declare class Result_SiPrefixParseErrorZ_OK extends Result_SiPrefixParseErrorZ {
    res: SiPrefix;
}
export declare class Result_SiPrefixParseErrorZ_Err extends Result_SiPrefixParseErrorZ {
    err: ParseError;
}
