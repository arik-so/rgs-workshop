import { Hostname } from '../structs/Hostname.mjs';
import { Result_NetAddressDecodeErrorZ } from '../structs/Result_NetAddressDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An address which can be used to connect to a remote peer
 */
export declare class NetAddress extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the NetAddress
     */
    clone(): NetAddress;
    /**
     * Utility method to constructs a new IPv4-variant NetAddress
     */
    static constructor_ipv4(addr: Uint8Array, port: number): NetAddress;
    /**
     * Utility method to constructs a new IPv6-variant NetAddress
     */
    static constructor_ipv6(addr: Uint8Array, port: number): NetAddress;
    /**
     * Utility method to constructs a new OnionV2-variant NetAddress
     */
    static constructor_onion_v2(a: Uint8Array): NetAddress;
    /**
     * Utility method to constructs a new OnionV3-variant NetAddress
     */
    static constructor_onion_v3(ed25519_pubkey: Uint8Array, checksum: number, version: number, port: number): NetAddress;
    /**
     * Utility method to constructs a new Hostname-variant NetAddress
     */
    static constructor_hostname(hostname: Hostname, port: number): NetAddress;
    /**
     * Serialize the NetAddress object into a byte array which can be read by NetAddress_read
     */
    write(): Uint8Array;
    /**
     * Read a NetAddress from a byte array, created by NetAddress_write
     */
    static constructor_read(ser: Uint8Array): Result_NetAddressDecodeErrorZ;
}
/** A NetAddress of type IPv4 */
export declare class NetAddress_IPv4 extends NetAddress {
    /**
     * The 4-byte IPv4 address
     */
    addr: Uint8Array;
    /**
     * The port on which the node is listening
     */
    port: number;
}
/** A NetAddress of type IPv6 */
export declare class NetAddress_IPv6 extends NetAddress {
    /**
     * The 16-byte IPv6 address
     */
    addr: Uint8Array;
    /**
     * The port on which the node is listening
     */
    port: number;
}
/** A NetAddress of type OnionV2 */
export declare class NetAddress_OnionV2 extends NetAddress {
    onion_v2: Uint8Array;
}
/** A NetAddress of type OnionV3 */
export declare class NetAddress_OnionV3 extends NetAddress {
    /**
     * The ed25519 long-term public key of the peer
     */
    ed25519_pubkey: Uint8Array;
    /**
     * The checksum of the pubkey and version, as included in the onion address
     */
    checksum: number;
    /**
     * The version byte, as defined by the Tor Onion v3 spec.
     */
    version: number;
    /**
     * The port on which the node is listening
     */
    port: number;
}
/** A NetAddress of type Hostname */
export declare class NetAddress_Hostname extends NetAddress {
    /**
     * The hostname on which the node is listening.
     */
    hostname: Hostname;
    /**
     * The port on which the node is listening.
     */
    port: number;
}
