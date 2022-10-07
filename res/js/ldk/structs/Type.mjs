import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKTypeHolder {
}
/**
 * Defines a type identifier for sending messages over the wire.
 *
 * Messages implementing this trait specify a type and must be [`Writeable`].
 */
export class Type extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Type_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of Type from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKTypeHolder();
        let structImplementation = {
            type_id() {
                const ret = arg.type_id();
                return ret;
            },
            debug_str() {
                const ret = arg.debug_str();
                const result = bindings.encodeString(ret);
                return result;
            },
            write() {
                const ret = arg.write();
                const result = bindings.encodeUint8Array(ret);
                return result;
            },
        };
        const ptr_idx = bindings.LDKType_new(structImplementation);
        impl_holder.held = new Type(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Returns the type identifying the message payload.
     */
    type_id() {
        const ret = bindings.Type_type_id(this.ptr);
        return ret;
    }
    /**
     * Return a human-readable "debug" string describing this object
     */
    debug_str() {
        const ret = bindings.Type_debug_str(this.ptr);
        const ret_conv = bindings.decodeString(ret);
        return ret_conv;
    }
    /**
     * Serialize the object into a byte array
     */
    write() {
        const ret = bindings.Type_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    clone_ptr() {
        const ret = bindings.Type_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of a Type
     */
    clone() {
        const ret = bindings.Type_clone(this.ptr);
        const ret_hu_conv = new Type(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=Type.mjs.map