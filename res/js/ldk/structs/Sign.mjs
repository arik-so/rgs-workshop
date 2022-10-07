import { BaseSign } from '../structs/BaseSign.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKSignHolder {
}
/**
 * A cloneable signer.
 *
 * Although we require signers to be cloneable, it may be useful for developers to be able to use
 * signers in an un-sized way, for example as `dyn BaseSign`. Therefore we separate the Clone trait,
 * which implies Sized, into this derived trait.
 */
export class Sign extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Sign_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of Sign from a given implementation */
    static new_impl(arg, baseSign_impl, pubkeys) {
        const impl_holder = new LDKSignHolder();
        let structImplementation = {
            write() {
                const ret = arg.write();
                const result = bindings.encodeUint8Array(ret);
                return result;
            },
        };
        const baseSign = BaseSign.new_impl(baseSign_impl, pubkeys);
        const ptr_idx = bindings.LDKSign_new(structImplementation, baseSign.instance_idx, pubkeys == null ? 0n : pubkeys.clone_ptr());
        impl_holder.held = new Sign(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        impl_holder.held.ptrs_to.push(baseSign);
        return impl_holder.held;
    }
    /**
     * Serialize the object into a byte array
     */
    write() {
        const ret = bindings.Sign_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    clone_ptr() {
        const ret = bindings.Sign_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of a Sign
     */
    clone() {
        const ret = bindings.Sign_clone(this.ptr);
        const ret_hu_conv = new Sign(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=Sign.mjs.map