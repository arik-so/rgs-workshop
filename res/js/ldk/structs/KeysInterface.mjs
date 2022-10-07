import { ShutdownScript } from '../structs/ShutdownScript.mjs';
import { Result_SecretKeyNoneZ } from '../structs/Result_SecretKeyNoneZ.mjs';
import { Option_ScalarZ } from '../structs/Option_ScalarZ.mjs';
import { Result_SharedSecretNoneZ } from '../structs/Result_SharedSecretNoneZ.mjs';
import { Sign } from '../structs/Sign.mjs';
import { Result_SignDecodeErrorZ } from '../structs/Result_SignDecodeErrorZ.mjs';
import { Result_RecoverableSignatureNoneZ } from '../structs/Result_RecoverableSignatureNoneZ.mjs';
import { CommonBase, UInt5 } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
class LDKKeysInterfaceHolder {
}
/**
 * A trait to describe an object which can get user secrets and key material.
 */
export class KeysInterface extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.KeysInterface_free);
        this.bindings_instance = null;
    }
    /** Creates a new instance of KeysInterface from a given implementation */
    static new_impl(arg) {
        const impl_holder = new LDKKeysInterfaceHolder();
        let structImplementation = {
            get_node_secret(recipient) {
                const ret = arg.get_node_secret(recipient);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            ecdh(recipient, other_key, tweak) {
                const other_key_conv = bindings.decodeUint8Array(other_key);
                const tweak_hu_conv = Option_ScalarZ.constr_from_ptr(tweak);
                CommonBase.add_ref_from(tweak_hu_conv, this);
                const ret = arg.ecdh(recipient, other_key_conv, tweak_hu_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            get_destination_script() {
                const ret = arg.get_destination_script();
                const result = bindings.encodeUint8Array(ret);
                return result;
            },
            get_shutdown_scriptpubkey() {
                const ret = arg.get_shutdown_scriptpubkey();
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            get_channel_signer(inbound, channel_value_satoshis) {
                const ret = arg.get_channel_signer(inbound, channel_value_satoshis);
                const result = ret == null ? 0n : ret.clone_ptr();
                CommonBase.add_ref_from(impl_holder.held, ret);
                return result;
            },
            get_secure_random_bytes() {
                const ret = arg.get_secure_random_bytes();
                const result = bindings.encodeUint8Array(bindings.check_arr_len(ret, 32));
                return result;
            },
            read_chan_signer(reader) {
                const reader_conv = bindings.decodeUint8Array(reader);
                const ret = arg.read_chan_signer(reader_conv);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            sign_invoice(hrp_bytes, invoice_data, receipient) {
                const hrp_bytes_conv = bindings.decodeUint8Array(hrp_bytes);
                const invoice_data_conv_7_len = bindings.getArrayLength(invoice_data);
                const invoice_data_conv_7_arr = new Array(invoice_data_conv_7_len).fill(null);
                for (var h = 0; h < invoice_data_conv_7_len; h++) {
                    const invoice_data_conv_7 = bindings.getU8ArrayElem(invoice_data, h);
                    const invoice_data_conv_7_conv = new UInt5(invoice_data_conv_7);
                    invoice_data_conv_7_arr[h] = invoice_data_conv_7_conv;
                }
                bindings.freeWasmMemory(invoice_data);
                const ret = arg.sign_invoice(hrp_bytes_conv, invoice_data_conv_7_arr, receipient);
                const result = ret == null ? 0n : ret.clone_ptr();
                return result;
            },
            get_inbound_payment_key_material() {
                const ret = arg.get_inbound_payment_key_material();
                const result = bindings.encodeUint8Array(bindings.check_arr_len(ret, 32));
                return result;
            },
        };
        const ptr_idx = bindings.LDKKeysInterface_new(structImplementation);
        impl_holder.held = new KeysInterface(null, ptr_idx[0]);
        impl_holder.held.instance_idx = ptr_idx[1];
        impl_holder.held.bindings_instance = structImplementation;
        return impl_holder.held;
    }
    /**
     * Get node secret key based on the provided [`Recipient`].
     *
     * The node_id/network_key is the public key that corresponds to this secret key.
     *
     * This method must return the same value each time it is called with a given `Recipient`
     * parameter.
     */
    get_node_secret(recipient) {
        const ret = bindings.KeysInterface_get_node_secret(this.ptr, recipient);
        const ret_hu_conv = Result_SecretKeyNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Gets the ECDH shared secret of our [`node secret`] and `other_key`, multiplying by `tweak` if
     * one is provided. Note that this tweak can be applied to `other_key` instead of our node
     * secret, though this is less efficient.
     *
     * [`node secret`]: Self::get_node_secret
     */
    ecdh(recipient, other_key, tweak) {
        const ret = bindings.KeysInterface_ecdh(this.ptr, recipient, bindings.encodeUint8Array(bindings.check_arr_len(other_key, 33)), CommonBase.get_ptr_of(tweak));
        const ret_hu_conv = Result_SharedSecretNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Get a script pubkey which we send funds to when claiming on-chain contestable outputs.
     *
     * This method should return a different value each time it is called, to avoid linking
     * on-chain funds across channels as controlled to the same user.
     */
    get_destination_script() {
        const ret = bindings.KeysInterface_get_destination_script(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Get a script pubkey which we will send funds to when closing a channel.
     *
     * This method should return a different value each time it is called, to avoid linking
     * on-chain funds across channels as controlled to the same user.
     */
    get_shutdown_scriptpubkey() {
        const ret = bindings.KeysInterface_get_shutdown_scriptpubkey(this.ptr);
        const ret_hu_conv = new ShutdownScript(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Get a new set of Sign for per-channel secrets. These MUST be unique even if you
     * restarted with some stale data!
     *
     * This method must return a different value each time it is called.
     */
    get_channel_signer(inbound, channel_value_satoshis) {
        const ret = bindings.KeysInterface_get_channel_signer(this.ptr, inbound, channel_value_satoshis);
        const ret_hu_conv = new Sign(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Gets a unique, cryptographically-secure, random 32 byte value. This is used for encrypting
     * onion packets and for temporary channel IDs. There is no requirement that these be
     * persisted anywhere, though they must be unique across restarts.
     *
     * This method must return a different value each time it is called.
     */
    get_secure_random_bytes() {
        const ret = bindings.KeysInterface_get_secure_random_bytes(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Reads a `Signer` for this `KeysInterface` from the given input stream.
     * This is only called during deserialization of other objects which contain
     * `Sign`-implementing objects (ie `ChannelMonitor`s and `ChannelManager`s).
     * The bytes are exactly those which `<Self::Signer as Writeable>::write()` writes, and
     * contain no versioning scheme. You may wish to include your own version prefix and ensure
     * you've read all of the provided bytes to ensure no corruption occurred.
     */
    read_chan_signer(reader) {
        const ret = bindings.KeysInterface_read_chan_signer(this.ptr, bindings.encodeUint8Array(reader));
        const ret_hu_conv = Result_SignDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Sign an invoice.
     * By parameterizing by the raw invoice bytes instead of the hash, we allow implementors of
     * this trait to parse the invoice and make sure they're signing what they expect, rather than
     * blindly signing the hash.
     * The hrp is ascii bytes, while the invoice data is base32.
     *
     * The secret key used to sign the invoice is dependent on the [`Recipient`].
     */
    sign_invoice(hrp_bytes, invoice_data, receipient) {
        const ret = bindings.KeysInterface_sign_invoice(this.ptr, bindings.encodeUint8Array(hrp_bytes), bindings.encodeUint8Array(invoice_data != null ? bindings.uint5ArrToBytes(invoice_data) : null), receipient);
        const ret_hu_conv = Result_RecoverableSignatureNoneZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
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
    get_inbound_payment_key_material() {
        const ret = bindings.KeysInterface_get_inbound_payment_key_material(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
}
//# sourceMappingURL=KeysInterface.mjs.map