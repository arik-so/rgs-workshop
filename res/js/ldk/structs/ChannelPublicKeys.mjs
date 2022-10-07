import { Result_ChannelPublicKeysDecodeErrorZ } from '../structs/Result_ChannelPublicKeysDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * One counterparty's public keys which do not change over the life of a channel.
 */
export class ChannelPublicKeys extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ChannelPublicKeys_free);
    }
    /**
     * The public key which is used to sign all commitment transactions, as it appears in the
     * on-chain channel lock-in 2-of-2 multisig output.
     */
    get_funding_pubkey() {
        const ret = bindings.ChannelPublicKeys_get_funding_pubkey(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The public key which is used to sign all commitment transactions, as it appears in the
     * on-chain channel lock-in 2-of-2 multisig output.
     */
    set_funding_pubkey(val) {
        bindings.ChannelPublicKeys_set_funding_pubkey(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The base point which is used (with derive_public_revocation_key) to derive per-commitment
     * revocation keys. This is combined with the per-commitment-secret generated by the
     * counterparty to create a secret which the counterparty can reveal to revoke previous
     * states.
     */
    get_revocation_basepoint() {
        const ret = bindings.ChannelPublicKeys_get_revocation_basepoint(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The base point which is used (with derive_public_revocation_key) to derive per-commitment
     * revocation keys. This is combined with the per-commitment-secret generated by the
     * counterparty to create a secret which the counterparty can reveal to revoke previous
     * states.
     */
    set_revocation_basepoint(val) {
        bindings.ChannelPublicKeys_set_revocation_basepoint(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The public key on which the non-broadcaster (ie the countersignatory) receives an immediately
     * spendable primary channel balance on the broadcaster's commitment transaction. This key is
     * static across every commitment transaction.
     */
    get_payment_point() {
        const ret = bindings.ChannelPublicKeys_get_payment_point(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The public key on which the non-broadcaster (ie the countersignatory) receives an immediately
     * spendable primary channel balance on the broadcaster's commitment transaction. This key is
     * static across every commitment transaction.
     */
    set_payment_point(val) {
        bindings.ChannelPublicKeys_set_payment_point(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The base point which is used (with derive_public_key) to derive a per-commitment payment
     * public key which receives non-HTLC-encumbered funds which are only available for spending
     * after some delay (or can be claimed via the revocation path).
     */
    get_delayed_payment_basepoint() {
        const ret = bindings.ChannelPublicKeys_get_delayed_payment_basepoint(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The base point which is used (with derive_public_key) to derive a per-commitment payment
     * public key which receives non-HTLC-encumbered funds which are only available for spending
     * after some delay (or can be claimed via the revocation path).
     */
    set_delayed_payment_basepoint(val) {
        bindings.ChannelPublicKeys_set_delayed_payment_basepoint(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The base point which is used (with derive_public_key) to derive a per-commitment public key
     * which is used to encumber HTLC-in-flight outputs.
     */
    get_htlc_basepoint() {
        const ret = bindings.ChannelPublicKeys_get_htlc_basepoint(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The base point which is used (with derive_public_key) to derive a per-commitment public key
     * which is used to encumber HTLC-in-flight outputs.
     */
    set_htlc_basepoint(val) {
        bindings.ChannelPublicKeys_set_htlc_basepoint(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Constructs a new ChannelPublicKeys given each field
     */
    static constructor_new(funding_pubkey_arg, revocation_basepoint_arg, payment_point_arg, delayed_payment_basepoint_arg, htlc_basepoint_arg) {
        const ret = bindings.ChannelPublicKeys_new(bindings.encodeUint8Array(bindings.check_arr_len(funding_pubkey_arg, 33)), bindings.encodeUint8Array(bindings.check_arr_len(revocation_basepoint_arg, 33)), bindings.encodeUint8Array(bindings.check_arr_len(payment_point_arg, 33)), bindings.encodeUint8Array(bindings.check_arr_len(delayed_payment_basepoint_arg, 33)), bindings.encodeUint8Array(bindings.check_arr_len(htlc_basepoint_arg, 33)));
        const ret_hu_conv = new ChannelPublicKeys(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.ChannelPublicKeys_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ChannelPublicKeys
     */
    clone() {
        const ret = bindings.ChannelPublicKeys_clone(this.ptr);
        const ret_hu_conv = new ChannelPublicKeys(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ChannelPublicKeys object into a byte array which can be read by ChannelPublicKeys_read
     */
    write() {
        const ret = bindings.ChannelPublicKeys_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ChannelPublicKeys from a byte array, created by ChannelPublicKeys_write
     */
    static constructor_read(ser) {
        const ret = bindings.ChannelPublicKeys_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ChannelPublicKeysDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=ChannelPublicKeys.mjs.map