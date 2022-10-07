import { ShutdownScript } from '../structs/ShutdownScript.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Indicates an error on the client's part (usually some variant of attempting to use too-low or
 * too-high values)
 */
export class APIError extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.APIError_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKAPIError_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new APIError_APIMisuseError(ptr);
            case 1: return new APIError_FeeRateTooHigh(ptr);
            case 2: return new APIError_RouteError(ptr);
            case 3: return new APIError_ChannelUnavailable(ptr);
            case 4: return new APIError_MonitorUpdateFailed(ptr);
            case 5: return new APIError_IncompatibleShutdownScript(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.APIError_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the APIError
     */
    clone() {
        const ret = bindings.APIError_clone(this.ptr);
        const ret_hu_conv = APIError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new APIMisuseError-variant APIError
     */
    static constructor_apimisuse_error(err) {
        const ret = bindings.APIError_apimisuse_error(bindings.encodeString(err));
        const ret_hu_conv = APIError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new FeeRateTooHigh-variant APIError
     */
    static constructor_fee_rate_too_high(err, feerate) {
        const ret = bindings.APIError_fee_rate_too_high(bindings.encodeString(err), feerate);
        const ret_hu_conv = APIError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new RouteError-variant APIError
     */
    static constructor_route_error(err) {
        const ret = bindings.APIError_route_error(bindings.encodeString(err));
        const ret_hu_conv = APIError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ChannelUnavailable-variant APIError
     */
    static constructor_channel_unavailable(err) {
        const ret = bindings.APIError_channel_unavailable(bindings.encodeString(err));
        const ret_hu_conv = APIError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new MonitorUpdateFailed-variant APIError
     */
    static constructor_monitor_update_failed() {
        const ret = bindings.APIError_monitor_update_failed();
        const ret_hu_conv = APIError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new IncompatibleShutdownScript-variant APIError
     */
    static constructor_incompatible_shutdown_script(script) {
        const ret = bindings.APIError_incompatible_shutdown_script(script == null ? 0n : CommonBase.get_ptr_of(script));
        const ret_hu_conv = APIError.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, script);
        return ret_hu_conv;
    }
}
/** A APIError of type APIMisuseError */
export class APIError_APIMisuseError extends APIError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const err = bindings.LDKAPIError_APIMisuseError_get_err(ptr);
        const err_conv = bindings.decodeString(err);
        this.err = err_conv;
    }
}
/** A APIError of type FeeRateTooHigh */
export class APIError_FeeRateTooHigh extends APIError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const err = bindings.LDKAPIError_FeeRateTooHigh_get_err(ptr);
        const err_conv = bindings.decodeString(err);
        this.err = err_conv;
        this.feerate = bindings.LDKAPIError_FeeRateTooHigh_get_feerate(ptr);
    }
}
/** A APIError of type RouteError */
export class APIError_RouteError extends APIError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const err = bindings.LDKAPIError_RouteError_get_err(ptr);
        const err_conv = bindings.decodeString(err);
        this.err = err_conv;
    }
}
/** A APIError of type ChannelUnavailable */
export class APIError_ChannelUnavailable extends APIError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const err = bindings.LDKAPIError_ChannelUnavailable_get_err(ptr);
        const err_conv = bindings.decodeString(err);
        this.err = err_conv;
    }
}
/** A APIError of type MonitorUpdateFailed */
export class APIError_MonitorUpdateFailed extends APIError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A APIError of type IncompatibleShutdownScript */
export class APIError_IncompatibleShutdownScript extends APIError {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const script = bindings.LDKAPIError_IncompatibleShutdownScript_get_script(ptr);
        const script_hu_conv = new ShutdownScript(null, script);
        CommonBase.add_ref_from(script_hu_conv, this);
        this.script = script_hu_conv;
    }
}
//# sourceMappingURL=APIError.mjs.map