import { InitFeatures } from '../structs/InitFeatures.mjs';
import { Option_NetAddressZ } from '../structs/Option_NetAddressZ.mjs';
import { Result_InitDecodeErrorZ } from '../structs/Result_InitDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An init message to be sent or received from a peer
 */
export class Init extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.Init_free);
    }
    /**
     * The relevant features which the sender supports
     */
    get_features() {
        const ret = bindings.Init_get_features(this.ptr);
        const ret_hu_conv = new InitFeatures(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The relevant features which the sender supports
     */
    set_features(val) {
        bindings.Init_set_features(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * The receipient's network address. This adds the option to report a remote IP address
     * back to a connecting peer using the init message. A node can decide to use that information
     * to discover a potential update to its public IPv4 address (NAT) and use
     * that for a node_announcement update message containing the new address.
     */
    get_remote_network_address() {
        const ret = bindings.Init_get_remote_network_address(this.ptr);
        const ret_hu_conv = Option_NetAddressZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * The receipient's network address. This adds the option to report a remote IP address
     * back to a connecting peer using the init message. A node can decide to use that information
     * to discover a potential update to its public IPv4 address (NAT) and use
     * that for a node_announcement update message containing the new address.
     */
    set_remote_network_address(val) {
        bindings.Init_set_remote_network_address(this.ptr, CommonBase.get_ptr_of(val));
    }
    /**
     * Constructs a new Init given each field
     */
    static constructor_new(features_arg, remote_network_address_arg) {
        const ret = bindings.Init_new(features_arg == null ? 0n : CommonBase.get_ptr_of(features_arg), CommonBase.get_ptr_of(remote_network_address_arg));
        const ret_hu_conv = new Init(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, features_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.Init_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the Init
     */
    clone() {
        const ret = bindings.Init_clone(this.ptr);
        const ret_hu_conv = new Init(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the Init object into a byte array which can be read by Init_read
     */
    write() {
        const ret = bindings.Init_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a Init from a byte array, created by Init_write
     */
    static constructor_read(ser) {
        const ret = bindings.Init_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_InitDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=Init.mjs.map