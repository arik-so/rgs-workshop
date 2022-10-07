import { Result_NodeAliasDecodeErrorZ } from '../structs/Result_NodeAliasDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A user-defined name for a node, which may be used when displaying the node in a graph.
 *
 * Since node aliases are provided by third parties, they are a potential avenue for injection
 * attacks. Care must be taken when processing.
 */
export class NodeAlias extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.NodeAlias_free);
    }
    get_a() {
        const ret = bindings.NodeAlias_get_a(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    set_a(val) {
        bindings.NodeAlias_set_a(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 32)));
    }
    /**
     * Constructs a new NodeAlias given each field
     */
    static constructor_new(a_arg) {
        const ret = bindings.NodeAlias_new(bindings.encodeUint8Array(bindings.check_arr_len(a_arg, 32)));
        const ret_hu_conv = new NodeAlias(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.NodeAlias_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the NodeAlias
     */
    clone() {
        const ret = bindings.NodeAlias_clone(this.ptr);
        const ret_hu_conv = new NodeAlias(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the NodeAlias object into a byte array which can be read by NodeAlias_read
     */
    write() {
        const ret = bindings.NodeAlias_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a NodeAlias from a byte array, created by NodeAlias_write
     */
    static constructor_read(ser) {
        const ret = bindings.NodeAlias_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_NodeAliasDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=NodeAlias.mjs.map