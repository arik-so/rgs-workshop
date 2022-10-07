import { TxOut } from '../structs/TxOut.mjs';
import { SpendableOutputDescriptor } from '../structs/SpendableOutputDescriptor.mjs';
import { InMemorySigner } from '../structs/InMemorySigner.mjs';
import { Result_TransactionNoneZ } from '../structs/Result_TransactionNoneZ.mjs';
import { KeysInterface } from '../structs/KeysInterface.mjs';
import { CommonBase } from './CommonBase.mjs';
/**
 * Simple KeysInterface implementor that takes a 32-byte seed for use as a BIP 32 extended key
 * and derives keys from that.
 *
 * Your node_id is seed/0'
 * ChannelMonitor closes may use seed/1'
 * Cooperative closes may use seed/2'
 * The two close keys may be needed to claim on-chain funds!
 *
 * This struct cannot be used for nodes that wish to support receiving phantom payments;
 * [`PhantomKeysManager`] must be used instead.
 *
 * Note that switching between this struct and [`PhantomKeysManager`] will invalidate any
 * previously issued invoices and attempts to pay previous invoices will fail.
 */
export declare class KeysManager extends CommonBase {
    /**
     * Constructs a KeysManager from a 32-byte seed. If the seed is in some way biased (eg your
     * CSRNG is busted) this may panic (but more importantly, you will possibly lose funds).
     * starting_time isn't strictly required to actually be a time, but it must absolutely,
     * without a doubt, be unique to this instance. ie if you start multiple times with the same
     * seed, starting_time must be unique to each run. Thus, the easiest way to achieve this is to
     * simply use the current time (with very high precision).
     *
     * The seed MUST be backed up safely prior to use so that the keys can be re-created, however,
     * obviously, starting_time should be unique every time you reload the library - it is only
     * used to generate new ephemeral key data (which will be stored by the individual channel if
     * necessary).
     *
     * Note that the seed is required to recover certain on-chain funds independent of
     * ChannelMonitor data, though a current copy of ChannelMonitor data is also required for any
     * channel, and some on-chain during-closing funds.
     *
     * Note that until the 0.1 release there is no guarantee of backward compatibility between
     * versions. Once the library is more fully supported, the docs will be updated to include a
     * detailed description of the guarantee.
     */
    static constructor_new(seed: Uint8Array, starting_time_secs: bigint, starting_time_nanos: number): KeysManager;
    /**
     * Derive an old Sign containing per-channel secrets based on a key derivation parameters.
     *
     * Key derivation parameters are accessible through a per-channel secrets
     * Sign::channel_keys_id and is provided inside DynamicOuputP2WSH in case of
     * onchain output detection for which a corresponding delayed_payment_key must be derived.
     */
    derive_channel_keys(channel_value_satoshis: bigint, params: Uint8Array): InMemorySigner;
    /**
     * Creates a Transaction which spends the given descriptors to the given outputs, plus an
     * output to the given change destination (if sufficient change value remains). The
     * transaction will have a feerate, at least, of the given value.
     *
     * Returns `Err(())` if the output value is greater than the input value minus required fee,
     * if a descriptor was duplicated, or if an output descriptor `script_pubkey`
     * does not match the one we can spend.
     *
     * We do not enforce that outputs meet the dust limit or that any output scripts are standard.
     *
     * May panic if the `SpendableOutputDescriptor`s were not generated by Channels which used
     * this KeysManager or one of the `InMemorySigner` created by this KeysManager.
     */
    spend_spendable_outputs(descriptors: SpendableOutputDescriptor[], outputs: TxOut[], change_destination_script: Uint8Array, feerate_sat_per_1000_weight: number): Result_TransactionNoneZ;
    /**
     * Constructs a new KeysInterface which calls the relevant methods on this_arg.
     * This copies the `inner` pointer in this_arg and thus the returned KeysInterface must be freed before this_arg is
     */
    as_KeysInterface(): KeysInterface;
}
