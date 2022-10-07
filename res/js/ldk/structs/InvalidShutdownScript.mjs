import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An error occurring when converting from [`Script`] to [`ShutdownScript`].
 */
export class InvalidShutdownScript extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.InvalidShutdownScript_free);
    }
    /**
     * The script that did not meet the requirements from [BOLT #2].
     *
     * [BOLT #2]: https://github.com/lightning/bolts/blob/master/02-peer-protocol.md
     */
    get_script() {
        const ret = bindings.InvalidShutdownScript_get_script(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The script that did not meet the requirements from [BOLT #2].
     *
     * [BOLT #2]: https://github.com/lightning/bolts/blob/master/02-peer-protocol.md
     */
    set_script(val) {
        bindings.InvalidShutdownScript_set_script(this.ptr, bindings.encodeUint8Array(val));
    }
    /**
     * Constructs a new InvalidShutdownScript given each field
     */
    static constructor_new(script_arg) {
        const ret = bindings.InvalidShutdownScript_new(bindings.encodeUint8Array(script_arg));
        const ret_hu_conv = new InvalidShutdownScript(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.InvalidShutdownScript_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the InvalidShutdownScript
     */
    clone() {
        const ret = bindings.InvalidShutdownScript_clone(this.ptr);
        const ret_hu_conv = new InvalidShutdownScript(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=InvalidShutdownScript.mjs.map