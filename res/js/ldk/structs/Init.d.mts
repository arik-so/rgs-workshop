import { InitFeatures } from '../structs/InitFeatures.mjs';
import { Option_NetAddressZ } from '../structs/Option_NetAddressZ.mjs';
import { Result_InitDecodeErrorZ } from '../structs/Result_InitDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * An init message to be sent or received from a peer
 */
export declare class Init extends CommonBase {
    /**
     * The relevant features which the sender supports
     */
    get_features(): InitFeatures;
    /**
     * The relevant features which the sender supports
     */
    set_features(val: InitFeatures): void;
    /**
     * The receipient's network address. This adds the option to report a remote IP address
     * back to a connecting peer using the init message. A node can decide to use that information
     * to discover a potential update to its public IPv4 address (NAT) and use
     * that for a node_announcement update message containing the new address.
     */
    get_remote_network_address(): Option_NetAddressZ;
    /**
     * The receipient's network address. This adds the option to report a remote IP address
     * back to a connecting peer using the init message. A node can decide to use that information
     * to discover a potential update to its public IPv4 address (NAT) and use
     * that for a node_announcement update message containing the new address.
     */
    set_remote_network_address(val: Option_NetAddressZ): void;
    /**
     * Constructs a new Init given each field
     */
    static constructor_new(features_arg: InitFeatures, remote_network_address_arg: Option_NetAddressZ): Init;
    clone_ptr(): bigint;
    /**
     * Creates a copy of the Init
     */
    clone(): Init;
    /**
     * Serialize the Init object into a byte array which can be read by Init_read
     */
    write(): Uint8Array;
    /**
     * Read a Init from a byte array, created by Init_write
     */
    static constructor_read(ser: Uint8Array): Result_InitDecodeErrorZ;
}
