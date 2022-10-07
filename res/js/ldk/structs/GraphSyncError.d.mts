import { DecodeError } from '../structs/DecodeError.mjs';
import { LightningError } from '../structs/LightningError.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * All-encompassing standard error type that processing can return
 */
export declare class GraphSyncError extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the GraphSyncError
     */
    clone(): GraphSyncError;
    /**
     * Utility method to constructs a new DecodeError-variant GraphSyncError
     */
    static constructor_decode_error(a: DecodeError): GraphSyncError;
    /**
     * Utility method to constructs a new LightningError-variant GraphSyncError
     */
    static constructor_lightning_error(a: LightningError): GraphSyncError;
}
/** A GraphSyncError of type DecodeError */
export declare class GraphSyncError_DecodeError extends GraphSyncError {
    decode_error: DecodeError;
}
/** A GraphSyncError of type LightningError */
export declare class GraphSyncError_LightningError extends GraphSyncError {
    lightning_error: LightningError;
}
