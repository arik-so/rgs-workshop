import { Result_RoutingFeesDecodeErrorZ } from '../structs/Result_RoutingFeesDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Fees for routing via a given channel or a node
 */
export class RoutingFees extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.RoutingFees_free);
    }
    /**
     * Flat routing fee in satoshis
     */
    get_base_msat() {
        const ret = bindings.RoutingFees_get_base_msat(this.ptr);
        return ret;
    }
    /**
     * Flat routing fee in satoshis
     */
    set_base_msat(val) {
        bindings.RoutingFees_set_base_msat(this.ptr, val);
    }
    /**
     * Liquidity-based routing fee in millionths of a routed amount.
     * In other words, 10000 is 1%.
     */
    get_proportional_millionths() {
        const ret = bindings.RoutingFees_get_proportional_millionths(this.ptr);
        return ret;
    }
    /**
     * Liquidity-based routing fee in millionths of a routed amount.
     * In other words, 10000 is 1%.
     */
    set_proportional_millionths(val) {
        bindings.RoutingFees_set_proportional_millionths(this.ptr, val);
    }
    /**
     * Constructs a new RoutingFees given each field
     */
    static constructor_new(base_msat_arg, proportional_millionths_arg) {
        const ret = bindings.RoutingFees_new(base_msat_arg, proportional_millionths_arg);
        const ret_hu_conv = new RoutingFees(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        return ret_hu_conv;
    }
    /**
     * Checks if two RoutingFeess contain equal inner contents.
     * This ignores pointers and is_owned flags and looks at the values in fields.
     * Two objects with NULL inner values will be considered "equal" here.
     */
    eq(b) {
        const ret = bindings.RoutingFees_eq(this.ptr, b == null ? 0n : CommonBase.get_ptr_of(b));
        CommonBase.add_ref_from(this, b);
        return ret;
    }
    clone_ptr() {
        const ret = bindings.RoutingFees_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the RoutingFees
     */
    clone() {
        const ret = bindings.RoutingFees_clone(this.ptr);
        const ret_hu_conv = new RoutingFees(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Checks if two RoutingFeess contain equal inner contents.
     */
    hash() {
        const ret = bindings.RoutingFees_hash(this.ptr);
        return ret;
    }
    /**
     * Serialize the RoutingFees object into a byte array which can be read by RoutingFees_read
     */
    write() {
        const ret = bindings.RoutingFees_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a RoutingFees from a byte array, created by RoutingFees_write
     */
    static constructor_read(ser) {
        const ret = bindings.RoutingFees_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_RoutingFeesDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=RoutingFees.mjs.map