import { Result_NodeIdDecodeErrorZ } from '../structs/Result_NodeIdDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Represents the compressed public key of a node
 */
export class NodeId extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.NodeId_free);
    }
    clone_ptr() {
        const ret = bindings.NodeId_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the NodeId
     */
    clone() {
        const ret = bindings.NodeId_clone(this.ptr);
        const ret_hu_conv = new NodeId(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Create a new NodeId from a public key
     */
    static constructor_from_pubkey(pubkey) {
        const ret = bindings.NodeId_from_pubkey(bindings.encodeUint8Array(bindings.check_arr_len(pubkey, 33)));
        const ret_hu_conv = new NodeId(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Get the public key slice from this NodeId
     */
    as_slice() {
        const ret = bindings.NodeId_as_slice(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Checks if two NodeIds contain equal inner contents.
     */
    hash() {
        const ret = bindings.NodeId_hash(this.ptr);
        return ret;
    }
    /**
     * Serialize the NodeId object into a byte array which can be read by NodeId_read
     */
    write() {
        const ret = bindings.NodeId_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a NodeId from a byte array, created by NodeId_write
     */
    static constructor_read(ser) {
        const ret = bindings.NodeId_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_NodeIdDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=NodeId.mjs.map