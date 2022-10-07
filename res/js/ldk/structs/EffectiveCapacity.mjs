import { Option_u64Z } from '../structs/Option_u64Z.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * The effective capacity of a channel for routing purposes.
 *
 * While this may be smaller than the actual channel capacity, amounts greater than
 * [`Self::as_msat`] should not be routed through the channel.
 */
export class EffectiveCapacity extends CommonBase {
    constructor(_dummy, ptr) { super(ptr, bindings.EffectiveCapacity_free); }
    /* @internal */
    static constr_from_ptr(ptr) {
        const raw_ty = bindings.LDKEffectiveCapacity_ty_from_ptr(ptr);
        switch (raw_ty) {
            case 0: return new EffectiveCapacity_ExactLiquidity(ptr);
            case 1: return new EffectiveCapacity_MaximumHTLC(ptr);
            case 2: return new EffectiveCapacity_Total(ptr);
            case 3: return new EffectiveCapacity_Infinite(ptr);
            case 4: return new EffectiveCapacity_Unknown(ptr);
            default:
                throw new Error('oops, this should be unreachable'); // Unreachable without extending the (internal) bindings interface
        }
    }
    clone_ptr() {
        const ret = bindings.EffectiveCapacity_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the EffectiveCapacity
     */
    clone() {
        const ret = bindings.EffectiveCapacity_clone(this.ptr);
        const ret_hu_conv = EffectiveCapacity.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new ExactLiquidity-variant EffectiveCapacity
     */
    static constructor_exact_liquidity(liquidity_msat) {
        const ret = bindings.EffectiveCapacity_exact_liquidity(liquidity_msat);
        const ret_hu_conv = EffectiveCapacity.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new MaximumHTLC-variant EffectiveCapacity
     */
    static constructor_maximum_htlc(amount_msat) {
        const ret = bindings.EffectiveCapacity_maximum_htlc(amount_msat);
        const ret_hu_conv = EffectiveCapacity.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new Total-variant EffectiveCapacity
     */
    static constructor_total(capacity_msat, htlc_maximum_msat) {
        const ret = bindings.EffectiveCapacity_total(capacity_msat, CommonBase.get_ptr_of(htlc_maximum_msat));
        const ret_hu_conv = EffectiveCapacity.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new Infinite-variant EffectiveCapacity
     */
    static constructor_infinite() {
        const ret = bindings.EffectiveCapacity_infinite();
        const ret_hu_conv = EffectiveCapacity.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Utility method to constructs a new Unknown-variant EffectiveCapacity
     */
    static constructor_unknown() {
        const ret = bindings.EffectiveCapacity_unknown();
        const ret_hu_conv = EffectiveCapacity.constr_from_ptr(ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Returns the effective capacity denominated in millisatoshi.
     */
    as_msat() {
        const ret = bindings.EffectiveCapacity_as_msat(this.ptr);
        return ret;
    }
}
/** A EffectiveCapacity of type ExactLiquidity */
export class EffectiveCapacity_ExactLiquidity extends EffectiveCapacity {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.liquidity_msat = bindings.LDKEffectiveCapacity_ExactLiquidity_get_liquidity_msat(ptr);
    }
}
/** A EffectiveCapacity of type MaximumHTLC */
export class EffectiveCapacity_MaximumHTLC extends EffectiveCapacity {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.amount_msat = bindings.LDKEffectiveCapacity_MaximumHTLC_get_amount_msat(ptr);
    }
}
/** A EffectiveCapacity of type Total */
export class EffectiveCapacity_Total extends EffectiveCapacity {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
        this.capacity_msat = bindings.LDKEffectiveCapacity_Total_get_capacity_msat(ptr);
        const htlc_maximum_msat = bindings.LDKEffectiveCapacity_Total_get_htlc_maximum_msat(ptr);
        const htlc_maximum_msat_hu_conv = Option_u64Z.constr_from_ptr(htlc_maximum_msat);
        CommonBase.add_ref_from(htlc_maximum_msat_hu_conv, this);
        this.htlc_maximum_msat = htlc_maximum_msat_hu_conv;
    }
}
/** A EffectiveCapacity of type Infinite */
export class EffectiveCapacity_Infinite extends EffectiveCapacity {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
/** A EffectiveCapacity of type Unknown */
export class EffectiveCapacity_Unknown extends EffectiveCapacity {
    /* @internal */
    constructor(ptr) {
        super(null, ptr);
    }
}
//# sourceMappingURL=EffectiveCapacity.mjs.map