import { Result_ShutdownScriptDecodeErrorZ } from '../structs/Result_ShutdownScriptDecodeErrorZ.mjs';
import { Result_ShutdownScriptInvalidShutdownScriptZ } from '../structs/Result_ShutdownScriptInvalidShutdownScriptZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * A script pubkey for shutting down a channel as defined by [BOLT #2].
 *
 * [BOLT #2]: https://github.com/lightning/bolts/blob/master/02-peer-protocol.md
 */
export class ShutdownScript extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.ShutdownScript_free);
    }
    clone_ptr() {
        const ret = bindings.ShutdownScript_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the ShutdownScript
     */
    clone() {
        const ret = bindings.ShutdownScript_clone(this.ptr);
        const ret_hu_conv = new ShutdownScript(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the ShutdownScript object into a byte array which can be read by ShutdownScript_read
     */
    write() {
        const ret = bindings.ShutdownScript_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a ShutdownScript from a byte array, created by ShutdownScript_write
     */
    static constructor_read(ser) {
        const ret = bindings.ShutdownScript_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_ShutdownScriptDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Generates a P2WPKH script pubkey from the given [`WPubkeyHash`].
     */
    static constructor_new_p2wpkh(pubkey_hash) {
        const ret = bindings.ShutdownScript_new_p2wpkh(bindings.encodeUint8Array(bindings.check_arr_len(pubkey_hash, 20)));
        const ret_hu_conv = new ShutdownScript(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Generates a P2WSH script pubkey from the given [`WScriptHash`].
     */
    static constructor_new_p2wsh(script_hash) {
        const ret = bindings.ShutdownScript_new_p2wsh(bindings.encodeUint8Array(bindings.check_arr_len(script_hash, 32)));
        const ret_hu_conv = new ShutdownScript(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Generates a witness script pubkey from the given segwit version and program.
     *
     * Note for version-zero witness scripts you must use [`ShutdownScript::new_p2wpkh`] or
     * [`ShutdownScript::new_p2wsh`] instead.
     *
     * # Errors
     *
     * This function may return an error if `program` is invalid for the segwit `version`.
     */
    static constructor_new_witness_program(version, program) {
        const ret = bindings.ShutdownScript_new_witness_program(version.getVal(), bindings.encodeUint8Array(program));
        const ret_hu_conv = Result_ShutdownScriptInvalidShutdownScriptZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
    /**
     * Converts the shutdown script into the underlying [`Script`].
     */
    into_inner() {
        const ret = bindings.ShutdownScript_into_inner(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Returns the [`PublicKey`] used for a P2WPKH shutdown script if constructed directly from it.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    as_legacy_pubkey() {
        const ret = bindings.ShutdownScript_as_legacy_pubkey(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Returns whether the shutdown script is compatible with the features as defined by BOLT #2.
     *
     * Specifically, checks for compliance with feature `option_shutdown_anysegwit`.
     */
    is_compatible(features) {
        const ret = bindings.ShutdownScript_is_compatible(this.ptr, features == null ? 0n : CommonBase.get_ptr_of(features));
        CommonBase.add_ref_from(this, features);
        return ret;
    }
}
//# sourceMappingURL=ShutdownScript.mjs.map