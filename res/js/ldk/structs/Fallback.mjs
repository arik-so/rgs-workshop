import { CommonBase, UInt5 } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Fallback address in case no LN payment is possible
 */
export class Fallback extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.Fallback_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKFallback_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new Fallback_SegWitProgram(ptr);
            case 1: return new Fallback_PubKeyHash(ptr);
            case 2: return new Fallback_ScriptHash(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.Fallback_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the Fallback
     */
    clone() {
        const ret = bindings.Fallback_clone(this.ptr);
        const ret_hu_conv = Fallback.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new SegWitProgram-variant Fallback
     */
    static constructor_seg_wit_program(version, program) {
        const ret = bindings.Fallback_seg_wit_program(version.getVal(), bindings.encodeUint8Array(program));
        const ret_hu_conv = Fallback.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new PubKeyHash-variant Fallback
     */
    static constructor_pub_key_hash(a) {
        const ret = bindings.Fallback_pub_key_hash(bindings.encodeUint8Array(bindings.check_arr_len(a, 20)));
        const ret_hu_conv = Fallback.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ScriptHash-variant Fallback
     */
    static constructor_script_hash(a) {
        const ret = bindings.Fallback_script_hash(bindings.encodeUint8Array(bindings.check_arr_len(a, 20)));
        const ret_hu_conv = Fallback.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Checks if two Fallbacks contain equal inner contents.
     */
    hash() {
        const ret = bindings.Fallback_hash(this.ptr);
        return ret;
    }
    /**
     * Checks if two Fallbacks contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     */
    eq(b) {
        const ret = bindings.Fallback_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        return ret;
    }
}
/** A Fallback of type SegWitProgram */
export class Fallback_SegWitProgram extends Fallback {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const version = bindings.LDKFallback_SegWitProgram_get_version(ptr);
        const version_conv = new UInt5(version);
        this.version = version_conv;
        const program = bindings.LDKFallback_SegWitProgram_get_program(ptr);
        const program_conv = bindings.decodeUint8Array(program);
        this.program = program_conv;
    }
}
/** A Fallback of type PubKeyHash */
export class Fallback_PubKeyHash extends Fallback {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const pub_key_hash = bindings.LDKFallback_PubKeyHash_get_pub_key_hash(ptr);
        const pub_key_hash_conv = bindings.decodeUint8Array(pub_key_hash);
        this.pub_key_hash = pub_key_hash_conv;
    }
}
/** A Fallback of type ScriptHash */
export class Fallback_ScriptHash extends Fallback {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const script_hash = bindings.LDKFallback_ScriptHash_get_script_hash(ptr);
        const script_hash_conv = bindings.decodeUint8Array(script_hash);
        this.script_hash = script_hash_conv;
    }
}
//# sourceMappingURL=Fallback.mjs.map