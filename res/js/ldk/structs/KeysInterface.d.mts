import { Recipient } from '../enums/Recipient.mjs';
import { ShutdownScript } from '../structs/ShutdownScript.mjs';
import { Result_SecretKeyNoneZ } from '../structs/Result_SecretKeyNoneZ.mjs';
import { Option_ScalarZ } from '../structs/Option_ScalarZ.mjs';
import { Result_SharedSecretNoneZ } from '../structs/Result_SharedSecretNoneZ.mjs';
import { Sign } from '../structs/Sign.mjs';
import { Result_SignDecodeErrorZ } from '../structs/Result_SignDecodeErrorZ.mjs';
import { Result_RecoverableSignatureNoneZ } from '../structs/Result_RecoverableSignatureNoneZ.mjs';
import { CommonBase, UInt5 } from './CommonBase.mjs';
/** An implementation of KeysInterface */
export interface KeysInterfaceInterface {
    /**Get node secret key based on the provided [`Recipient`].
     *
     * The node_id/network_key is the public key that corresponds to this secret key.
     *
     * This method must return the same value each time it is called with a given `Recipient`
     * parameter.
     */
    get_node_secret(recipient: Recipient): Result_SecretKeyNoneZ;
    /**Gets the ECDH shared secret of our [`node secret`] and `other_key`, multiplying by `tweak` if
     * one is provided. Note that this tweak can be applied to `other_key` instead of our node
     * secret, though this is less efficient.
     *
     * [`node secret`]: Self::get_node_secret
     */
    ecdh(recipient: Recipient, other_key: Uint8Array, tweak: Option_ScalarZ): Result_SharedSecretNoneZ;
    /**Get a script pubkey which we send funds to when claiming on-chain contestable outputs.
     *
     * This method should return a different value each time it is called, to avoid linking
     * on-chain funds across channels as controlled to the same user.
     */
    get_destination_script(): Uint8Array;
    /**Get a script pubkey which we will send funds to when closing a channel.
     *
     * This method should return a different value each time it is called, to avoid linking
     * on-chain funds across channels as controlled to the same user.
     */
    get_shutdown_scriptpubkey(): ShutdownScript;
    /**Get a new set of Sign for per-channel secrets. These MUST be unique even if you
     * restarted with some stale data!
     *
     * This method must return a different value each time it is called.
     */
    get_channel_signer(inbound: boolean, channel_value_satoshis: bigint): Sign;
    /**Gets a unique, cryptographically-secure, random 32 byte value. This is used for encrypting
     * onion packets and for temporary channel IDs. There is no requirement that these be
     * persisted anywhere, though they must be unique across restarts.
     *
     * This method must return a different value each time it is called.
     */
    get_secure_random_bytes(): Uint8Array;
    /**Reads a `Signer` for this `KeysInterface` from the given input stream.
     * This is only called during deserialization of other objects which contain
     * `Sign`-implementing objects (ie `ChannelMonitor`s and `ChannelManager`s).
     * The bytes are exactly those which `<Self::Signer as Writeable>::write()` writes, and
     * contain no versioning scheme. You may wish to include your own version prefix and ensure
     * you've read all of the provided bytes to ensure no corruption occurred.
     */
    read_chan_signer(reader: Uint8Array): Result_SignDecodeErrorZ;
    /**Sign an invoice.
     * By parameterizing by the raw invoice bytes instead of the hash, we allow implementors of
     * this trait to parse the invoice and make sure they're signing what they expect, rather than
     * blindly signing the hash.
     * The hrp is ascii bytes, while the invoice data is base32.
     *
     * The secret key used to sign the invoice is dependent on the [`Recipient`].
     */
    sign_invoice(hrp_bytes: Uint8Array, invoice_data: UInt5[], receipient: Recipient): Result_RecoverableSignatureNoneZ;
    /**Get secret key material as bytes for use in encrypting and decrypting inbound payment data.
     *
     * If the implementor of this trait supports [phantom node payments], then every node that is
     * intended to be included in the phantom invoice route hints must return the same value from
     * this method.
     *
     * This method must return the same value each time it is called.
     *
     * [phantom node payments]: PhantomKeysManager
     */
    get_inbound_payment_key_material(): Uint8Array;
}
/**
 * A trait to describe an object which can get user secrets and key material.
 */
