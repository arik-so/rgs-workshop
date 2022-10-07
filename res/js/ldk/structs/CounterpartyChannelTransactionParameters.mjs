import { ChannelPublicKeys } from '../structs/ChannelPublicKeys.mjs';
import { Result_CounterpartyChannelTransactionParametersDecodeErrorZ } from '../structs/Result_CounterpartyChannelTransactionParametersDecodeErrorZ.mjs';
import { CommonBase } from './CommonBase.mjs';
import * as bindings from '../bindings.mjs';
/**
 * Late-bound per-channel counterparty data used to build transactions.
 */
export class CounterpartyChannelTransactionParameters extends CommonBase {
    /* @internal */
    constructor(_dummy, ptr) {
        super(ptr, bindings.CounterpartyChannelTransactionParameters_free);
    }
    /**
     * Counter-party public keys
     */
    get_pubkeys() {
        const ret = bindings.CounterpartyChannelTransactionParameters_get_pubkeys(this.ptr);
        const ret_hu_conv = new ChannelPublicKeys(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Counter-party public keys
     */
    set_pubkeys(val) {
        bindings.CounterpartyChannelTransactionParameters_set_pubkeys(this.ptr, val == null ? 0n : CommonBase.get_ptr_of(val));
        CommonBase.add_ref_from(this, val);
    }
    /**
     * The contest delay selected by the counterparty, which applies to holder-broadcast transactions
     */
    get_selected_contest_delay() {
        const ret = bindings.CounterpartyChannelTransactionParameters_get_selected_contest_delay(this.ptr);
        return ret;
    }
    /**
     * The contest delay selected by the counterparty, which applies to holder-broadcast transactions
     */
    set_selected_contest_delay(val) {
        bindings.CounterpartyChannelTransactionParameters_set_selected_contest_delay(this.ptr, val);
    }
    /**
     * Constructs a new CounterpartyChannelTransactionParameters given each field
     */
    static constructor_new(pubkeys_arg, selected_contest_delay_arg) {
        const ret = bindings.CounterpartyChannelTransactionParameters_new(pubkeys_arg == null ? 0n : CommonBase.get_ptr_of(pubkeys_arg), selected_contest_delay_arg);
        const ret_hu_conv = new CounterpartyChannelTransactionParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, ret_hu_conv);
        CommonBase.add_ref_from(ret_hu_conv, pubkeys_arg);
        return ret_hu_conv;
    }
    clone_ptr() {
        const ret = bindings.CounterpartyChannelTransactionParameters_clone_ptr(this.ptr);
        return ret;
    }
    /**
     * Creates a copy of the CounterpartyChannelTransactionParameters
     */
    clone() {
        const ret = bindings.CounterpartyChannelTransactionParameters_clone(this.ptr);
        const ret_hu_conv = new CounterpartyChannelTransactionParameters(null, ret);
        CommonBase.add_ref_from(ret_hu_conv, this);
        return ret_hu_conv;
    }
    /**
     * Serialize the CounterpartyChannelTransactionParameters object into a byte array which can be read by CounterpartyChannelTransactionParameters_read
     */
    write() {
        const ret = bindings.CounterpartyChannelTransactionParameters_write(this.ptr);
        const ret_conv = bindings.decodeUint8Array(ret);
        return ret_conv;
    }
    /**
     * Read a CounterpartyChannelTransactionParameters from a byte array, created by CounterpartyChannelTransactionParameters_write
     */
    static constructor_read(ser) {
        const ret = bindings.CounterpartyChannelTransactionParameters_read(bindings.encodeUint8Array(ser));
        const ret_hu_conv = Result_CounterpartyChannelTransactionParametersDecodeErrorZ.constr_from_ptr(ret);
        return ret_hu_conv;
    }
}
//# sourceMappingURL=CounterpartyChannelTransactionParameters.mjs.map