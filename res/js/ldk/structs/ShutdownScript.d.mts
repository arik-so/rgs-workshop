import { Result_ShutdownScriptDecodeErrorZ } from '../structs/Result_ShutdownScriptDecodeErrorZ.mjs';
import { Result_ShutdownScriptInvalidShutdownScriptZ } from '../structs/Result_ShutdownScriptInvalidShutdownScriptZ.mjs';
import { InitFeatures } from '../structs/InitFeatures.mjs';
import { CommonBase, WitnessVersion } from './CommonBase.mjs';
/**
 * A script pubkey for shutting down a channel as defined by [BOLT #2].
 *
 * [BOLT #2]: https://github.com/lightning/bolts/blob/master/02-peer-protocol.md
 */
export declare class ShutdownScript extends CommonBase {
    clone_ptr(): bigint;
    /**
     * Creates a copy of the ShutdownScript
     */
    clone(): ShutdownScript;
    /**
     * Serialize the ShutdownScript object into a byte array which can be read by ShutdownScript_read
     */
    write(): Uint8Array;
    /**
     * Read a ShutdownScript from a byte array, created by ShutdownScript_write
     */
    static constructor_read(ser: Uint8Array): Result_ShutdownScriptDecodeErrorZ;
    /**
     * Generates a P2WPKH script pubkey from the given [`WPubkeyHash`].
     */
    static constructor_new_p2wpkh(pubkey_hash: Uint8Array): ShutdownScript;
    /**
     * Generates a P2WSH script pubkey from the given [`WScriptHash`].
     */
    static constructor_new_p2wsh(script_hash: Uint8Array): ShutdownScript;
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
    static constructor_new_witness_program(version: WitnessVersion, program: Uint8Array): Result_ShutdownScriptInvalidShutdownScriptZ;
    /**
     * Converts the shutdown script into the underlying [`Script`].
     */
    into_inner(): Uint8Array;
    /**
     * Returns the [`PublicKey`] used for a P2WPKH shutdown script if constructed directly from it.
     *
     * Note that the return value (or a relevant inner pointer) may be NULL or all-0s to represent None
     */
    as_legacy_pubkey(): Uint8Array;
    /**
     * Returns whether the shutdown script is compatible with the features as defined by BOLT #2.
     *
     * Specifically, checks for compliance with feature `option_shutdown_anysegwit`.
     */
    is_compatible(features: InitFeatures): boolean;
}