export declare class KeysInterface extends CommonBase {
    /** Creates a new instance of KeysInterface from a given implementation */
    static new_impl(arg: KeysInterfaceInterface): KeysInterface;
    /**
     * Get node secret key based on the provided [`Recipient`].
     *
     * The node_id/network_key is the public key that corresponds to this secret key.
     *
     * This method must return the same value each time it is called with a given `Recipient`
     * parameter.
     */
    get_node_secret(recipient: Recipient): Result_SecretKeyNoneZ;
    /**
     * Gets the ECDH shared secret of our [`node secret`] and `other_key`, multiplying by `tweak` if
     * one is provided. Note that this tweak can be applied to `other_key` instead of our node
     * secret, though this is less efficient.
     *
     * [`node secret`]: Self::get_node_secret
     */
    ecdh(recipient: Recipient, other_key: Uint8Array, tweak: Option_ScalarZ): Result_SharedSecretNoneZ;
    /**
     * Get a script pubkey which we send funds to when claiming on-chain contestable outputs.
     *
     * This method should return a different value each time it is called, to avoid linking
     * on-chain funds across channels as controlled to the same user.
     */
    get_destination_script(): Uint8Array;
    /**
     * Get a script pubkey which we will send funds to when closing a channel.
     *
     * This method should return a different value each time it is called, to avoid linking
     * on-chain funds across channels as controlled to the same user.
     */
    get_shutdown_scriptpubkey(): ShutdownScript;
    /**
     * Get a new set of Sign for per-channel secrets. These MUST be unique even if you
     * restarted with some stale data!
     *
     * This method must return a different value each time it is called.
     */
    get_channel_signer(inbound: boolean, channel_value_satoshis: bigint): Sign;
    /**
     * Gets a unique, cryptographically-secure, random 32 byte value. This is used for encrypting
     * onion packets and for temporary channel IDs. There is no requirement that these be
     * persisted anywhere, though they must be unique across restarts.
     *
     * This method must return a different value each time it is called.
     */
    get_secure_random_bytes(): Uint8Array;
    /**
     * Reads a `Signer` for this `KeysInterface` from the given input stream.
     * This is only called during deserialization of other objects which contain
     * `Sign`-implementing objects (ie `ChannelMonitor`s and `ChannelManager`s).
     * The bytes are exactly those which `<Self::Signer as Writeable>::write()` writes, and
     * contain no versioning scheme. You may wish to include your own version prefix and ensure
     * you've read all of the provided bytes to ensure no corruption occurred.
     */
    read_chan_signer(reader: Uint8Array): Result_SignDecodeErrorZ;
    /**
     * Sign an invoice.
     * By parameterizing by the raw invoice bytes instead of the hash, we allow implementors of
     * this trait to parse the invoice and make sure they're signing what they expect, rather than
     * blindly signing the hash.
     * The hrp is ascii bytes, while the invoice data is base32.
     *
     * The secret key used to sign the invoice is dependent on the [`Recipient`].
     */
    sign_invoice(hrp_bytes: Uint8Array, invoice_data: UInt5[], receipient: Recipient): Result_RecoverableSignatureNoneZ;
    /**
     * Get secret key material as bytes for use in encrypting and decrypting inbound payment data.
     *
     * If the implementor of this trait supports [phantom node payments], then every node that is
     * intended to be included in the phantom invoice route hints must return the same value from
     * this method.
     *
     * This method must return the same value each time it is called.
     *
     * [phantom node payments]: PhantomKeysManager
     */
    get_inbound_payment_key_material(): Uint8Array;
}
