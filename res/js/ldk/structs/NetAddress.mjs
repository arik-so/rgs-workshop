import { Hostname } from '../structs/Hostname.mjs';
import { Result_NetAddressDecodeErrorZ } from '../structs/Result_NetAddressDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * An address which can be used to connect to a remote peer
 */
export class NetAddress extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.NetAddress_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKNetAddress_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new NetAddress_IPv4(ptr);
            case 1: return new NetAddress_IPv6(ptr);
            case 2: return new NetAddress_OnionV2(ptr);
            case 3: return new NetAddress_OnionV3(ptr);
            case 4: return new NetAddress_Hostname(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.NetAddress_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the NetAddress
     */
    clone() {
        const ret = bindings.NetAddress_clone(this.ptr);
        const ret_hu_conv = NetAddress.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new IPv4-variant NetAddress
     */
    static constructor_ipv4(addr, port) {
        const ret = bindings.NetAddress_ipv4(bindings.encodeUint8Array(bindings.check_arr_len(addr, 4)), port);
        const ret_hu_conv = NetAddress.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new IPv6-variant NetAddress
     */
    static constructor_ipv6(addr, port) {
        const ret = bindings.NetAddress_ipv6(bindings.encodeUint8Array(bindings.check_arr_len(addr, 16)), port);
        const ret_hu_conv = NetAddress.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new OnionV2-variant NetAddress
     */
    static constructor_onion_v2(a) {
        const ret = bindings.NetAddress_onion_v2(bindings.encodeUint8Array(bindings.check_arr_len(a, 12)));
        const ret_hu_conv = NetAddress.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new OnionV3-variant NetAddress
     */
    static constructor_onion_v3(ed25519_pubkey, checksum, version, port) {
        const ret = bindings.NetAddress_onion_v3(bindings.encodeUint8Array(bindings.check_arr_len(ed25519_pubkey, 32)), checksum, version, port);
        const ret_hu_conv = NetAddress.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new Hostname-variant NetAddress
     */
    static constructor_hostname(hostname, port) {
        const ret = bindings.NetAddress_hostname(hostname == null ? 0n : CommonBase.get_ptr_of(hostname), port);
        const ret_hu_conv = NetAddress.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, hostname);
        return ret_hu_conv;
    }
    /**
     * Serialize the NetAddress object into a byte array which can be read by NetAddress_read
     */
    write() {
        const ret = bindings.NetAddress_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a NetAddress from a byte array, created by NetAddress_write
     */
    static constructor_read(ser) {
        const ret = bindings.NetAddress_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_NetAddressDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
/** A NetAddress of type IPv4 */
export class NetAddress_IPv4 extends NetAddress {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const addr = bindings.LDKNetAddress_IPv4_get_addr(ptr);
        const addr_conv = bindings.decodeUint8Array(addr);
        this.addr = addr_conv;
        this.port = bindings.LDKNetAddress_IPv4_get_port(ptr);
    }
}
/** A NetAddress of type IPv6 */
export class NetAddress_IPv6 extends NetAddress {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const addr = bindings.LDKNetAddress_IPv6_get_addr(ptr);
        const addr_conv = bindings.decodeUint8Array(addr);
        this.addr = addr_conv;
        this.port = bindings.LDKNetAddress_IPv6_get_port(ptr);
    }
}
/** A NetAddress of type OnionV2 */
export class NetAddress_OnionV2 extends NetAddress {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const onion_v2 = bindings.LDKNetAddress_OnionV2_get_onion_v2(ptr);
        const onion_v2_conv = bindings.decodeUint8Array(onion_v2);
        this.onion_v2 = onion_v2_conv;
    }
}
/** A NetAddress of type OnionV3 */
export class NetAddress_OnionV3 extends NetAddress {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const ed25519_pubkey = bindings.LDKNetAddress_OnionV3_get_ed25519_pubkey(ptr);
        const ed25519_pubkey_conv = bindings.decodeUint8Array(ed25519_pubkey);
        this.ed25519_pubkey = ed25519_pubkey_conv;
        this.checksum = bindings.LDKNetAddress_OnionV3_get_checksum(ptr);
        this.version = bindings.LDKNetAddress_OnionV3_get_version(ptr);
        this.port = bindings.LDKNetAddress_OnionV3_get_port(ptr);
    }
}
/** A NetAddress of type Hostname */
export class NetAddress_Hostname extends NetAddress {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        const hostname = bindings.LDKNetAddress_Hostname_get_hostname(ptr);
        const hostname_hu_conv = new Hostname(null, hostname);
        CommonBase.add_ref_from(hostname_hu_conv, this);
        this.hostname = hostname_hu_conv;
        this.port = bindings.LDKNetAddress_Hostname_get_port(ptr);
    }
}
//# sourceMappingURL=NetAddress.mjs.map