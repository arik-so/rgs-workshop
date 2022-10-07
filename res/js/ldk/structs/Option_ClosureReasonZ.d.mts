import { ClosureReason } from '../structs/ClosureReason.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An enum which can either contain a crate::lightning::util::events::ClosureReason or not
 */
export declare class Option_ClosureReasonZ extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    /**
     * Constructs a new COption_ClosureReasonZ containing a crate::lightning::util::events::ClosureReason
     */
    static constructor_some(o: ClosureReason): Option_ClosureReasonZ;
    /**
     * Constructs a new COption_ClosureReasonZ containing nothing
     */
    static constructor_none(): Option_ClosureReasonZ;
    clone_ptr(): bigint;
    /**
     * Creates a new COption_ClosureReasonZ which has the same data as `orig`
     * but with all dynamically-allocated buffers duplicated in new buffers.
     */
    clone(): Option_ClosureReasonZ;
}
/** A Option_ClosureReasonZ of type Some */
export declare class Option_ClosureReasonZ_Some extends Option_ClosureReasonZ {
    some: ClosureReason;
}
/** A Option_ClosureReasonZ of type None */
export declare class Option_ClosureReasonZ_None extends Option_ClosureReasonZ {
}