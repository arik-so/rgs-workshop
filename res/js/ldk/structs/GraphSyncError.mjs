import { DecodeError } from '../structs/DecodeError.mjs';
import { LightningError } from '../structs/LightningError.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * All-encompassing standard error type that processing can return
 */
export class GraphSyncError extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.GraphSyncError_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKGraphSyncError_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new GraphSyncError_DecodeError(ptr);
            case 1: return new GraphSyncError_LightningError(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.GraphSyncError_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the GraphSyncError
     */
    clone() {
        const ret = bindings.GraphSyncError_clone(this.ptr);
        const ret_hu_conv = GraphSyncError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new DecodeError-variant GraphSyncError
     */
    static constructor_decode_error(a) {
        const ret = bindings.GraphSyncError_decode_error(a == null ? 0n : CommonBase.get_ptr_of(a));
        const ret_hu_conv = GraphSyncError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, a);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new LightningError-variant GraphSyncError
     */
    static constructor_lightning_error(a) {
        const ret = bindings.GraphSyncError_lightning_error(a == null ? 0n : CommonBase.get_ptr_of(a));
        const ret_hu_conv = GraphSyncError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, a);
        return ret_hu_conv;
    }
}
/** A GraphSyncError of type DecodeError */
export class GraphSyncError_DecodeError extends GraphSyncError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const decode_error = bindings.LDKGraphSyncError_DecodeError_get_decode_error(ptr);
        const decode_error_hu_conv = new DecodeError(null, decode_error);
        CommonBase.add_ref_from(decode_error_hu_conv, this);
        this.decode_error = decode_error_hu_conv;
    }
}
/** A GraphSyncError of type LightningError */
export class GraphSyncError_LightningError extends GraphSyncError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const lightning_error = bindings.LDKGraphSyncError_LightningError_get_lightning_error(ptr);
        const lightning_error_hu_conv = new LightningError(null, lightning_error);
        CommonBase.add_ref_from(lightning_error_hu_conv, this);
        this.lightning_error = lightning_error_hu_conv;
    }
}
//# sourceMappingURL=GraphSyncError.mjs.map