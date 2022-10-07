import { LockedChannelMonitor } from '../structs/LockedChannelMonitor.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
export class Result_LockedChannelMonitorNoneZ extends CommonBase {
    constructor(_dummy, ptr) {
        super(ptr, bindings.CResult_LockedChannelMonitorNoneZ_free);
    }
    /* @internal */
    static constr_from_ptr(ptr) {
        if (bindings.CResult_LockedChannelMonitorNoneZ_is_ok(ptr)) {
            return new Result_LockedChannelMonitorNoneZ_OK(null, ptr);
        }
        else {
            return new Result_LockedChannelMonitorNoneZ_Err(null, ptr);
        }
    }
    /**
     * Creates a new CResult_LockedChannelMonitorNoneZ in the success state.
     */
    static constructor_ok(o) {
        const ret = bindings.CResult_LockedChannelMonitorNoneZ_ok(o == null ? 0n : CommonBase.get_ptr_of(o));
        const ret_hu_conv = Result_LockedChannelMonitorNoneZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, o);
        // Due to rust's strict-ownership memory model, in some cases we need to "move"
        // an object to pass exclusive ownership to the function being called.
        // In most cases, we avoid ret_hu_conv being visible in GC'd languages by cloning the object
        // at the FFI layer, creating a new object which Rust can claim ownership of
        // However, in some cases (eg here), there is no way to clone an object, and thus
        // we actually have to pass full ownership to Rust.
        // Thus, after ret_hu_conv call, o is reset to null and is now a dummy object.
        CommonBase.set_null_skip_free(o);
        ;
        return ret_hu_conv;
    }
    /**
     * Creates a new CResult_LockedChannelMonitorNoneZ in the error state.
     */
    static constructor_err() {
        const ret = bindings.CResult_LockedChannelMonitorNoneZ_err();
        const ret_hu_conv = Result_LockedChannelMonitorNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Checks if the given object is currently in the success state
     */
    is_ok() {
        const ret = bindings.CResult_LockedChannelMonitorNoneZ_is_ok(this.ptr);
        return ret;
    }
}
export class Result_LockedChannelMonitorNoneZ_OK extends Result_LockedChannelMonitorNoneZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
        const res = bindings.CResult_LockedChannelMonitorNoneZ_get_ok(ptr);
        const res_hu_conv = new LockedChannelMonitor(null, res);
        CommonBase.add_ref_from(res_hu_conv, this);
        this.res = res_hu_conv;
    }
}
export class Result_LockedChannelMonitorNoneZ_Err extends Result_LockedChannelMonitorNoneZ {
    /* @internal */
    constructor(_dummy, ptr) {
        super(_dummy, ptr);
    }
}
//# sourceMappingURL=Result_LockedChannelMonitorNoneZ.mjs.map