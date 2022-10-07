import { Result_TxCreationKeysDecodeErrorZ } from '../structs/Result_TxCreationKeysDecodeErrorZ.mjs';
import { Result_TxCreationKeysErrorZ } from '../structs/Result_TxCreationKeysErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * The set of public keys which are used in the creation of one commitment transaction.
 * These are derived from the channel base keys and per-commitment data.
 *
 * A broadcaster key is provided from potential broadcaster of the computed transaction.
 * A countersignatory key is coming from a protocol participant unable to broadcast the
 * transaction.
 *
 * These keys are assumed to be good, either because the code derived them from
 * channel basepoints via the new function, or they were obtained via
 * CommitmentTransaction.trust().keys() because we trusted the source of the
 * pre-calculated keys.
 */
export class TxCreationKeys extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.TxCreationKeys_free);
    }
    /**
     * The broadcaster's per-commitment public key which was used to derive the other keys.
     */
    get_per_commitment_point() {
        const ret = bindings.TxCreationKeys_get_per_commitment_point(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The broadcaster's per-commitment public key which was used to derive the other keys.
     */
    set_per_commitment_point(val) {
        bindings.TxCreationKeys_set_per_commitment_point(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * The revocation key which is used to allow the broadcaster of the commitment
     * transaction to provide their counterparty the ability to punish them if they broadcast
     * an old state.
     */
    get_revocation_key() {
        const ret = bindings.TxCreationKeys_get_revocation_key(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * The revocation key which is used to allow the broadcaster of the commitment
     * transaction to provide their counterparty the ability to punish them if they broadcast
     * an old state.
     */
    set_revocation_key(val) {
        bindings.TxCreationKeys_set_revocation_key(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Broadcaster's HTLC Key
     */
    get_broadcaster_htlc_key() {
        const ret = bindings.TxCreationKeys_get_broadcaster_htlc_key(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Broadcaster's HTLC Key
     */
    set_broadcaster_htlc_key(val) {
        bindings.TxCreationKeys_set_broadcaster_htlc_key(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Countersignatory's HTLC Key
     */
    get_countersignatory_htlc_key() {
        const ret = bindings.TxCreationKeys_get_countersignatory_htlc_key(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Countersignatory's HTLC Key
     */
    set_countersignatory_htlc_key(val) {
        bindings.TxCreationKeys_set_countersignatory_htlc_key(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Broadcaster's Payment Key (which isn't allowed to be spent from for some delay)
     */
    get_broadcaster_delayed_payment_key() {
        const ret = bindings.TxCreationKeys_get_broadcaster_delayed_payment_key(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Broadcaster's Payment Key (which isn't allowed to be spent from for some delay)
     */
    set_broadcaster_delayed_payment_key(val) {
        bindings.TxCreationKeys_set_broadcaster_delayed_payment_key(this.ptr, bindings.encodeUint8Array(bindings.check_arr_len(val, 33)));
    }
    /**
     * Constructs a new TxCreationKeys given each field
     */
    static constructor_new(per_commitment_point_arg, revocation_key_arg, broadcaster_htlc_key_arg, countersignatory_htlc_key_arg, broadcaster_delayed_payment_key_arg) {
        const ret = bindings.TxCreationKeys_new(bindings.encodeUint8Array(bindings.check_arr_len(per_commitment_point_arg, 33)), bindings.encodeUint8Array(bindings.check_arr_len(revocation_key_arg, 33)), bindings.encodeUint8Array(bindings.check_arr_len(broadcaster_htlc_key_arg, 33)), bindings.encodeUint8Array(bindings.check_arr_len(countersignatory_htlc_key_arg, 33)), bindings.encodeUint8Array(bindings.check_arr_len(broadcaster_delayed_payment_key_arg, 33)));
        const ret_hu_conv = new TxCreationKeys(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.TxCreationKeys_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the TxCreationKeys
     */
    clone() {
        const ret = bindings.TxCreationKeys_clone(this.ptr);
        const ret_hu_conv = new TxCreationKeys(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the TxCreationKeys object into a byte array which can be read by TxCreationKeys_read
     */
    write() {
        const ret = bindings.TxCreationKeys_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a TxCreationKeys from a byte array, created by TxCreationKeys_write
     */
    static constructor_read(ser) {
        const ret = bindings.TxCreationKeys_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_TxCreationKeysDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Create per-state keys from channel base points and the per-commitment point.
     * Key set is asymmetric and can't be used as part of counter-signatory set of transactions.
     */
    static constructor_derive_new(per_commitment_point, broadcaster_delayed_payment_base, broadcaster_htlc_base, countersignatory_revocation_base, countersignatory_htlc_base) {
        const ret = bindings.TxCreationKeys_derive_new(bindings.encodeUint8Array(bindings.check_arr_len(per_commitment_point, 33)), bindings.encodeUint8Array(bindings.check_arr_len(broadcaster_delayed_payment_base, 33)), bindings.encodeUint8Array(bindings.check_arr_len(broadcaster_htlc_base, 33)), bindings.encodeUint8Array(bindings.check_arr_len(countersignatory_revocation_base, 33)), bindings.encodeUint8Array(bindings.check_arr_len(countersignatory_htlc_base, 33)));
        const ret_hu_conv = Result_TxCreationKeysErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Generate per-state keys from channel static keys.
     * Key set is asymmetric and can't be used as part of counter-signatory set of transactions.
     */
    static constructor_from_channel_static_keys(per_commitment_point, broadcaster_keys, countersignatory_keys) {
        const ret = bindings.TxCreationKeys_from_channel_static_keys(bindings.encodeUint8Array(bindings.check_arr_len(per_commitment_point, 33)), broadcaster_keys == null ? 0n : CommonBase.get_ptr_of(broadcaster_keys), countersignatory_keys == null ? 0n : CommonBase.get_ptr_of(countersignatory_keys));
        const ret_hu_conv = Result_TxCreationKeysErrorZ.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, broadcaster_keys);
        CommonBase.add_ref_from(ret_hu_conv, countersignatory_keys);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=TxCreationKeys.mjs.map