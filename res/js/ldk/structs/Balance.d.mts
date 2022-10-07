import { CommonBase } from './CommonBase.mjs';
/**
 * Details about the balance(s) available for spending once the channel appears on chain.
 *
 * See [`ChannelMonitor::get_claimable_balances`] for more details on when these will or will not
 * be provided.
 */
export declare class Balance extends CommonBase {
    protected constructor(_dummy: object, ptr: bigint);
    clone_ptr(): bigint;
    /**
     * Creates a copy of the Balance
     */
    clone(): Balance;
    /**
     * Utility method to constructs a new ClaimableOnChannelClose-variant Balance
     */
    static constructor_claimable_on_channel_close(claimable_amount_satoshis: bigint): Balance;
    /**
     * Utility method to constructs a new ClaimableAwaitingConfirmations-variant Balance
     */
    static constructor_claimable_awaiting_confirmations(claimable_amount_satoshis: bigint, confirmation_height: number): Balance;
    /**
     * Utility method to constructs a new ContentiousClaimable-variant Balance
     */
    static constructor_contentious_claimable(claimable_amount_satoshis: bigint, timeout_height: number): Balance;
    /**
     * Utility method to constructs a new MaybeTimeoutClaimableHTLC-variant Balance
     */
    static constructor_maybe_timeout_claimable_htlc(claimable_amount_satoshis: bigint, claimable_height: number): Balance;
    /**
     * Utility method to constructs a new MaybePreimageClaimableHTLC-variant Balance
     */
    static constructor_maybe_preimage_claimable_htlc(claimable_amount_satoshis: bigint, expiry_height: number): Balance;
    /**
     * Utility method to constructs a new CounterpartyRevokedOutputClaimable-variant Balance
     */
    static constructor_counterparty_revoked_output_claimable(claimable_amount_satoshis: bigint): Balance;
    /**
     * Checks if two Balances contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     */
    eq(b: Balance): boolean;
}
/** A Balance of type ClaimableOnChannelClose */
export declare class Balance_ClaimableOnChannelClose extends Balance {
    /**
     * The amount available to claim, in satoshis, excluding the on-chain fees which will be
     * required to do so.
     */
    claimable_amount_satoshis: bigint;
}
/** A Balance of type ClaimableAwaitingConfirmations */
export declare class Balance_ClaimableAwaitingConfirmations extends Balance {
    /**
     * The amount available to claim, in satoshis, possibly excluding the on-chain fees which
     * were spent in broadcasting the transaction.
     */
    claimable_amount_satoshis: bigint;
    /**
     * The height at which an [`Event::SpendableOutputs`] event will be generated for this
     * amount.
     */
    confirmation_height: number;
}
/** A Balance of type ContentiousClaimable */
export declare class Balance_ContentiousClaimable extends Balance {
    /**
     * The amount available to claim, in satoshis, excluding the on-chain fees which will be
     * required to do so.
     */
    claimable_amount_satoshis: bigint;
    /**
     * The height at which the counterparty may be able to claim the balance if we have not
     * done so.
     */
    timeout_height: number;
}
/** A Balance of type MaybeTimeoutClaimableHTLC */
export declare class Balance_MaybeTimeoutClaimableHTLC extends Balance {
    /**
     * The amount potentially available to claim, in satoshis, excluding the on-chain fees
     * which will be required to do so.
     */
    claimable_amount_satoshis: bigint;
    /**
     * The height at which we will be able to claim the balance if our counterparty has not
     * done so.
     */
    claimable_height: number;
}
/** A Balance of type MaybePreimageClaimableHTLC */
export declare class Balance_MaybePreimageClaimableHTLC extends Balance {
    /**
     * The amount potentially available to claim, in satoshis, excluding the on-chain fees
     * which will be required to do so.
     */
    claimable_amount_satoshis: bigint;
    /**
     * The height at which our counterparty will be able to claim the balance if we have not
     * yet received the preimage and claimed it ourselves.
     */
    expiry_height: number;
}
/** A Balance of type CounterpartyRevokedOutputClaimable */
export declare class Balance_CounterpartyRevokedOutputClaimable extends Balance {
    /**
     * The amount, in satoshis, of the output which we can claim.
     *
     * Note that for outputs from HTLC balances this may be excluding some on-chain fees that
     * were already spent.
     */
    claimable_amount_satoshis: bigint;
}
