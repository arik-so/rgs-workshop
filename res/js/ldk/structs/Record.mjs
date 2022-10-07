import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A Record, unit of logging output with Metadata to enable filtering
 * Module_path, file, line to inform on log's source
 */
export class Record extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Record_free);
    }
    /**
     * The verbosity level of the message.
     */
    get_level() {
        const ret = bindings.Record_get_level(this.ptr);
        return ret;
    }
    /**
     * The verbosity level of the message.
     */
    set_level(val) {
        bindings.Record_set_level(this.ptr, val);
    }
    /**
     * The message body.
     */
    get_args() {
        const ret = bindings.Record_get_args(this.ptr);
        const ret_conv = bindings.decodeString(ret);
        return ret_conv;
    }
    /**
     * The message body.
     */
    set_args(val) {
        bindings.Record_set_args(this.ptr, bindings.encodeString(val));
    }
    /**
     * The module path of the message.
     */
    get_module_path() {
        const ret = bindings.Record_get_module_path(this.ptr);
        const ret_conv = bindings.decodeString(ret);
        return ret_conv;
    }
    /**
     * The module path of the message.
     */
    set_module_path(val) {
        bindings.Record_set_module_path(this.ptr, bindings.encodeString(val));
    }
    /**
     * The source file containing the message.
     */
    get_file() {
        const ret = bindings.Record_get_file(this.ptr);
        const ret_conv = bindings.decodeString(ret);
        return ret_conv;
    }
    /**
     * The source file containing the message.
     */
    set_file(val) {
        bindings.Record_set_file(this.ptr, bindings.encodeString(val));
    }
    /**
     * The line containing the message.
     */
    get_line() {
        const ret = bindings.Record_get_line(this.ptr);
        return ret;
    }
    /**
     * The line containing the message.
     */
    set_line(val) {
        bindings.Record_set_line(this.ptr, val);
    }
    clone_ptr() {
        const ret = bindings.Record_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the Record
     */
    clone() {
        const ret = bindings.Record_clone(this.ptr);
        const ret_hu_conv = new Record(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=Record.mjs.map