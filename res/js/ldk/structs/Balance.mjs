import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Details about the balance(s) available for spending once the channel appears on chain.
 *
 * See [`ChannelMonitor::get_claimable_balances`] for more details on when these will or will not
 * be provided.
 */
export class Balance extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.Balance_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKBalance_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new Balance_ClaimableOnChannelClose(ptr);
            case 1: return new Balance_ClaimableAwaitingConfirmations(ptr);
            case 2: return new Balance_ContentiousClaimable(ptr);
            case 3: return new Balance_MaybeTimeoutClaimableHTLC(ptr);
            case 4: return new Balance_MaybePreimageClaimableHTLC(ptr);
            case 5: return new Balance_CounterpartyRevokedOutputClaimable(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.Balance_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the Balance
     */
    clone() {
        const ret = bindings.Balance_clone(this.ptr);
        const ret_hu_conv = Balance.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ClaimableOnChannelClose-variant Balance
     */
    static constructor_claimable_on_channel_close(claimable_amount_satoshis) {
        const ret = bindings.Balance_claimable_on_channel_close(claimable_amount_satoshis);
        const ret_hu_conv = Balance.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ClaimableAwaitingConfirmations-variant Balance
     */
    static constructor_claimable_awaiting_confirmations(claimable_amount_satoshis, confirmation_height) {
        const ret = bindings.Balance_claimable_awaiting_confirmations(claimable_amount_satoshis, confirmation_height);
        const ret_hu_conv = Balance.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ContentiousClaimable-variant Balance
     */
    static constructor_contentious_claimable(claimable_amount_satoshis, timeout_height) {
        const ret = bindings.Balance_contentious_claimable(claimable_amount_satoshis, timeout_height);
        const ret_hu_conv = Balance.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new MaybeTimeoutClaimableHTLC-variant Balance
     */
    static constructor_maybe_timeout_claimable_htlc(claimable_amount_satoshis, claimable_height) {
        const ret = bindings.Balance_maybe_timeout_claimable_htlc(claimable_amount_satoshis, claimable_height);
        const ret_hu_conv = Balance.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new MaybePreimageClaimableHTLC-variant Balance
     */
    static constructor_maybe_preimage_claimable_htlc(claimable_amount_satoshis, expiry_height) {
        const ret = bindings.Balance_maybe_preimage_claimable_htlc(claimable_amount_satoshis, expiry_height);
        const ret_hu_conv = Balance.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new CounterpartyRevokedOutputClaimable-variant Balance
     */
    static constructor_counterparty_revoked_output_claimable(claimable_amount_satoshis) {
        const ret = bindings.Balance_counterparty_revoked_output_claimable(claimable_amount_satoshis);
        const ret_hu_conv = Balance.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Checks if two Balances contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     */
    eq(b) {
        const ret = bindings.Balance_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        return ret;
    }
}
/** A Balance of type ClaimableOnChannelClose */
export class Balance_ClaimableOnChannelClose extends Balance {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.claimable_amount_satoshis = bindings.LDKBalance_ClaimableOnChannelClose_get_claimable_amount_satoshis(ptr);
    }
}
/** A Balance of type ClaimableAwaitingConfirmations */
export class Balance_ClaimableAwaitingConfirmations extends Balance {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.claimable_amount_satoshis = bindings.LDKBalance_ClaimableAwaitingConfirmations_get_claimable_amount_satoshis(ptr);
        this.confirmation_height = bindings.LDKBalance_ClaimableAwaitingConfirmations_get_confirmation_height(ptr);
    }
}
/** A Balance of type ContentiousClaimable */
export class Balance_ContentiousClaimable extends Balance {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.claimable_amount_satoshis = bindings.LDKBalance_ContentiousClaimable_get_claimable_amount_satoshis(ptr);
        this.timeout_height = bindings.LDKBalance_ContentiousClaimable_get_timeout_height(ptr);
    }
}
/** A Balance of type MaybeTimeoutClaimableHTLC */
export class Balance_MaybeTimeoutClaimableHTLC extends Balance {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.claimable_amount_satoshis = bindings.LDKBalance_MaybeTimeoutClaimableHTLC_get_claimable_amount_satoshis(ptr);
        this.claimable_height = bindings.LDKBalance_MaybeTimeoutClaimableHTLC_get_claimable_height(ptr);
    }
}
/** A Balance of type MaybePreimageClaimableHTLC */
export class Balance_MaybePreimageClaimableHTLC extends Balance {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.claimable_amount_satoshis = bindings.LDKBalance_MaybePreimageClaimableHTLC_get_claimable_amount_satoshis(ptr);
        this.expiry_height = bindings.LDKBalance_MaybePreimageClaimableHTLC_get_expiry_height(ptr);
    }
}
/** A Balance of type CounterpartyRevokedOutputClaimable */
export class Balance_CounterpartyRevokedOutputClaimable extends Balance {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.claimable_amount_satoshis = bindings.LDKBalance_CounterpartyRevokedOutputClaimable_get_claimable_amount_satoshis(ptr);
    }
}
//# sourceMappingURL=Balance.mjs.map